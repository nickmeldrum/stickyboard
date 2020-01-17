import { action, Action, thunk, Thunk } from 'easy-peasy';
import api from 'api';

export interface Board {
  id: string;
  columns: string[];
  stickies: Sticky[];
};

export interface Sticky {
  id: string;
  column: string;
  text: string;
};

export type Boards = {
  itemNames: string[];
  currentBoard: Board | null;
  setCurrentBoard: Action<Boards, Board>;
  fetchBoardByName: Thunk<Boards, string>;
  initialLoad: Action<Boards, string[]>;
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
    itemNames: [],
    currentBoard: null,
    setCurrentBoard: action((state, payload) => {
      state.currentBoard = payload;
    }),
    fetchBoardByName: thunk(async (actions, payload) => {
      const board: Board = await api.board.get(payload);
      actions.setCurrentBoard(board);
    }),
    initialLoad: action((state, payload) => {
      state.itemNames = payload;
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
      api.board.save(payload);
    }),
  },
};

export default data;
