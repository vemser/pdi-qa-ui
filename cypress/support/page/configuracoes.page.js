/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogin, textTelaLogin } = selector.login
const { btnSwitchToDark, btnSwitchToLight } = selector.configuracoes

/* Rotinas */

Cypress.Commands.add("fazerlogin", (emailLogin, senhaLogin) => {
    cy.get(textTelaLogin).contains("Login")
    cy.get(email).type(emailLogin)
    cy.get(senha).type(senhaLogin)
    cy.get(btnLogin).click()
})

Cypress.Commands.add("validarModoLightParaDark", () => {
    cy.get(btnSwitchToDark).should("exist")
    cy.get(btnSwitchToDark).click()
    cy.get(btnSwitchToLight).should("exist")
})

Cypress.Commands.add("validarModoDarkParaLight", () => {
    cy.get(btnSwitchToDark).click()
    cy.get(btnSwitchToLight).should("exist")
    cy.get(btnSwitchToLight).click()
    cy.get(btnSwitchToDark).should("exist")
})
