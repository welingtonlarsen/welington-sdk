module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/src'
  ],
  testMatch: [
    '**/*.int-spec.ts'
  ],
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  //setupFiles: ["<rootDir>/src/config/test/setup-int-test.ts"],
};