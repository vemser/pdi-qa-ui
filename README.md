<a name="readme-top"></a>

# PDI - Grupo 06 - Automações UI

![Cypress](https://img.shields.io/badge/Cypress-Logo?style=flat-square&color=%2369D3A7)
![Allure-Report](https://img.shields.io/badge/Allure_Report-logo?style=flat-square&color=%23E5de00)
![Jenkins](https://img.shields.io/badge/Jenkins-Logo?style=flat-square&color=%23c61a09)
![Dotenv](https://img.shields.io/badge/Dotenv-logo?style=flat-square&color=%2365ADF1)
![Faker](https://img.shields.io/badge/Faker-logo?style=flat-square&color=%2341454A)
![Javascript](https://img.shields.io/badge/javascript-logo?style=flat-square&color=%23F7DF1E)


No seguinte repositório, você encontrará a implementação de testes de interface de usuário do projeto PDI. Este projeto visa centralizar informações e histórico de evolução para serem compartilhados com os clientes da DBC, proporcionando assim um modelo mais preciso e descritivo do estagiário e sua trajetória de evolução. 
## Como rodar o projeto

1 - Clone o repositorio

```ssh
git clone https://github.com/vemser/pdi-qa-ui.git
```
2 - Entre na pasta criada

```ssh
cd pdi-qa-ui
```
3 - Copie o arquivo .env.example para .env
```ssh
copy .env.example .env
```

Por motivos de segurança de dados sensiveis, os dados de registro devem ser passado manualmente.  
4 - Instale depedências npm

```ssh
npm i
```
5 - Instale o cypress na versão do projeto

```ssh
npm install cypress@12.14.0 --save-dev
```

6 - Rode o comando para os testes

```ssh
npm run test:allure
```

## Links de documentação

- [Documentação do Projeto](https://docs.google.com/document/d/1JbD9QE9wydjz9Um56CRPOwvF_eynXlK5pjudNpPTfe0/edit?usp=sharing)
- [Plano de Testes](https://docs.google.com/document/d/1Egbc41QN5k-EP1opllAnJ8QMLGkxEileNWfX0vs50-o/edit?usp=sharing)
- [Cenario de Testes](https://docs.google.com/document/d/1DUtSViUbR1GF9dwR3aufcfRg7i1MkpqXnzVUOy5yHrQ/edit?usp=sharing)
- [Estórias de usuários](https://docs.google.com/document/d/1VYv1Bo8UmuYAN4OSunE8Pl5dQIh4Ih-E1crcTPsBw48/edit?usp=sharing)

## Integrantes

<table>
    <tr>
      <td align="center">
        <a href="https://github.com/bscarpari">
          <img src="https://avatars.githubusercontent.com/u/53575457?v=4" width="100px;" /><br>
          <sub>
            <b>Bruno Scarpari</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/AlessandraMariana">
          <img src="https://avatars.githubusercontent.com/u/86929017?v=4" width="100px;" /><br>
          <sub>
            <b>Alessandra Mariana</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/PedroBersch">
          <img src="https://avatars.githubusercontent.com/u/113629864?v=4" width="100px;" /><br>
          <sub>
            <b>Pedro Bersch</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Helcius">
          <img src="https://avatars.githubusercontent.com/u/114032954?v=4" width="100px;" /><br>
          <sub>
            <b>Helcius Cabral</b>
          </sub>
        </a>
      </td>
    </tr>
</table>

## Cobertura de testes

- Login de usuário
- Configurações de usuário
- Painel do Usuario
- Pagina de detalhes de estagiario
- Relatorio
- Agendamento

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>
