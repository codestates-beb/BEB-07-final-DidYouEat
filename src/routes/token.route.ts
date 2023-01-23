import express, { Request, Response } from "express";
import { tokenUtil } from "../../prisma/scripts/token";

const tokenRouter = express.Router();

type content = {
  status: string;
  message: object | string | Array<object>;
};

tokenRouter.get("/", async (req: Request, res: Response) => {
  let data: content;

  try {
    const tokens = await tokenUtil.getAllTokens();

    if (!tokens) {
      data = {
        status: "success",
        message: "no data",
      };
      return res.status(200).json(tokens);
    }

    data = {
      status: "success",
      message: tokens,
    };

    return res.status(200).json(data);
  } catch (e) {
    data = {
      status: "failed",
      message: "Bad Request",
    };
    return res.status(400).json(data);
  }
});

tokenRouter.get("/:token_id", async (req: Request, res: Response) => {
  let data: content;

  try {
    const token = await tokenUtil.getTokenDetail(parseInt(req.params.token_id));

    if (!token) {
      data = {
        status: "success",
        message: "no data",
      };
      return res.status(200).json(data);
    }

    data = {
      status: "success",
      message: token,
    };
    return res.status(200).json(data);
  } catch (e) {
    data = {
      status: "failed",
      message: "Bad Request",
    };
    return res.status(400).json(data);
  }
});

export { tokenRouter };
