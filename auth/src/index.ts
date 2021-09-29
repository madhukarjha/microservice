import express, {Request, Response} from "express";
import { json } from "body-parser";
import name from "@jhamadhukar/sharedlib";
const app = express();
app.use(json());

app.get("/ping", (req: Request, res: Response) => {
  res.send(name);
});

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!!!!");
});
