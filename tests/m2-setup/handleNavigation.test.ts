import { test, expect } from '@playwright/test';

const savingsPageTitle = "Save with us";
const homePagetitle = "Credit Association";

test('Navigation demo', async ({ page }) => {
    await page.goto('');
    await page.getByRole("link", {name: "Savings"}).click();
    await expect(page).toHaveTitle(savingsPageTitle);

    await page.goBack();
    await expect(page).toHaveTitle(homePagetitle);

    await page.goForward();
    await expect(page).toHaveTitle(savingsPageTitle);
});

test.only('Coding challenge1', async ({ page }) => {
    await page.goto('');

    await page.getByRole("button", {name: "Register"}).click();

    const warningMessages = page.locator(".invalid-feedback");

    await expect(warningMessages).toHaveCount(3);

    for(const warningMessage of await warningMessages.all()){
        await expect(warningMessage).toBeVisible();
    }

});
