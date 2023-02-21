const { defineConfig } = require('cypress')

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
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{feature,features,spec.js,cy.js}'
  },
})
