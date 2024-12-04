import {expect, test} from "@playwright/test";
import fs from "fs";

test("Download demo test", async ({page}) => {
    await page.goto("/savings.html");
    const downloadPromise = page.waitForEvent("download");

    await page.getByText("Download Our Offer").click();

    const download = await downloadPromise;

    const suggestedFileName = download.suggestedFilename();
    const filepath = `download/${suggestedFileName}`;
    await download.saveAs(filepath);

    expect(await download.failure()).toBeNull();

    const fileSizeInBytes = fs.statSync(filepath).size;
    console.log(`File size is: ${fileSizeInBytes}`);

    expect(fileSizeInBytes).toBeLessThan(20_000);

    expect(fs.existsSync(filepath)).toBeTruthy();

});