/* Atributos */
const { cadastroValidoFaker } = require("../../utils/DataGenerator")
const { SELECTOR } = require("./elements/selector")
const {} = SELECTOR.cadastro

/* Rotinas */
Cypress.Commands.add("gerarDadosDinamicosRegistro", () => {
  cy.writeFile("cypress/fixtures/cadastro.json", {
    cadastroValido: cadastroValidoFaker
  })
})

Cypress.Commands.add("fazerCadastroValido", () => {})

Cypress.Commands.add("fazerCadastroInvalido", () => {})
