/// <reference types="cypress" />

describe("Relatório", { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar dados do Estagiário", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.validarDadosPrimeiroDaLista()
  })

  it("Test 02 - Validar mudança de abas de skills", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.navegarDetalhesPrimeiroDaLista()
    cy.validarTrocarAba()
  })

  it("Test 03 - Validar clique na aba atual", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.navegarDetalhesPrimeiroDaLista()
    cy.validarPermanecerMesmaAba()
  })

  it("Test 04 - Validar indicador de aba atual", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.navegarDetalhesPrimeiroDaLista()
    cy.validarIndicadorAbaAtiva()
  })

  it("Test 05 - Validar dropdown de módulos", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.navegarDetalhesPrimeiroDaLista()
    cy.validarDropdown()
  })
  it("Test 06 - Validar opção de elaboração de relatório", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.navegarDetalhesPrimeiroDaLista()
    cy.selecionarBotaoGerarRelatorio()
  })
})
