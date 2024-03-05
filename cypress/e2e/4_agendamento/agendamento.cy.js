/// <reference types="cypress" />

describe("Agendamento", { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar botão de detalhes do agendamento", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.acessarPaginaAcompanhamento()
    cy.validarDetalhesAgendamento()
  })
})
