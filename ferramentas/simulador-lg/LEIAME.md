# Teste no simulador de TV LG

`app/` e um app webOS minimo que so abre http://tv.tropicalplaytv.com (a versao publicada).
Precisa do simulador em `~/Applications/lg-webos-tv/` e do `ares` (webOS CLI).

    ./abrir.sh       # webOS 24
    ./abrir.sh 26    # webOS 26

A tela de codigo deve mostrar a VERSAO atual do main.js. O video no simulador nem sempre
se comporta como numa TV LG de verdade; serve para telas, navegacao e visual.
