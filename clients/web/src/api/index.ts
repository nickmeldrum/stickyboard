import { setupApi } from './api-call';
import { Board, Sticky } from 'model/data';

const host = 'http://localhost:4000';
const baseUrl = '/api/'

const { get, put } = setupApi(host, baseUrl);

export default {
  boards: {
    get: async (): Promise<string[]> => get('boards'),
  },
  board: {
    get: async (boardId: string): Promise<Board> => get(`boards/${boardId}`),
    save: async (sticky: Sticky): Promise<void> => put(`stickies/${sticky.id}`, sticky),
  },
};
