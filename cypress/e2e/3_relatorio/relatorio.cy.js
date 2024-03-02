/// <reference types="cypress" />

import loginData from "../../fixtures/login.json"

describe("Relatório", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar dados do Estagiário", () => {
    cy.fazerLogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarDadosPrimeiroDaLista()
  })

  it("Test 02 - Validar mudança de abas de skills", () => {
    cy.fazerLogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.get(btnDetalhesPrimeiroDaLista).click()
    cy.validarTrocarAba() //precisa da validação de troca do css
  })
})
