import express, { Request, Response } from "express";
import { userUtil } from "../../prisma/scripts/user";

const userRouter = express.Router();

type content = {
  status: string;
  message: object | string | Array<object>;
};

userRouter.get("/:wallet_address", async (req: Request, res: Response) => {
  let data: content;

  try {
    // user get
    let user = await userUtil.getUser(req.params.wallet_address);

    // exist user
    if (user) {
      data = {
        status: "success",
        message: user,
      };

      return res.status(200).json(data);
    }
    // no user
    else {
      let user = await userUtil.createUser(req.params.wallet_address);

      data = {
        status: "success",
        message: user,
      };

      return res.status(201).json(data);
    }
  } catch (e) {
    data = {
      status: "failed",
      message: "Bad request",
    };
    return res.status(400).json(data);
  }
});

userRouter.get(
  "/:wallet_address/tokens",
  async (req: Request, res: Response) => {
    let data: content;

    try {
      const tokens = await userUtil.getAllTokens(req.params.wallet_address);
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
  }
);

userRouter.patch("/changenick", async (req: Request, res: Response) => {
  let data: content;

  try {
    const { wallet_address, new_nick } = req.body;
    const updatedUser = await userUtil.changeNick(wallet_address, new_nick);

    data = {
      status: "success",
      message: updatedUser,
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

export { userRouter };
