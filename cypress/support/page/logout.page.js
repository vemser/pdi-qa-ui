/* Atributos */
const { selector } = require("./elements/selector")
const { emailLogin, senhaLogin, btnLogin, textTelaLogin } = selector.login
const { btnLogout, btnLogoutResponsivo, btnResponsivo } = selector.logout

/* Rotinas */

Cypress.Commands.add("fazerLogoutResponsivo", usuario => {
    cy.fixture("login").then(loginData => {
        const { email, senha } = loginData[usuario]
        cy.get(textTelaLogin).contains("Login")
        cy.get(emailLogin).type(email)
        cy.get(senhaLogin).type(senha)
        cy.get(btnLogin).click()
        cy.get(btnResponsivo).click()
        cy.get(btnLogoutResponsivo).click()
    })
})

Cypress.Commands.add("fazerLogout", usuario => {
    cy.fixture("login").then(loginData => {
        const { email, senha } = loginData[usuario]
        cy.get(textTelaLogin).contains("Login")
        cy.get(emailLogin).type(email)
        cy.get(senhaLogin).type(senha)
        cy.get(btnLogin).click()
        cy.get(btnLogout).click()
    })
})
