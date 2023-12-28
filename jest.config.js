const folders = ['src'];

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  coverageReporters: [
    'html',
    'text',
    'text-summary',
    'cobertura',
  ],
  moduleNameMapper: {
    '^@/(.*)(\\?(inline|include))$': '<rootDir>/$1',
    '^~/(.*)(\\?(inline|include))$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'jsx',
    'node',
    'json',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue-tjw'],
  collectCoverageFrom: [
    `(${folders})/**/*.{jsx,ts,tsx,vue}`,
    '!**/*.stories.ts',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['cypress'],
  setupFiles: ['<rootDir>/test/setup.js'],
};
