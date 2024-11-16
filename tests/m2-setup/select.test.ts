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

test.only("Finding numbers starting with one in an array", async ({page}) => {
    const numberArray = [1, 24, 45, 125, 178, 245, 119];
    console.log(getNumbersList(numberArray));


});

function getFirstDigit(num: number): number {
    while(num >= 10){
        num = Math.floor(num/10);
    }
    return num;
}

function getNumbersList(arr: number[]): number[]{
    const numbers: number[] = [];

    for(const num of arr){
        const firstDigit = getFirstDigit(num);
        if(firstDigit == 1){
            numbers.push(num);
        }
    }
    return numbers;
}
