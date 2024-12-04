import {expect, test} from "@playwright/test";
import { error } from "console";

test("Handle console messages", async ({page}) => {
    page.on("console", msg => {
        console.log(msg);
        expect.soft(error.name).toEqual("error");
    });
    page.on("pageerror", error => {
        console.log(error);
        expect.soft(error.name).toEqual("Error");
    });

    await page.goto("");
    await page.getByRole("button", {name: "Register"}).click();


});