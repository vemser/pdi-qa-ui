/// <reference types="cypress" />
import loginData from "../../fixtures/login.json"

describe("Dashboard", {viewportHeight: 1080, viewportWidth: 1920}, () => {
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

  it("Test 03 - Validar botão de detalhes", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarBotaoDetalhes()
  })

  it("Test 04 - Validar botão de Sair do módulo PDI", () => {
    cy.fazerLogoutResponsivo(loginData.instrutor.email, loginData.instrutor.senha)
  })

  it("Test 05 - Validar se o estagiário tem status ativo", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarStatusEstagiarioAtivo()
  })

  it("Test 06 - Validar se o estagiário tem status inativo", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarStatusEstagiarioInativo()
  })

  it("Test 07 - Validar clicar no botão de paginação por número", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarBtnPaginacaoPorNumero()
  })

  it("Test 08 - Validar clicar no botão de paginação por número", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarBtnPaginacaoSeta()
  })

  it("Test 09 - Validar clique no menu lateral acompanhamentos", () => {
    cy.fazerlogin(loginData.instrutor.email, loginData.instrutor.senha)
    cy.validarMenuLateralAcompanhamentos()
  })

  it("Test 10 - Validar que o usuário do tipo Aluno não tem acesso ao Dashboard padrão do GP e Instrutor", () => {
    cy.fazerlogin(loginData.aluno.email, loginData.aluno.senha)
    cy.validarAcessoNivelUsuario()
  })

  it("Test 11 - validar que o usuário do tipo Colaborador não tem acesso ao Dashboard padrão do GP e Instrutor", () => {
    cy.fazerlogin(loginData.colaborador.email, loginData.colaborador.senha)
    cy.validarAcessoNivelUsuario()
  })
})
