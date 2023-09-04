import { Handler, Request, Response } from 'express';

import * as service from '../services/candidate.service';

export const getCandidates: Handler = async (req: Request, res: Response) => {
  try {
    const take = req.query.take;
    const data = await service.getCandidates(take ? Number(take) : 0);

    res.status(200).json(data);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const getCandidatesById: Handler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await service.getCandidatesById(Number(id));

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json('Candidate not found.');
    }
  } catch (error) {
    res.sendStatus(500);
  }
};
