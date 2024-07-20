// @ts-nocheck
import express, { Express, Request, Response } from "express";
import { PageController } from './page/pageController.ts'


const app: Express = express();
const port = 3002;

app.use(express.json())

app.use('/page', PageController)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
