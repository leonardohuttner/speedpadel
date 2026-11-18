# Speed Padel Camaquã — site

Site estático, com tudo num único arquivo (`index.html`) e quatro páginas em abas: **Início**, **Institucional**, **Produtos** e **Contatos**.
Não precisa de servidor nem de banco de dados.

## Como editar os dados

No final do `index.html`, dentro do bloco `<script>`:

- `CONFIG.WHATSAPP`: número com 55 + DDD, só dígitos (ex.: `"5551999999999"`). Com ele preenchido, todos os botões abrem o WhatsApp com uma mensagem pronta.
- `CONFIG.INSTAGRAM`: endereço completo do perfil.
- `CONFIG.MAPS`: link do Google Maps usado no botão "Como chegar".
- `PRODUCTS`: lista de produtos. Use `price: null` para mostrar "Consulte o preço" ou um número (ex.: `price: 49.9`).
- `CATEGORIES`: categorias da página Produtos.

## Como publicar

Qualquer hospedagem de site estático serve:

- **GitHub Pages:** Settings → Pages → Branch `main` / pasta raiz.
- **Vercel ou Netlify:** importe o repositório. Não há etapa de build.

## Pendências (a confirmar com a dona)

- Número do WhatsApp: o link da bio (wa.me/5198809971) está sem o 55; no site usamos 555198809971
- Endereço (Av. Sete de Setembro, 388 – Centro, achado em guia online) e horários
- Nomes e fotos dos professores parceiros (opcional)
- Mais fotos (turma, produtos, fachada)
- Produtos reais e preços
