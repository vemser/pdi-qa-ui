/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar login com dados válidos", () => {
    cy.fazerLoginComSucesso("instrutor")
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
    cy.fazerLoginSenhaInvalida("admin")
  })

  it("Test 06 - Validar login com campo senha em branco", () => {
    cy.fazerLoginComSenhaEmBranco()
  })

  it("Test 07 - Validar login com campo senha em formato invalido", () => {
    cy.fazerLoginComSenhaEmFormatoInvalido("instrutor")
  })
})
