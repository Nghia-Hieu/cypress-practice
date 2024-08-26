const { defineConfig } = require("cypress");
const installLogsPrinter = require ("cypress-terminal-report/src/installLogsPrinter");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installLogsPrinter(on, {
        printLogsToConsole: "always",
        outputRoot: config.projectRoot + '/logs/',
        outputTarget: {
          'out.txt': 'txt',
          'out.json': 'json',
        }
      });
    },
  },
});
