import pkg from '../../package.json';
import { Controller, Get, Middleware } from '@overnightjs/core';
//import { limiter } from "@src/middlewares/limiters/limiter";
import { Request, Response } from 'express';
import { RespostaRotaRaiz } from '@src/repositories';
import ApiError from '@src/lib/errors/handlerError';

@Controller('')
export class InitController {
    @Get('')
    //@Middleware(limiter)
    public async getGreeting(_: Request, res: Response): Promise<Response> {
        const resp = await new RespostaRotaRaiz().handler({
            greeting: 'Welcome to',
            name: pkg.name,
            version: pkg.version,
            description: pkg.description,
        });
        if (resp.isLeft()) {
            return res.status(400).send(ApiError.format({
                code: 400,
                message: resp.value.message,
            }));
        }
        return res.status(200).json(resp);
    }
}
