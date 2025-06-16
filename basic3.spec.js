// const{test,expect}=require('@playwright/test')
// test('Lanch Instagram',async({page})=>{
// await page.goto('https://www.instagram.com/');
// const urlName=await page.url();
// console.log(urlName);
// })
const{test,expect}=require('@playwright/test')
test('simple Dialog',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',async Alterbox=>{
        expect(Alterbox.type()).toContain('alert')
        expect(Alterbox.message()).toContain('I am an alert box!')
        await Alterbox.accept();
    })
    await page.click("//button[@onclick='myFunctionAlert()']")
})