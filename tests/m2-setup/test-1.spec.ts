import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Savings' }).click();
  await page.getByRole('cell', { name: '2%' }).click();
  await page.getByRole('link', { name: 'Loans' }).click();
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('Award.pdf');
});