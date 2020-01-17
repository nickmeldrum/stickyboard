import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const stickies = [
  {
    id: '1',
    text: 'a sticky',
    board: 'board1',
    column: 'column1',
  },
];

const boards = {
  'board1': {
    id: 'board1',
    columns: ['column1', 'column2'],
  },
};

app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});

app.route('/api/stickies')
  .get((req, res) => {
    res.status(200).send(stickies);
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

app.route('/api/boards')
  .get((req, res) => {
    res.status(200).send(boards);
  });
