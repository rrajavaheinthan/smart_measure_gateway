module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.(js|ts|tsx)$": "babel-jest"
  },
  "moduleNameMapper": {
    "\\.(css|scss|jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$": "<rootDir>/jestMocks.js",
  },
  collectCoverage: true, 
  "collectCoverageFrom": [
    "src/common/components/**/*.{ts,tsx}",
    "src/pages/**/*.{ts,tsx}",
  ],
  setupFilesAfterEnv: ['./enzyme-setup.js'],
  globals: {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json",
      "enableTsDiagnostics": true
    }
  }
}