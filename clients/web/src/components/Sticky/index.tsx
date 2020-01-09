import React from 'react';
import Button from '@material-ui/core/Button';
import { Sticky as StickyModel } from 'model/data';
import { useStoreState, useStoreActions } from 'store/hooks';

const Sticky: React.FC = () => {
  const updateStickyText = useStoreActions(actions => {
    return actions.data.stickies.updateStickyText;
  });
  const sticky: StickyModel = useStoreState(state => {
    return state.data.stickies.items.filter((s: StickyModel) => s.board === 'board1')[0];
  });
  const stickyText = sticky ? sticky.text : 'no-sticky-yet';
  const buttonClicked = () => {
    updateStickyText({
      id: '1',
      text: 'wow - fdsa',
      board: 'board1',
    });
  };
  return (
    <div>
      {stickyText}
      <Button variant="contained" color="primary" onClick={buttonClicked}>Edit</Button>
    </div>
  );
};

export default Sticky;
