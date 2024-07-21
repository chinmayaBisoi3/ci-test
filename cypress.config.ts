import { defineConfig } from "cypress";
import path from "path";

const mailhogUrl = "http://localhost:8025";

const e2eSupportFilePath = path.join(
  process.cwd(),
  "src/tests/cypress/support/e2e.ts",
);
const e2eSpecPatternPaths = [
  path.join(process.cwd(), "src/tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"),
];

export default defineConfig({
  env: {
    mailhogUrl,
  },
  e2e: {
    // baseUrl: "http://localhost:8025",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: e2eSupportFilePath,
    specPattern: e2eSpecPatternPaths,
  },
});
