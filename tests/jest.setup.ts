
import supertest from "supertest";
import { SetupServer } from "../src/app";

const server = new SetupServer();
server.init();
server.start();
export const testServer = supertest(server.getApp);