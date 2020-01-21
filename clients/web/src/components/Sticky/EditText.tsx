import React, { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AcceptIcon from '@material-ui/icons/Check'
import CancelIcon from '@material-ui/icons/Close'

export interface StickyTextEntry {
  text: string;
};

const StickyTextEntrySchema = yup.object().shape({
  text: yup
    .string()
    .trim()
    .min(3, 'Must be at least 3 characters.')
    .max(5000, 'Can be no longer than 5000 characters')
    .required('Required.'),
});

export interface EditTextProps {
  acceptChanges: (text: string) => void;
  cancelEditing: () => void;
  initialText: string;
};

const useStyles = makeStyles(theme => ({
  formContainer: {
    '& > div > div': {
      paddingTop: '0',
      paddingLeft: '0',
    },
    '&:after': {
      content: '""',
      clear: 'both',
      display: 'table',
    },
  },
  textField: {
    lineHeight: 1.5,
  },
  button: {
    float: 'right',
  },
}));

const EditText: React.FC<EditTextProps> = ({ initialText, acceptChanges, cancelEditing }) => {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm<StickyTextEntry>({
    validationSchema: StickyTextEntrySchema,
  });

  const onSubmit = (textEntry: StickyTextEntry): void => {
    acceptChanges(textEntry.text);
  };

  const textfieldKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.keyCode === 27) { // escape pressed
      event.preventDefault();
      cancelEditing();
      return;
    }

    if (event.keyCode === 13 && event.shiftKey) { // shift-enter pressed - assume newline
      return;
    }

    if (event.keyCode === 13 && !event.shiftKey) { // enter pressed - assume accept changes
      event.preventDefault();
      handleSubmit(onSubmit)(event);
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={classes.formContainer}
    >
      <TextField
        inputRef={register}
        multiline
        name="text"
        error={!!errors.text}
        InputProps={{
          classes: {
            input: classes.textField,
          },
        }}
        helperText={errors.text ? errors.text.message : ''}
        fullWidth
        required
        defaultValue={initialText}
        autoFocus
        onKeyDown={textfieldKeyDown}
      />
      <IconButton className={classes.button} aria-label="cancel changes" onClick={() => cancelEditing()}>
        <CancelIcon />
      </IconButton>
      <IconButton className={classes.button} aria-label="accept changes" type="submit">
        <AcceptIcon />
      </IconButton>
    </form>
  );
}

export default EditText;
