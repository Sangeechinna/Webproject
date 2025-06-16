const{test,expect}=require('@playwright/test')
test('Upload Single file', async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles('C:/Users/sange/OneDrive/Documents/VARIABLE_TYPES.txt');
    await page.waitForTimeout(4000);

// "C:\Users\sange\OneDrive\Documents\VARIABLE_TYPES.txt"


})