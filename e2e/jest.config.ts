import { Config } from 'jest';

const config: Config = {
  rootDir: '..',
  testMatch: ['**/?(*.e2e.)+(spec|test).ts?(x)'],
  testTimeout: 300000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
};

export default config;
