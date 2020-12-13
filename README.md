<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma} - PetRide<p>
</h1>
<p align="center">
<img src="./images/petride_logo.png" width="50%" height="50%"/>
</p>
<p align="center">
  <a> 
    <img alt="Node version" src="https://img.shields.io/badge/node-%3E%3D%206.0.0-brightgreen">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Audry-prog/projeto-final-backend-reprograma">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Audry-prog/projeto-final-backend-reprograma">
    <img alt="Github License" src="https://img.shields.io/github/license/Audry-prog/projeto-final-backend-reprograma?logo=MIT">
    <a href="https://app-petride.herokuapp.com/"><img src="https://img.shields.io/badge/deploy-heroku.com-blueviolet" alt="Deploy on heroku"></a>
  </a>
</p>

### Proposta do Projeto PetRide:

O projeto PetRide é uma API REST que permite que tutores de pets ou ONGs possam se cadastrar e realizar buscas por motoristas que oferecem ajuda no transporte solidário de animais. 

A interface é um CRUD completo integrado com um banco de dados, onde é possível listar os motoristas cadastrados na base de dados; cadastrar novos motoristas; atualizar dados; visualizar horários, dias disponíveis, bairros onde o motorista se propõe a transportar, e se o motorista está ativo ou inativo no Banco de Dados.

**E Como funciona?**

O tutor ou a ONG deve fazer o login no sistema onde será gerado um TOKEN que viabilizará acessar as rotas do banco de dados. Caso o TOKEN não seja igual, o usuário receberá uma mensagem de erro por ausência da mesma, ou por não conferir com a que está rgistrada pelo sistema.
### Recursos e tecnologias utilizadas para a construção da API:

* **Node.Js** - versão 12.18.3;
* Gerenciador de pacotes Node.Js **npm** - versão 6.14.6;
* Dependências Node.Js:
   * **Express** - versão 4.17.1;
   * **Body-parser** - versão 1.19.0;
   * **Mongoose** - versão 5.10.17;
   * **Dotenv-safe** - versão 8.2.0;
   * **Jsonwebtoken** - versão 8.5.1;
   * **Bcrypt** - versão 5.0.0;
   * **Nodemon** - versão 2.0.6;
* **MongoDB**;
* **MongoDB Atlas**;
* **Git**;
* **Visual Studio Code**;
* **Postman**;
* **Heroku**;

### Como usar este projeto:

### Testando as rotas na sua máquina:

1. Abra o aplicativo [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=pt-BR);

2. Teste as rotas usando este endereço na URL do Postman: https://app-petride.herokuapp.com/ 

3. As rotas/endpoints só estarão disponiveis após o cadastro do tutor e registro de uma senha de acesso. Para isso deve-se usar a URL https://app-petride.herokuapp.com/tutores no Postman cadastrar o tutor, clicando em *body* e posteriormente em *raw*, para trocar a combobox *text* para *JSON* e apertar *Send*.

4. Após cadastro, o tutor deve fazer login através da URL https://app-petride.herokuapp.com/tutores/login e copiar o TOKEN gerado como *result* do Postman após o envio da requisição. Conforme imagem abaixo:

![Print Result Login Postman](./images/loginTutores.png)

5. O TOKEN é o que dará permissão para acessar os endpoints dos motoristas, para isso deve-se criar um *header* chamado **"Authorization"** e passar como valor **"Bearer + TOKEN copiado"**. Conforme imagem abaixo:

![Print Tela Postman "Bearer"](./images/bearer.png)
### Criar seu próprio Banco de Dados:

1. Clone o projeto através do comando:
`$git clone https://github.com/Audry-prog/projeto-final-backend-reprograma.git`

2. Inicialize o package.json com todas as configurações do projeto através do comando:
`$npm install`

3. Inicialize o servidor do projeto com o comando:
`$npm run dev`

4. Renomeie o arquivo `.env.exemple` para `.env` e crie as variáveis de ambiente.

