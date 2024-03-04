/// <reference types="cypress" />

describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Verifique se é possível fazer logout corretamente no responsivo", () => {
    cy.fazerLogoutResponsivo(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
  })

  it("Test 02 - Verifique se é possível fazer logout corretamente",{viewportHeight: 1080, viewportWidth: 1920},() => {
    cy.fazerLogout(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
  })
})
