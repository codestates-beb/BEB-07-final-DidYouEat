import express, { Request, Response } from "express";
import { userUtil } from "../../prisma/scripts/user";

const userRouter = express.Router();

type content = {
  status: string;
  message: object | string | Array<object>;
};

userRouter.get("/", async (req: Request, res: Response) => {
  let data: content;

  try {
    const users = await userUtil.getAllUser();

    if (!users) {
      data = {
        status: "success",
        message: "no user",
      };
      return res.status(200).json(users);
    }

    data = {
      status: "success",
      message: users,
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

      if (!user) {
        data = {
          status: "success",
          message: "create error",
        };
        return res.status(200).json(data); // 좀 더 알아봐야함
      }

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
      const tokens = await userUtil.getAllToken(req.params.wallet_address);
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
    const { wallet_address, nickname } = req.body;
    const updatedUser = await userUtil.changeNick(wallet_address, nickname);

    if (!updatedUser) {
      data = {
        status: "failed",
        message: "no user",
      };
      return res.status(400).json(data);
    }

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
