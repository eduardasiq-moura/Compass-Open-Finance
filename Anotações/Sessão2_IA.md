# **IA Generativa e Large Language Models**

## *Introdução ao Curso e Seus Objetivos*

- Objetivo: desmitificar estes termos e mostrar, de forma prática, como usar diversas
ferramentas de IA Generativa.

- IA Generativa é o campo de estudo que está promovendo a maior e a mais rápida revolução
na história da humanidade.
---
## *Fundamentos da Inteligência Artificial Generativa e de LLMs*

### **O que é inteligência?**

- Inteligência é o ponto de partida para a Inteligência Artificial
- Definições de Inteligência
	- Capacidade de Pensar Abstratamente
	- Habilidade de Resolução de Problemas
	- Aprendizagem e Adaptação
- Tipos de Inteligência: Howard Gardner sugere que a inteligência não é uma capacidade
única mas sim um conjunto de habilidades - **inteligência linguística, inteligência lógico matemática, inteligência espacial**.
---
### **O que é inteligência Artificial?**

- Termo criado por John McCarthy em 1956 durante a Conferência de Dartmouth
- Objetivo: criar máquinas capazes de simular a inteligência humana para realizar tarefas complexas.

### **Evolução Histórica da IA**

| Período       | Eventos Importantes |
|--------------|--------------------|
| **1950**     | Nasce o termo IA. Teste de Turing. |
| **1960/70** | Primeiros programas capazes de resolver problemas lógicos e jogar damas. Muitas limitações de hardware. |
| **1980**     | Renascimento da IA com desenvolvimento de sistemas especialistas e técnicas de aprendizado de máquinas. *Redes Neurais Artificiais*. |
| **1990**     | *Deep Blue*, o supercomputador da *IBM*, derrota o campeão mundial de xadrez. Agentes inteligentes começam a ser desenvolvidos. |
| **2000**     | O termo *Big Data* ganha destaque, impulsionando o aprendizado de máquina. O público acessa sistemas de reconhecimento de voz como *Google Voice Search*. |
| **2010**     | Surgem os assistentes virtuais. *Deep Learning* avança no reconhecimento de imagens, tradução de idiomas e carros autônomos. *AlphaGo* derrota o campeão mundial de Go. |
| **2020**     | Surgem os *LLMs*. IA Generativa cria vídeos, músicas, clona vozes e muito mais. |

- Principais Áreas de Aplicação de IA
  - reconhecimento de padrões
  - processamento de linguagem natural
  - tomadas de decisões
  - robótica

- Usos Comuns de IA em Empresas e Organizações
  1. atendimento ao cliente
  2. automação de processos
  3. análise de dados
  4. personalização

- Impacto da IA na Sociedade
  - rápidos processos
  - produtividade e eficiência
  - personalização e conveniência
  - desafios éticos
---

### **O que é inteligência Artificial Generativa?**

- Subcategoria da Ia que usa modelos de machine learning avançados para criar conteúdo original, como imagens, vídeos, textos.

- IAG é capaz de criar hoje: criação de conteúdo multimodal, desenvolvimento de assistentes virtuais avançados, automação de tarefas criativas, criação de conteúdo customizado, desenvolvimento de aplicações inovadoras.

- Benefícios da IAG:
  - Eficiência e Produtividade
  - Inovação
  - Personalização

- Desafios da IAG
	- Ética e Privacidade
	- Impacto no Emprego
	- Qualidade e Precisão

- O futuro da IAG
  - Avanços Contínuos
  - Integração com outras tecnologias
  - Impacto Socioeconômico
  - Globalização

- Regulamentação e Ética da IAG
  - Estabelecimento de Diretrizes
  - Transparência e Responsabilidade
  - Proteção de Dados e Privacidade
---

### **O que são LLMs?**

- Podem gerar textos através de uma base de treinamentos.

- Processamento de Linguagem Natural(NLP): o LLMs é uma aplicação de NLP, que se concentra em permitir que os computadores compreendam e processem linguagem humana.
  - Análise de Sentimentos
  - Tradução Automática
  - Resumo de Textos
  - Gerar Textos

- Para a criação de conteúdo é preciso um entendimento semântico profundo; compreender o significado e contexto das palavras e frases
  1. Analise de sinônimos
  2. Reconhecimento de Entidades
  3. Compreensão de Relações


- Contexto e Coerência: LLMs podem manter o contexto em uma conversa ou texto
  - Manter o contexto
  - Fluidez e Coerência: texto gerado por LLMs é fluido e coeso, criando um fluxo natural da linguagem
  - Janela de Contexto: é o que os LLMs lembram durante uma interação com o chatgpt por exemplo.

- Algoritmos utilizados na criação LLMs:
  - Redes neurais recorrentes(RNNs)
  - Transformers
  - Aprendizado por Reforço

- LLMs sob o ponto de vista da criação de aplicações
  - Chatbots e assistentes virtuais
  - Motores de busca
  - Automação de tarefas
---

### **Como os LLMs são criados e treinados?**

