module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'json', 'node'],

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.m?js$': 'babel-jest',
  },
  testTimeout: 30000,
};
