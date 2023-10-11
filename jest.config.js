/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTests.ts'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/__mocks__/svg.ts',
  },
}
