import { test, expect } from '@playwright/test';

test("Screenshot demo", async ({page}) => {
    await page.goto('/');
    await page.getByRole("button", {name: "Register"}).click();

    const ss: Promise<Buffer> = page.screenshot({
        path: "screenshots/screenshot.png"
    });

    page.screenshot({
        path: "screenshots/advance-screenshot.png",
        fullPage: true,
        mask: await page.getByTestId("location").all()
    });

    await expect(page.locator(".invalid-feedback")).toHaveCount(4);


});
