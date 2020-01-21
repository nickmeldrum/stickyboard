import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AcceptIcon from '@material-ui/icons/Check'
import CancelIcon from '@material-ui/icons/Close'

export interface StickyTextEntry {
  id: string;
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
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formContainer: {
      margin: '1rem',
      '& .MuiTextField-root': {
        margin: '1rem 0',
      },
    },
  }),
);

const EditText: React.FC<EditTextProps> = () => {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm<StickyTextEntry>({
    validationSchema: StickyTextEntrySchema,
  });

  const onSubmit = (textEntry: StickyTextEntry): void => {
    console.log('onSumbit', textEntry);
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
        rows={3}
        label="Text"
        name="text"
        error={!!errors.text}
        helperText={errors.text ? errors.text.message : ''}
        fullWidth
        variant="outlined"
      />
      <IconButton aria-label="accept changes">
        <AcceptIcon />
      </IconButton>
      <IconButton aria-label="cancel changes">
        <CancelIcon />
      </IconButton>
    </form>
  );
}

export default EditText;
