import cors from 'cors';
import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
import candidateRoutes from 'routes/candidate.routes';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'OK!' });
});

app.use('/api/v1/candidates', candidateRoutes);

app.listen(process.env.API_PORT, async () => {
  const url =
    process.env.ENVIRONMENT === 'LOCAL' ? `${process.env.API_URL}:${process.env.API_PORT}` : process.env.API_URL;
  console.log(`
    The api is running.
    ENV: ${process.env.ENVIRONMENT}
    URL: ${url}
    `);
});
