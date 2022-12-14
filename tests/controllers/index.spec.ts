import { SetupServer } from '../../src/app';
import { response } from 'express';
import request from 'supertest';
import statusCodes from 'http-status-codes';

describe('Index - Controller', () => {
  it('Retorna informações da aplicação', async () => {
    const response = await new SetupServer();
    response.init();
    request(response.getApp()).get('');
  });

  expect(response.statusCode).toEqual(statusCodes.OK);
});
