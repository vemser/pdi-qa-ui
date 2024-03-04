import { Faker, pt_BR } from "@faker-js/faker"
export const faker = new Faker({
  locale: [pt_BR]
})

export const senhaDinamica = faker.internet.password(8)

export const emailInvalido = faker.internet.email()

export const nomeInvalido = faker.person.fullName()

export const ListaEmailsInvalidos = [
  "userexample.com",
  "userexample@dominio@dominio.com",
  "user@.com",
  "@domain.com",
  "user$example@domain.com"
]

export const ListaSenhasInvalidas = [
  "senha1!",
  "senhamu1tolonga!(passandolimitedecaracteres)",
  "faltandoletramaiscula1!",
  "FALTANDOLETRAMINUSCULA2!",
  "senhasemnumeros#",
  "Senhasemcaracteresespeciais1",
  "senha com espacos"
]
