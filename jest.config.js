// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  displayName: 'root-tests',
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
  moduleNameMapper: {
    '@config/(.*)': '<rootDir>/config/$1',
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/tests/$1',
  },
};
