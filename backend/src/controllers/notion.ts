import { Request, Response } from "express";
const addEmailToNotionDB = require("../helpers/emailHandlerNotion");

const addEmail = async (req: Request, res: Response) => {
  const email = req.body.email;
  try {
    await addEmailToNotionDB(email);
    res.json({ msg: "Done, saved well" });
  } catch (err) {
    res.json({ msg: "couldn't save it properly" });
  }
};