5. Para criar a variável SECRET do arquivo `.env`, gere uma chave pública RSA atravé do site https://travistidwell.com/jsencrypt/demo/

### Estrututura de Arquivos da API:

```
├── src
│   ├── controllers
|   |  ├── motoristasController.js
|   |  ├── tutoresController.js
│   ├── models
|   |  ├── motoristas.js
|   |  ├── tutores.js
│   ├── routes 
│   |  ├── index.js
|   |  ├── index.js
│   |  ├── motoristasRoute.js
|   |  ├── tutoresRoute.js
|   ├── app.js
├── .env.example
├── package.json
├── server.js
```
### Manipulação das Rotas de Motoristas:

| Método HTTP | Endpoint                     | Descrição                                     |
| ----------- | ---------------------------- | --------------------------------------------- |
| POST        | `/motoristas`                | Cria um novo motorista                        |
| GET         | `/`                          | Retorna todos os motoristas por bairro        |
| GET         | `/motoristas/motoristas`     | Retorna todos os motoristas                   |
| GET         | `/motoristas/:id`            | Retorna um motorista específico por id        |
| GET         | `/motoristas/cidade`         | Retorna todos os motoristas por cidade        |
| GET         | `/motoristas/bairros`        | Retorna todos os motoristas ativos            |
| GET         | `/motoristas/ativos`         | Retorna todos os motoristas ativos            |
| GET         | `/motoristas/cidade/ativos`  | Retorna todos os motoristas ativos por cidade |
| GET         | `/motoristas/horarios`       | Retorna todos os motoristas por horário       |
| PUT         | `/motoristas/:id`            | Altera informações de um motorista            |
| DELET       | `/motoristas/:id`            | Remove um motorista específico                |

### Manipulação das Rotas de Tutores:

| Método HTTP | Endpoint                     | Descrição                                  |
| ----------- | ---------------------------- | ------------------------------------------ |
| POST        | `/tutores`                   | Cria um novo tutor no Banco de Dados       |
| POST        | `/tutores/login`             | Autoriza o acesso ao Banco de Dados        |
| GET         | `/tutores`                   | Retorna todos os tutores do Banco de Dados |
| DELET       | `/tutores/:id`               | Remove o cadastro de um tutor específico   |

### Alguns prints das requisições feitas no Postman:

| POST        | `/tutores`                   | Cria um novo tutor no Banco |

![Print Tela Create Tutor](./images/postTutores.png)

| GET         | `/motoristas/cidade`         | Retorna todos os motoristas por cidade        |

![Print Tela Motoristas By Cidade](./images/getMotoristaByCidade.png)

| GET         | `/motoristas/ativos`         | Retorna todos os motoristas ativos            |

![Print Tela Motoristas Ativos](./images/getMotoristasAtivos.png)

| GET         | `/motoristas/cidade/ativos`  | Retorna todos os motoristas ativos por cidade |

![Print Tela Motoristas Ativos por Cidade](./images/getMotoristasByCidadeByAtivos.png)

| GET         | `/motoristas/horarios`       | Retorna todos os motoristas por horário       |

![Print Tela Motoristas Ativos por Horário](./images/getMotoristasByHorario.png)

| POST        | `/motoristas`                | Cria um novo motorista                        |

![Print Tela Post Tutores](./images/postMotoristas.png)

### Futuras melhorias:

A ideia para a PetRide é que no futuro o tutor possa solicitar viagem ao motorista cadastrado e a API tenha suas rotas integradas com geolocalização, e possa fazer o pagamento da taxa solidária da viagem ao motorista.

Outra implementação que se pretende no futuro é desenvolver as interfaces Front-end de comunicação com o código.

Caso queira contribuir com meu projeto, será totalmente bem-vindo!!!

<p align="center">
<img src="./images/cats_and_dogs.jpeg" width="30%" height="30%" background="white"/>
</p>
<p align="center">
  <a> 