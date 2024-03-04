/// <reference types="cypress" />
import loginData from "../../fixtures/login.json"

describe("Dashboard - Configurações", {viewportHeight: 1080, viewportWidth: 1920}, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar tema modo dark ", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarModoLightParaDark()
  })

  it("Test 02 - Validar tema modo light ", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarModoDarkParaLight()
  })
})
