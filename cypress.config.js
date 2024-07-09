const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  pageLoadTimeout: 10000,
  screenshotsFolder: 'cypress/screenshots',
  defaultCommandTimeout: 10000,
  video:true,
    
    retries:{
      runMode:1,
      openMode:2
    } ,
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      ignoreVideos: false,
      videoOnFailOnly: true
    },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      screenshotOnRunFailure=true;
    },
    specPattern: 'cypress/integration/oneModel/createNewSimulation.{js,jsx,ts,tsx}',
      
},

});
