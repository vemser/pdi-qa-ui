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
  cy.wait(9000)
  let nomeDashboard = cy.get(txtNomePrimeiroDaLista)
  let trilhaDashboard = cy.get(txtTrilhaPrimeiroDaLista)
  cy.get(btnDetalhes).first().click()
  console.log(nomeDashboard)
  console.log(trilhaDashboard)
  cy.get(txtTituloRelatorio, {timeout:15000}).contains("COLABORADOR")
  cy.get(txtNomeRelatorio, {timeout:15000}).contains(nomeDashboard)
  cy.get(txtTrilhaRelatorio).contains(trilhaDashboard)
})

Cypress.Commands.add("navegarDetalhesPrimeiroDaLista", () => {
  cy.get(btnDetalhes).first().click()

})

Cypress.Commands.add("validarTrocarAba", () => {
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(btnAbaHardSkills).contains("Hard Skills")
  cy.get(btnAbaHardSkills).should("have.attr", "aria-selected", "true")
  cy.get(btnAbaSoftSkills).click()
  cy.get(btnAbaSoftSkills).should("have.attr", "aria-selected", "true")
}) // deve fazer validação através dos tópicos

Cypress.Commands.add("validarPermanecerMesmaAba", () => {
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(btnAbaHardSkills).contains("Hard Skills")
  cy.get(btnAbaHardSkills).should("have.attr", "aria-selected", "true")
  cy.get(btnAbaHardSkills).click()
  cy.get(btnAbaHardSkills).should("have.attr", "aria-selected", "true")
})

Cypress.Commands.add("validarIndicadorAbaAtiva", () => {
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(btnAbaHardSkills).contains("Hard Skills")
  cy.get(btnAbaHardSkills).should("have.attr", "aria-selected", "true")
  cy.get(btnAbaSoftSkills).click()
  cy.get(btnAbaSoftSkills).should("have.attr", "aria-selected", "true")
})

Cypress.Commands.add("validarDropdown", () => {
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(btnAbaHardSkills).contains("Hard Skills")
  cy.get(txtPrimeiroModuloHardSkills).click()
  cy.get(txtPrimeiraTaskHardSkills).click()
  cy.get(txtDescricaoPrimeiraTask).contains("Aprendemos as tags semanticas e os conceitos básicos de HTML")
  cy.get(txtNotaPrimeiraTask).contains("40")
})

Cypress.Commands.add("selecionarBotaoGerarRelatorio", () => {
  
  cy.get(btnGerarRelatorio).click()
  //completar quando funcionalidade for implementada no front
})
