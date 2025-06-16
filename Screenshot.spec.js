const{test,expect}=require('@playwright/test')
test('ScreenPage',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    await page.waitForTimeout(5000);
    await page.screenshot({path : 'test-results/screenshot' + Date.now()  + 'Home.png'})
})
test('FullScreenPage',async({page})=>{
    await page.goto('https://in.bookmyshow.com/explore/home/chennai');
    await page.waitForTimeout(5000);
    await page.screenshot({path:'test-results/screenshot' + Date.now() + 'FullPage.png' , fullpage:true});

})
test('Element',async({page})=>{
    await page.goto('https://in.bookmyshow.com/explore/home/chennai');
    await page.waitForTimeout(5000);
    await page.locator("//img[@alt='Pushpa 2: The Rule']").screenshot({path:'test-results/screenshot'+ Date.now() + 'puspa2.png'});
    
})

