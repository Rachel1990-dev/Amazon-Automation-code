import {test,expect} from '@playwright/test'

test("Validate dropdown", async({page})=>
{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.locator('#examples-dropdown').click();

await page.getByRole('link', {name:'Examples'}).click();
})



