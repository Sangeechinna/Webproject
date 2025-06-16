const{test,expect}=require('@playwright/test')
test('Frame', async({page})=>{
    await page.goto('https://letcode.in/frame');
    await page.frame({name:"firstFr"}).fill("//input[@placeholder='Enter name']",'sangeetha');
    await page.waitForTimeout(3000);
    const lastName = await page.frame({url:"https://letcode.in/frameUI"});
    lastName.fill("//input[@name='lname']",'chinna');
    await page.waitForTimeout(3000);
    const firstname = await page.frameLocator('#firstFr').locator("//input[@name='fname']");
    firstname.fill("1234567890");
    await page.waitForTimeout(3000);
    const innnerFrame = await page.frame({url :'https://letcode.in/innerFrame'});
    innnerFrame.fill("//input[@name='email']","sangeechinna@25");
    await page.waitForTimeout(3000);
    await innnerFrame.parentFrame();
    lastName.fill("//input[@name='lname']","Parent Frame");
    await page.waitForTimeout(2000);



})