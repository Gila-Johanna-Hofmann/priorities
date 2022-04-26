
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    transform: {
        '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    },
    collectCoverage: true,
    coverageReporters: ['lcov'],
    moduleFileExtensions: ['ts', 'js', 'html'],
    testTimeout: 10000,
    maxConcurrency: 1,
    maxWorkers: 2,
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90
        }
    }
};
