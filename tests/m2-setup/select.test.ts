import { test, expect } from '@playwright/test';

test('Select demo', async ({ page }) => {
    await page.goto('/savings.html');

    const deposit = page.getByTestId("deposit");
    const period = page.getByTestId("period");
    const result = page.getByTestId("result");

    await deposit.fill("100");
    await period.selectOption("1 Year");

    await expect(result).toContainText("After 1 Year you will earn $5.00 on your deposit");

    await deposit.fill("100");
    await period.selectOption({label: "2 years"});

    await expect(result).toContainText("After 2 Years you will earn $12.00 on your deposit");
});