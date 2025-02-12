const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://salazarisrael.dev.grupoamericar.com/',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // Implementa aquí los oyentes de eventos de Node si es necesario
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});