import { test, expect } from '@playwright/test';

const firstName = "Krish tester";

test('Local storage ', async ({ page }) => {
    await page.goto('/');
    const firstnameInput = page.getByLabel("First name");
    await firstnameInput.fill(firstName);
    await page.getByRole("button", {name: "Save Input"}).click();

    const storage = await page.context().storageState();

    // console.log("Cookies:", JSON.stringify(storage.cookies, null, 2));
    // console.log("Origins:", JSON.stringify(storage.origins, null, 2));

    logJson("Cookies", storage.cookies);
    logJson("Origins", storage.origins[0].localStorage);

    await page.reload();
    await expect(firstnameInput).toHaveValue(firstName);
});

// Helper function to log JSON
function logJson(label, obj) {
    console.log(`${label}:`, JSON.stringify(obj, null, 2));
}

test.only('Manipulating local storage', async ({ page }) => {
    await page.goto('/');
    const firstnameInput = page.getByLabel("First name");
    await firstnameInput.fill(firstName);
    await page.getByRole("button", {name: "Save Input"}).click();

    const storage = await page.evaluate(() => window.localStorage);
    console.log(storage);
});