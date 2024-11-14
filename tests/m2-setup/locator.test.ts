import { expect, test } from '@playwright/test';

test("Recommended built-in locators examples", async ({ page }) => {
    await page.goto(''); // Add your target URL here
    const firstNameField = page.getByLabel("First Name");
    await firstNameField.fill("Krish Test");
    await firstNameField.clear();

    await page.getByRole("button", {name: "Register", exact: true}).click();

    const warningMsg = page.getByText("Valid first name is required", {exact: true});

    console.log(warningMsg);
    await expect(warningMsg).toBeVisible();
});
