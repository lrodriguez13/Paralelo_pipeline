const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yg2t23',
  e2e: {
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    compilerOptions: {
      types: ["cypress", "@4tw/cypress-drag-drop"],
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
