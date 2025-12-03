# Guia Completo - Site de Links Felipe Alvim

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Como Editar Banners](#como-editar-banners)
4. [Como Editar Informações](#como-editar-informações)
5. [Desenvolvimento Local](#desenvolvimento-local)
6. [Deploy no Vercel](#deploy-no-vercel)
7. [Suporte e Dúvidas](#suporte-e-dúvidas)

---

## 🎨 Visão Geral

Este é um site moderno de links criado com **React** e **Vite**, com design **preto e dourado** (Luxury Minimalist). O site permite que você redirecione seus seguidores do Instagram para diferentes destinos através de banners elegantes e interativos.

**Características principais:**

- Design sofisticado com animações suaves
- Fácil gerenciamento de banners e links
- Responsivo (funciona em mobile, tablet e desktop)
- Rápido e otimizado para performance
- Pronto para deploy no Vercel

---

## 📁 Estrutura do Projeto

```
links-nutricionista/
├── client/
│   ├── public/
│   │   └── images/          # Imagens do site
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   │   ├── Header.tsx
│   │   │   ├── BannerCard.tsx
│   │   │   └── Footer.tsx
│   │   ├── config/
│   │   │   └── banners.ts   # ⭐ ARQUIVO PRINCIPAL (edite aqui!)
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css        # Estilos globais
│   └── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── GUIA_COMPLETO.md         # Este arquivo
```

---

## 🎯 Como Editar Banners

O arquivo **principal** para editar banners é:

```
client/src/config/banners.ts
```

### Adicionar um Novo Banner

Abra o arquivo `banners.ts` e encontre o array `banners`. Adicione um novo objeto:

```typescript
{
  id: 'novo-banner',
  title: 'NOVO TÍTULO',
  description: 'Descrição do novo banner',
  image: '/images/hero-background.png',
  link: 'https://seu-link.com',
}
```

**Campos obrigatórios:**

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| `id` | Identificador único | `'agendamento'` |
| `title` | Título em MAIÚSCULAS | `'AGENDE'` |
| `description` | Descrição breve | `'Clique aqui e agende'` |
| `image` | Caminho da imagem | `'/images/hero-background.png'` |
| `link` | URL de redirecionamento | `'https://calendly.com'` |

### Editar um Banner Existente

Localize o banner no array e altere os valores. Por exemplo, para alterar o link de agendamento:

```typescript
{
  id: 'agendamento',
  title: 'AGENDE',
  description: 'Clique aqui e agende a sua consulta',
  image: '/images/hero-background.png',
  link: 'https://calendly.com/felipealvim', // ALTERE AQUI
}
```

### Remover um Banner

Simplesmente delete o objeto do array. Por exemplo, remova a vírgula e o objeto inteiro.

---

## 📝 Como Editar Informações

Ainda no arquivo `banners.ts`, você pode editar:

### Informações de Contato

```typescript
export const contactInfo = {
  instagram: 'https://instagram.com/felipealvim',
  whatsapp: 'https://wa.me/5561999999999',
  location: 'Brasília/DF',
};
```

### Informações do Site

```typescript
export const siteInfo = {
  name: 'Felipe Alvim',
  title: 'Nutricionista',
  subtitle: 'Nutricionista especializado em emagrecimento e transformação corporal',
  heroTitle: 'Transforme sua vida',
  heroDescription: 'Clique no banner para ser redirecionado(a)',
  ctaTitle: 'Pronto para começar?',
  ctaDescription: 'Escolha uma das opções acima e comece sua jornada de transformação hoje mesmo.',
  footerText: '© 2024 Felipe Alvim - Nutricionista',
  footerSubtext: 'Transformando vidas através da nutrição',
};
```

---

## 💻 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm instalado

### Passos para Rodar Localmente

1. **Clone o repositório** (após fazer upload para GitHub):

```bash
git clone https://github.com/seu-usuario/links-nutricionista.git
cd links-nutricionista
```

2. **Instale as dependências:**

```bash
pnpm install
# ou
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
pnpm dev
# ou
npm run dev
```

4. **Abra no navegador:**

```
http://localhost:3000
```

### Fazer Alterações

1. Edite o arquivo `client/src/config/banners.ts`
2. Salve o arquivo
3. O site será atualizado automaticamente no navegador (hot reload)

---

## 🚀 Deploy no Vercel

### Opção 1: Deploy Automático via GitHub (Recomendado)

#### Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"**
3. Nome: `links-nutricionista`
4. Descrição: `Site de links - Felipe Alvim`
5. Escolha **Public** (para que o Vercel consiga acessar)
6. Clique em **"Create repository"**

#### Passo 2: Fazer Upload do Projeto

No seu computador, abra o terminal na pasta do projeto e execute:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/links-nutricionista.git
git push -u origin main
```

#### Passo 3: Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Selecione **"Import Git Repository"**
4. Procure por `links-nutricionista`
5. Clique em **"Import"**
6. Deixe as configurações padrão e clique em **"Deploy"**

Pronto! Seu site estará disponível em uma URL como:
```
https://links-nutricionista.vercel.app
```

### Opção 2: Deploy Manual via Vercel CLI

```bash
# Instale o Vercel CLI
npm i -g vercel

# Faça deploy
vercel

# Siga as instruções na tela
```

---

## 🔄 Atualizar o Site Após Deploy

Após fazer deploy no Vercel, qualquer mudança que você fizer no GitHub será automaticamente refletida no site.

**Fluxo de atualização:**

1. Edite o arquivo `client/src/config/banners.ts` localmente
2. Faça commit e push para GitHub:

```bash
git add .
git commit -m "Atualizar banners"
git push
```

3. O Vercel detectará a mudança e fará deploy automaticamente
4. Seu site será atualizado em poucos segundos

---

## 🎨 Personalizações Avançadas

### Alterar Cores

As cores estão definidas em `client/src/index.css`. Para alterar a cor dourada:

1. Abra `client/src/index.css`
2. Procure por `--primary: oklch(0.75 0.2 45);`
3. Altere o valor (use um conversor de cores online se necessário)

### Adicionar Novas Imagens

1. Coloque a imagem em `client/public/images/`
2. Use o caminho `/images/nome-da-imagem.png` no banner

### Alterar Fontes

As fontes estão em `client/index.html`. Atualmente usamos:
- **Playfair Display** para títulos
- **Lato** para textos

Para alterar, edite a linha de Google Fonts.

---

## 📱 Responsividade

O site é totalmente responsivo e funciona em:

- **Desktop** (1920px+)
- **Tablet** (768px - 1024px)
- **Mobile** (320px - 767px)

Teste em diferentes tamanhos de tela para garantir que tudo está funcionando corretamente.

---

## ⚡ Performance

O site é otimizado para performance:

- Imagens comprimidas
- CSS e JavaScript minificados
- Lazy loading de componentes
- Animações otimizadas com Framer Motion

---

## 🐛 Suporte e Dúvidas

### Problemas Comuns

**P: O site não está atualizando após fazer push?**
R: Aguarde 2-3 minutos para o Vercel fazer o deploy. Você pode acompanhar em [vercel.com/dashboard](https://vercel.com/dashboard).

**P: Como alterar o domínio personalizado?**
R: No Vercel, vá para **Settings > Domains** e adicione seu domínio personalizado (ex: links.nutricionistafelipealvim.com.br).

**P: Posso adicionar mais de 3 banners?**
R: Sim! Adicione quantos banners quiser no array `banners` em `banners.ts`.

**P: Como adicionar um formulário de contato?**
R: Você pode integrar com serviços como Formspree, Netlify Forms ou criar um backend customizado.

---

## 📚 Recursos Úteis

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vercel Documentation](https://vercel.com/docs)

---

## 📄 Licença

Este projeto é de uso pessoal para Felipe Alvim.

---

**Última atualização:** Dezembro 2024
**Versão:** 1.0.0
