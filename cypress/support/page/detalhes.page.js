/* Atributos */
const { selector } = require("./elements/selector")
const { email, senha, btnLogin, textTelaLogin } = selector.login
const { campoFiltro, btnLupa, resultadoBusca, semResultadoBusca} = selector.dashboard
const { btnDetalhes,textModalColaborador, abahardSkills, trilhaEstagiario, trilhaPgPrincipal, moduloFrontEnd, moduloCss, moduloJavaScript, moduloReact, moduloContextApi, softSkillColaboracao, softSkillProatividade, softSkillTrabalhoEmEquipe, softSkillResilienciaeInteligenciaEmocional, softSkillComprometimento, softSkillGestaoTempoeOrganizacao, softSkillFeedbackComportamentalTimeGp, abaSoftSkills} = selector.detalhes

import { nomeInvalido } from "../../utils/DataGenerator"

/* Rotinas */

Cypress.Commands.add("fazerlogin", (emailLogin, senhaLogin) => {
    cy.get(textTelaLogin).contains("Login")
    cy.get(email).type(emailLogin)
    cy.get(senha).type(senhaLogin)
    cy.get(btnLogin).click()
})

Cypress.Commands.add("FiltroBemSucedido", () => {
    cy.get(campoFiltro).type("Deyvid Lucas")
    cy.get(btnLupa).click()
    cy.get(resultadoBusca).should("contain", "Deyvid Lucas")
})

Cypress.Commands.add("validarHistoricoEstagiario", () => {
    cy.get(btnDetalhes).click()
    cy.get(textModalColaborador).should("contain", "COLABORADOR")
    cy.get(abahardSkills).should("contain", "HARD SKILLS")
    cy.get(abaSoftSkills).should("contain", "SOFT SKILLS")
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
    cy.get(moduloFrontEnd).should("contain", "HTML")
    cy.get(moduloCss).should("contain", "CSS")
    cy.get(moduloJavaScript).should("contain", "JavaScript")
    cy.get(moduloReact).should("contain", "React")
    cy.get(moduloContextApi).should("contain", "Context API")
})

Cypress.Commands.add("validarSoftSkills", () => {
    cy.get(abaSoftSkills).click()
    cy.get(softSkillColaboracao).should("contain", "Colaboração")
    cy.get(softSkillProatividade).should("contain", "Proatividade")
    cy.get(softSkillTrabalhoEmEquipe).should("contain", "Trabalho em equipe")
    cy.get(softSkillResilienciaeInteligenciaEmocional).should("contain", "Resiliencia e Inteligência Emocional")
    cy.get(softSkillComprometimento).should("contain", "Comprometimento")
    cy.get(softSkillGestaoTempoeOrganizacao).should("contain", "Gestão do Tempo e Organização")
    cy.get(softSkillFeedbackComportamentalTimeGp).should("contain", "Feedback Comportamental Time GP")
})



Cypress.Commands.add("validarFiltroEstagiarioInvalido", () => {
    cy.get(campoFiltro).type(nomeInvalido)
    cy.get(btnLupa).click()
    cy.get(semResultadoBusca).should("contain", "Nenhum registro encontrado")
})