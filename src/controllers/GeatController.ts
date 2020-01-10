import { Controller, Get } from "@overnightjs/core";
import { NextFunction, Request, Response } from "express";
import Message from "../models/Message";

@Controller("api/great")
export class GreatController {
  @Get()
  // @Middleware(middleware)
  private getAll(req: Request, res: Response): void {
    const message = new Message("You're great !");
    res.status(200).json(message);
  }
}
