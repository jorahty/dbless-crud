import { Request, Response } from 'express';

import notes from '../data/notes.json';

export function getAll(req: Request, res: Response) {
  res.status(200).json(notes);
}

export function post(req: Request, res: Response) {
  const note = req.body;
  notes.push(note)
  res.status(200).json(note);
}
