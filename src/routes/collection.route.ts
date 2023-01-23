import express, { Request, Response } from "express";
import { collectionUtil } from "../../prisma/scripts/collection";

const collectionRouter = express.Router();

type content = {
  status: string;
  message: object | string | Array<object>;
};

collectionRouter.get("/:collection_id", async (req: Request, res: Response) => {
  let data: content;

  try {
    const detail = await collectionUtil.getCollectionDetail(
      req.params.collection_id
    );

    if (!detail) {
      data = {
        status: "failed",
        message: "Bad Request",
      };
      return res.status(400).json(data);
    }

    data = {
      status: "success",
      message: detail,
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

export { collectionRouter };
