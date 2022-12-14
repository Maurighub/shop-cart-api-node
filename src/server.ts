import { SetupServer } from '@src/app';

const Server = new SetupServer(3000);
Server.init();
Server.start();