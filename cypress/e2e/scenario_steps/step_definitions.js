import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import Login_Locators from '../locators/login_locators';
import Urls from '../locators/urls';
import API_Data from '../locators/api_data';
const BasePage = require('../base-test/base.page');
const basePage = new BasePage();

Before(() => {
  Given('I am on the {string} page', (url) => {
    basePage.visit(Urls[url]);
  });
});

Given('the API {string} is available', (endpoint) => {
  basePage.visit(API_Data[endpoint])
})

When('I enter {string} data on {string} field', (data, locator) => {
  basePage.fillForm(Login_Locators[locator], data)
});

When('I send a {string} request to the {string} with id {string} with body {string}', (request_type, endpoint, id, body) => {
  basePage.sendRequest(request_type, endpoint, id, body)
});


And('I click the {string} button', (locator) => {
  basePage.click(Login_Locators[locator])
});

Then('I verify the validation message {string}', (locator) => {
  basePage.succesfullMessage(Login_Locators[locator])
});

Then('the response should have a status code of {string}', (status_code) => {
  basePage.verifyStatusCode(status_code)
});

Then('the response should contain a matched {string} JSON', (matchString) => {
  basePage.containsMatchedJson(matchString)
})

