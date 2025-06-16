const{test,expect}=require('@playwright/test');
// const { log } = require('console');
test('StaticWebTable', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const rows = await page.locator("//table[@name='BookTable']/tbody/tr");
    const rowCount = await rows.count();
    console.log("Number of rows : " + rowCount);

    const columns  = await page.locator("//table[@name='BookTable']/tbody/tr/th");
    const columncount = await columns.count();
    console.log("Number of rows : " + columncount);

    // const fouthrow = await page.locator("//table[@name='BookTable']/tbody/tr[4]/td");//x-path
    // const fouthrowdata = await fouthrow.allTextContents();
    // console.log("print the fouthrow" + fouthrowdata);

    const SecondRow = await page.locator('[name="BookTable"] tbody tr:nth-child(2) td').allTextContents
    console.log(SecondRow);

    const specificcell = await page.locator('[name="BookTable"] tbody tr:nth-child(7) td:nth-child(2)')
    console.log(specificcell);
     
    await page.waitForTimeout(3000); 

    for (let i= 0;i<=rowCount;i++){
        const allValue = await page.locator(`//table[@name='BookTable']/tbody/ tr[${i}]/td`);
        const text = await allValue.allTextContents();
        console.log(`Row ${i} , ${text}`);
    }
    
                  
})