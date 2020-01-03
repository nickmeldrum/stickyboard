import { setupApi } from './api-call';
import { Sticky, BoardList } from 'model';

const host = 'http://localhost:4000';
const baseUrl = '/api/'

const { get, put } = setupApi(host, baseUrl);

export default {
  boards: {
    get: async (): Promise<BoardList> => get('boards'),
  },
  stickies: {
    get: async (): Promise<Sticky[]> => get('stickies'),
    save: async (sticky: Sticky): Promise<void> => put(`stickies/${sticky.id}`, sticky),
  },
};
