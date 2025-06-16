const{test , expect} =  require('@playwright/test')
test('Single Dropdown',async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html')
    await page.locator("//select[@id='course']").selectOption('Javascript');
    await page.waitForTimeout(5000);
    await page.locator("//select[@id='course']").selectOption('net');
    await page.waitForTimeout(5000);
    await page.locator("//select[@id='course']").selectOption({index:3});
    await page.waitForTimeout(5000);
    await page.pause();

})