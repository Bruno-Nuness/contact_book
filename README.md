Documentação de Instalação e Utilização

Requisitos:

Node.js e npm devem estar instalados no sistema.
Clonagem do repositório:
Clone este repositório para o seu sistema.

Instalação de Dependências:
Abra um terminal ou prompt de comando no diretório raiz do projeto e execute o seguinte comando para instalar as dependências necessárias:

Dados do .env
DATABASE_URL="postgres://user:password@host:port/db"
SECRET_KEY=

npm install
Scripts npm disponíveis:
dev: Inicia o servidor de desenvolvimento usando o ts-node-dev com recarregamento automático ativado.
Para executar o servidor de desenvolvimento, utilize o seguinte comando:



npm run dev
O servidor estará em execução em http://localhost:3000.

Observação: Certifique-se de configurar as variáveis de ambiente necessárias para o correto funcionamento do projeto. Consulte o arquivo .env para verificar as variáveis de ambiente requeridas.

Dependências:

O projeto depende dos seguintes pacotes npm:



@types/bcryptjs: ^2.4.2
@types/cors: ^2.8.13
@types/express: ^4.17.17
@types/jsonwebtoken: ^9.0.2
bcrypt: ^5.1.0
bcryptjs: ^2.4.3
cors: ^2.8.5
dotenv: ^16.3.1
express: ^4.18.2
express-async-error: ^0.0.2
express-async-errors: ^3.1.1
jsonwebtoken: ^9.0.1
pg: ^8.11.1
pg-format: ^1.0.4
reflect-metadata: ^0.1.13
typeorm: ^0.3.17
zod: ^3.21.4
Dependências de Desenvolvimento:

O projeto utiliza a seguinte dependência de desenvolvimento:

ts-node-dev: ^2.0.0

Rotas do Back-End:

---CLIENT----

POST /client

Rota para criar clientes.

Request


{
  "email": "client@mail.com",
  "full_name": "Client",
  "password": "1234"
}
Response


{
  "id": 1,
  "full_name": "Client",
  "email": "client@mail.com",
  "registration_date": "2023-07-31T02:11:56.407Z"
}

GET /client
Rota para listar todos os clientes


GET /client/:id

Rota para listar os dados do cliente.

Requer autenticação.

Response



{
  "id": 2,
  "full_name": "Bruno",
  "phone_number": "1111",
  "email": "bruno@mail.com",
  "registration_date": "2023-08-01T03:29:28.393Z"
}
PATCH /client/:id

Rota para atualizar dados do cliente.

Requer autenticação.

Request



{
  "email": "bruno1@mail.com",
  "full_name": "Bruno",
  "phone_number": "1111"
}
Response



{
  "id": 1,
  "full_name": "Bruno",
  "email": "bruno1@mail.com",
  "phone_number": "1111",
  "registration_date": "2023-07-31T21:37:59.738Z"
}
DELETE /client/:id

Rota para excluir o cliente.

Requer autenticação.

Response STATUS CODE 204

/login

Rota para fazer login em sua conta.

Request



{
  "email": "client@mail.com",
  "password": "1234"
}
Response

json

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkNsaWVudCIsImlhdCI6MTY5MDc2OTYyOSwiZXhwIjoxNjkwNzczMjI5LCJzdWIiOiI2In0.xE1Hfx85HNGlsf1ZdpM_0rXxsUFIaj7O5d3uEyYMsCo"
}
---CONTACT---

Todas as rotas necessitam de autentificação de token, ou seja, um usuário logado.

POST /contact

Cria contatos em sua agenda.

Requer autentificação.

Request



{
  "full_name": "contact",
  "email": "contact@mail.com",
  "phone": 4255589
}
Response



{
  "id": 15,
  "full_name": "contact",
  "email": "contact@mail.com",
  "phone": 4255589,
  "registration_date": "2023-07-31T02:16:01.021Z"
}
GET /contact

Lista todos os contatos cadastrados.

Requer autentificação.

Request: não necessita de corpo.

Response



[  {    "id": 15,    "full_name": "contact",    "email": "contact@mail.com",    "phone": 4255589,    "registration_date": "2023-07-31T02:16:01.021Z"  }]
PATCH /contact/:id

Atualiza as informações do contato.

Requer autentificação.

Todos os campos são opcionais, com exceção do id e registration_date.

Request



{
  "full_name": "nome atualizado",
  "email": "emailAtualizado@mail.com",
  "phone": 4233335
}
Response



{
  "id": 15,
  "full_name": "nome atualizado",
  "email": "emailAtualizado@mail.com",
  "phone": 4233335,
  "registration_date": "2023-07-31T02:16:01.021Z"
}
DELETE /contact/:id

Exclui o contato.

Requer autentificação.

Não necessita de corpo e a response é um status code 204.
