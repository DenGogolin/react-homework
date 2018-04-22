module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>src/setupTests.ts",
  preset: "jest-preset-typescript",
  snapshotSerializers: ["enzyme-to-json"],
  testURL: "http://localhost"
};
