const{test,expect}=require('@playwright/test')

 test('Radio Button',async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator("//input[@value='radio1']").check();
    await expect(await page.locator("//input[@value='radio1']")).toBeChecked();
    await expect(await page.locator("//input[@value='radio2']").isChecked()).toBeFalsy();
    await page.pause();

 })
 test('CheckBox',async({page})=>{
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  const options = await page.$$("//legend[text()='Checkbox Example']/following::input[@type='checkbox']");
  for(const option of options){
    await option.check();
    console.log("success")
  } 

  await page.locator('id=checkBoxOption2').uncheck();
  await page.pause();
 })