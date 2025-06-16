const{test,expect}=require('@playwright/test')

test('Aseertion',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    
    await expect(page).toHaveTitle('Register');
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html');
    await page.waitForTimeout(3000);
    await page.fill("//input[@placeholder='First Name']",'sangeetha');
    await page.waitForTimeout(3000);
    await page.fill("//input[@placeholder='Last Name']",'c');
    await page.waitForTimeout(3000);
    await page.fill("//textarea[@ng-model='Adress']",'no7, chennai');
    await page.waitForTimeout(3000);
    await page.fill("//input[@type='email']",'sangeechinna2598@gmail.com');
    await page.waitForTimeout(3000);
    await page.fill("//input[@type='tel']",'1234567891');
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle("Register");

    




})