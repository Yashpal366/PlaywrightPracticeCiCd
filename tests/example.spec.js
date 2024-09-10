// @ts-check
const {test,expect} = require('@playwright/test');


test('basic test', async ({page}) =>{
  await page.goto('https://the-internet.herokuapp.com/')
  
  const title = await page.title();
  expect(title).toBe('The Internet')
});

test('Open Add/Remove Elements Page' , async ({page})=>{

  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();

})