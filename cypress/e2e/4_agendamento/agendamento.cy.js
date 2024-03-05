/// <reference types="cypress" />


describe("Agendamento", { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar filtro de agendamento com datas válidas ", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.acessarPaginaAcompanhamento()
    cy.validaDataInicioDataFim("2024-04-24", "2024-05-01")
  })

  it("Test 02 - Validar filtro de agendamento com datas inválidas ", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.acessarPaginaAcompanhamento()
    cy.validaDataInicioDataFim("2024-03-03", "2024-03-10")
  })

  it("Test 03 - Validar botão de detalhes do agendamento", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.acessarPaginaAcompanhamento()
    cy.validaMensagemRegistrosVazios()
  })
})
