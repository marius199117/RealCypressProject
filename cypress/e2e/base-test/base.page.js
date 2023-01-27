class BasePage {
  constructor() {
    this.baseUrl = 'https://magento.softwaretestingboard.com';
  }

  visit(path) {
    cy.visit(`${this.baseUrl}${path}`);
  }

  click(locator) {
    cy.get(locator).click();
  }

  type(locator, text) {
    cy.get(locator).type(text);
  }

  fillForm(locator, text) {
    cy.get(locator).clear().type(text);
  }

  succesfullMessage(locator) {
    cy.get(locator).should('be.visible')
  }

  sendRequest(request_type, endpoint, id, body) {
    switch (request_type) {
      case 'GET':
        cy.request({
          method: 'GET',
          url: `${endpoint}${id}`,
        }).as('response');
        break;
      case 'POST':
        cy.request({
          method: 'POST',
          url: `${endpoint}`,
          body: `${body}`,
        }).as('response');
        break;
      case 'PUT':
        cy.request({
          method: 'PUT',
          url: `${endpoint}${id}`,
          body: `${body}`,
        }).as('response');
        break;
      case 'PATCH':
        cy.request({
          method: 'PATCH',
          url: `${endpoint}${id}`,
          body: `${body}`,
        }).as('response');
        break;
      case 'DELETE':
        cy.request({
          method: 'DELETE',
          url: `${endpoint}${id}`,
        }).as('response');
        break;
      default:
        throw new Error('Invalid request type')
    }
  }

  verifyStatusCode(status_code) {
    cy.get('@response').then((response) => {
      expect(response.status).to.eq(parseInt(status_code))
    })
  }

  containsMatchedJson(matchString) {
    cy.get('@response').then((response) => {
      expect(response.headers['content-type']).to.match(new RegExp(matchString));
    })
  }
}
  
  module.exports = BasePage;