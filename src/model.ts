import { Action } from 'easy-peasy';

export interface Board {
  columns: string[];
};

export interface Sticky {
  id: string;
  board: string;
  text: string;
};

export type Boards = { [key: string]: Board };

export interface Stickies {
  list: Sticky[];
  updateStickyText: Action<Stickies, Sticky>;
};

export interface Model {
  boards: Boards;
  stickies: Stickies;
};
