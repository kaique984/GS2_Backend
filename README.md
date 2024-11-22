# GS2_Backend
Instruções para usar o Backend
Instale as dependências do projeto:

Navegue até o diretório raiz do backend.
Execute o comando abaixo para instalar as dependências listadas no package.json:
npm install

Inicie o servidor:
Execute o comando
npm start

O servidor será iniciado na porta especificada (por padrão, http://localhost:3000).
Testando as APIs:

Use ferramentas como Postman ou cURL para testar as APIs. Aqui estão os principais endpoints disponíveis:
Registro de usuário:
POST /auth/register
Envie um corpo JSON no formato: json
{
  "username": "exampleUser",
  "password": "examplePassword"
}
