import express, {Request, Response} from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get("/ping", (req: Request, res: Response) => {
  res.send("Hi there!333gff");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!!!!");
});
