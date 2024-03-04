/// <reference types="cypress" />
import loginData from "../../fixtures/login.json"

describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar filtro com nome de estagiário válido", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarFiltroEstagiarioValido()
  })

  it("Test 02 - Validar filtro com nome de estagiário que não existe no sistema", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarFiltroEstagiarioInvalido()
  })

  it("Test 06 - Validar botão de detalhes", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarBotaoDetalhes()
  })

  it.only("Test 07 - Validar botão de Sair do módulo PDI", () => {
    cy.fazerLogoutResponsivo(loginData.instrutor.email, loginData.instrutor.senha)
  })

  it.only("Test 08 - Validar se o estagiário tem status ativo", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarStatusEstagiarioAtivo()
  })

  it.only("Test 09 - Validar se o estagiário tem status inativo", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarStatusEstagiarioInativo()
  })

  it("Test 09 - Validar se o estagiário tem status inativo", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarStatusEstagiarioInativo()
  })

  it.only("Test 10 - Validar clicar no botão de paginação por número", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarBtnPaginacaoPorNumero()
  })

  it.only("Test 11 - Validar clicar no botão de paginação por número", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarBtnPaginacaoSeta()
  })

  it.only("Test 12 - Validar clique no menu lateral acompanhamentos", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarMenuLateralAcompanhamentos()
  })

  it.only("Test 13 - Validar que o usuário do tipo Aluno não tem acesso ao Dashboard padrão do GP e Instrutor", () => {
    cy.fazerlogin(loginData.aluno.email, loginData.aluno.senha)
    cy.validarAcessoNivelUsuario()
  })

  it.only("Test 14 - validar que o usuário do tipo Colaborador não tem acesso ao Dashboard padrão do GP e Instrutor", () => {
    cy.fazerlogin(loginData.colaborador.email, loginData.colaborador.senha)
    cy.validarAcessoNivelUsuario()
  })
})
