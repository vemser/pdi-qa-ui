/// <reference types="cypress" />

import loginData from "../../fixtures/login.json"

describe("Agendamento", { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar filtro de agendamento com datas válidas ", () => {
    cy.fazerLoginComSucesso(loginData.instrutor.email, loginData.instrutor.senha)
    cy.acessarPaginaAcompanhamento()
    cy.validaDataInicioDataFim("24042024", "01052024")
  })

  it("Test 02 - Validar filtro de agendamento com datas inválidas ", () => {
    cy.fazerLoginComSucesso(loginData.instrutor.email, loginData.instrutor.senha)
    cy.acessarPaginaAcompanhamento()
    cy.validaDataInicioDataFim("03032024", "10032024")
  })

  it("Test 03 - Validar botão de detalhes do agendamento", () => {
    cy.fazerLoginComSucesso(loginData.instrutor.email, loginData.instrutor.senha)
    cy.acessarPaginaAcompanhamento()
    cy.validaMensagemRegistrosVazios()
  })
})
