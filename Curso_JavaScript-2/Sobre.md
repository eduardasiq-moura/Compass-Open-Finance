o que é Node Js

- Front End: toda a estilização, parte visual 
- Backend:parte física do site, onde são atribuidos as funções
  - rotas
- NodeJS não é uma lingaguem (plataforma)

O que é NPM/YARN?
- instalar bibliotecas de terceiros
- criar proprias bibliotecas

Caracteristicas do Node Js
- Arquitetura Event - Loop
  - Call Stack (pilha de eventos)
- Single-Thread (unica thread)
- Non-Blocking I/O ()

## **O que é API REST**

Tem um fluxo de requesição e resposta
Front end -> recebe os dados e processa
Respostas -> através de uma estrutura de dados

ROTAS: divididas em http + rota + parametro

get https://minhaapi.com/usuarios -> buscando todos os usuários
post https://minhaapi.com/usuarios -> criando um novo usuario
put https://minhaapi.com/usuarios/1 -> buscando o usuario 1 e editando as informações dele
delete https://minhaapi.com/usuarios/1 -> deletando o usuario 1

**Vantagens**
Vários clientes(front end)
Comunicação padronizada (web, mobile, desktop)
***

**JWT - Json Web Token**

Conhecido como -> web talking
Ele vai ajudar na parte de segurança de trafegar as informações para garantir que o usuário está autenticado numa aplicação é realmente aquela pessoa

- Autenticando com o JWT