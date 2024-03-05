/// <reference types="cypress" />

describe("Login", { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar login com dados válidos", () => {
    cy.fazerLoginComSucesso(Cypress.env(`ADMIN_EMAIL`), Cypress.env(`ADMIN_SENHA`))
  })
  it("Test 02 - Validar login com dados inválidos", () => {
    cy.fazerLoginComDadosInvalidos()
  })

  it("Test 03 - Validar login com email com formato inválido", () => {
    cy.fazerLoginComEmailInvalido()
  })

  it("Test 04 - Validar login com e-mail vazio", () => {
    cy.fazerLoginComEmailVazio()
  })

  it("Test 05 - Validar login com senha não cadastrada no sistema", () => {
    cy.fazerLoginSenhaInvalida(Cypress.env(`GESTOR_EMAIL`), Cypress.env(`GESTOR_SENHA`))
  })

  it("Test 06 - Validar login com campo senha em branco", () => {
    cy.fazerLoginComSenhaEmBranco()
  })

  it("Test 07 - Validar login com campo senha em formato invalido", () => {
    cy.fazerLoginComSenhaEmFormatoInvalido(Cypress.env(`ADMIN_EMAIL`), "123456")
  })
})
