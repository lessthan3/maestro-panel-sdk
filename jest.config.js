

module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  coveragePathIgnorePatterns: [
    '.*/dist/.*',
    '.*/tests/.*',
    '.*/node_modules/.*',
    '.*/\\..*',
    '.*\\.config\\?js$',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  testMatch: [
    '**/?(*.)test.ts',
  ],
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
};
