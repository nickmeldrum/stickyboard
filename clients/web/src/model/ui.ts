import { action, Action } from 'easy-peasy';

interface Menus {
    isDrawerOpen: boolean;
    toggleDrawer: Action<Menus, void>;
};

interface Board {
    newSticky: boolean;
    saved: boolean;
    addSticky: Action<Board>;
};

export interface Ui {
  menus: Menus;
  board: Board;
};

const ui: Ui = {
  menus: {
    isDrawerOpen: false,
    toggleDrawer: action((state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    }),
  },
  board: {
    newSticky: false,
    saved: false,
    addSticky: action((state, payload) => {
      state.newSticky = true;
    }),
  },
};

export default ui;
