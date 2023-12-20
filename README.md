# 🌐 Sistema - Painel de Vagas 

Este é um sistema web desenvolvido para gerenciar e exibir informações sobre vagas de emprego. O sistema é voltado para a Escola SENAI Antônio A. Lobbe e tem como objetivo facilitar o acesso e visualização das vagas disponíveis, além de fornecer detalhes específicos sobre cada oportunidade.

## 🛠️ Componentes do Sistema

O sistema é composto por duas páginas principais:

### 1. Página Inicial - `index.html`

A página inicial apresenta um painel de vagas, exibindo uma lista de oportunidades disponíveis. Cada vaga é representada por um item clicável, contendo informações básicas sobre a empresa, cargo e status da vaga. Ao clicar em uma vaga, o usuário é redirecionado para a página de detalhes.

**Recursos utilizados:**
- HTML, CSS, Bootstrap para a estrutura e estilo da página.
- JavaScript para carregar dinamicamente as vagas a partir de uma planilha do Google Sheets.
- jQuery e Bootstrap JS para aprimorar a interatividade.

### 2. Página de Detalhes - `detalhes.html`

A página de detalhes exibe informações mais abrangentes sobre uma vaga específica. Os detalhes incluem dados sobre a empresa, cargo, requisitos, benefícios, horário, entre outros. O conteúdo é dinamicamente carregado com base no ID da vaga fornecido na URL.

**Recursos utilizados:**
- HTML, CSS, Bootstrap para a estrutura e estilo da página.
- JavaScript para realizar uma requisição à API do Google Sheets e exibir os detalhes da vaga selecionada.

## 🚀 Como Utilizar

1. Abra o arquivo `index.html` em seu navegador para visualizar o painel de vagas.
2. Clique em uma vaga para obter mais detalhes, sendo redirecionado para a página de detalhes (`detalhes.html`).
3. Na página de detalhes, são exibidas informações específicas da vaga selecionada.

## ⚙️ Requisitos

- Conexão com a internet para carregar as informações das vagas a partir da planilha do Google Sheets.
- Navegador web compatível com HTML5, CSS3 e JavaScript.

## 🤝 Desenvolvimento e Suporte

Este sistema foi desenvolvido pelo SENAI - São Carlos. Para mais informações ou suporte, entre em contato com a equipe de desenvolvimento.

🔗 **GitHub:** [Sistemas-Painel-de-Vagas](https://vinnydsstos.github.io/Sistemas-Painel-de-Vagas/)
