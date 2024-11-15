import { test, expect } from '@playwright/test';

test('Filling demo', async ({ page }) => {
    await page.goto('');
    await page.getByLabel("Date of birth (optional)").fill("2024-10-11");
});

test('your test name', async ({ page }) => {
    await page.goto('');
    // Calculate the date 2 days ahead
    const today = new Date();
    today.setDate(today.getDate() + 2); // Move date 2 days ahead
    const year = today.getFullYear() + 1;
    const month = String(today.getMonth() - 2).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');

    // Format the date as YYYY-MM-DD
    const dateAhead = `${year}-${month}-${day}`;

    console.log(dateAhead);
    // Fill the date in the input
    await page.getByLabel("Date of birth (optional)").fill(dateAhead);

    await page.waitForTimeout(5000);
});

test.only('Filling demo with date in range', async ({ page }) => {
    // Go to the desired page
    await page.goto('');

    // Define the start and end date range
    const startDate = new Date("2025-01-21");
    const endDate = new Date("2026-12-31");

    // Calculate a random date within the range
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const year = randomDate.getFullYear();
    const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(randomDate.getDate()).padStart(2, '0');

    // Format the date as YYYY-MM-DD
    const dateInRange = `${year}-${month}-${day}`;

    console.log(dateInRange);

    // Fill the date in the input
    await page.getByLabel("Date of birth (optional)").fill(dateInRange);
});