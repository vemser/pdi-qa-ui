/// <reference types="cypress" />

describe("Dashboard", { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test 01 - Validar filtro com nome de estagiário válido", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.validarFiltroEstagiarioValido()
  })

  it("Test 02 - Validar filtro com nome de estagiário que não existe no sistema", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.validarFiltroEstagiarioInvalido()
  })

  it("Test 03 - Validar botão de detalhes", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.validarBotaoDetalhes()
  }),
    it("Test 04 - Validar botão de Sair do módulo PDI", () => {
      cy.fazerLogout(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    })

  it("Test 05 - Validar se o estagiário tem status ativo", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.validarStatusEstagiarioAtivo()
  })


  it("Test 06 - Validar clicar no botão de paginação por número", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.validarBtnPaginacaoPorNumero()
  })

  it("Test 07 - Validar clicar no botão de paginação por seta", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.validarBtnPaginacaoSeta()
  })

  it("Test 08 - Validar clique no menu lateral acompanhamentos", () => {
    cy.fazerLoginComSucesso(Cypress.env(`INSTRUTOR_EMAIL`), Cypress.env(`INSTRUTOR_SENHA`))
    cy.validarMenuLateralAcompanhamentos()
  })

  it("Test 09 - Validar que o usuário do tipo Aluno tem acesso ao Dashboard padrão do GP e Instrutor", () => {
    cy.fazerLoginComSucesso(Cypress.env(`ALUNO_EMAIL`), Cypress.env(`ALUNO_SENHA`))
    cy.validarAcessoNivelUsuario()
  })

  it("Test 10 - Validar que o usuário do tipo Colaborador tem acesso ao Dashboard padrão do GP e Instrutor", () => {
    cy.fazerLoginComSucesso(Cypress.env(`COLABORADOR_EMAIL`), Cypress.env(`COLABORADOR_SENHA`))
    cy.validarAcessoNivelUsuario()
  })
})
