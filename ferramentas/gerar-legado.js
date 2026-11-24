"use strict";

// Gera a copia do app para TVs antigas (1.5.7).
//
// Samsung de 2016/2017 (Tizen 2.4/3.0, ex.: UN40KU6300) tem navegador anterior ao Chrome
// 55: nao conhece async/await (e a de 2016 nem let/const). O main.js inteiro era
// descartado com erro de sintaxe e a TV ficava parada na tela de fundo da abertura
// ("Entre com seu codigo e navegue com o controle remoto").
//
// Este script traduz o main.js para ES5 (main-legado.js) e junta os complementos que
// esses navegadores nao tem (lib/legado/polyfills.js): Promise, fetch, URL, Symbol,
// WeakMap, Object.assign, Array.find... e o regenerator do async/await. O index.html so
// carrega estes dois arquivos quando o navegador nao entende async/await.
//
// RODAR A CADA ENTREGA, depois de mexer no main.js:
//   cd ferramentas && npm install && npm run legado

const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const acorn = require("acorn");

const raiz = path.resolve(__dirname, "..");
const origem = path.join(raiz, "main.js");
const destino = path.join(raiz, "main-legado.js");
const pastaPolyfills = path.join(raiz, "lib", "legado");
const destinoPolyfills = path.join(pastaPolyfills, "polyfills.js");

const codigo = fs.readFileSync(origem, "utf8");
const resultado = babel.transformSync(codigo, {
  filename: "main.js",
  babelrc: false,
  configFile: false,
  compact: false,
  comments: false,
  sourceType: "script",
  presets: [[require.resolve("@babel/preset-env"), { targets: { chrome: "38", safari: "7" }, modules: false }]],
});

const cabecalho =
  "/* main-legado.js - GERADO por ferramentas/gerar-legado.js a partir do main.js.\n" +
  "   Nao editar a mao: mude o main.js e rode `npm run legado` em ferramentas/. */\n";
fs.writeFileSync(destino, cabecalho + resultado.code + "\n");

// Complementos: Element.closest/matches (WebKit antigo) + core-js + regenerator + fetch.
const closest =
  "(function(){var p=window.Element&&Element.prototype;if(!p)return;" +
  "if(!p.matches)p.matches=p.webkitMatchesSelector||p.msMatchesSelector||function(s){var m=(this.document||this.ownerDocument).querySelectorAll(s),i=m.length;while(--i>=0&&m.item(i)!==this){}return i>-1;};" +
  "if(!p.closest)p.closest=function(s){var el=this;while(el&&el.nodeType===1){if(el.matches(s))return el;el=el.parentElement||el.parentNode;}return null;};})();\n";
const partes = [
  "/* lib/legado/polyfills.js - GERADO por ferramentas/gerar-legado.js. So para TVs antigas. */\n",
  closest,
  fs.readFileSync(require.resolve("core-js-bundle/minified.js"), "utf8"),
  "\n",
  fs.readFileSync(require.resolve("regenerator-runtime/runtime.js"), "utf8"),
  "\n",
  fs.readFileSync(require.resolve("whatwg-fetch/dist/fetch.umd.js"), "utf8"),
  "\n",
];
fs.mkdirSync(pastaPolyfills, { recursive: true });
fs.writeFileSync(destinoPolyfills, partes.join(""));

// CSS das TVs antigas (1.5.8). A Samsung de 2016 (Tizen 2.4, WebKit antigo) so entende
// flexbox com prefixo (-webkit-box / -webkit-flex) e nao conhece variaveis de CSS
// (var(--...)): o teclado do codigo saia numa coluna so e o painel colado a esquerda.
// Aqui o style.css e o antigas.css ganham os prefixos (autoprefixer) e as variaveis
// viram valor fixo (as de :root e --vw/--vh do desenho fixo de 1920x1080).
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const customProperties = require("postcss-custom-properties");
const NAVEGADORES_ANTIGOS = ["safari >= 6", "chrome >= 28", "android >= 4.4"];
const VARIAVEIS_FIXAS = ":root { --vw: 19.2px; --vh: 10.8px; }\n";

const processadorCss = postcss([
  customProperties({ preserve: true }),
  autoprefixer({ overrideBrowserslist: NAVEGADORES_ANTIGOS, flexbox: true, grid: false }),
]);

const estiloOriginal = fs.readFileSync(path.join(raiz, "css", "style.css"), "utf8");
// As variaveis de :root do style.css servem tambem ao antigas.css.
const raizDoEstilo = (estiloOriginal.match(/:root\s*\{[^}]*\}/) || [""])[0];
[
  ["style.css", "style-legado.css", ""],
  ["antigas.css", "antigas-legado.css", raizDoEstilo],
].forEach(function (par) {
  const entrada = fs.readFileSync(path.join(raiz, "css", par[0]), "utf8");
  const saida = processadorCss.process(VARIAVEIS_FIXAS + par[2] + "\n" + entrada, { from: undefined }).css;
  fs.writeFileSync(
    path.join(raiz, "css", par[1]),
    "/* css/" + par[1] + " - GERADO por ferramentas/gerar-legado.js a partir do css/" + par[0] + ". Nao editar. */\n" + saida
  );
  console.log("ok (css):", "css/" + par[1], Math.round(saida.length / 1024) + " KB");
});

// Conferencia: os dois arquivos precisam ser ES5 puro, senao a TV antiga descarta de novo.
[destino, destinoPolyfills].forEach(function (arquivo) {
  const texto = fs.readFileSync(arquivo, "utf8");
  try {
    acorn.parse(texto, { ecmaVersion: 5, sourceType: "script" });
  } catch (erro) {
    console.error("NAO e ES5:", path.relative(raiz, arquivo), erro.message);
    process.exit(1);
  }
  console.log("ok (ES5):", path.relative(raiz, arquivo), Math.round(texto.length / 1024) + " KB");
});
