import express, { Request, Response } from "express";
import { itemUtil } from "../../prisma/scripts/item";

const itemRouter = express.Router();

type content = {
  status: string;
  message: object | string | Array<object>;
};

itemRouter.get("/", async (req: Request, res: Response) => {
  let data: content;

  try {
    const items = await itemUtil.getAllItem();

    if (!items) {
      data = {
        status: "success",
        message: "no data",
      };
      return res.status(200).json(items);
    }

    data = {
      status: "success",
      message: items,
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

itemRouter.get("/:token_id", async (req: Request, res: Response) => {
  let data: content;

  try {
    const item = await itemUtil.getItemDetail(parseInt(req.params.token_id));

    if (!item) {
      data = {
        status: "success",
        message: "no data",
      };
      return res.status(200).json(data);
    }

    data = {
      status: "success",
      message: item,
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

export { itemRouter };
