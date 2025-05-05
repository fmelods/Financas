# FinançasPro - Sistema de Gerenciamento de Finanças Pessoais

FinançasPro é uma aplicação web moderna para gerenciamento de finanças pessoais, desenvolvida com Next.js e Tailwind CSS. A plataforma oferece uma interface limpa e intuitiva para controle de receitas, despesas, metas financeiras e visualização de dados através de gráficos interativos.

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Instalação e Execução](#-instalação-e-execução)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Capturas de Tela](#-capturas-de-tela)
- [Próximos Passos](#-próximos-passos)
- [Como Contribuir](#-como-contribuir)
- [Licença](#-licença)

## ✨ Funcionalidades

- **Sistema de Autenticação**: Registro de usuários, login e proteção de rotas
- **Dashboard Interativo**: Visão geral das finanças com cards para saldo total, receitas, despesas e economia
- **Visualização de Dados**: Gráficos para análise de receitas, despesas e distribuição de gastos por categoria
- **Controle de Transações**: Registro e visualização de receitas e despesas com categorização
- **Metas Financeiras**: Definição e acompanhamento de objetivos financeiros com barras de progresso
- **Alertas de Vencimento**: Notificações para contas a pagar com destaque para vencimentos próximos
- **Dicas Financeiras**: Recomendações personalizadas para melhorar a saúde financeira
- **Perfil de Usuário**: Visualização e gerenciamento de informações pessoais

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React com App Router
- [React 18](https://reactjs.org/) - Biblioteca JavaScript para interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI reutilizáveis
- [Recharts](https://recharts.org/) - Biblioteca de gráficos para React
- [Lucide React](https://lucide.dev/) - Ícones para React
- [Zod](https://zod.dev/) - Validação de esquemas TypeScript

## 💻 Instalação e Execução

Siga estas etapas para configurar o projeto localmente:

### Pré-requisitos

- Node.js 18.17.0 ou superior
- npm ou yarn ou pnpm

### Passos para instalação

1. Clone o repositório:
   git clone https://github.com/seu-usuario/financas-pro.git
   cd financas-pro

2. Instale as dependências:

npm install
# ou
yarn install
# ou
pnpm install


3. Execute o servidor de desenvolvimento:

npm run dev
# ou
yarn dev
# ou
pnpm dev


4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.


### Usuário de teste

Para testar a aplicação, você pode usar as seguintes credenciais:

- **Email**: [joao@example.com](mailto:joao@example.com)
- **Senha**: senha123


Ou criar uma nova conta através da página de registro.

## 📁 Estrutura do Projeto

```
financas-pro/
├── app/                    # Diretório principal da aplicação Next.js
│   ├── (auth)/             # Grupo de rotas para autenticação
│   │   ├── login/          # Página de login
│   │   └── registro/       # Página de registro
│   ├── (dashboard)/        # Grupo de rotas protegidas
│   │   ├── perfil/         # Página de perfil do usuário
│   │   └── page.tsx        # Dashboard principal
│   └── layout.tsx          # Layout raiz da aplicação
├── components/             # Componentes React reutilizáveis
│   ├── ui/                 # Componentes de UI (shadcn)
│   ├── balance-chart.tsx   # Gráfico de balanço mensal
│   ├── expenses-chart.tsx  # Gráfico de despesas por categoria
│   ├── login-form.tsx      # Formulário de login
│   ├── register-form.tsx   # Formulário de registro
│   ├── recent-transactions.tsx # Lista de transações recentes
│   ├── upcoming-bills.tsx  # Lista de contas a pagar
│   └── user-nav.tsx        # Navegação do usuário
├── lib/                    # Funções utilitárias e lógica de negócios
│   ├── auth.ts             # Funções de autenticação
│   └── utils.ts            # Funções utilitárias gerais
├── public/                 # Arquivos estáticos
├── .gitignore              # Arquivos ignorados pelo Git
├── next.config.js          # Configuração do Next.js
├── package.json            # Dependências e scripts
├── README.md               # Documentação do projeto
├── tailwind.config.ts      # Configuração do Tailwind CSS
└── tsconfig.json           # Configuração do TypeScript
```

## Próximos Passos

- Implementar recuperação de senha
- Adicionar autenticação social (Google, Facebook)
- Criar página de edição de perfil
- Implementar verificação de email
- Adicionar funcionalidade de cadastro de transações
- Criar página de relatórios detalhados
- Conectar a um banco de dados real
- Adicionar exportação de dados
- Criar versão mobile responsiva
- Implementar testes automatizados
- Configurar CI/CD


## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Siga estes passos para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request


### Diretrizes de contribuição

- Siga o padrão de código existente
- Escreva testes para novas funcionalidades
- Mantenha a documentação atualizada
- Verifique se todos os testes passam antes de enviar um PR

Desenvolvido com ❤️ por Felipe (https://github.com/fmelods)