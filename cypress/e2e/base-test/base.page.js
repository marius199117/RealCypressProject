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
  }
  
  module.exports = BasePage;