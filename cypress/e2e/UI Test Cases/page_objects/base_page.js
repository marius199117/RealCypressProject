class BasePage {
  // constructor() {
  //   this.baseUrl = 'https://magento.softwaretestingboard.com';
  // }

  visit(path) {
    cy.visit(path)
  }

  click(locator) {
    cy.get(locator).should('be.visible').click()
  }

  addTextToField(locator, text) {
    cy.get(locator).clear().type(text).should('have.value', text)
  }

  succesfullMessage(locator) {
    cy.get(locator).should('be.visible');
  }
}
module.exports = BasePage;