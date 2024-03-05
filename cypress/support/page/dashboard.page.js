/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogin } = selector.login
const {
  campoFiltro,
  btnLupa,
  resultadoBusca,
  semResultadoBusca,
  btnDetalhes,
  statusAtivo,
  abaHardSkills,
  btnPag2,
  btnAcompanhamentos,
  pgAcompanhamentos,
  bntArrow,
} = selector.dashboard
import { nomeInvalido } from "../../utils/DataGenerator"

/* Rotinas */

Cypress.Commands.add("validarFiltroEstagiarioValido", () => {
  cy.get(campoFiltro).type("Ana Rodrigues")
  cy.get(btnLupa).click()
  cy.wait(3000)
  cy.get(resultadoBusca).first().should("contain", "Ana Rodrigues")
})

Cypress.Commands.add("validarFiltroEstagiarioInvalido", () => {
  cy.get(campoFiltro).type(nomeInvalido)
  cy.get(btnLupa).click()
  cy.get(semResultadoBusca).contains("Nenhum registro encontrado")
})

Cypress.Commands.add("validarBotaoDetalhes", () => {
  cy.get(campoFiltro).type("Ana Rodrigues")
  cy.get(btnLupa).click()
  cy.wait(3000)
  cy.get(btnDetalhes).click()
  cy.get(abaHardSkills).should("contain", "Hard Skills")
})

Cypress.Commands.add("validarStatusEstagiarioAtivo", () => {
  cy.get(campoFiltro).type("Ana Rodrigues")
  cy.get(btnLupa).click()
  cy.get(statusAtivo).should("contain", "Ativo")
})

Cypress.Commands.add("validarBtnPaginacaoPorNumero", () => {
  cy.wait(3000)
  cy.get(resultadoBusca).invoke("text").then(Estagiario1 => {
    cy.get(btnPag2).click()
    cy.wait(3000)
    cy.get(resultadoBusca).invoke("text").then(Estagiario2 => {
      expect(Estagiario1).not.to.equal(Estagiario2)
    })
  })
})

Cypress.Commands.add("validarBtnPaginacaoSeta", () => {
  cy.wait(3000)
  cy.get(resultadoBusca).invoke("text").then(Estagiario1 => {
  cy.get(bntArrow).click()
  cy.wait(3000)
  cy.get(resultadoBusca).invoke("text").then(Estagiario2 => {
  expect(Estagiario1).not.to.equal(Estagiario2)
    })
  })
})

Cypress.Commands.add("validarMenuLateralAcompanhamentos", () => {
  cy.get(btnAcompanhamentos).click()
  cy.get(pgAcompanhamentos).should("contain", "ACOMPANHAMENTOS")
})

Cypress.Commands.add("validarAcessoNivelUsuario", () => {
  cy.get(pgAcompanhamentos).contains("PDI - DASHBOARD").should("exist")
})
