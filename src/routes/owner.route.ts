import express, { Request, Response } from "express";
import { ownerUtil } from "../../prisma/scripts/owner";

const ownerRouter = express.Router();

type content = {
  status: string;
  message: object | string | Array<object>;
};

ownerRouter.get("/", async (req: Request, res: Response) => {
  let data: content;

  try {
    const owners = await ownerUtil.getAllOwners();

    if (!owners) {
      data = {
        status: "success",
        message: "no owner",
      };
      return res.status(200).json(owners);
    }

    data = {
      status: "success",
      message: owners,
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

ownerRouter.get(
  "/:owner_id/collections",
  async (req: Request, res: Response) => {
    let data: content;

    try {
      const collections = await ownerUtil.getAllOwnerCollection(
        req.params.owner_id
      );
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
