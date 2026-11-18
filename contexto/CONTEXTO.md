# Contexto do projeto: site Speed Padel Camaquã

Cole este arquivo no início da nova sessão (ou peça: "leia contexto/CONTEXTO.md").

## O que é

Site institucional **estático** (um único `index.html`, sem banco e sem build) para a **Speed Padel**, arena de padel em Camaquã/RS.
Objetivo: apresentar o site à dona e publicar. Pedido do cliente: "nada de mais", simples, com páginas **Início**, **Institucional**, **Produtos** e **Contatos**, mais um **manual em slides** para a apresentação.

## Onde está cada coisa

| Item | Local |
|---|---|
| Site publicado (prévia) | https://claude.ai/artifact/7JsoyJyyJsNRtez8ACzaDu |
| Manual (slides) | https://claude.ai/artifact/CdTReFbtRH4eR7vusv17rg |
| Repositório | `leonardohuttner/speedpadel`, branch `claude/dazzling-einstein-anrfkc` |
| Site para hospedar | `index.html` (raiz do repositório, documento completo, imagens embutidas em base64) |
| Fonte do site para o Artifact | `contexto/site-fonte-artifact.html` (sem `<html>/<head>`; usa marcadores `__LOGO__` e `__ARENA__`, trocados pelas imagens em base64 antes de publicar) |
| Fotos | `contexto/arena.jpg` (quadra), `contexto/logo.png` (logo recortado do Instagram) |
| Slides do manual | `contexto/slides/` (`deck.json`, `deck.css` e um HTML por slide) |

Para atualizar os links publicados de outra sessão: colar o link e pedir a alteração (o Artifact é atualizado pela URL, mantendo o mesmo endereço).
No manual, as imagens já estão no próprio artifact: foto `/_blob/248d5a6d9ff625ef18500bfae35162d8`, logo `/_blob/33184f972792bdfc5b9653ac85db8d98`.

## Dados reais da Speed Padel (passados pelo dono do projeto)

- Instagram: **@speedpadel** (https://www.instagram.com/speedpadel/), categoria Esportes.
- Bio: "Padel desde 2019 em Camaquã · Comunidade • Performance • Diversão · Loja oficial Compass região · Agendamentos".
- Link de agendamento na bio: `wa.me/5198809971`. **Está sem o 55 do Brasil.** No site usamos `555198809971`, exibido como (51) 9880-9971. **Confirmar o número.**
- **1 quadra coberta**, piso azul, paredes de vidro/alvenaria, no **centro de Camaquã**, **com estacionamento**.
- **Sem lanchonete**, mas vende bebidas para consumo: água, isotônico (Gatorade), energético etc.
- Público forte de **iniciantes**. Uma **responsável dedicada** organiza tudo: fecha grupos e duplas para "dar jogo". Comunidade ativa com **291 membros**.
- **Para o primeiro jogo recomenda-se aula**: há **professores de padel parceiros**.
- **Revenda/loja oficial Compass** na região.
- Produtos: roupas, raquetes, bolinhas, grip, protetor (**sem mostrar estoque**).
- **Bebidas não entram na página Produtos**: são vendidas só na arena, sem pedido pelo WhatsApp. Aparecem apenas como diferencial (cartão "Bebidas geladas" no Início e na ficha da arena).
- Agendamento de horários pelo WhatsApp (não há sistema de reserva online).
- Sem blog.
- Endereço encontrado em guia online (benditoguia.com.br): **Av. Sete de Setembro, 388 – Centro, Camaquã/RS, 96180-000**. **A confirmar.**
- Cores: ainda não definidas pelo cliente. Usamos o azul do logo e da quadra (#155E9E / #0E4677) com amarelo-limão (#D9F24A).

## Como o site está montado

- Abas por hash: `#inicio`, `#institucional`, `#produtos`, `#contatos`. Cabeçalho azul fixo com logo, botão flutuante de WhatsApp.
- **Início:** hero "Nunca jogou? A gente monta o seu jogo." com foto da quadra e botões *Agendar horário* / *Quero uma aula*; faixa de números (2019 · 291 · 1 quadra coberta · Compass); 6 cartões (Aulas com professores, Grupos para iniciantes, Agendamento fácil, Loja oficial Compass, Centro com estacionamento, Bebidas geladas); 3 passos (WhatsApp → aula com professor parceiro → grupo); faixa CTA; FAQ; cartão de endereço com WhatsApp + Como chegar.
- **Institucional:** história desde 2019, organizadora dos grupos, professores parceiros, Compass, o que é padel; foto; ficha da arena; pilares Comunidade / Performance / Diversão.
- **Produtos:** faixa "Loja oficial Compass"; produtos agrupados por categoria (Raquetes, Bolinhas, Grips, Protetores, Roupas), com filtro; cada produto com "Consulte o preço" e botão "Pedir no WhatsApp" com mensagem pronta.
- **Contatos:** estilo Linktree (Agendar pelo WhatsApp, Agendar uma aula, Entrar num grupo, Instagram, Loja Compass, Como chegar, Conheça a Speed), copiar endereço e formulário que abre o WhatsApp com a mensagem.
- Dados editáveis no fim do arquivo, no `<script>`: `CONFIG` (WHATSAPP, INSTAGRAM, MAPS), `CATEGORIES` e `PRODUCTS` (`price: null` = "Consulte o preço"; `tag` = selo opcional).
- Fontes: Barlow Condensed (títulos) + Barlow (texto), do Google Fonts. Tema claro e escuro.

## Manual (slides, 10)

1. Capa com foto da quadra e logo · 2. A Speed em números · 3. Para que serve o site · 4. As 4 páginas · 5. Início · 6. Produtos (Compass) · 7. Institucional e Contatos · 8. Como atualizar · 9. Dados para confirmar · 10. Próximos passos.

## Pendências (a confirmar com a dona)

- Número do WhatsApp (link da bio sem 55).
- Endereço exato e horários de funcionamento.
- Nomes e fotos dos professores parceiros (opcional).
- Nome da organizadora dos grupos (opcional).
- Modelos Compass e preços dos produtos.
- Mais fotos: turma jogando, produtos, fachada, estacionamento.
- Cores e logo definitivos (hoje: logo recortado do Instagram, em baixa resolução; pedir o arquivo original).
- Confirmar se "291 membros" pode ser divulgado.

## Publicação

- Não há acesso à Vercel pela sessão. Opções: juntar a branch na `main` e ativar **GitHub Pages** (raiz), ou importar o repositório na **Vercel/Netlify** (sem build).
- Domínio próprio opcional (ex.: speedpadel.com.br, via Registro.br).
- Sugestão: usar o link da página Contatos na bio do Instagram.

## Histórico e decisões

- O pedido começou como um projeto completo (Next.js + painel administrativo + loja + banco Neon). O cliente pediu simplificar: **site estático**. O rascunho em Next.js foi abandonado.
- Foi criado um projeto no Neon chamado `speedpadel` que **não está em uso** (pode ser apagado se o dono quiser).
- Commits com o autor do repositório (Leonardo Huttner), sem coautoria do Claude.
- O repositório `klein-novo` é de outro projeto e não tem relação com este.
