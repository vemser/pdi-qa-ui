/// <reference types="cypress" />

import loginData from "../../fixtures/login.json"

describe("Dashboard - Visualizar Detalhes Do Usuário", {viewportHeight: 1080, viewportWidth: 1920}, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 -  Validar a presença do Histórico do Estagiário do Vem Ser ", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.FiltroBemSucedido()
    cy.validarHistoricoEstagiario()
  })

  it("Test 02 - Validar se o nome da Trilha é descrito nos detalhes de usuário", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.FiltroBemSucedido()
    cy.validarTrilha()
  })

  it("Test 03 - Validar se o nome dos módulos e avaliações aparecem nos detalhes de usuário", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.FiltroBemSucedido()
    cy.validarHistoricoEstagiario()
    cy.validarModulos()
  })

  it("Test 04 - Validar se o feedback comportamental está presente nos detalhes de usuário", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.FiltroBemSucedido()
    cy.validarHistoricoEstagiario()
    cy.validarSoftSkills()
  })

  it("Test 05 -  Validar se o plano de ação está presente nos detalhes de usuário", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.FiltroBemSucedido()
    cy.validarHistoricoEstagiario()
    //Falta um plano de ação presente no Front-End
  })

  it("Test 06 -  Validar se o feedback técnico está presente nos detalhes de usuário", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.FiltroBemSucedido()
    cy.validarHistoricoEstagiario()
    //Falta um feedbackTecnico no Front-End da Página HardSkills
  })
})
