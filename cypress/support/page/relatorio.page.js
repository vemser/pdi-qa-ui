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
  btnAbaSoftSkills,
  txtPrimeiroModuloHardSkills,
  txtPrimeiroModuloSoftSkills,
  txtPrimeiraTaskHardSkills,
  txtDescricaoPrimeiraTask,
  txtNotaPrimeiraTask
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

Cypress.Commands.add("navegarEtcEtc", () => {
  cy.get(btnDetalhesPrimeiroDaLista).click()
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
