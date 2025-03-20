# **Introdução ao Nodejs**

  *Node.js* é um ambiente de execução JavaScript de código aberto e multiplataforma, amplamente utilizado para diversos tipos de projetos.
  -  Ele executa o motor V8 do Google Chrome fora do navegador, o que contribui para seu alto desempenho.

### **Aplicação do Nodejs**
- Opera em um único processo, sem criar novas threads para cada requisição.
-  Ela utiliza primitivas de I/O assíncronas que evitam o bloqueio do código JavaScript. 
-  Geralmente, as bibliotecas no Node.js são escritas usando paradigmas não bloqueantes, tornando o comportamento de bloqueio uma exceção.
- Ao realizar operações de I/O, como leitura de rede, acesso a banco de dados ou ao sistema de arquivos, o Node.js não bloqueia a thread principal aguardando a resposta. 
- Em vez disso, ele retoma as operações quando a resposta é recebida. 
- Isso permite que o Node.js gerencie milhares de conexões concorrentes com um único servidor, sem a complexidade de gerenciar múltiplas threads, o que poderia ser uma fonte significativa de bugs.

### **Vantagens dessa Aplicação**
- Milhões de desenvolvedores frontend que escrevem JavaScript para o navegador agora podem escrever código do lado do servidor sem a necessidade de aprender uma linguagem completamente diferente. 
- Novos padrões ECMAScript podem ser usados sem problemas, já que não é necessário esperar que todos os usuários atualizem seus navegadores. 
- O desenvolvedor tem o controle de decidir qual versão do ECMAScript utilizar, alterando a versão do Node.js, e também pode habilitar recursos experimentais específicos executando o Node.js com flags apropriadas.

### *Exemplo de Aplicação*
````markdown
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

````
--

## **Diferenças entre Node.js e o Navegador**

- Os dois usam o JavaScript como linguagem de programação.

- Criar aplicativos executados no navegador é *diferente* de criar um aplicativo Node.js.

- Aplicativos Node.js traz a vantagem de *programar o front-end e o back-end* em uma única linguagem

| Recurso                       | Node.js                                    | Navegador                                  |
|-------------------------------|--------------------------------------------|--------------------------------------------|
| Ambiente                      | Controlado, versão específica do Node.js   | Varia entre navegadores e versões         |
| Módulos                       | Suporta CommonJS e ES modules              | Suporta módulos ES (crescendo)            |
| APIs                          | APIs internas como sistema de arquivos     | APIs limitadas ao Web Platform (DOM)      |
| Suporte a JavaScript          | Suporte a ES2015+                          | Limitado pela versão do navegador         |
| Ecossistema                   | Focado em ferramentas de backend          | Focado em interações de frontend          |

---

## **The V8 JavaScript Engine**

V8 é o nome do mecanismo que alimenta o Google Chrome.
  - Pega o JS e executa enquanto navega com o Chrome.
  - Analisa e executa o JS.
- Esse recurso permitiu o surgimento do *Node.js*
- O ecossistema Node.js é enorme e graças ao V8.

### **Outros mecanismos JS**
1. *Firefox* -> SpiderMonkey
2. *Safari* -> JavaScriptCore (Nitro)
3. O *Edge* foi originalmente baseado no Chakra, mas mais recentemente foi reconstruído usando o Chromium e o motor V8.

- V8 é escrito em C++
- O JS é considerado uma linguagem interpretada  mas os mecanismos JavaScript modernos não apenas interpretam o JavaScript, eles o *compilam*.
- O JavaScript é compilado internamente pelo V8 com compilação just-in-time (JIT) para acelerar a execução.
---

## **Introdução ao pacote npm**

- `npm` é o gerenciador de pacotes padrão do Node.js.

- `npm`instala, atualiza e gerencia download

### **Instalando todas as dependências**

- Se um projeto tiver um arquivo, executando package.json.

````
1 npm install

2 nmp install <packege-name>

````
1. Instala tudo o que o projeto precisa, criando *node_modules*, se não existir
2. Instala um pacote específico. No npm 5 o comando adiciona as dependências do arquivo.

| Sinalizador        | Descrição                                                                 |
|--------------------|---------------------------------------------------------------------------|
| `--save-dev`       | Instala e adiciona a entrada ao arquivo `devDependencies` no `package.json` |
| `--no-save`        | Instala, mas não adiciona a entrada às dependências do arquivo `package.json` |
| `--save-optional`  | Instala e adiciona a entrada ao arquivo `optionalDependencies` no `package.json` |
| `--no-optional`    | Impede que dependências opcionais sejam instaladas                        |

**Diferenças:**
  - devDependencies: ferramentas de desenvolvimento, como uma biblioteca teste
  - dependencies: empacotado com o aplicativo em produção
  - optionalDependencies: a falha de compilação da dependência não fará com que a instalação falhe. Mas é responsabilidade do seu programa lidar com a falta de dependência

### **Atualização dos Pacotes**

````
1 npm update

2 npm update <packege-name>

3 npm install <packege-name>@<version>

4 npm run <task-name>
````
1. `npm` vai verificar todos os pacotes em busca de uma versão mais recente
2. especificando um único pacote para atualizar
3. para o controle de versão
4. o package.json suporta um formato para especificar tarefas de linha de comando 

**Exemplo da execução de tarefas**

````
{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
  }
}

````
No lugar de executar essas grandes linhas de códigos, da para simplificar com o `npm` e apenas usar

````
$ npm run watch
$ npm run dev
$ npm run prod
````