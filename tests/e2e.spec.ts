import { test, expect } from '@playwright/test';
import { credentials, search } from './testData';
import { mainPageElements, signInPage, accountMenu, searchPage } from './locators';


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
  await page.fill(signInPage.passwordInput, credentials.password);
  await page.fill(signInPage.passwordCheckInput, credentials.password);
  await page.click(signInPage.continueBtn);
  await page.waitForTimeout(20000);
  await page.fill(signInPage.securityCodeInput, credentials.securityCode);
  //Solve this puzzle to protect your account//
  //Gmail API GET latest email with veryfication code//

});


test('As a user I want to buy christmas tree', async ({page}) => {

  await page.fill(mainPageElements.searchInput, search.christmasTree);
  await page.click(mainPageElements.searchBtn);
  await page.click(searchPage.sortBySelector);
  //Nie chce się kliknąć//

})