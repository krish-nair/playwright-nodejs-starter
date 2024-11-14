import { defineConfig } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  testMatch: ["tests/m2-setup/locators_filters.test.ts"],
  testDir: './tests',
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReports.json"
}], ["html", {
    open: "never"
}]],
  use: {
    headless: false,
    baseURL: "http://localhost:3000/",
    launchOptions: {
      slowMo: 1000
    }
  }
});
