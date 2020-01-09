import { Reducer, thunk, Thunk } from 'easy-peasy';
import { push } from 'redux-first-history';
import data, { Data } from './data';
import ui, { Ui } from './ui';

export interface Model {
  router?: Reducer<any>;
  routing: {
    push: Thunk<Model, string>;
  };
  data: Data;
  ui: Ui;
};

const model: Model = {
  routing: {
    push: thunk((actions, payload, { dispatch }) => dispatch(push(payload))),
  },
  data,
  ui,
};

export default model;
