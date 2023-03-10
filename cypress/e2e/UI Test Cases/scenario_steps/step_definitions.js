import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import * as urls from '../locators/urls'
import * as locators from '../locators/login_locators';
const BasePage = require('../page_objects/base_page');
const basePage = new BasePage();

Before(() => {
  Given('I am on the {string} page', (url) => {
    basePage.visit(urls[url]);
  });
});

When('I enter {string} data on {string} field', (data, locator) => {
  basePage.addTextToField(locators[locator], data)
});

When('I send a {string} request to the {string} with body {string}', (request_type, endpoint, body) => {
  basePage.sendRequest(request_type, endpoint, body)
});

And('I click the {string} button', (locator) => {
  basePage.click(locators[locator])
});

Then('I verify the validation message {string}', (locator) => {
  basePage.succesfullMessage(locators[locator])
});

