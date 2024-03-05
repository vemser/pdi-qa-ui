/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogin, textTelaLogin } = selector.login
const { campoFiltro, btnLupa, resultadoBusca, semResultadoBusca } = selector.dashboard
const {
  btnDetalhes,
  textModalColaborador,
  abaHardSkills,
  trilhaEstagiario,
  trilhaPgPrincipal,
  moduloFrontEnd,
  moduloCss,
  moduloJavaScript,
  moduloReact,
  moduloContextApi,
  softSkillColaboracao,
  softSkillProatividade,
  softSkillTrabalhoEmEquipe,
  softSkillResilienciaeInteligenciaEmocional,
  softSkillComprometimento,
  softSkillGestaoTempoeOrganizacao,
  softSkillFeedbackComportamentalTimeGp,
  abaSoftSkills
} = selector.detalhes

import { nomeInvalido } from "../../utils/DataGenerator"

/* Rotinas */

Cypress.Commands.add("fazerlogin", (emailLogin, senhaLogin) => {
  cy.get(textTelaLogin).contains("Login")
  cy.get(email).type(emailLogin)
  cy.get(senha).type(senhaLogin)
  cy.get(btnLogin).click()
})

Cypress.Commands.add("FiltroBemSucedido", () => {
  cy.get(campoFiltro, { timeout: 10000 }).type("Deyvid Lucas")
  cy.get(btnLupa).click()
  cy.get(resultadoBusca).should("contain", "Deyvid Lucas")
})

Cypress.Commands.add("validarHistoricoEstagiario", () => {
  cy.wait(5000)
  cy.get(btnDetalhes).click()
  cy.get(textModalColaborador).should("contain", "COLABORADOR")
  cy.get(abaHardSkills).contains("Hard Skills")
  cy.get(abaSoftSkills).contains("Soft Skills")
})

Cypress.Commands.add("validarTrilha", () => {
  cy.get(trilhaPgPrincipal).invoke("text").as("trilha1")
  cy.get(btnDetalhes).click()
  cy.get(textModalColaborador).should("contain", "COLABORADOR")
  cy.get(abahardSkills).should("contain", "HARD SKILLS")
  cy.get(trilhaEstagiario).should("contain", "Front-end")
  cy.get(trilhaEstagiario).invoke("text").as("trilha2")
  expect(this.trilha1).to.equal(this.trilha2)
})

Cypress.Commands.add("validarModulos", () => {
  cy.get(moduloFrontEnd, { timeout: 10000 }).first().should("contain", "HTML")
})

Cypress.Commands.add("validarSoftSkills", () => {
  cy.get(abaSoftSkills).click()
  cy.get(softSkillColaboracao).first().should("contain", "Colaboração")
})

Cypress.Commands.add("validarFiltroEstagiarioInvalido", () => {
  cy.get(campoFiltro).type(nomeInvalido)
  cy.get(btnLupa).click()
  cy.get(semResultadoBusca).should("contain", "Nenhum registro encontrado")
})
