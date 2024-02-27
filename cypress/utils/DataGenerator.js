import { pt_BR, Faker } from "@faker-js/faker"
export const faker = new Faker({
  locale: [pt_BR]
})

const senha = faker.internet.password()

export const cadastroValidoFaker = {
  senha: senha
}
