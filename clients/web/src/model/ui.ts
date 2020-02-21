import { action, Action } from 'easy-peasy';

interface Menus {
    isDrawerOpen: boolean;
    toggleDrawer: Action<Menus, void>;
};

export interface Ui {
  menus: Menus;
};

const ui: Ui = {
  menus: {
    isDrawerOpen: false,
    toggleDrawer: action((state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    }),
  },
};

export default ui;