- Como os LLMs são criados:
	- Desenvolvimento de equipe
	- Infraestrutura de Computação
	- Arquitetura de Modelos

- Características da Arquitetura dos LLMs Atuais: *transformer-based, escalveis, multilingue*

- Como funciona a arquitetura transforme: com atenção, paralelização, representação contextual e com escalabilidade*

### **Etapas de Treinamento de LLMS**

| **Etapa**                          | **Descrição** |
|--------------------------------|-----------|
| **Coleta de dados**                | Reunir grande variedade de textos, como livros, artigos, diálogos, para fornecer um conjunto de dados diversificados e abrangente para o treinamento. |
| **Pré-processamento**              | Limpar e estruturar os dados, removendo ruídos e inconsistências, a fim de prepará-los para a etapa de *tokenização*. |
| **Tokenização**                    | Dividir o texto em unidades menores - tokens - que serão a entrada para o modelo da linguagem. |
| **Construção do vocabulário**       | Criar um vocabulário abrangente que inclua palavras e expressões em diferentes idiomas, permitindo que o modelo lide com uma ampla gama de linguagens. |
| **Inicialização do modelo**         | Configurar os parâmetros iniciais do modelo, como a arquitetura da rede neural, a inicialização dos pesos e tamanho do modelo. |
| **Definição da arquitetura**        | Definir a arquitetura do modelo, incluindo número de camadas, tamanho do modelo (número de parâmetros), tipos de neurônios (como transformadores) e configuração de hiperparâmetros. |
| **Treinamento prévio**              | Treinar o modelo em um conjunto de dados genéricos, para que ele aprenda representações linguísticas gerais antes de ser ajustado para tarefas específicas. |
| **Otimização de hiperparâmetros**   | Ajustar hiperparâmetros como taxa de aprendizagem, tamanho do batch e número de épocas de treinamento. |
| **Treinamento do modelo**           | Ajustar os parâmetros do modelo com base nos dados de treinamento, usando algoritmos de aprendizado de máquina. |
| **Avaliação do modelo**            | Avaliar o desempenho do modelo em métricas relevantes para garantir sua eficácia. |
| **Ajuste fino (se necessário)**     | Refinar o modelo em um conjunto de dados específico para melhorar sua performance em uma tarefa particular. |
| **Implementação e monitoramento**   | Disponibilizar o modelo para uso, monitorando seu desempenho e realizando ajustes conforme necessário. |
---

### **O que são LLMs multimodais?**

- Modelos de linguagem de grande escala e podem gerar diferentes tipos de dados: tem *linguagem natura, visão computacional e processamento de audio*

- Vantagens dos LLMs multimodais: 
  - compreensão profunda
  - interação mais natural
  - aplicações diversas

- Aplicações: saúde (diagnostico, tratamento personalizado e pesquisa medica), educação (aprendizagem personalizada, recuros multimodas e suporte educacional), entretenimento (criação de conteúdo, jogos e experiencias interativas)

- Arquitetura dos LLMs multimodas: é projetada para integrar diferentes modalidades de dados, permitindo a comunicação e a interação entre elas.
  - *Entrada:* recebimentos dos dados multimodais
  - *Processamento:* extração de características e representações de cada modalidade
  - *Fusão:* combinação de representações para criar uma representação multimodal unificada
  - *Saída:* geração de resultados multimodais, como texto, imagem ou audio
---

### **O que são Small Language Models**

- *Definição:* São versões simplificadas de LLms usando menos parâmetros e uma menor base de treinamento

- *Vantagens dos SLMs:*
  - custo reduzido
  - consumo de energia baixa
  - portabilidade
  - personalização

### **Comparação entre SLMs e LLMs**

| Característica        | SLMs | LLMs |
|----------------------|----------------------------|----------------------------|
| **Tamanho**         | Pequeno                      | Grande                      |
| **Requisitos Computacionais** | Baixos             | Altos                       |
| **Desempenho**      | Limitado a tarefas simples  | Capaz de lidar com tarefas complexas |
| **Consumo de Energia** | Baixo                     | Alto                        |
| **Latência**        | Menor tempo de resposta     | Maior tempo de resposta     |
| **Treinamento**     | Mais rápido e barato       | Mais demorado e caro       |
| **Capacidade de Generalização** | Restrita         | Alta                        |
| **Armazenamento**   | Ocupa menos espaço         | Exige grande capacidade de armazenamento |
| **Privacidade**     | Melhor para dados sensíveis | Maior risco se mal gerenciado |
| **Casos de Uso**    | Dispositivos embarcados, chatbots básicos | IA conversacional avançada, geração de texto criativa |
---

- Como migrar LLMs para SLMs:
1. Iniciar o desenvolvimento usando LLMs
2. Criar uma boa estratégia de engenharia de prompts para a sua aplicação
3. Defina o escopo da base de conhecimento se necessária
4. Localize um SLMs adequado, testando sua estratégia de prompts
5. Faça ajustes no modelo até atingir o comportamento desejado

- Futuro de SLMs: otimização, software, hardware


