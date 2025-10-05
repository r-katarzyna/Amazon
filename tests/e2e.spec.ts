import { test, expect } from '@playwright/test';
import { loginCredentials } from './testData';

test.beforeEach('As a user, I want to enter Amazon webpage', async ({ page }) => { 

  await page.goto(loginCredentials.urlMainPage);

}); 