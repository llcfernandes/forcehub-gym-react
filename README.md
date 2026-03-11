# ForceHub Performance Studio

Site institucional multi-página para academia de alta performance.  
Desenvolvido por **Lucas Fernandes** — Desenvolvedor Web.

---

## Tecnologias

- **React 18** + **Vite 5**
- CSS Modules + CSS Global
- IntersectionObserver (scroll reveal + contadores animados)
- Fontes: Bebas Neue · Barlow Condensed · DM Sans (Google Fonts)
- Imagens: Unsplash (fitness curadas)
- WhatsApp API para formulário de contato

---

## Estrutura do projeto

```
forcehub-performance-studio/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx          ← entry point
    ├── App.jsx           ← roteador de páginas
    ├── styles/
    │   └── global.css    ← variáveis CSS, reset, nav, footer, marquee…
    ├── hooks/
    │   └── index.js      ← useReveal + useCounter
    ├── utils/
    │   └── images.js     ← mapa de URLs das imagens Unsplash
    ├── components/
    │   ├── Nav.jsx
    │   ├── Footer.jsx
    │   ├── Marquee.jsx
    │   ├── StatsBand.jsx
    │   └── PageHero.jsx
    └── pages/
        ├── Home.jsx + Home.module.css
        ├── Modalidades.jsx
        ├── Planos.jsx
        ├── Estrutura.jsx
        ├── Trainers.jsx
        └── Contato.jsx
```

---

## Páginas

| Página      | Conteúdo                                                        |
|-------------|----------------------------------------------------------------|
| Início      | Hero, manifesto, mosaico de modalidades, trainers, depoimentos, CTA |
| Modalidades | Grid de 9 modalidades, grade de horários semanal, FAQ           |
| Planos      | 3 planos (R$89/R$149/R$349), tabela comparativa, CTA           |
| Estrutura   | Galeria masonry, 9 comodidades, mapa estilizado                 |
| Trainers    | Grid de 6 profissionais com hover, padrão de exigência          |
| Contato     | Formulário → WhatsApp, mapa, FAQ                               |

---

## Personalizar

- **WhatsApp:** edite o número em `src/pages/Contato.jsx` e `src/pages/Planos.jsx` (buscar `wa.me/55`)
- **Imagens:** substitua as URLs em `src/utils/images.js`
- **Cores:** edite as variáveis CSS em `src/styles/global.css` (`:root { --red: ... }`)
- **Textos:** edite diretamente nos arquivos de cada página em `src/pages/`
