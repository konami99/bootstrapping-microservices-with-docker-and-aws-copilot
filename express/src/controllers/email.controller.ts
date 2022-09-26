import { Request, Response } from "express";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

export async function emailHandler(
  req: Request,
  res: Response,
) {
  
  return res.status(200).send();
}