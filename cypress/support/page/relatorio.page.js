/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogin } = selector.login
const { campoFiltro, btnLupa, resultadoBusca, semResultadoBusca, btnDetalhes, abaHardSkills, btnPag2, bntArrow } =
  selector.dashboard
const {
  txtNomePrimeiroDaLista,
  txtTrilhaPrimeiroDaLista,
  txtEmailPrimeiroDaLista,
  txtTituloRelatorio,
  txtNomeRelatorio,
  txtTrilhaRelatorio,
  txtEmailRelatorio,
  btnAbaHardSkills,
  btnAbaSoftSkills,
  txtPrimeiroModuloHardSkills,
  txtPrimeiroModuloSoftSkills,
  txtPrimeiraTaskHardSkills,
  txtDescricaoPrimeiraTask,
  txtNotaPrimeiraTask,
  btnGerarRelatorio
} = selector.relatorio

/* Rotinas */

Cypress.Commands.add("validarDadosPrimeiroDaLista", () => {
  let nomeDashboard = cy.get(txtNomePrimeiroDaLista)
  let trilhaDashboard = cy.get(txtTrilhaPrimeiroDaLista)
  let emailDashboard = cy.get(txtEmailPrimeiroDaLista)
  cy.get(btnDetalhes).click()
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(txtNomeRelatorio).contains(nomeDashboard)
  cy.get(txtTrilhaRelatorio).contains(trilhaDashboard)
  cy.get(txtEmailRelatorio).contains(emailDashboard)
})

Cypress.Commands.add("validarTrocarAba", () => {
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(btnAbaHardSkills).contains("HARD SKILLS")
  cy.get(btnAbaHardSkills).should("have.attr", "aria-selected", "true")
  cy.get(btnAbaSoftSkills).click()
  cy.get(btnAbaSoftSkills).should("have.attr", "aria-selected", "true")
}) // deve fazer validação através dos tópicos

Cypress.Commands.add("validarPermanecerMesmaAba", () => {
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(btnAbaHardSkills).contains("HARD SKILLS")
  cy.get(btnAbaHardSkills).should("have.attr", "aria-selected", "true")
  cy.get(btnAbaHardSkills).click()
  cy.get(btnAbaHardSkills).should("have.attr", "aria-selected", "true")
})

Cypress.Commands.add("validarIndicadorAbaAtiva", () => {
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(btnAbaHardSkills).contains("HARD SKILLS")
  cy.get(btnAbaHardSkills).should("have.attr", "aria-selected", "true")
  cy.get(btnAbaSoftSkills).click()
  cy.get(btnAbaSoftSkills).should("have.attr", "aria-selected", "true")
})

Cypress.Commands.add("validarDropdown", () => {
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(btnAbaHardSkills).contains("HARD SKILLS")
  cy.get(txtPrimeiroModuloHardSkills).click()
  cy.get(txtPrimeiraTaskHardSkills).click()
  cy.get(txtDescricaoPrimeiraTask).contains("Aprendemos as tags semanticas e os conceitos básicos de HTML")
  cy.get(txtNotaPrimeiraTask).contains("40")
})

Cypress.Commands.add("selecionarBotaoGerarRelatorio", () => {
 
  cy.get(btnGerarRelatorio).click()
  //completar quando funcionalidade for implementada no front
})
