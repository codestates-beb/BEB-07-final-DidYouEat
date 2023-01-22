import express, { Request, Response } from "express";
import cors from "cors";

import { router } from "./routes";

const PORT: number = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is test Server!!");
});

//routes

app.use("/dev/user", router.userRouter);
app.use("/dev/owner", router.ownerRouter);
app.use("/dev/collection", router.collectionRouter);

app.listen(PORT, () => {
  console.log(`server is listening at post ${PORT}`);
});
