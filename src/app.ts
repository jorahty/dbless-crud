import express from 'express';

import * as note from './note';

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get('/api/note', note.getAll);
app.post('/api/note', note.post);

export default app;
