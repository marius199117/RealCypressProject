import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import * as urls from '../locators/urls'
import * as apiData from '../locators/api_data'
import * as locators from '../locators/login_locators';
const BasePage = require('../base-test/base.page');
const basePage = new BasePage();

Before(() => {
  Given('I am on the {string} page', (url) => {
    basePage.visit(urls[url]);
  });
});

Given('the API {string} is available', (endpoint) => {
  basePage.visit(apiData[endpoint])
})

When('I enter {string} data on {string} field', (data, locator) => {
  basePage.addTextToField(locators[locator], data)
});

When('I send a {string} request to the {string} with id {string} with body {string}', (request_type, endpoint, id, body) => {
  basePage.sendRequest(request_type, endpoint, id, body)
});

And('I click the {string} button', (locator) => {
  basePage.click(locators[locator])
});

Then('I verify the validation message {string}', (locator) => {
  basePage.succesfullMessage(locators[locator])
});

Then('the response should have a status code of {string}', (status_code) => {
  basePage.verifyStatusCode(status_code)
});

Then('the response should contain a matched {string} Json', (matchString) => {
  basePage.verifyContentType(matchString)
})

Then('the {string} should have a property {string} with value {string}', (responseBody, property, value) => {
  basePage.verifyResponse(responseBody, property, value)
})




