module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
        '<rootDir>/src'
    ],
    testMatch: [
        '**/*.unit-spec.ts'
    ],
    collectCoverageFrom: [
        'src/**/*.ts'
    ],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
};