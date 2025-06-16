const{test,expect}=require('@playwright/test')
test('Mouse actions', async({page})=>{
    await page.goto('https://www.myntra.com/');
    const HomeLiving = await page.locator("(//a[text()='Home & Living'])[1]");
    await HomeLiving.hover();
    await page.waitForTimeout(3000);
    await page.click("(//a[text()='Clocks'])[1]");
    await page.waitForTimeout(3000);

    await page.mouse.wheel(0,1800);//Scroll Up
    await page.waitForTimeout(3000);

    await page.mouse.wheel(0,-500);//Scroll Down
    await page.goto('https://www.myntra.com/');

    await page.fill("//input[@class='desktop-searchBar']",'dress');
    await page.dblclick("//input[@class='desktop-searchBar']");
    await page.waitForTimeout(3000);

    await page.reload();
    await page.goto('https://www.amazon.in/');
    await page.click("//a[normalize-space()='Mobiles']",{button:"right"});






    








})