import express, {Request, Response} from "express";
import { json } from "body-parser";
import {insertOne, findOne} from "./database/queries";
import name from "@jhamadhukar/sharedlib";
const app = express();
app.use(json());

app.get("/ping", (req: Request, res: Response) => {
  res.send(name);
});
app.post('/insert', (req: Request, res: Response)=> {
  const body = req.body
  const response = insertOne(body, body['username']);
  res.send(response);
});
app.get('/fetch/:username', async(req: Request, res: Response)=> {
  res.send(await findOne(req.params['username']));
});
app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!!!!");
});
