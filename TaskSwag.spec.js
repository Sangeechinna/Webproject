const{test,expect}=require('@playwright/test')
const { LoginPage } = require('../page/loginpage.js');
test('Swag labs', async({page})=>{
    
    const lp = new loginpage(page);
    await lp.navigateTo();
    const{username , password} = testData.validUser();
    await lp.login(username , password);

    
    // LOGINPAGE
    // await page.goto('https://www.saucedemo.com/v1/');
    // await page.waitForTimeout(2000);
    // await expect(page).toHaveURL('https://www.saucedemo.com/v1/');//Assertion
    // await expect(page).toHaveTitle('Swag Labs');//Assertion
    //  const username = await page.locator("//input[@id='user-name']");
    //  await page.fill("//input[@id='user-name']",'problem_user');
    //  const password = await page.locator("//input[@type='password']");
    //  await page.fill("//input[@type='password']", 'secret_sauce');
    //  await page.click('#login-button');

     await page.locator("//select[@class='product_sort_container']").selectOption({index:2});
     await page.waitForTimeout(2000);

     await page.click("(//button[text()='ADD TO CART'])[5]");
     
     await page.locator('.shopping_cart_link fa-layers fa-fw');
     await page.click("//a[@class='shopping_cart_link fa-layers fa-fw']");
     await page.waitForTimeout(2000);

     await page.click("//a[text()='CHECKOUT']");
     await page.waitForTimeout(2000);
     await page.locator("#first-name").fill('sangee');
     await page.waitForTimeout(2000);
     await page.locator("//input[@placeholder='Last Name']").fill('c')
    //  await page.getByPlaceholder('Last Name').fill('C');
     await page.waitForTimeout(2000);
    
     await page.locator("//input[@placeholder='Zip/Postal Code']").fill('635108');
     await page.waitForTimeout(2000);
     await page.locator("input[type='submit']").click();
     await page.waitForTimeout(2000);
     await page.locator("//a[text()='FINISH']").click();
     await page.waitForTimeout(2000);




})