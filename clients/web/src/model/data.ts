import { action, Action, thunk, Thunk } from 'easy-peasy';
import api from 'api';

export interface Board {
  id: string;
  columns: string[];
};

export interface Sticky {
  id: string;
  board: string;
  text: string;
};

export interface BoardList { [key: string]: Board };

export type Boards = {
  items: BoardList;
  initialLoad: Action<Boards, BoardList>;
};

export interface Stickies {
  items: Sticky[];
  initialLoad: Action<Stickies, Sticky[]>;
  updateStickyText: Action<Stickies, Sticky>;
  sendUpdateStickyText: Thunk<Stickies, Sticky>;
};

export interface Data {
  boards: Boards;
  stickies: Stickies;
};

const data: Data = {
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
      if (!sticky) return;
      sticky.text = payload.text;
    }),
    sendUpdateStickyText: thunk(async (actions, payload) => {
      actions.updateStickyText(payload)
      api.stickies.save(payload);
    }),
  },
};

export default data;
