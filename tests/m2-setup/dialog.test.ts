import {test, expect} from '@playwright/test';

const firstName = "Krish";

test("Handle js dialogs", async ({page}) => {
    page.on('dialog', dialog => console.log(dialog.type()));
    page.on('dialog', dialog => dialog.accept());

    await page.goto("");
    const firstNameField = page.getByLabel("First Name");
    await firstNameField.fill(firstName);

    await expect(firstNameField).toHaveValue(firstName);

    await page.getByRole("button", {name: "Clear"}).click();

    await expect(firstNameField).toHaveValue("");
});