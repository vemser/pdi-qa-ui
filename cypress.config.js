const { defineConfig } = require("cypress")
const allureWriter = require("@shelex/cypress-allure-plugin/writer")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    // TODO: alterar baseURL para a aplicação
    baseUrl: "http://localhost:8080"
  }
})
