const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 's8op3q',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    onBeforeLoad(win) {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    },
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return {on, config}
    },
    specPattern: 'cypress/e2e/**/*.{feature,features,spec.js,cy.js}'
  },
})
