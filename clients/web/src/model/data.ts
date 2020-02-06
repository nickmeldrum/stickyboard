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

export interface Data {
  boardNames: string[];
  board: Board;
  setCurrentBoard: Action<Data, Board>;
  fetchBoardByName: Thunk<Data, string>;
  deleteSticky: Action<Data, string>;
  updateStickyColumn: Action<Data, NewStickyColumn>;
  updateStickyText: Action<Data, UpdateStickyText>;
  initialLoad: Action<Data, string[]>;
};

const data: Data = {
  boardNames: [],
  board: {
    id: '',
    columns: [],
    stickies: [],
  },
  setCurrentBoard: action((state, payload) => {
    state.board = payload;
  }),
  fetchBoardByName: thunk(async (actions, payload) => {
    const board: Board = await api.board.get(payload);
    actions.setCurrentBoard(board);
  }),
  deleteSticky: action((state, payload) => {
    const index = state.board.stickies.findIndex(s => s.id === payload);
    if (index !== -1) state.board.stickies.splice(index, 1);
  }),
  updateStickyColumn: action((state, payload) => {
    const sticky = state.board.stickies.find(s => s.id === payload.id);
    if (!sticky) return;
    sticky.column = payload.newColumn;
  }),
  updateStickyText: action((state, payload) => {
    const sticky = state.board.stickies.find(s => s.id === payload.id);
    if (!sticky) return;
    if (sticky.id === 'new') sticky.id = 'unsaved';
    sticky.text = payload.newText;
  }),
  initialLoad: action((state, payload) => {
    state.boardNames = payload;
  }),
};

export default data;
