/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogin, textTelaLogin, textDashboard, textAlert, textEmailInvalido, textSenhaVazia } = selector.login
import { ListaEmailsInvalidos, ListaSenhasInvalidas, emailInvalido, senhaDinamica } from "../../utils/DataGenerator"

/* Rotinas */

Cypress.Commands.add("fazerLoginComSucesso", (emailLogin, senhaLogin) => {
        cy.get(textTelaLogin).contains("Login")
        cy.get(email).type(emailLogin)
        cy.get(senha).type(senhaLogin)
        cy.get(btnLogin).click()
        cy.get(textDashboard).contains("PDI - DASHBOARD")
    })

Cypress.Commands.add("fazerLoginComDadosInvalidos", () => {
    cy.get(email).type(emailInvalido)
    cy.get(senha).type(senhaDinamica)
    cy.get(btnLogin).click()
    cy.get(textAlert).contains("Verifique se seus dados estão corretos")
})

Cypress.Commands.add("fazerLoginComEmailVazio", () => {
    cy.get(email).clear()
    cy.get(senha).type(senhaDinamica)
    cy.get(btnLogin).click()
    cy.get(textEmailInvalido).contains("O email é obrigatório")
})

Cypress.Commands.add("fazerLoginComEmailInvalido", () => {
    cy.get(email).clear()
    cy.get(email).type(ListaEmailsInvalidos[Math.floor(Math.random() * ListaEmailsInvalidos.length)])
    cy.get(senha).type(senhaDinamica)
    cy.get(btnLogin).click()
    cy.get(textEmailInvalido).contains("Formato de email inválido")
})

Cypress.Commands.add("fazerLoginSenhaInvalida", (emailLogin) => {
        cy.get(textTelaLogin).contains("Login")
        cy.get(email).type(emailLogin)
        cy.get(senha).type(senhaDinamica)
        cy.get(btnLogin).click()
        cy.get(textAlert).contains("Verifique se seus dados estão corretos")
    })

Cypress.Commands.add("fazerLoginComSenhaEmBranco", () => {
    cy.get(email).type(emailInvalido)
    cy.get(senha).clear()
    cy.get(btnLogin).click()
    cy.get(textSenhaVazia).contains("A senha é obrigatória")
})

Cypress.Commands.add("fazerLoginComSenhaEmFormatoInvalido", (emailLogin) => {
        cy.get(textTelaLogin).contains("Login")
        cy.get(email).type(emailLogin)
        cy.get(senha).type(ListaSenhasInvalidas[Math.floor(Math.random() * ListaSenhasInvalidas.length)])
        cy.get(btnLogin).click()
        cy.get(textAlert).contains("Verifique se seus dados estão corretos")
    })


