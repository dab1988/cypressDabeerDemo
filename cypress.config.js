const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3ej46u",
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 100000,
  chromeWebSecurity: false,
  "env":
  {
    "url":"https://demowebshop.tricentis.com/",
    "url1":"https://rahulshettyacademy.com/AutomationPractice/",
    "hdfcBank":"https://www.hdfcbank.com/"
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Automation Demo Title',
    embeddedScreenshots: true,
    videoOnFailOnly:true,
    inlineAssets: true,
    saveAllAttempts: false,
},

  
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
      screenshotOnRunFailure=true;
      videoOnFailOnly=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  retries: {
    runMode: 2,
    openMode: 1,
  },
});
