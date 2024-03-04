/// <reference types="cypress" />


describe("Dashboard - Configurações", {viewportHeight: 1080, viewportWidth: 1920}, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar tema modo dark ", () => {
    cy.fazerlogin(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.validarModoLightParaDark()
  })

  it("Test 02 - Validar tema modo light ", () => {
    cy.fazerlogin(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.validarModoDarkParaLight()
  })
})
