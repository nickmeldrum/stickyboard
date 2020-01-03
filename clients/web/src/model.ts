import { Action } from 'easy-peasy';

export interface Board {
  columns: string[];
};

export interface Sticky {
  id: string;
  board: string;
  text: string;
};

export type BoardList = { [key: string]: Board };

export type Boards = {
  items: BoardList;
  initialLoad: Action<Boards, BoardList>;
};

export interface Stickies {
  items: Sticky[];
  initialLoad: Action<Stickies, Sticky[]>;
  updateStickyText: Action<Stickies, Sticky>;
};

export interface Model {
  boards: Boards;
  stickies: Stickies;
};
