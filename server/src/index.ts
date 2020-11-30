import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const port = 4001;

app.use(cors());
app.use(express.json());

interface Sticky {
  clientId: string;
  id: string;
  text: string;
  boardId: string;
  column: string;
};

interface InternalBoard {
  columns: string[];
};

interface Board {
  id: string;
  columns: string[];
  stickies: Sticky[];
};

interface BoardList { [key: string]: InternalBoard };

const stickies: Sticky[] = [
  {
    clientId: '2268382d-a8bb-45f5-b136-4a1ce655b541',
    id: '1',
    text: 'a sticky',
    boardId: 'board1',
    column: 'column1',
  },
  {
    clientId: '2268382d-a8bb-45f5-b136-4a1ce655b542',
    id: '2',
    text: 'a sticky on the same column',
    boardId: 'board1',
    column: 'column1',
  },
  {
    clientId: '2268382d-a8bb-45f5-b136-4a1ce655b543',
    id: '3',
    text: 'another sticky',
    boardId: 'board1',
    column: 'column2',
  },
  {
    clientId: '2268382d-a8bb-45f5-b136-4a1ce655b544',
    id: '4',
    text: 'a sticky on the next board',
    boardId: 'board2',
    column: 'columnb',
  },
];

const boards: BoardList = {
  'board1': {
    columns: ['column1', 'column2'],
  },
  'board2': {
    columns: ['columna', 'columnb', 'columnc'],
  },
};

app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});

app.route('/api/stickies/:stickyId')
  .put((req, res) => {
    const existing = stickies.find(s => s.id === req.params.stickyId);
    if (existing) {
      existing.text = req.body.text;
      existing.column = req.body.column;
    }
    else {
      stickies.push(req.body);
    }
    res.status(200).send({message: 'success'});
  });

app.route('/api/boards/:boardId')
  .get((req, res) => {
    const internalBoard: InternalBoard = boards[req.params.boardId];
    const board: Board = {
      ...internalBoard,
      id: req.params.boardId,
      stickies: stickies.filter(s => s.boardId == req.params.boardId),
    };
    res.status(200).send(board);
  });

app.route('/api/boards')
  .get((req, res) => {
    res.status(200).send(Object.keys(boards));
  });
