/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogin, textTelaLogin } = selector.login
const { btnLogout, btnLogoutResponsivo, btnResponsivo } = selector.logout

/* Rotinas */

Cypress.Commands.add("fazerLogoutResponsivo", (emailLogin, senhaLogin)=> {
        cy.get(textTelaLogin).contains("Login")
        cy.get(email).type(emailLogin)
        cy.get(senha).type(senhaLogin)
        cy.get(btnLogin).click()
        cy.get(btnResponsivo).click()
        cy.get(btnLogoutResponsivo).click()
    })


Cypress.Commands.add("fazerLogout", (emailLogin, senhaLogin) => {
        cy.get(textTelaLogin).contains("Login")
        cy.get(email).type(emailLogin)
        cy.get(senha).type(senhaLogin)
        cy.get(btnLogin).click()
        cy.wait(500)
        cy.get(btnLogout).click()
    })
