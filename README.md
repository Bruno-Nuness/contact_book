# contact_book

ROUTES BACK-END

---CLIENT----

POST-----------
/client

rota para criar clients

Request{
"email":"client@mail.com",
"full_name": "Client",
"password": "1234"
}

Response{
"id": 1,
"full_name": "Client",
"email": "client@mail.com",
"registration_date": "2023-07-31T02:11:56.407Z"
}

GET------------
/client/:id

rota para listar os dados do client OBS:Necessita de autenficação
Não necessita de corpo na requisição
Response{
"id": 2,
"full_name": "Bruno",
"phone_number": "1111",
"email": "bruno@mail.com",
"registration_date": "2023-08-01T03:29:28.393Z"
}

PACTH-------------
/client/:id

rota para atualizar dados do client OBS:Necessita de autenficação

Request{
"email":"bruno1@mail.com",
"full_name": "Bruno",
"phone_number":"1111"
}
Response{
"id": 1,
"full_name": "Bruno",
"email": "bruno1@mail.com",
"phone_number": "1111",
"registration_date": "2023-07-31T21:37:59.738Z"
}

DELETE-----------
/client/:id

rota para exluir o client OBS:Necessita de autenficação
Não necessita de corno na requisição
Response STATUS CODE 204

/login

rota para logar em sua conta
Request{
"email":"client@mail.com",
"password": "1234"
}
Response{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkNsaWVudCIsImlhdCI6MTY5MDc2OTYyOSwiZXhwIjoxNjkwNzczMjI5LCJzdWIiOiI2In0.xE1Hfx85HNGlsf1ZdpM_0rXxsUFIaj7O5d3uEyYMsCo"
}

---CONTACT---

\*\*Todas as rotas necessitam de autentificação de token, ou seja um usuário logado

POST----------
/contact

Cria contatos em sua agenda OBS:necessita autentificação

Request{
"full_name":"contact ",
"email" : "contact@mail.com",
"phone": 4255589
}
Response{
"id": 15,
"full_name": "contact ",
"email": "contact@mail.com",
"phone": 4255589,
"registration_date": "2023-07-31T02:16:01.021Z"
}

GET-----

/contact
lista todos os contatos cadastrados OBS:necessita autentificação
Request /** não necessita de corpo /**
Response[
{
"id": 15,
"full_name": "contact ",
"email": "contact@mail.com",
"phone": 4255589,
"registration_date": "2023-07-31T02:16:01.021Z"
}
]

PATCH --------

/contact/:id

Atualiza as informações do contato OBS:necessita autentificação
todos os campos são opcionais, com execessão do id e registration_date

Request{
"full_name":"nome atualizado",
"email" : "emailAtualizado@mail.com",
"phone": 4233335
}
Response{
"id": 15,
"full_name": "nome atualizado",
"email": "emailAtualizado@mail.com",
"phone": 4233335,
"registration_date": "2023-07-31T02:16:01.021Z"
}

DELETE-----

/contact/:id

Exclui o contato OBS: necessita de autentificação
NÃO NECESSITA DE CORPO
E a response é um status code 204

--------FRONT--------

Login "/"
Cadastro "/register"
Dashboard "/dash"
