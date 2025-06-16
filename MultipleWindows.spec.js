const{test,expect, chromium}=require('@playwright/test')
test('Frame', async()=>{
    const browser = await chromium.launch()
    const context1 = await browser.newContext()
    const parentTab = await context1.newPage()
    await parentTab.goto('https://www.facebook.com/')

    const nextTab = await context1.newPage()
    await nextTab.goto('https://www.instagram.com/')

    const thirdTab = await context1.newPage()
    await thirdTab.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await nextTab.bringToFront();

    await nextTab.waitForTimeout(4000);

   const orangeHrm = await context1.newPage();
   await orangeHrm.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   const newTab = context1.waitForEvent('page');

   await orangeHrm.click("//a[text()='OrangeHRM, Inc']")

   const orangeInc = await newTab;

//    await orangeInc.click("//button[text()='Book a Free Demo']")

//    await orangeInc.pause();

})