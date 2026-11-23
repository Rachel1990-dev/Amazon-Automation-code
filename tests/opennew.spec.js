

   import{test,expect} from '@playwright/test'

   test("validate page",async ({page})  =>{


  await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");

    await page.locator('//button[@data-target="simple-dropdown"]').click();

    await page.locator('form-select').selectOption({value:'Option 1'});
   });