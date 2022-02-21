/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/en/configuration
 *
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  roots: ["<rootDir>/src"],
  preset: "jest-preset-angular",
  testMatch: ["<rootDir>/src/lib/**/*.spec.ts"],
  transformIgnorePatterns: ["^.+\\.js$"],
  transform: {
    "^.+\\.(ts|html)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      allowSyntheticDefaultImports: true,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/lib/**/*.ts", '!src/lib/**/*.stories.ts'],
  coverageDirectory: "build/coverage",
  coverageReporters: ["json", "lcov", "text-summary"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
