/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogin, textTelaLogin } = selector.login
const { campoFiltro, btnLupa, resultadoBusca, semResultadoBusca, btnDetalhes, abaHardSkills, btnPag2, bntArrow } =
  selector.dashboard
import { nomeInvalido } from "../../utils/DataGenerator"

/* Rotinas */

Cypress.Commands.add("fazerlogin", (emailLogin, senhaLogin) => {
  cy.get(textTelaLogin).contains("Login")
  cy.get(email).type(emailLogin)
  cy.get(senha).type(senhaLogin)
  cy.get(btnLogin).click()
})

Cypress.Commands.add("validarFiltroEstagiarioValido", () => {
  cy.get(campoFiltro).type("Ana Rodrigues")
  cy.get(btnLupa).click()
  cy.get(resultadoBusca).should("contain", "Ana Rodrigues")
})

Cypress.Commands.add("validarFiltroEstagiarioInvalido", () => {
  cy.get(campoFiltro).type(nomeInvalido)
  cy.get(btnLupa).click()
  cy.get(semResultadoBusca).should("contain", "Nenhum registro encontrado")
})

Cypress.Commands.add("validarBotaoDetalhes", () => {
  cy.get(campoFiltro).type("Ana Rodrigues")
  cy.get(btnLupa).click()
  cy.get(btnDetalhes).click()
  cy.get(abaHardSkills).should("contain", "Hard Skills")
})

Cypress.Commands.add("validarStatusEstagiarioAtivo", () => {
  cy.get(campoFiltro).type("Ana Rodrigues")
  cy.get(btnLupa).click()
  cy.get(statusAtivo).should("contain", "Ativo")
})

Cypress.Commands.add("validarStatusEstagiarioInativo", () => {
  cy.get(campoFiltro).type("Ana Rodrigues Inativa")
  cy.get(btnLupa).click()
  cy.get(statusAtivo).should("contain", "Inativo")
})

Cypress.Commands.add("validarBtnPaginacaoPorNumero", () => {
  cy.get(resultadoBusca).invoke("text").as("Estagiario1")
  cy.get(btnPag2).click()
  cy.get(resultadoBusca).invoke("text").as("Estagiario2")
  expect(Estagiario1).not.to.equal(Estagiario2)
})

Cypress.Commands.add("validarBtnPaginacaoSeta", () => {
  cy.get(resultadoBusca).invoke("text").as("Estagiario1")
  cy.get(bntArrow).click()
  cy.get(resultadoBusca).invoke("text").as("Estagiario2")
  expect(Estagiario1).not.to.equal(Estagiario2)
})

Cypress.Commands.add("validarMenuLateralAcompanhamentos", () => {
  cy.get(btnAcompanhamentos).click()
  cy.get(pgAcompanhamentos).should("contain", "ACOMPANHAMENTOS")
})

Cypress.Commands.add("validarAcessoNivelUsuario", () => {
  cy.contains("ACOMPANHAMENTOS").should("not.exist")
  cy.contains("PDI - DASHBOARD").should("not.exist")
})