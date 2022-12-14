import pkg from '../../package.json';
import { Controller, Get, Middleware } from '@overnightjs/core';
//import { limiter } from "@src/middlewares/limiters/limiter";
import { Request, Response } from 'express';

@Controller('')
export class InitController {
  @Get('')
  //@Middleware(limiter)
  public getProduct(_: Request, res: Response): void {
    res.send([
      {
        message: 'Welcome to',
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
      },
      {
        today: new Date()
      },
    ]);
  }
}
