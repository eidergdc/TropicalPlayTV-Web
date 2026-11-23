# Tropical Play TV - Web

Aplicativo web do Tropical Play aberto de dentro do Media Station X (MSX).

- `msx/start.json` e `msx/menu.json`: porta de entrada. No MSX, o cliente digita
  `tv.tropicalplaytv.com` no Start Parameter; o menu abre este app com `link:`.
- Servido pelo GitHub Pages em `http://tv.tropicalplaytv.com`, **sem** HTTPS
  obrigatório: os painéis IPTV entregam o vídeo por http, e uma página https não pode
  tocá-lo (conteúdo misto). Na TV VIDAA, o MSX também só abre o endereço curto por http.
