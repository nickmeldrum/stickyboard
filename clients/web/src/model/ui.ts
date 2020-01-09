import { action, Action } from 'easy-peasy';

export interface Ui {
  isDrawerOpen: boolean;
  toggleDrawer: Action<Ui, void>;
};

const ui: Ui = {
  isDrawerOpen: false,
  toggleDrawer: action((state) => {
    state.isDrawerOpen = !state.isDrawerOpen;
  }),
};

export default ui;
