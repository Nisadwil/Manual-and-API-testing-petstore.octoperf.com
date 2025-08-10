const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 720,
  viewportWidth: 1280,
  experimentalStudio : true,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
