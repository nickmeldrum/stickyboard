import uuid from 'uuid/v4';
import { action, Action, thunk, Thunk } from 'easy-peasy';
import api from 'api';

export interface Board {
  id: string;
  columns: string[];
  stickies: Sticky[];
};

export interface Sticky {
  clientId: string;
  id?: string;
  column?: string;
  text: string;
};

export interface NewStickyColumn {
  id: string;
  newColumn: string;
};

export interface UpdateStickyText {
  clientId: string;
  newText: string;
};

export interface Data {
  boardNames: string[];
  board: Board;
  setCurrentBoard: Action<Data, Board>;
  fetchBoardByName: Thunk<Data, string>;
  addSticky: Action<Data>;
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
  addSticky: action((state, payload) => {
    if (!state.board.stickies.find(s => !s.text))
      state.board.stickies.splice(0,0,{ clientId: uuid(), text: '', column: state.board.columns[0] })
  }),
  deleteSticky: action((state, payload) => {
    const index = state.board.stickies.findIndex(s => s.clientId === payload);
    if (index !== -1) state.board.stickies.splice(index, 1);
  }),
  updateStickyColumn: action((state, payload) => {
    const sticky = state.board.stickies.find(s => s.id === payload.id)!;
    sticky.column = payload.newColumn;
  }),
  updateStickyText: action((state, payload) => {
    const sticky = state.board.stickies.find(s => s.clientId === payload.clientId)!;
    sticky.text = payload.newText;
  }),
  initialLoad: action((state, payload) => {
    state.boardNames = payload;
  }),
};

export default data;
