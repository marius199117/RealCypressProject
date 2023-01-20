const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 's8op3q',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.{feature,features,spec.js}'
  },
})
