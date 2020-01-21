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

export interface NewStickyColumn {
  id: string;
  newColumn: string;
};

export interface UpdateStickyText {
  id: string;
  newText: string;
};

export type Boards = {
  itemNames: string[];
  currentBoard: Board | null;
  setCurrentBoard: Action<Boards, Board>;
  fetchBoardByName: Thunk<Boards, string>;
  updateStickyColumn: Action<Boards, NewStickyColumn>;
  updateStickyText: Action<Boards, UpdateStickyText>;
  initialLoad: Action<Boards, string[]>;
};

export interface Data {
  boards: Boards;
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
    updateStickyColumn: action((state, payload) => {
      if (!state.currentBoard) return;
      const sticky = state.currentBoard.stickies.find(s => s.id === payload.id);
      if (!sticky) return;
      sticky.column = payload.newColumn;
    }),
    updateStickyText: action((state, payload) => {
      if (!state.currentBoard) return;
      const sticky = state.currentBoard.stickies.find(s => s.id === payload.id);
      if (!sticky) return;
      sticky.text = payload.newText;
    }),
    initialLoad: action((state, payload) => {
      state.itemNames = payload;
    }),
  },
};

export default data;
