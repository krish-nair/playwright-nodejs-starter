import { expect, test } from "@playwright/test";

//test.skip(), test.fixme() and test.fail can be declared in the top level
//and it will be applied to all tests in the file
//test.fail(); //It means the test should fail

test.describe("Describe demo", () => {
  //test.skip(), test.fixme() and test.fail can be declared for individual test
  test.skip("Skipping a test", async ({ page }) => {
    await page.goto("/");
  });

  test.fail("skip demo", async ({ page }) => {
    expect(2).toEqual(1);
  });

  test("Conditional skip demo", async ({ page, browserName }) => {
    test.skip(browserName === "firefox", "Chromium is not supported...");
    test.skip(
      (await page.locator("div.demo").count()) === 0,
      "skipped because div with class name demo is not present.."
    );
  });
});

test.describe("conditional Describe demo", () => {
    test.skip(({page}) => page.url() !== "http://localhost:3000/", "Optional message!");
    test("Skipping a test", async ({ page }) => {
      await page.goto("/");
    });
  
    test("skip demo", async ({ page }) => {
      expect(2).toEqual(1);
    });
  
    test("Conditional skip demo", async ({ page, browserName }) => {
    //   test.skip(browserName === "firefox", "Chromium is not supported...");
    //   test.skip(
    //     (await page.locator("div.demo").count()) === 0,
    //     "skipped because div with class name demo is not present.."
    //   );
        await page.goto("/");
    });
  });
