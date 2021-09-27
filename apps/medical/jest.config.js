module.exports = {
  clearMocks: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^~pages/(.*)$': '<rootDir>/pages/$1',
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/out/",
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
  ],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", {
      jsc: {
        transform: {
          react: {
            runtime: 'automatic',
          }
        }
      }
    }]
  },
}
