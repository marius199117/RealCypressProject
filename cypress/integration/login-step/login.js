import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Login_Locators from '../../support/login_locators';
const BasePage = require('../../pages/base.page');
const basePage = new BasePage();

Given(/^I am on the login page$/, () => {
  basePage.visit('/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
});

When('I enter my email as {string} on {string} field', (email, locator) => {
  basePage.fillForm(Login_Locators[locator], email)
});

When('I enter my password as {string} on {string} field', (password, locator) => {
  basePage.fillForm(Login_Locators[locator], password)
});

And('I click the {string} button', (locator) => {
  basePage.click(Login_Locators[locator])
});

Then('I verify the validation message {string}', (locator) => {
  basePage.succesfullMessage(Login_Locators[locator])
});