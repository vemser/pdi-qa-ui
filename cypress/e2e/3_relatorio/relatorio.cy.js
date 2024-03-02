/// <reference types="cypress" />

import loginData from "../../fixtures/login.json"

describe("Relatório", { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar dados do Estagiário", () => {
    cy.fazerLogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarDadosPrimeiroDaLista()
  })

  it("Test 02 - Validar mudança de abas de skills", () => {
    cy.fazerLogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarDadosPrimeiroDaLista()
    cy.validarTrocarAba()
  })

  it("Test 03 - Validar clique na aba atual", () => {
    cy.fazerLogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarDadosPrimeiroDaLista()
    cy.validarPermanecerMesmaAba()
  })

  it("Test 04 - Validar indicador de aba atual", () => {
    cy.fazerLogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarDadosPrimeiroDaLista()

    cy.validarIndicadorAbaAtiva()
  })

  it("Test 05 - Validar dropdown de módulos", () => {
    cy.fazerLogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarDadosPrimeiroDaLista()

    cy.validarDropdown()
  })
})
