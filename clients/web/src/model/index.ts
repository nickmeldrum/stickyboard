import data, { Data } from './data';
import ui, { Ui } from './ui';

export interface Model {
  data: Data;
  ui: Ui;
};

const model: Model = {
  data,
  ui,
};

export default model;
