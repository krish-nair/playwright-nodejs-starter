import {expect, test} from "@playwright/test";

test("Cookies demo", async ({page}) => {
    await page.goto("/");

    console.log(await page.context().cookies());
    console.log(Math.floor(Date.now()/1000+3600));

    await page.context().addCookies([{
        name: "Test cookie",
        value: "Test",
        url: "https://www.google.com",
        expires: Math.floor(Date.now() / 1000) + 15 // Expire in 15 seconds 
    }]);

    console.log(await page.context().cookies());

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString().padStart(2, "0")}-${(currentDate.getDate()).toString().padStart(2, "0")}`;

    console.log(formattedDate);


    // await page.waitForTimeout(5000);

    // console.log(await page.context().cookies());

});