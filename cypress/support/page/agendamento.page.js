/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogin, textDashboard } = selector.login
const {
  txtTituloDashboard,
  txtNomePrimeiroDaLista,
  txtTrilhaPrimeiroDaLista,
  txtEmailPrimeiroDaLista,
  btnDetalhesPrimeiroDaLista,
  btnAcompanhamentos
} = selector.dashboard
const {
  seletorDataInicio,
  seletorDataFim,
  seletorFiltroEdicao,
  btnFiltrar,
  seletorFiltroEdicaoPrimeiraOpcao,
  txtTituloPrimeiroElemento,
  txtDataInicioPrimeiroElemento,
  txtDataFimPrimeiroElemento,
  txtStatusPrimeiroElemento,
  btnDetalhes,
  modalDetalhes,
  txtDetalhesTitulo,
  txtDetalhesData,
  txtDetalhesStatus,
  txtMensagemRegistroVazio
} = selector.agendamento

/* Rotinas */

Cypress.Commands.add("validaDataInicioDataFim", (dataInicio, dataFim) => {
  cy.get(seletorDataInicio).type(dataInicio)
  cy.get(seletorDataFim).type(dataFim)
  cy.get(seletorFiltroEdicao).click()
  cy.get(seletorFiltroEdicaoPrimeiraOpcao).first().click()
  cy.get(btnFiltrar).click()
  cy.get(txtDataInicioPrimeiroElemento, { timeout: 120000 }).contains(dataInicio)
  cy.get(txtDataFimPrimeiroElemento).contains(dataFim)
})

Cypress.Commands.add("acessarPaginaAcompanhamento", () => {
  cy.get(btnAcompanhamentos).click()
})

Cypress.Commands.add("validaMensagemRegistrosVazios", () => {
  cy.get(txtMensagemRegistroVazio).contains("Nenhum registro encontrado")
})

Cypress.Commands.add("validarDetalhesAgendamento", () => {
  cy.get(btnDetalhes).first().click()
  cy.get(modalDetalhes).should("exist")
})
