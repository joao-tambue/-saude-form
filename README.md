# 🚀 React Starter Template

Template base com tudo configurado para iniciar projetos React com:

- React + TypeScript
- TailwindCSS
- ESLint + Prettier
- Vite
- Porta local: 500
- Formatação automática de classes Tailwind
- VSCode configs

## 📦 Instalação

```bash
npm install
```

## Rodar projeto

```bash
npm run dev
```

Acesse: [http://localhost:500](http://localhost:500)

## Scripts úteis

- `npm run lint`: Corrige problemas de lint com ESLint
- `npm run format`: Formata com Prettier

## Linter e Formatter

- ESLint v9+ com nova estrutura (`eslint.config.js`)
- Airbnb Style Guide + TypeScript + React
- `prettier-plugin-tailwindcss` para ordenar classes Tailwind automaticamente

## VSCode recomendado

Crie `.vscode/settings.json` com:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript", "typescriptreact"],
  "tailwindCSS.emmetCompletions": true,
  "prettier.enable": true
}
```

## .gitignore padrão

```gitignore
node_modules
dist
.env
.vscode
```

## Teste final

1. Salve um `.tsx` com classes Tailwind bagunçadas: elas serão reordenadas automaticamente.
2. Rode:

```bash
npm run lint
npm run format
```

---

Feito com 💙 por João
