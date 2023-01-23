import express, { Request, Response } from "express";
import { ownerUtil } from "../../prisma/scripts/owner";

const ownerRouter = express.Router();

type content = {
  status: string;
  message: object | string | Array<object>;
};

ownerRouter.get(
  "/:owner_id/collections",
  async (req: Request, res: Response) => {
    let data: content;

    try {
      const collections = await ownerUtil.getAllCollection(req.params.owner_id);
      data = {
        status: "success",
        message: collections,
      };
      return res.status(200).json(data);
    } catch (e) {
      data = {
        status: "failed",
        message: "Bad Request",
      };
      return res.status(400).json(data);
    }
  }
);

export { ownerRouter };
