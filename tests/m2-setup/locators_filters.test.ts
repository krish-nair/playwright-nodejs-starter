import {test} from "@playwright/test";

test("Filtering demo", async ({page}) => {
    await page.goto("/savings.html");

    const rowsCount = await page.getByRole('row').count();

    console.log(rowsCount);

    const row = await page
      .getByRole("row")
      .filter({ hasText: "Us" })
      .textContent();

    console.log(row);

    const cell = await page
      .getByRole("row")
      .filter({ hasText: "Us" })
      .getByRole("cell")
      .nth(2)
      .textContent();

    console.log(cell);
});