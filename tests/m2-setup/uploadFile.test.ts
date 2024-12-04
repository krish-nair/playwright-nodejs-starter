import {expect, test} from "@playwright/test";

test("Upload a file demo", async ({page}) => {
    await page.goto("https://tus.io/demo");

    await page.locator("input#P0-0").setInputFiles(`download/dummy.pdf`);

    await expect(page.getByRole("button", {name: "Upload another file"})).toBeVisible();


});