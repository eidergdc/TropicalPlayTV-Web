#!/bin/bash
# Abre o app web (tv.tropicalplaytv.com) no simulador de TV LG (webOS).
# Uso:  ./abrir.sh        -> simulador webOS 24
#       ./abrir.sh 26     -> simulador webOS 26
# O app em app/ so redireciona para o site publicado: testa sempre a versao no ar.
VERSAO="${1:-24}"
PASTA_SIM="$HOME/Applications/lg-webos-tv"
SIM=$(ls -d "$PASTA_SIM"/webOS_TV_${VERSAO}_Simulator_* 2>/dev/null | grep -v '\.zip$' | head -1)
if [ -z "$SIM" ]; then echo "Simulador webOS $VERSAO nao encontrado em $PASTA_SIM"; exit 1; fi
cd "$(dirname "$0")" && ares-launch -s "$VERSAO" -sp "$SIM" "$(pwd)/app"
