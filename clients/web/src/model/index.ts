import { action, Action } from 'easy-peasy';
import api from 'api';

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

const model: Model = {
  boards: {
    items: {},
    initialLoad: action((state, payload) => {
      state.items = payload;
    }),
  },
  stickies: {
    items: [],
    initialLoad: action((state, payload) => {
      state.items = payload;
    }),
    updateStickyText: action((state, payload) => {
      const sticky = state.items.find(s => s.id === payload.id)
      if (!sticky) throw new Error('no sticky');
      sticky.text = payload.text;
      api.stickies.save(sticky);
    }),
  },
};

export default model;
