import {expect, test} from "@playwright/test";

test("Upload a file demo", async ({page}) => {
    await page.goto("https://tus.io/demo");

    await page.locator("input#P0-0").setInputFiles(`download/dummy.pdf`);

    await expect(page.getByRole("button", {name: "Upload another file"})).toBeVisible();

    await page.getByRole("button", {name: "Upload another file"}).click();

    //To clear the input
    await page.locator("input#P0-0").setInputFiles([]);

    await page.waitForTimeout(5000);

});