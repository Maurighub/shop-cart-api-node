
import { App } from "@config/default.json";
import { Server } from "@overnightjs/core";
import { Application } from 'express';
import bodyParser, { json } from "body-parser";
import morgan from "morgan";
//import { InitController } from "@src/controllers/index";
import logger from "@src/lib/logger";
//import { slower } from "@src/middlewares/limiters/slower";

export class SetupServer extends Server {

  constructor(private port = App.port) {
    super();
  }

  /**
   *  init
   */
  public async init(): Promise<void> {
    this.setupExpres();
    this.setupController();
  }

  private setupExpres(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
    //this.app.use(slower)
    this.setupController();
  }

  private setupController(): void {
    //const productController= new ProductController(); 
    //const initialController = new InitController();
    // this.addControllers([initialController]);
  }

  public getApp(): Application {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      logger.info(`Servidor Rodando na porta ${this.port}`)
    })
  }
}