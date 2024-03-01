/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogout } = selector.login

/* Rotinas */
Cypress.Commands.add("fazerLogin", (email, senha) => {
})

Cypress.Commands.add("fazerLogout", () => {})
