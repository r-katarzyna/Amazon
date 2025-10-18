import { test, expect } from '@playwright/test';
import { credentials } from './testData';
import { mainPageElements, signInPage, accountMenu } from './locators';


test.beforeEach('As a user, I want to enter Amazon webpage', async ({ page }) => { 

  await page.goto(credentials.urlMainPage);

});

test('As a user, I want to sign in.', async ({page}) => {

  await page.getByRole('link', {name: mainPageElements.yourAccountBtn}).hover();
  await page.getByText(mainPageElements.accountBtn, {exact: true}).click();
  await page.getByRole('link', {name: accountMenu.signInBtn, exact: true}).click();
  await page.fill(signInPage.emailInput, credentials.username);
  await page.click(signInPage.continueBtn);
  await page.click(signInPage.proceedBtn);
  await page.fill(signInPage.nameInput, credentials.name);

});