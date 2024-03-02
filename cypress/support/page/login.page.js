/* Atributos */
const { selector } = require("./elements/selector")
const { emailLogin, senhaLogin, btnLogin, textTelaLogin, textDashboard, textAlert, textEmailInvalido, textSenhaVazia } = selector.login
import { ListaEmailsInvalidos, ListaSenhasInvalidas, emailInvalido, senhaDinamica } from "../../utils/DataGenerator"

/* Rotinas */

Cypress.Commands.add("fazerLoginComSucesso", usuario => {
    cy.fixture("login").then(loginData => {
        const { email, senha } = loginData[usuario]
        cy.get(textTelaLogin).contains("Login")
        cy.get(emailLogin).type(email)
        cy.get(senhaLogin).type(senha)
        cy.get(btnLogin).click()
        cy.get(textDashboard).contains("PDI - DASHBOARD")
    })
})

Cypress.Commands.add("fazerLoginComDadosInvalidos", () => {
    cy.get(emailLogin).type(emailInvalido)
    cy.get(senhaLogin).type(senhaDinamica)
    cy.get(btnLogin).click()
    cy.get(textAlert).contains("Verifique se seus dados estão corretos")
})

Cypress.Commands.add("fazerLoginComEmailVazio", () => {
    cy.get(emailLogin).clear()
    cy.get(senhaLogin).type(senhaDinamica)
    cy.get(btnLogin).click()
    cy.get(textEmailInvalido).contains("O email é obrigatório")
})

Cypress.Commands.add("fazerLoginComEmailInvalido", () => {
    cy.get(emailLogin).clear()
    cy.get(emailLogin).type(ListaEmailsInvalidos[Math.floor(Math.random() * ListaEmailsInvalidos.length)])
    cy.get(senhaLogin).type(senhaDinamica)
    cy.get(btnLogin).click()
    cy.get(textEmailInvalido).contains("Formato de email inválido")
})

Cypress.Commands.add("fazerLoginSenhaInvalida", usuario => {
    cy.fixture("login").then(loginData => {
        const { email, senha } = loginData[usuario]
        cy.get(textTelaLogin).contains("Login")
        cy.get(emailLogin).type(email)
        cy.get(senhaLogin).type(senhaDinamica)
        cy.get(btnLogin).click()
        cy.get(textAlert).contains("Verifique se seus dados estão corretos")
    })
})

Cypress.Commands.add("fazerLoginComSenhaEmBranco", () => {
    cy.get(emailLogin).type(emailInvalido)
    cy.get(senhaLogin).clear()
    cy.get(btnLogin).click()
    cy.get(textSenhaVazia).contains("A senha é obrigatória")
})

Cypress.Commands.add("fazerLoginComSenhaEmFormatoInvalido", usuario => {
    cy.fixture("login").then(loginData => {
        const { email, senha } = loginData[usuario]
        cy.get(textTelaLogin).contains("Login")
        cy.get(emailLogin).type(email)
        cy.get(senhaLogin).type(ListaSenhasInvalidas[Math.floor(Math.random() * ListaSenhasInvalidas.length)])
        cy.get(btnLogin).click()
        cy.get(textAlert).contains("Verifique se seus dados estão corretos")
    })
})


