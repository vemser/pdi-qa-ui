/// <reference types="cypress" />

describe("Dashboard - Visualizar Detalhes Do Usuário", { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 -  Validar a presença do Histórico do Estagiário do Vem Ser ", () => {
    cy.fazerlogin(Cypress.env(`ADMIN_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.reload()
    cy.FiltroBemSucedido()
    cy.validarHistoricoEstagiario()
  })

  it("Test 02 - Validar se o nome dos módulos e avaliações aparecem nos detalhes de usuário", () => {
    cy.fazerlogin(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.reload()
    cy.FiltroBemSucedido()
    cy.validarHistoricoEstagiario()
    cy.validarModulos()
  })

  it("Test 03 - Validar se o feedback comportamental está presente nos detalhes de usuário", () => {
    cy.fazerlogin(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.reload()
    cy.FiltroBemSucedido()
    cy.validarHistoricoEstagiario()
    cy.validarSoftSkills()
  })

  it("Test 04 -  Validar se o plano de ação está presente nos detalhes de usuário", () => {
    cy.fazerlogin(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.reload()
    cy.FiltroBemSucedido()
    cy.validarHistoricoEstagiario()
  })

  it("Test 05 -  Validar se o feedback técnico está presente nos detalhes de usuário", () => {
    cy.fazerlogin(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.FiltroBemSucedido()
    cy.validarHistoricoEstagiario()
  })
})
