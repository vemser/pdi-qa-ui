/// <reference types="cypress" />

import loginData from "../../fixtures/login.json"

describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Verifique se é possível fazer logout corretamente no responsivo", () => {
    cy.fazerLogoutResponsivo(loginData.instrutor.email, loginData.instrutor.senha)
  })

  it("Test 02 - Verifique se é possível fazer logout corretamente",{viewportHeight: 1080, viewportWidth: 1920},() => {
    cy.fazerLogout(loginData.instrutor.email, loginData.instrutor.senha)
  })
})
