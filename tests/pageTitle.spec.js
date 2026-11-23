
import {test,expect} from '@playwright/test'

test("Validate orange HRM pagetitle", async({page})=>
{

 await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");

    await page.locator('//button[@data-target="simple-dropdown"]').click();

    await page.locator('.form-select').selectOption({value:'option1'});

}

)