/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogin } = selector.login
const {
  txtTituloDashboard,
  txtNomePrimeiroDaLista,
  txtTrilhaPrimeiroDaLista,
  txtEmailPrimeiroDaLista,
  btnDetalhesPrimeiroDaLista
} = selector.dashboard
const {
  txtTituloRelatorio,
  txtNomeRelatorio,
  txtTrilhaRelatorio,
  txtEmailRelatorio,
  btnAbaHardSkills,
  btnAbaSoftSkills
} = selector.relatorio

/* Rotinas */
Cypress.Commands.add("fazerLogin", (txtEmail, txtSenha) => {
  cy.get(email).type(txtEmail)
  cy.get(senha).type(txtSenha)
  cy.get(btnLogin).click()
  cy.get(txtTituloDashboard).contains("PDI - DASHBOARD")
})

Cypress.Commands.add("validarDadosPrimeiroDaLista", () => {
  let nomeDashboard = cy.get(txtNomePrimeiroDaLista)
  let trilhaDashboard = cy.get(txtTrilhaPrimeiroDaLista)
  let emailDashboard = cy.get(txtEmailPrimeiroDaLista)
  cy.get(btnDetalhesPrimeiroDaLista).click()
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(txtNomeRelatorio).contains(nomeDashboard)
  cy.get(txtTrilhaRelatorio).contains(trilhaDashboard)
  cy.get(txtEmailRelatorio).contains(emailDashboard)
})

Cypress.Commands.add("validarTrocarAba", () => {
  cy.get(txtTituloRelatorio).contains("COLABORADOR")
  cy.get(btnAbaHardSkills).contains("HARD SKILLS")
  //TODO: validar css se ele está selecionado com assert nessa linha
  cy.get(btnAbaSoftSkills).click()
  //TODO: validar css se ele está selecionado com assert nessa linha
})
