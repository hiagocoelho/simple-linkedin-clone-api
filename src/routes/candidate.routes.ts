import express from 'express';

import * as controller from '../controllers/candidate.controller';

const candidateRoutes = express.Router();

candidateRoutes.get('/', controller.getCandidates);
candidateRoutes.get('/:id', controller.getCandidatesById);

export default candidateRoutes;
