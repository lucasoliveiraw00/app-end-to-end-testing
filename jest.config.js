module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  setupFiles: ['./jest/setup.ts'],
  testMatch: [
    '**/*.test.(ts|tsx)', // Adicione esta linha para configurar os padrões de teste
    '!**/*.e2e.test.(ts|tsx)', // Exclui os arquivos .e2e.test.ts
  ],
  collectCoverageFrom: [
    '**/src/modules/**/*.{ts,tsx}',
    '!**/src/modules/**/*.e2e.test.{ts,tsx}',
    '!**/src/modules/**/index.ts',
    '!**/coverage/**',
    '!**/src/navigation/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 0,
      statements: 0,
    },
  },
};
