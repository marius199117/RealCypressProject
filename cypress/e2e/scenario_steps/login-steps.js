import { Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import Login_Locators from '../locators/login_locators';
import Urls from '../locators/urls';
const BasePage = require('../base-test/base.page');
const basePage = new BasePage();

Before(() => {
Given('I am on the {string} page', (url) => {
  basePage.visit(Urls[url]);
});
});

When('I enter {string} data on {string} field', (data, locator) => {
  basePage.fillForm(Login_Locators[locator], data)
});

And('I click the {string} button', (locator) => {
  basePage.click(Login_Locators[locator])
});

Then('I verify the validation message {string}', (locator) => {
  basePage.succesfullMessage(Login_Locators[locator])
});