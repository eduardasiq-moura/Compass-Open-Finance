# Sistema da Informação

- O que é: proteção de informações e sistemas contra o acesso, uso, divulgação, interropção, modificação ou destuição não altorizada
---
- Os pilares de Segurança da Informação
  - Confidencialidade
  - Integridade
  - Disponibilidade
---
- O que mais significa os pilares?
  - Confidencialidade:
    - Objetivo:controlar acesso por multiplos fatores autenticação e criptografias
  **É assim o dia a dia em autenticação"**
        - especificar requisitos minimos para uma senha segura
        - autenticar multifator
        - verificação de senha fraca 
        - identificador e gerenciador de sessoes
  - Integridade:
    - Obejetivo: implementação de controles para impedir a alteração nao autoizada devem ser pensados e implementados.
    **Original e confiável é a regra aqui!**
      - validação de dados, omo hashes
      - verificação de duplicidade
      - tratamento de dados de entrega, como caracteres especiais e comandos
  - Disponibilidade:
    - Objetivo: dados estejam disponiveis para o que for necessario, quando precisamos.
      - recursos de redundancia, como beckup de dados e balanceamento de carga
      - infraestrutura em nuvem
      - gestão de vulnerabilidade
---
- A SI é responsabilidade de todos
  - PSI: politica de segurança da informação
  - Politica de classificação da informação
---
## Módulo 1 - CLassidicação da Informação

- Por que classificar? para aplicar a devida proteção das informações e reduzir probabilidade de ocorrer incidentes
---
### Níveis de Classificação

- Confidencial
  - informações altamente cigilosas e que nao devem ser divulgadas para evitar danos a empresa, clientes, funcionarios, ect..
  - requer medidas de controle e proteção rigorosas contra acessos, copias, reprodução, ect..
  - tem varias restições de uso e o só o destinatario consegue consultar o documento
  - **ATENÇÃO**: sob essa classificação, um possivel vazamento de dados causaria grandes danos a empresa
- Restita
  - informações exclusivas de alguem ou determinada áreas.
  - nem todos tem acesso a elas
  - sao disponibilizados apenas aos destinatarios 
  - Exemplo: email de feedback, divulgação de matas e resultados
  - **ATENÇÃO** causa impacto nao só a empresa mas aos profissionais, parceiros ou clientes
- Interna
  - informações que compretem aos profissionais, estagiarios, ect, tem que evitar divulgaçaão ao publco externo
  - Exemplo:comunicados, policas e normar corporativas, emials internos, ect
- Pública
  - informações que podem ser divulgadas sem restricação ao publico geral
---
## Módulo 2 - Engenharia Social

- O que é? Habilidade de conseguir acessoa a informações ou áreas importantes de algo atráves da persuasão.
- Por que funciona? O ser humano confia e coorpera por natureza, qualquer pessoa pode ser induzida a compartilhar informações.
---
### Tecnicas de abordagem
- Balting: isca fisica ou digital como pendrive ou download (malware)
- Phishing:criação de conteudo enganoso muito proximo de algo legitimo e confiavel, afim de obter credenciais ou instalar malquere, ex: email, sms ou ligação
- dumpster Diving: o nao cuidado com descarte de informações , podem encontrar atpe relatorios inteiros
---
## Módulo 3 - Boas Práticas e Diretrizes

- Compartilhamento de acesso
- Armazenamento
- Softwares e Malwares
- Senha segura: nao use senhas obvias
- Uso da internet: siga as normas de seguranla e privacidade, evite tratar assuntos sensiveis e compartilhar arquvos por email corporativo
---
## Módulo 4 - Segurança em IA Generativa

- O que é: concentra na criação de novos contudos, dados ou informações.

- Ambiente e utilização
  - utilize ferramento homologadas e licenças comerciais em ambiente corporativo.
  - proibido o uso dessas para: uso pessoal, atividades ilegais, fraudulentas, ect...

- Como proteger os dados e informações
  - remova dados pessoas, senhas ou tokens das consultas ao enviar
  - quando possivel use mascaramento de dados
  - troque qualquer dado real nas consultas

- Controle minimos de segurança
  - controles tecnologicos
  - gestçao de acessos
  - monitoramento
  - docmentação e revisao dos processoes
  - capacitação das pessoas
  - 
