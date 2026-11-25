import {test,expect} from '@playwright/test'

test("Validate dropdown", async({page})=>
{
await page.goto("https://practice-automation.com/iframes/");
const framess=page.frameLocator("iframe-2");
//await framess.locator("//a[@class='navbar__item navbar__link'][2]").click();
await page.locator('//span[text ()="Documentation"]').click();

})