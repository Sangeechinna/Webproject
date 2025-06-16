const{test,expect}=require('@playwright/test')

 test('multiple dropdown',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const country = await page.locator("//select[@id='country']");
    let toSelectOptions = ['canada','germany','france']
    await country.selectOption(toSelectOptions);
    await page.waitForTimeout(5000);
    
 })