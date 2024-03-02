/// <reference types="cypress" />

describe("Logout", () => {
  beforeEach(() => {
    // cy.viewport(1920, 1080);
    cy.visit("/")
  })

  it("Test 01 - Verifique se é possível fazer logout corretamente no responsivo", () => {
    cy.fazerLogoutResponsivo("instrutor")
  })

  it("Test 02 - Verifique se é possível fazer logout corretamente", () => {
    cy.viewport(1600, 900)
    cy.fazerLogout("instrutor")
  })
})
