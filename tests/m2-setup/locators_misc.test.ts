import { expect, test } from "@playwright/test";

test("Multiple matches and iterate demo", async ({page}) => {
    await page.goto("");

    await page.getByRole("button", {name: "Register", exact: true}).click();

    const warningMessages = page.locator(".invalid-feedback");

    console.log(warningMessages.count());

    await expect(warningMessages).toHaveCount(3);

    for(const warningMessage of await warningMessages.all()){
        console.log(await warningMessage.textContent());
    }
});