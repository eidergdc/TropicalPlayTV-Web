/* main-legado.js - GERADO por ferramentas/gerar-legado.js a partir do main.js.
   Nao editar a mao: mude o main.js e rode `npm run legado` em ferramentas/. */
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? (c > 1 && (G.n = c < 3 ? -1 : u), d(c, u)) : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  if (window.TP_APP_RODANDO) {
    return;
  }
  window.TP_APP_RODANDO = true;
  var APP_VERSION = "1.6.0";
  function completarTexto(texto, tamanho, enchimento, noInicio) {
    texto = String(texto);
    tamanho = tamanho >> 0;
    enchimento = enchimento === undefined ? " " : String(enchimento);
    if (texto.length >= tamanho || !enchimento) return texto;
    var falta = tamanho - texto.length;
    var extra = "";
    while (extra.length < falta) extra += enchimento;
    extra = extra.slice(0, falta);
    return noInicio ? extra + texto : texto + extra;
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function (tamanho, enchimento) {
      return completarTexto(this, tamanho, enchimento, true);
    };
  }
  if (!String.prototype.padEnd) {
    String.prototype.padEnd = function (tamanho, enchimento) {
      return completarTexto(this, tamanho, enchimento, false);
    };
  }
  var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCRoGZQZD7k-18-BmLq7X4QMGJ5ODJwemc",
    authDomain: "iptv-black.firebaseapp.com",
    databaseURL: "https://iptv-black-default-rtdb.firebaseio.com",
    projectId: "iptv-black",
    storageBucket: "iptv-black.firebasestorage.app",
    messagingSenderId: "427954135204",
    appId: "1:427954135204:web:9af896d2534d1817950631",
    measurementId: "G-XXXXXXXXXX"
  };
  var STORAGE_KEYS = {
    userCode: "tropical.userCode",
    profile: "tropical.profile",
    selectedServer: "tropical.selectedServer",
    lastScreen: "tropical.lastScreen",
    favorites: "tropical.favorites",
    playbackHistory: "tropical.playbackHistory",
    mediaGallery: "tropical.mediaGallery",
    deviceId: "tropical.deviceAccessId",
    sessionId: "tropical.activeSessionId",
    activeHeartbeatUserCode: "tropical.activeHeartbeatUserCode",
    rememberedCode: "tropical.rememberedCode",
    loginNotice: "tropical.loginNotice"
  };
  var FAVORITES_CATALOG_TYPE = "favorites";
  var FAVORITES_CATEGORY_ID = "favorites-live";
  var FAVORITES_MOVIES_CATEGORY_ID = "favorites-movies";
  var FAVORITES_SERIES_CATEGORY_ID = "favorites-series";
  var ALL_LIVE_CATEGORY_ID = "live-all";
  var ALL_MOVIES_CATEGORY_ID = "movies-all";
  var RECENT_MOVIES_CATEGORY_ID = "movies-recent";
  var ALL_SERIES_CATEGORY_ID = "series-all";
  var RECENT_SERIES_CATEGORY_ID = "series-recent";
  var LIVE_SEARCH_ACTION_ID = "live-search-action";
  var MOVIE_SEARCH_ACTION_ID = "movies-search-action";
  var SERIES_SEARCH_ACTION_ID = "series-search-action";
  var FAVORITE_HOLD_MS = 700;
  var NETWORK_TIMEOUT_MS = 20000;
  var POSTER_GRID_COLUMNS = 4;
  var POSTER_WINDOW_ROWS = 5;
  var POSTER_WINDOW_BUFFER_ROWS = 1;
  var LIVE_LIST_WINDOW_ITEMS = 18;
  var LIVE_LIST_WINDOW_BUFFER = 5;
  var PLAYBACK_HISTORY_LIMIT = 48;
  var PLAYBACK_SAVE_INTERVAL_SECONDS = 12;
  var PLAYBACK_RESUME_MIN_SECONDS = 15;
  var PLAYBACK_COMPLETE_RATIO = 0.96;
  var PLAYBACK_COMPLETE_BUFFER_SECONDS = 45;
  var MOVIE_SEARCH_MAX_LENGTH = 36;
  var MEDIA_GALLERY_MAX_ITEMS = 360;
  var MEDIA_IMPORT_MAX_ITEMS = 240;
  var MEDIA_INPUT_MAX_LENGTH = 512;
  var MEDIA_INPUT_KEYBOARD_COLUMNS = 8;
  var SEARCH_KEYBOARD_COLUMNS = 6;
  var NATIVE_PLAYER_WIDTH = 1920;
  var NATIVE_PLAYER_HEIGHT = 1080;
  var POSTER_DETAIL_ACTION_COLUMNS = 2;
  var LIVE_STALL_CHECK_MS = 5000;
  var LIVE_STALL_THRESHOLD_MS = 14000;
  var LIVE_AUTO_RECONNECT_LIMIT = 3;
  var SESSION_HEARTBEAT_MS = 60000;
  var SESSION_TAKEOVER_AFTER_MS = 5 * 60 * 1000;
  var SESSION_CONFLICT_COUNTDOWN_SECONDS = 30;
  var SESSION_ACCESS_TIMEOUT_MS = 12000;
  var SESSION_PLATFORM_LABEL = function () {
    var ua = navigator.userAgent || "";
    if (/Tizen/i.test(ua)) return "Samsung TV";
    if (/Web0S|webOS/i.test(ua)) return "LG TV";
    if (/VIDAA|Hisense/i.test(ua)) return "VIDAA TV";
    if (/AFT[A-Z0-9]|Amazon|Silk/i.test(ua)) return "Fire TV";
    if (/Android/i.test(ua) && /TV|BRAVIA|AndroidTV|GoogleTV|SmartTV/i.test(ua)) return "Android TV";
    if (/iPad|Macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return "iPad";
    if (/iPhone|iPod/i.test(ua)) return "iPhone";
    if (/Android/i.test(ua)) return /Mobile/i.test(ua) ? "Celular Android" : "Android";
    return "Navegador";
  }();
  var VOD_STALL_THRESHOLD_MS = 20000;
  var NETWORK_PROBE_INTERVAL_MS = 3000;
  var NETWORK_POPUP_TIMEOUT_MS = 20000;
  var NETWORK_RESUME_DELAY_MS = 1200;
  var LOADING_WATCHDOG_MS = 45000;
  var LIVE_RECOVERY_ACTIONS = [{
    id: "retry",
    title: "Tentar novamente"
  }, {
    id: "channels",
    title: "Escolher outro canal"
  }, {
    id: "servers",
    title: "Trocar servidor"
  }];
  var HOME_CARDS = [{
    id: "live",
    title: "TV ao Vivo",
    displayTitle: "TV ao Vivo",
    teaser: "Assista canais ao vivo",
    subtitle: "Canais ao vivo com resposta rapida e foco total em TV.",
    icon: "assets/live-stream.png",
    className: "live"
  }, {
    id: "movies",
    title: "Filmes",
    displayTitle: "Filmes",
    teaser: "Explore filmes",
    subtitle: "Catalogo de filmes com visual cinematografico para a sala.",
    icon: "assets/film-reel.png",
    className: "movies"
  }, {
    id: "series",
    title: "Series",
    displayTitle: "Series",
    teaser: "Descubra series",
    subtitle: "Estrutura pronta para temporadas, episodios e continuidade.",
    icon: "assets/clapperboard.png",
    className: "series"
  }];
  var HOME_ACTIONS = [{
    id: "favorites",
    title: "Favoritos",
    subtitle: "Continue do ponto que voce salvou.",
    badge: "FV"
  }, {
    id: "settings",
    title: "Configuracoes",
    subtitle: "Sessao, atualizacao e saida desta TV.",
    badge: "CFG"
  }, {
    id: "change-server",
    title: "Trocar servidor",
    subtitle: "Escolha outra lista vinculada ao seu acesso.",
    badge: "SRV"
  }, {
    id: "refresh",
    title: "Atualizar",
    subtitle: "Refaz a conexao e recarrega os dados do servidor.",
    badge: "UPD"
  }];
  var MEDIA_HUB_ACTIONS = [{
    id: "xtream",
    title: "Acesso Xtream",
    subtitle: "Informe servidor, usuario e senha para importar sua propria lista.",
    badge: "XT"
  }, {
    id: "m3u",
    title: "Lista M3U",
    subtitle: "Adicione uma URL .m3u ou get.php e abra seus canais pela galeria.",
    badge: "M3U"
  }, {
    id: "video",
    title: "Video Direto",
    subtitle: "Use links .m3u8, .mp4, .ts e outras URLs de reproducao.",
    badge: "VID"
  }, {
    id: "photo",
    title: "Foto por URL",
    subtitle: "Abra imagens em tela cheia sem sair do aplicativo.",
    badge: "IMG"
  }, {
    id: "clear",
    title: "Limpar Galeria",
    subtitle: "Remove os itens adicionados nesta TV e deixa a area pronta para novo uso.",
    badge: "CLR"
  }, {
    id: "logout",
    title: "Voltar ao Codigo",
    subtitle: "Sai deste modo e retorna para a tela de acesso.",
    badge: "OUT"
  }];
  var SETTINGS_ACTIONS = [{
    id: "refresh",
    title: "Atualizar dados",
    subtitle: "Recarrega categorias e valida novamente a conexao com o servidor.",
    badge: "UPD"
  }, {
    id: "renovar",
    title: "Renovar acesso",
    subtitle: "Mostra o QR Code para renovar seu plano pelo celular.",
    badge: "PAG"
  }, {
    id: "parental",
    title: "Controle parental",
    subtitle: "Senha para abrir canais, filmes e series adultos (+18). Senha padrao: 0000. OK para trocar.",
    badge: "+18"
  }, {
    id: "limpar",
    title: "Limpar assistidos",
    subtitle: "Apaga a lista de filmes e series assistidos recentemente.",
    badge: "DEL"
  }, {
    id: "logout",
    title: "Sair da conta",
    subtitle: "Remove este acesso deste aparelho e retorna para a tela de codigo.",
    badge: "OUT"
  }];
  var CODE_KEYS = [{
    id: "1",
    label: "1",
    type: "digit",
    value: "1"
  }, {
    id: "2",
    label: "2",
    type: "digit",
    value: "2"
  }, {
    id: "3",
    label: "3",
    type: "digit",
    value: "3"
  }, {
    id: "4",
    label: "4",
    type: "digit",
    value: "4"
  }, {
    id: "5",
    label: "5",
    type: "digit",
    value: "5"
  }, {
    id: "6",
    label: "6",
    type: "digit",
    value: "6"
  }, {
    id: "7",
    label: "7",
    type: "digit",
    value: "7"
  }, {
    id: "8",
    label: "8",
    type: "digit",
    value: "8"
  }, {
    id: "9",
    label: "9",
    type: "digit",
    value: "9"
  }, {
    id: "back",
    label: "Apagar",
    type: "back"
  }, {
    id: "0",
    label: "0",
    type: "digit",
    value: "0"
  }, {
    id: "submit",
    label: "OK",
    type: "submit"
  }];
  var SEARCH_KEYBOARD_KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("").map(function (key) {
    return {
      id: "search-" + key.toLowerCase(),
      label: key,
      type: "char",
      value: key
    };
  }).concat([{
    id: "search-space",
    label: "Espaco",
    type: "space"
  }, {
    id: "search-backspace",
    label: "Apagar",
    type: "backspace"
  }, {
    id: "search-clear",
    label: "Limpar",
    type: "clear"
  }, {
    id: "search-apply",
    label: "Aplicar",
    type: "apply"
  }]);
  var DEMO_CODE = "1234";
  var CODIGO_MAXIMO = 9;
  (function detectarGapEmFlex() {
    try {
      var caixa = document.createElement("div");
      caixa.style.cssText = "display:flex;flex-direction:column;row-gap:1px;position:absolute;visibility:hidden;left:-99px;top:0";
      caixa.appendChild(document.createElement("div"));
      caixa.appendChild(document.createElement("div"));
      (document.body || document.documentElement).appendChild(caixa);
      var temGap = caixa.scrollHeight === 1;
      caixa.parentNode.removeChild(caixa);
      if (!temGap) {
        document.documentElement.classList.add("sem-gap-flex");
      }
    } catch (error) {
      console.log("Flex gap check skipped:", error);
    }
  })();
  var DIRECT_PLAYER_PROFILE = {
    userNumber: DEMO_CODE,
    paymentStatus: true,
    paymentUrl: "",
    createdAt: "2026-03-01T00:00:00.000Z",
    expiresAt: "2026-12-31T00:00:00.000Z",
    isPlayerMode: true,
    lists: []
  };
  var SAMPLE_PROFILE = {
    userNumber: DEMO_CODE,
    paymentStatus: true,
    paymentUrl: "",
    createdAt: "2026-03-01T00:00:00.000Z",
    expiresAt: "2026-12-31T00:00:00.000Z",
    isDemo: true,
    lists: [{
      name: "Tropical Server",
      serverId: "demo-primary",
      url: "https://demo.tropical.play/get.php?username=demo&password=demo&type=m3u_plus&output=ts",
      username: "demo",
      password: "demo"
    }]
  };
  var SAMPLE_LIBRARY = {
    live: {
      categories: [{
        category_id: "sports",
        category_name: "Sports Arena"
      }, {
        category_id: "news",
        category_name: "News Deck"
      }, {
        category_id: "music",
        category_name: "Music Flow"
      }],
      itemsByCategory: {
        sports: [{
          stream_id: "l1",
          name: "Surf Action HD",
          stream_icon: "assets/live-stream.png",
          direct_source: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
          blurb: "Canal com esportes e cenas rapidas para validar o player."
        }, {
          stream_id: "l2",
          name: "Arena Tropical",
          stream_icon: "assets/live-stream.png",
          direct_source: "https://test-streams.mux.dev/test_001/stream.m3u8",
          blurb: "Feed de teste HLS para navegacao fluida com o controle."
        }],
        news: [{
          stream_id: "l3",
          name: "Global Now",
          stream_icon: "assets/live-stream.png",
          direct_source: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",
          blurb: "Canal de noticias com fluxo de streaming continuo."
        }],
        music: [{
          stream_id: "l4",
          name: "Neon Sessions",
          stream_icon: "assets/live-stream.png",
          direct_source: "https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8",
          blurb: "Playlist pensada para testar transicoes e buffering."
        }]
      }
    },
    movies: {
      categories: [{
        category_id: "featured",
        category_name: "Featured Films"
      }, {
        category_id: "adventure",
        category_name: "Adventure Nights"
      }],
      detailsById: {},
      itemsByCategory: {
        featured: [{
          stream_id: "m1",
          name: "Big Buck Bunny",
          stream_icon: "assets/film-reel.png",
          container_extension: "mp4",
          direct_source: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          plot: "Curta para validar VOD e transicoes de player."
        }, {
          stream_id: "m2",
          name: "Elephant Dream",
          stream_icon: "assets/film-reel.png",
          container_extension: "mp4",
          direct_source: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          plot: "Outro titulo publico para navegar e testar foco em catalogo."
        }],
        adventure: [{
          stream_id: "m3",
          name: "For Bigger Blazes",
          stream_icon: "assets/film-reel.png",
          container_extension: "mp4",
          direct_source: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          plot: "Clip rapido ideal para smoke test na TV."
        }]
      }
    },
    series: {
      categories: [{
        category_id: "drama",
        category_name: "Drama Lab"
      }, {
        category_id: "doc",
        category_name: "Doc Stories"
      }],
      detailsById: {},
      itemsByCategory: {
        drama: [{
          series_id: "s1",
          name: "Ocean Stories",
          cover: "assets/clapperboard.png",
          plot: "Serie para validar a navegacao de temporadas e episodios em uma proxima iteracao."
        }],
        doc: [{
          series_id: "s2",
          name: "Beyond the Island",
          cover: "assets/clapperboard.png",
          plot: "Base pronta para detalhes e episodios, sem depender do Flutter."
        }]
      }
    },
    favorites: {
      categories: [],
      itemsByCategory: {}
    }
  };
  function mediaInputKeys() {
    var shift = Boolean(state.media && state.media.inputPrompt && state.media.inputPrompt.shift);
    var alphaNumericKeys = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map(function (char) {
      var nextValue = /[a-z]/.test(char) && shift ? char.toUpperCase() : char;
      return {
        id: "media-input-" + char,
        label: nextValue,
        type: "char",
        value: nextValue
      };
    });
    return alphaNumericKeys.concat([{
      id: "media-input-colon",
      label: ":",
      type: "char",
      value: ":"
    }, {
      id: "media-input-slash",
      label: "/",
      type: "char",
      value: "/"
    }, {
      id: "media-input-dot",
      label: ".",
      type: "char",
      value: "."
    }, {
      id: "media-input-question",
      label: "?",
      type: "char",
      value: "?"
    }, {
      id: "media-input-and",
      label: "&",
      type: "char",
      value: "&"
    }, {
      id: "media-input-equals",
      label: "=",
      type: "char",
      value: "="
    }, {
      id: "media-input-underscore",
      label: "_",
      type: "char",
      value: "_"
    }, {
      id: "media-input-hyphen",
      label: "-",
      type: "char",
      value: "-"
    }, {
      id: "media-input-percent",
      label: "%",
      type: "char",
      value: "%"
    }, {
      id: "media-input-at",
      label: "@",
      type: "char",
      value: "@"
    }, {
      id: "media-input-plus",
      label: "+",
      type: "char",
      value: "+"
    }, {
      id: "media-input-shift",
      label: shift ? "abc" : "ABC",
      type: "shift"
    }, {
      id: "media-input-space",
      label: "Espaco",
      type: "space",
      wide: true
    }, {
      id: "media-input-backspace",
      label: "Apagar",
      type: "backspace"
    }, {
      id: "media-input-clear",
      label: "Limpar",
      type: "clear"
    }, {
      id: "media-input-apply",
      label: "Salvar",
      type: "apply",
      wide: true
    }]);
  }
  var state = {
    screen: "splash",
    code: "",
    codeKeyIndex: 0,
    profile: null,
    selectedServer: null,
    homeFocusZone: "cards",
    homeCardIndex: 0,
    homeActionIndex: 0,
    settingsIndex: 0,
    serverIndex: 0,
    homeCounts: {
      live: 0,
      movies: 0,
      series: 0
    },
    catalog: {
      type: "live",
      zone: "categories",
      view: "browse",
      categoryIndex: 0,
      itemIndex: 0,
      itemWindowStartIndex: 0,
      selectedCategoryIndex: 0,
      selectedItemCategoryIndex: 0,
      selectedItemIndex: 0,
      detailActionIndex: 0,
      detailKey: "",
      movieSearchQuery: "",
      lupaFocada: false,
      movieSearchCacheKey: "",
      movieSearchCacheItems: [],
      movieSearchIndexKey: "",
      movieSearchIndexItems: [],
      movieSearchIndexTitles: [],
      seriesDetailPage: "overview",
      seriesDetailFocusZone: "actions",
      seriesDetailSeasonIndex: 0,
      seriesDetailEpisodeIndex: 0,
      seriesDetailSeriesId: ""
    },
    library: {
      live: {
        categories: [],
        itemsByCategory: {}
      },
      movies: {
        categories: [],
        itemsByCategory: {},
        detailsById: {}
      },
      series: {
        categories: [],
        itemsByCategory: {},
        detailsById: {}
      },
      favorites: {
        categories: [],
        itemsByCategory: {}
      }
    },
    favorites: [],
    playbackHistory: [],
    toastTimer: null,
    loading: false,
    loadingText: "Carregando...",
    loadingBaseText: "Carregando...",
    loadingMinUntil: 0,
    loadingCountdownSeconds: 0,
    loadingRequestId: 0,
    loadingTicker: null,
    network: {
      offline: false,
      message: "",
      resumePlayback: false,
      dismissed: false
    },
    footerText: "",
    resumePrompt: {
      open: false,
      optionIndex: 0,
      playerState: null,
      entry: null
    },
    searchPrompt: {
      open: false,
      keyIndex: 0,
      inline: false
    },
    sessionConflict: {
      open: false,
      mode: "",
      code: "",
      message: "",
      optionIndex: 0,
      secondsLeft: SESSION_CONFLICT_COUNTDOWN_SECONDS
    },
    senhaParental: {
      open: false,
      etapa: "liberar",
      digitos: "",
      keyIndex: 0,
      nova: "",
      erro: "",
      aoLiberar: null
    },
    suporte: {
      carregando: false,
      carregado: false,
      dados: null
    },
    exitPrompt: {
      open: false,
      optionIndex: 0
    },
    media: {
      focusZone: "actions",
      actionIndex: 0,
      itemIndex: 0,
      items: [],
      inputPrompt: {
        open: false,
        mode: "",
        title: "",
        subtitle: "",
        zone: "fields",
        fieldIndex: 0,
        keyIndex: 0,
        shift: false,
        fields: []
      }
    },
    player: {
      open: false,
      title: "",
      eyebrow: "",
      url: "",
      type: "",
      mediaKind: "video",
      itemId: "",
      itemSnapshot: null,
      seriesSnapshot: null,
      resumeTime: 0,
      lastPersistedTime: 0,
      engine: "",
      controlsVisible: false,
      controlIndex: 1,
      focusZone: "controls",
      currentTime: 0,
      duration: 0,
      paused: false,
      canSeek: false,
      buffering: false,
      recoveryOpen: false,
      recoveryActionIndex: 0,
      reconnectAttempts: 0,
      reconnecting: false,
      lastProgressAt: 0,
      lastProgressTime: 0,
      nativeActionPending: false,
      nativeLayoutDirty: false
    },
    nativePreview: {
      active: false,
      preparing: false,
      url: "",
      itemKey: ""
    }
  };
  var dom = {};
  var focusState = {};
  var firestore = null;
  var hlsInstance = null;
  var previewHlsInstance = null;
  var playerHudTimer = null;
  var nativePlayerLayoutTimer = null;
  var playerStallTimer = null;
  var sessionHeartbeatTimer = null;
  var sessionConflictCountdownTimer = null;
  var networkProbeTimer = null;
  var networkPopupTimer = null;
  var networkResumeTimer = null;
  var appHidden = false;
  var pendingSessionRestore = false;
  var screenSaverSuppressed = false;
  var pendingSessionRestoreTimer = null;
  var loadingWatchdogTimer = null;
  var inputState = {
    enterHoldTimer: null,
    enterHoldActive: false,
    enterHoldTriggered: false
  };
  document.addEventListener("DOMContentLoaded", boot);
  function boot() {
    cacheDom();
    suppressVoiceGuideNarration();
    bindEvents();
    registerVisibilityHandling();
    registerGlobalErrorHandlers();
    registerTizenKeys();
    initFirebase();
    syncNetworkState();
    restoreFavorites();
    restorePlaybackHistory();
    restoreMediaGallery();
    render();
    appHidden = isDocumentHidden();
    if (appHidden) {
      pendingSessionRestore = true;
      startPendingSessionRestoreWatch();
      return;
    }
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(function () {
        safeRestoreSession();
      });
    } else {
      safeRestoreSession();
    }
  }
  function startPendingSessionRestoreWatch() {
    clearPendingSessionRestoreWatch();
    pendingSessionRestoreTimer = window.setInterval(function () {
      if (isDocumentHidden()) {
        return;
      }
      clearPendingSessionRestoreWatch();
      appHidden = false;
      if (!pendingSessionRestore) {
        return;
      }
      pendingSessionRestore = false;
      safeRestoreSession();
    }, 1000);
  }
  function clearPendingSessionRestoreWatch() {
    if (!pendingSessionRestoreTimer) {
      return;
    }
    clearInterval(pendingSessionRestoreTimer);
    pendingSessionRestoreTimer = null;
  }
  function isDocumentHidden() {
    if (typeof document.hidden === "boolean") {
      return document.hidden;
    }
    return document.visibilityState === "hidden";
  }
  function registerVisibilityHandling() {
    window.addEventListener("pagehide", enviarDadosAoSair);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        enviarDadosAoSair();
      }
    });
    document.addEventListener("visibilitychange", function () {
      if (isDocumentHidden()) {
        handleAppHidden();
        return;
      }
      handleAppVisible();
    });
  }
  function handleAppHidden() {
    if (appHidden) {
      return;
    }
    appHidden = true;
    captureNetworkPlaybackSnapshot();
    suspendPlaybackEngines();
    stopCatalogPreview();
    stopSessionHeartbeat();
    clearNetworkProbe();
    syncScreenSaverState();
  }
  function handleAppVisible() {
    if (!appHidden) {
      return;
    }
    appHidden = false;
    state.network.dismissed = false;
    syncScreenSaverState();
    if (pendingSessionRestore) {
      pendingSessionRestore = false;
      clearPendingSessionRestoreWatch();
      safeRestoreSession();
      return;
    }
    var code = String(state.code || localStorage.getItem(STORAGE_KEYS.userCode) || "").trim();
    if (code) {
      startSessionHeartbeat(code);
    }
    if (!isNetworkConnected()) {
      handleNetworkOffline();
      return;
    }
    scheduleNetworkPlaybackResume();
  }
  function suspendPlaybackEngines() {
    if (!state.player.open || state.player.mediaKind === "image") {
      return;
    }
    clearPlayerStallMonitor();
    stopNativePlayer();
    destroyManagedHls("player");
    resetVideoElement(dom.playerVideo);
    state.player.engine = "";
    state.player.paused = true;
    state.player.buffering = false;
    state.player.reconnecting = false;
  }
  function syncScreenSaverState() {
    var shouldSuppress = Boolean(state.player.open && state.player.mediaKind !== "image" && !state.player.paused && !appHidden);
    if (shouldSuppress === screenSaverSuppressed) {
      return;
    }
    screenSaverSuppressed = shouldSuppress;
    applyScreenSaverState(!shouldSuppress);
  }
  function applyScreenSaverState(enabled) {
    try {
      if (!window.webapis || !webapis.appcommon || typeof webapis.appcommon.setScreenSaver !== "function") {
        return;
      }
      var states = webapis.appcommon.AppCommonScreenSaverState || {};
      var target = enabled ? states.SCREEN_SAVER_ON : states.SCREEN_SAVER_OFF;
      if (typeof target === "undefined") {
        return;
      }
      webapis.appcommon.setScreenSaver(target, function () {}, function (error) {
        console.log("Screen saver update failed:", error);
      });
    } catch (error) {
      console.log("Screen saver update skipped:", error);
    }
  }
  function suppressVoiceGuideNarration() {
    enforceVoiceGuideSuppression();
    try {
      document.documentElement.setAttribute("lang", "pt-BR");
    } catch (error) {
      console.log("Voice guide language attribute skipped:", error);
    }
  }
  function enforceVoiceGuideSuppression() {
    if (!dom.appShell) {
      return;
    }
    try {
      if (dom.appShell.getAttribute("aria-hidden") !== "true") {
        dom.appShell.setAttribute("aria-hidden", "true");
      }
      if (dom.appShell.getAttribute("role") !== "presentation") {
        dom.appShell.setAttribute("role", "presentation");
      }
    } catch (error) {
      console.log("Voice guide suppression skipped:", error);
    }
  }
  function cacheDom() {
    dom.appShell = document.querySelector(".app-shell");
    ensureSearchOverlayDom();
    dom.statusStrip = document.getElementById("statusStrip");
    dom.catalogTopbarType = document.getElementById("catalogTopbarType");
    dom.footerHint = document.getElementById("footerHint");
    dom.screens = {
      splash: document.getElementById("screenSplash"),
      code: document.getElementById("screenCode"),
      servers: document.getElementById("screenServers"),
      payment: document.getElementById("screenPayment"),
      media: document.getElementById("screenMedia"),
      home: document.getElementById("screenHome"),
      settings: document.getElementById("screenSettings"),
      catalog: document.getElementById("screenCatalog")
    };
    dom.codeDisplay = document.getElementById("codeDisplay");
    dom.loginAppVersion = document.getElementById("loginAppVersion");
    dom.loginSessionNotice = document.getElementById("loginSessionNotice");
    dom.codeKeypad = document.getElementById("codeKeypad");
    dom.serverSubtitle = document.getElementById("serverSubtitle");
    dom.serverList = document.getElementById("serverList");
    dom.paymentQrImage = document.getElementById("paymentQrImage");
    dom.paymentQrCaption = document.getElementById("paymentQrCaption");
    dom.paymentActions = document.getElementById("paymentActions");
    dom.mediaHubSummary = document.getElementById("mediaHubSummary");
    dom.mediaHubActions = document.getElementById("mediaHubActions");
    dom.mediaGalleryTitle = document.getElementById("mediaGalleryTitle");
    dom.mediaGallerySubtitle = document.getElementById("mediaGallerySubtitle");
    dom.mediaGalleryList = document.getElementById("mediaGalleryList");
    dom.homeTitle = document.getElementById("homeTitle");
    dom.homeAppVersion = document.getElementById("homeAppVersion");
    dom.heroMeta = document.getElementById("heroMeta");
    dom.homeCards = document.getElementById("homeCards");
    dom.homeActions = document.getElementById("homeActions");
    dom.settingsSummary = document.getElementById("settingsSummary");
    dom.settingsList = document.getElementById("settingsList");
    dom.catalogScreen = document.getElementById("screenCatalog");
    dom.catalogGrid = document.getElementById("catalogGrid");
    dom.catalogEyebrow = document.getElementById("catalogEyebrow");
    dom.catalogTitle = document.getElementById("catalogTitle");
    dom.catalogHint = document.getElementById("catalogHint");
    dom.categoryList = document.getElementById("categoryList");
    dom.catalogLupa = document.getElementById("catalogLupa");
    dom.catalogLupaTitulo = document.getElementById("catalogLupaTitulo");
    dom.itemList = document.getElementById("itemList");
    dom.detailCard = document.getElementById("detailCard");
    dom.loadingOverlay = document.getElementById("loadingOverlay");
    dom.loadingText = document.getElementById("loadingText");
    dom.networkOverlay = document.getElementById("networkOverlay");
    dom.networkTitle = document.getElementById("networkTitle");
    dom.networkMessage = document.getElementById("networkMessage");
    dom.sessionOverlay = document.getElementById("sessionOverlay");
    dom.sessionEyebrow = document.getElementById("sessionEyebrow");
    dom.sessionTitle = document.getElementById("sessionTitle");
    dom.sessionMessage = document.getElementById("sessionMessage");
    dom.sessionCountdown = document.getElementById("sessionCountdown");
    dom.sessionActions = document.getElementById("sessionActions");
    dom.exitOverlay = document.getElementById("exitOverlay");
    dom.senhaOverlay = document.getElementById("senhaParentalOverlay");
    dom.renovacaoOverlay = document.getElementById("renovacaoOverlay");
    dom.renovacaoTitulo = document.getElementById("renovacaoTitulo");
    dom.renovacaoTexto = document.getElementById("renovacaoTexto");
    dom.renovacaoQr = document.getElementById("renovacaoQr");
    dom.senhaTitulo = document.getElementById("senhaParentalTitulo");
    dom.senhaTexto = document.getElementById("senhaParentalTexto");
    dom.senhaPontos = document.getElementById("senhaParentalPontos");
    dom.senhaErro = document.getElementById("senhaParentalErro");
    dom.senhaTeclado = document.getElementById("senhaParentalTeclado");
    dom.settingsSupport = document.getElementById("settingsSupport");
    dom.exitActions = document.getElementById("exitActions");
    dom.resumeOverlay = document.getElementById("resumeOverlay");
    dom.resumeTitle = document.getElementById("resumeTitle");
    dom.resumeSubtitle = document.getElementById("resumeSubtitle");
    dom.resumeMeta = document.getElementById("resumeMeta");
    dom.resumeActions = document.getElementById("resumeActions");
    dom.searchOverlay = document.getElementById("searchOverlay");
    dom.searchTitle = document.getElementById("searchTitle");
    dom.searchSubtitle = document.getElementById("searchSubtitle");
    dom.searchQueryDisplay = document.getElementById("searchQueryDisplay");
    dom.searchMeta = document.getElementById("searchMeta");
    dom.searchKeyboard = document.getElementById("searchKeyboard");
    dom.searchNativeInput = null;
    dom.mediaInputOverlay = document.getElementById("mediaInputOverlay");
    dom.mediaInputEyebrow = document.getElementById("mediaInputEyebrow");
    dom.mediaInputTitle = document.getElementById("mediaInputTitle");
    dom.mediaInputSubtitle = document.getElementById("mediaInputSubtitle");
    dom.mediaInputFields = document.getElementById("mediaInputFields");
    dom.mediaInputKeyboard = document.getElementById("mediaInputKeyboard");
    dom.playerOverlay = document.getElementById("playerOverlay");
    dom.playerStage = document.getElementById("playerStage");
    dom.playerAvObject = document.getElementById("playerAvObject");
    dom.playerHud = document.getElementById("playerHud");
    dom.playerRecovery = document.getElementById("playerRecovery");
    dom.playerRecoveryMessage = document.getElementById("playerRecoveryMessage");
    dom.playerRecoveryActions = document.getElementById("playerRecoveryActions");
    dom.playerEyebrow = document.getElementById("playerEyebrow");
    dom.playerTitle = document.getElementById("playerTitle");
    dom.playerStatus = document.getElementById("playerStatus");
    dom.playerProgressRow = document.getElementById("playerProgressRow");
    dom.playerCurrentTime = document.getElementById("playerCurrentTime");
    dom.playerDuration = document.getElementById("playerDuration");
    dom.playerProgressFill = document.getElementById("playerProgressFill");
    dom.playerToggleLabel = document.getElementById("playerToggleLabel");
    dom.playerControlNodes = Array.from(document.querySelectorAll(".player-control-pill"));
    dom.playerVideo = document.getElementById("playerVideo");
    dom.playerImage = document.getElementById("playerImage");
    dom.toast = document.getElementById("toast");
    dom.resumeActionNodes = [];
    dom.searchKeyNodes = [];
    dom.seriesSeasonNodes = [];
    dom.seriesEpisodeNodes = [];
    dom.mediaActionNodes = [];
    dom.mediaItemNodes = [];
    dom.mediaInputFieldNodes = [];
    dom.mediaInputKeyNodes = [];
  }
  function ensureSearchOverlayDom() {
    if (document.getElementById("searchOverlay") || !dom.appShell) {
      return;
    }
    var overlayWrapper = document.createElement("div");
    overlayWrapper.innerHTML = '<div class="overlay search-overlay hidden" id="searchOverlay" tabindex="-1">' + '<div class="search-dialog">' + '<p class="eyebrow">Busca de filmes</p>' + '<h2 role="presentation" id="searchTitle">Pesquisar em Todos</h2>' + '<p class="panel-subtitle search-subtitle" id="searchSubtitle">Use o teclado abaixo para filtrar os filmes pelo nome.</p>' + '<div class="search-query-display" id="searchQueryDisplay"></div>' + '<div class="search-meta" id="searchMeta"></div>' + '<div class="search-keyboard" id="searchKeyboard"></div>' + "</div></div>";
    var overlayNode = overlayWrapper.firstElementChild;
    var toastNode = document.getElementById("toast");
    if (toastNode && toastNode.parentNode === dom.appShell) {
      dom.appShell.insertBefore(overlayNode, toastNode);
      return;
    }
    dom.appShell.appendChild(overlayNode);
  }
  var saindoPeloHistorico = false;
  function prenderVoltarDoMsx() {
    if (window.tizen) {
      return;
    }
    try {
      window.history.pushState({
        tropicalPlay: true
      }, "", window.location.href);
    } catch (error) {
      console.log("pushState indisponivel, Voltar pode sair do app:", error);
      return;
    }
    window.addEventListener("popstate", function () {
      if (saindoPeloHistorico) {
        return;
      }
      try {
        window.history.pushState({
          tropicalPlay: true
        }, "", window.location.href);
      } catch (error) {
        console.log("pushState falhou ao reprender o Voltar:", error);
      }
      document.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true
      }));
      document.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Escape",
        bubbles: true,
        cancelable: true
      }));
    });
  }
  var EVENTOS_DO_PLAYER = {
    ended: function ended() {
      handlePlayerPlaybackEnded();
    },
    error: function error() {
      showToast("Nao foi possivel reproduzir este video.", "error");
    },
    loadedmetadata: function loadedmetadata() {
      handlePlayerVideoTelemetry();
    },
    durationchange: function durationchange() {
      handlePlayerVideoTelemetry();
    },
    timeupdate: function timeupdate() {
      handlePlayerVideoTelemetry();
    },
    play: function play() {
      handlePlayerVideoPlaybackChange();
    },
    pause: function pause() {
      handlePlayerVideoPlaybackChange();
    },
    waiting: function waiting() {
      state.player.buffering = true;
    },
    playing: function playing() {
      state.player.buffering = false;
      markPlayerProgress(dom.playerVideo.currentTime, true);
    },
    stalled: function stalled() {
      state.player.buffering = false;
    },
    seeking: function seeking() {
      handlePlayerVideoTelemetry();
    },
    seeked: function seeked() {
      handlePlayerVideoTelemetry();
    }
  };
  var EVENTOS_DO_PLAYER_LIGADOS = {};
  Object.keys(EVENTOS_DO_PLAYER).forEach(function (nome) {
    EVENTOS_DO_PLAYER_LIGADOS[nome] = function () {
      if (!state.player.open) {
        return;
      }
      EVENTOS_DO_PLAYER[nome]();
    };
  });
  function ligarEventosDoPlayer(elemento) {
    Object.keys(EVENTOS_DO_PLAYER_LIGADOS).forEach(function (nome) {
      elemento.addEventListener(nome, EVENTOS_DO_PLAYER_LIGADOS[nome]);
    });
  }
  function desligarEventosDoPlayer(elemento) {
    Object.keys(EVENTOS_DO_PLAYER_LIGADOS).forEach(function (nome) {
      elemento.removeEventListener(nome, EVENTOS_DO_PLAYER_LIGADOS[nome]);
    });
  }
  function videoDaSamsungNoCorpo() {
    if (!/Tizen/i.test(navigator.userAgent || "") || !dom.playerVideo || !document.body) {
      return;
    }
    document.body.insertBefore(dom.playerVideo, document.body.firstChild);
    document.documentElement.classList.add("video-no-corpo");
  }
  function teclaSintetica(tecla) {
    document.dispatchEvent(new KeyboardEvent("keydown", {
      key: tecla,
      bubbles: true,
      cancelable: true
    }));
    document.dispatchEvent(new KeyboardEvent("keyup", {
      key: tecla,
      bubbles: true,
      cancelable: true
    }));
  }
  var FOCO_POR_PONTEIRO = {
    homeCards: function homeCards(i) {
      state.homeFocusZone = "cards";
      state.homeCardIndex = i;
      syncHomeFocus();
    },
    homeActions: function homeActions(i) {
      state.homeFocusZone = "actions";
      state.homeActionIndex = i;
      syncHomeFocus();
    },
    code: function code(i) {
      state.codeKeyIndex = i;
      syncCodeFocus();
    },
    servers: function servers(i) {
      state.serverIndex = i;
      syncServerFocus();
    },
    settings: function settings(i) {
      state.settingsIndex = i;
      syncSettingsFocus();
    },
    catalogLupa: function catalogLupa() {
      abrirPesquisaEmTodos();
      return true;
    },
    catalogCategories: function catalogCategories(i) {
      state.catalog.lupaFocada = false;
      state.catalog.zone = "categories";
      state.catalog.categoryIndex = i;
      if (catalogUsesSelectionModel()) {
        syncCatalogFocus();
        openFocusedSelectionCategory();
      } else {
        state.catalog.itemIndex = 0;
        ensureItemsForCurrentCategory().then(renderCatalogScreen);
        renderCatalogScreen();
      }
      return true;
    },
    catalogItems: function catalogItems(i) {
      state.catalog.lupaFocada = false;
      state.catalog.zone = "items";
      state.catalog.itemIndex = (state.catalog.itemWindowStartIndex || 0) + i;
      syncCatalogFocus();
    },
    catalogDetailActions: function catalogDetailActions(i) {
      state.catalog.detailActionIndex = i;
      if ("seriesDetailFocusZone" in state.catalog) {
        state.catalog.seriesDetailFocusZone = "actions";
      }
    },
    seriesSeasons: function seriesSeasons(i) {
      state.catalog.seriesDetailFocusZone = "seasons";
      if (state.catalog.seriesDetailSeasonIndex !== i) {
        state.catalog.seriesDetailSeasonIndex = i;
        state.catalog.seriesDetailEpisodeIndex = 0;
        state.catalog.detailKey = "";
      }
    },
    seriesEpisodes: function seriesEpisodes(i) {
      state.catalog.seriesDetailFocusZone = "episodes";
      state.catalog.seriesDetailEpisodeIndex = i;
    },
    searchKeys: function searchKeys(i) {
      state.searchPrompt.keyIndex = i;
    },
    resumeActions: function resumeActions(i) {
      state.resumePrompt.optionIndex = i;
    },
    proximoEpisodio: function proximoEpisodio(i) {
      if (contagemDoProximo) {
        contagemDoProximo.foco = i;
      }
    },
    playerControls: function playerControls(i) {
      state.player.controlIndex = i;
      runFocusedPlayerControl();
      return true;
    }
  };
  function marcarPonteiro() {
    document.documentElement.classList.add("com-ponteiro");
  }
  function cliqueOuToque(event) {
    marcarPonteiro();
    if (event.target && event.target.closest && event.target.closest("input, textarea, select")) {
      return;
    }
    if (event.target && event.target.closest && event.target.closest("#botaoVoltarNaTela")) {
      return;
    }
    var naPrevia = !state.player.open && state.screen === "catalog" && event.target && event.target.closest && (event.target.closest(".detail-preview-shell") || event.target === dom.playerVideo && document.documentElement.classList.contains("previa-no-corpo"));
    if (naPrevia) {
      var canal = currentSelectedItem();
      if (canal && catalogContentType(canal, state.catalog.type) === "live") {
        event.preventDefault();
        activateCatalogItem(canal);
        return;
      }
    }
    if (state.renovacaoAberta) {
      event.preventDefault();
      fecharRenovacao();
      return;
    }
    var teclaDaSenha = event.target && event.target.closest ? event.target.closest(".senha-tecla") : null;
    if (teclaDaSenha && state.senhaParental.open) {
      event.preventDefault();
      state.senhaParental.keyIndex = Number(teclaDaSenha.getAttribute("data-indice")) || 0;
      executarTeclaDaSenha();
      return;
    }
    if (state.senhaParental.open && event.target && event.target.closest && event.target.closest("#senhaParentalOverlay")) {
      event.preventDefault();
      return;
    }
    var botaoDeAviso = event.target && event.target.closest ? event.target.closest(".session-action, .exit-action, .player-recovery-action") : null;
    if (botaoDeAviso && botaoDeAviso.parentNode) {
      event.preventDefault();
      var posicao = Array.prototype.indexOf.call(botaoDeAviso.parentNode.children, botaoDeAviso);
      if (botaoDeAviso.classList.contains("session-action")) {
        state.sessionConflict.optionIndex = posicao;
        renderSessionConflictOverlay();
      } else if (botaoDeAviso.classList.contains("exit-action")) {
        state.exitPrompt.optionIndex = posicao;
        renderExitPromptOverlay();
      } else {
        state.player.recoveryActionIndex = posicao;
        renderPlayerRecovery();
      }
      teclaSintetica("Enter");
      return;
    }
    if (state.network.offline && event.target && event.target.closest && event.target.closest(".network-dialog")) {
      event.preventDefault();
      teclaSintetica("Enter");
      return;
    }
    var no = event.target && event.target.closest ? event.target.closest("[data-foco-grupo]") : null;
    if (!no) {
      if (state.player.open) {
        if (state.player.controlsVisible) {
          state.player.controlsVisible = false;
          renderPlayer();
        } else {
          showPlayerControls();
        }
      }
      return;
    }
    var grupo = no.getAttribute("data-foco-grupo");
    var indice = Number(no.getAttribute("data-foco-indice")) || 0;
    var levar = FOCO_POR_PONTEIRO[grupo];
    if (!levar) {
      return;
    }
    event.preventDefault();
    if (grupo === "catalogItems" && event.target.closest(".coracao")) {
      levar(indice);
      toggleFavoriteForFocusedItem();
      return;
    }
    if (levar(indice) === true) {
      return;
    }
    teclaSintetica("Enter");
  }
  var ultimaRoda = 0;
  function rodaDoMouse(event) {
    var agora = Date.now();
    if (agora - ultimaRoda < 140 || Math.abs(event.deltaY) < 4) {
      return;
    }
    ultimaRoda = agora;
    marcarPonteiro();
    teclaSintetica(event.deltaY > 0 ? "ArrowDown" : "ArrowUp");
  }
  var inicioDoToque = null;
  function comecoDoToque(event) {
    marcarPonteiro();
    var toque = event.touches && event.touches[0];
    inicioDoToque = toque ? {
      x: toque.clientX,
      y: toque.clientY
    } : null;
  }
  function fimDoToque(event) {
    var toque = event.changedTouches && event.changedTouches[0];
    if (!inicioDoToque || !toque) {
      return;
    }
    var dx = toque.clientX - inicioDoToque.x;
    var dy = toque.clientY - inicioDoToque.y;
    inicioDoToque = null;
    var passos = Math.min(8, Math.floor(Math.max(Math.abs(dx), Math.abs(dy)) / 60));
    if (passos < 1) {
      return;
    }
    var tecla = Math.abs(dy) >= Math.abs(dx) ? dy < 0 ? "ArrowDown" : "ArrowUp" : dx < 0 ? "ArrowRight" : "ArrowLeft";
    for (var i = 0; i < passos; i += 1) {
      teclaSintetica(tecla);
    }
  }
  function ligarMouseEToque() {
    var botao = document.createElement("button");
    botao.id = "botaoVoltarNaTela";
    botao.type = "button";
    botao.textContent = "\u2190 Voltar";
    botao.addEventListener("click", function (event) {
      event.preventDefault();
      teclaSintetica("Escape");
    });
    document.body.appendChild(botao);
    document.addEventListener("click", cliqueOuToque, true);
    document.addEventListener("mousemove", marcarPonteiro, {
      passive: true
    });
    document.addEventListener("wheel", rodaDoMouse, {
      passive: true
    });
    document.addEventListener("touchstart", comecoDoToque, {
      passive: true
    });
    document.addEventListener("touchend", fimDoToque, {
      passive: true
    });
  }
  function bindEvents() {
    ligarMouseEToque();
    videoDaSamsungNoCorpo();
    prenderVoltarDoMsx();
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("keyup", onKeyUp, true);
    window.addEventListener("resize", scheduleNativePlayerLayoutSync);
    window.addEventListener("resize", syncNativePreviewDisplayRect);
    registerNetworkListeners();
    if (dom.mediaHubActions) {
      dom.mediaHubActions.addEventListener("click", handleMediaHubActionClick);
    }
    if (dom.mediaGalleryList) {
      dom.mediaGalleryList.addEventListener("click", handleMediaGalleryClick);
      dom.mediaGalleryList.addEventListener("click", handleMediaInputFieldClick);
      dom.mediaGalleryList.addEventListener("click", handleMediaInputKeyboardClick);
    }
    if (dom.mediaInputFields) {
      dom.mediaInputFields.addEventListener("click", handleMediaInputFieldClick);
    }
    if (dom.mediaInputKeyboard) {
      dom.mediaInputKeyboard.addEventListener("click", handleMediaInputKeyboardClick);
    }
    ligarEventosDoPlayer(dom.playerVideo);
    if (dom.playerImage) {
      dom.playerImage.addEventListener("error", function () {
        showToast("Nao foi possivel abrir esta imagem.", "error");
      });
    }
  }
  function registerGlobalErrorHandlers() {
    window.addEventListener("error", function (event) {
      console.log("Unhandled error:", event && event.error ? event.error : event);
      recoverFromMediaPromptFailure();
    });
    window.addEventListener("unhandledrejection", function (event) {
      console.log("Unhandled rejection:", event && Object.prototype.hasOwnProperty.call(event, "reason") ? event.reason : event);
      recoverFromMediaPromptFailure();
    });
  }
  function recoverFromMediaPromptFailure() {
    if (!state.media.inputPrompt.open) {
      return;
    }
    resetMediaInputPromptState();
    render();
    if (dom.toast) {
      showToast("O formulario desta tela foi reiniciado. Tente abrir novamente.", "error");
    }
  }
  function mediaDebug(step, details) {
    var payload = details && _typeof(details) === "object" ? JSON.stringify(details) : details !== undefined && details !== null ? String(details) : "";
    console.log("[MEDIA_DEBUG] " + step + (payload ? " " + payload : ""));
  }
  function registerTizenKeys() {
    try {
      if (window.tizen && tizen.tvinputdevice) {
        var keys = ["MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaRewind", "MediaFastForward", "MediaTrackNext", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        keys.forEach(function (key) {
          try {
            tizen.tvinputdevice.registerKey(key);
          } catch (error) {
            console.log("Key registration skipped:", key, error);
          }
        });
      }
    } catch (error) {
      console.log("Tizen key setup skipped:", error);
    }
  }
  var motivoFirebase = "";
  function initFirebase() {
    try {
      if (window.firebase && !firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
      }
      if (window.firebase) {
        firestore = firebase.firestore();
        if (document.documentElement.classList.contains("app-legado")) {
          firestore.settings({
            experimentalForceLongPolling: true,
            merge: true
          });
        }
      }
    } catch (error) {
      console.log("Firebase init failed:", error);
      firestore = null;
      motivoFirebase = String(error && (error.message || error.name) || error || "").slice(0, 80);
    }
    if (!firestore && !motivoFirebase) {
      motivoFirebase = window.firebase ? "sem firestore" : "biblioteca nao carregou";
    }
  }
  function safeRestoreSession() {
    var pending = null;
    try {
      pending = restoreSession();
    } catch (error) {
      handleRestoreSessionFailure(error);
      return;
    }
    if (pending && typeof pending.catch === "function") {
      pending.catch(handleRestoreSessionFailure);
    }
  }
  function handleRestoreSessionFailure(error) {
    console.log("Session restore failed:", error);
    clearLoadingTicker();
    clearLoadingWatchdog();
    state.loading = false;
    state.loadingMinUntil = 0;
    state.loadingCountdownSeconds = 0;
    renderLoading();
    state.code = localStorage.getItem(STORAGE_KEYS.rememberedCode) || "";
    setScreen("code");
    showToast("Nao foi possivel restaurar o acesso. Valide seu codigo novamente.", "error");
  }
  function codigoVindoDoMsx() {
    var codigo = "";
    try {
      codigo = new URLSearchParams(window.location.search).get("codigo") || "";
    } catch (error) {
      var achado = /[?&]codigo=([^&#]*)/.exec(window.location.search || "");
      codigo = achado ? decodeURIComponent(achado[1]) : "";
    }
    codigo = String(codigo).replace(/[^0-9A-Za-z]/g, "");
    if (!codigo) {
      return;
    }
    try {
      var limpo = window.location.pathname + window.location.search.replace(/([?&])codigo=[^&#]*&?/, "$1").replace(/[?&]$/, "") + window.location.hash;
      window.history.replaceState(window.history.state, "", limpo);
    } catch (error) {
      console.log("Nao tirei o codigo do endereco:", error);
    }
    if (localStorage.getItem(STORAGE_KEYS.userCode) === codigo) {
      return;
    }
    localStorage.removeItem(STORAGE_KEYS.profile);
    localStorage.removeItem(STORAGE_KEYS.selectedServer);
    localStorage.setItem(STORAGE_KEYS.userCode, codigo);
    localStorage.setItem(STORAGE_KEYS.rememberedCode, codigo);
  }
  function restoreSession() {
    return _restoreSession.apply(this, arguments);
  }
  function _restoreSession() {
    _restoreSession = _asyncToGenerator(_regenerator().m(function _callee2() {
      var savedCode, savedProfile, savedServer, profile, accessResult, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            codigoVindoDoMsx();
            savedCode = localStorage.getItem(STORAGE_KEYS.userCode);
            savedProfile = safeJsonParse(localStorage.getItem(STORAGE_KEYS.profile));
            savedServer = safeJsonParse(localStorage.getItem(STORAGE_KEYS.selectedServer));
            if (!(!savedCode && !savedProfile)) {
              _context2.n = 1;
              break;
            }
            state.code = localStorage.getItem(STORAGE_KEYS.rememberedCode) || "";
            setScreen("code");
            showToast("Pronto para validar seu codigo na TV.", "success");
            return _context2.a(2);
          case 1:
            showLoading("Restaurando acesso...");
            etapaDaAbertura("Conectando ao servidor...", 25);
            profile = savedProfile;
            if (!savedCode) {
              _context2.n = 4;
              break;
            }
            _context2.n = 2;
            return checkDeviceAccess(savedCode);
          case 2:
            accessResult = _context2.v;
            etapaDaAbertura("Validando acesso...", 45);
            if (!(accessResult.status === "alreadyInUse")) {
              _context2.n = 3;
              break;
            }
            hideLoading();
            setScreen("code");
            state.code = savedCode;
            openSessionConflict("login", savedCode, accessResult.message);
            return _context2.a(2);
          case 3:
            if (!accessResult.allowed || !accessResult.profile) {
              profile = null;
            } else {
              profile = accessResult.profile;
            }
          case 4:
            if (!(!profile || !profile.paymentStatus)) {
              _context2.n = 6;
              break;
            }
            hideLoading();
            if (!profile) {
              _context2.n = 5;
              break;
            }
            showPaymentScreen(profile, savedCode || profile.userNumber || "");
            return _context2.a(2);
          case 5:
            clearSession();
            setScreen("code");
            showToast("Nao encontramos um acesso valido salvo nesta TV.", "error");
            return _context2.a(2);
          case 6:
            state.profile = profile;
            state.code = savedCode || profile.userNumber || "";
            if (state.code) {
              localStorage.setItem(STORAGE_KEYS.rememberedCode, state.code);
            }
            localStorage.removeItem(STORAGE_KEYS.loginNotice);
            localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
            startSessionHeartbeat(state.code);
            if (!isMediaHubProfile(profile)) {
              _context2.n = 7;
              break;
            }
            hideLoading();
            state.selectedServer = null;
            setScreen("media");
            showToast("Acesso restaurado.", "success");
            return _context2.a(2);
          case 7:
            if (!savedServer) {
              _context2.n = 11;
              break;
            }
            state.selectedServer = savedServer;
            etapaDaAbertura("Carregando canais e filmes...", 70);
            _context2.p = 8;
            _context2.n = 9;
            return loadHomeData();
          case 9:
            etapaDaAbertura("Quase pronto...", 92);
            hideLoading();
            setScreen("home");
            showToast("Sessao restaurada.", "success");
            return _context2.a(2);
          case 10:
            _context2.p = 10;
            _t2 = _context2.v;
            console.log("Failed to restore server session:", _t2);
            state.selectedServer = null;
          case 11:
            hideLoading();
            setScreen("servers");
          case 12:
            return _context2.a(2);
        }
      }, _callee2, null, [[8, 10]]);
    }));
    return _restoreSession.apply(this, arguments);
  }
  function onKeyDown(event) {
    if (state.renovacaoAberta) {
      var renovacaoAction = normalizeKey(event);
      if (!renovacaoAction) {
        return;
      }
      consumeKeyEvent(event);
      if (renovacaoAction.type === "enter" || renovacaoAction.type === "back" || renovacaoAction.type === "stop") {
        fecharRenovacao();
      }
      return;
    }
    if (state.senhaParental.open) {
      var senhaAction = normalizeKey(event);
      if (!senhaAction) {
        return;
      }
      consumeKeyEvent(event);
      teclasDaSenhaParental(senhaAction);
      return;
    }
    if (state.exitPrompt.open) {
      var exitAction = normalizeKey(event);
      if (!exitAction) {
        return;
      }
      consumeKeyEvent(event);
      handleExitPromptKeys(exitAction);
      return;
    }
    if (state.network.offline) {
      var networkAction = normalizeKey(event);
      if (!networkAction) {
        return;
      }
      consumeKeyEvent(event);
      handleNetworkKeys(networkAction);
      return;
    }
    if (state.sessionConflict.open) {
      var sessionAction = normalizeKey(event);
      if (!sessionAction) {
        return;
      }
      consumeKeyEvent(event);
      handleSessionConflictKeys(sessionAction);
      return;
    }
    if (state.loading) {
      cancelFavoriteHold();
      consumeKeyEvent(event);
      return;
    }
    if (state.resumePrompt.open) {
      var promptAction = normalizeKey(event);
      if (!promptAction) {
        return;
      }
      consumeKeyEvent(event);
      handleResumePromptKeys(promptAction, event);
      return;
    }
    if (state.searchPrompt.open) {
      var searchAction = normalizeKey(event);
      if (isNativeSearchInputFocused()) {
        if (searchAction && (searchAction.type === "back" || searchAction.type === "stop")) {
          consumeKeyEvent(event);
          closeMovieSearchOverlay();
        }
        return;
      }
      if (isSearchTextInputEvent(event)) {
        consumeKeyEvent(event);
        appendMovieSearchQuery(event.key);
        refreshMovieSearchResults();
        return;
      }
      if (!searchAction) {
        return;
      }
      consumeKeyEvent(event);
      handleSearchPromptKeys(searchAction, event);
      return;
    }
    if (state.media.inputPrompt.open) {
      var mediaInputAction = normalizeKey(event);
      if (isMediaInputTextEvent(event)) {
        consumeKeyEvent(event);
        appendMediaInputCharacter(event.key);
        renderMediaInputOverlay();
        return;
      }
      if (!mediaInputAction) {
        return;
      }
      consumeKeyEvent(event);
      handleMediaInputPromptKeys(mediaInputAction, event);
      return;
    }
    if (handleFavoriteHoldKeyDown(event)) {
      return;
    }
    var action = normalizeKey(event);
    if (!action) {
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    event.stopPropagation();
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    }
    if (state.player.open) {
      handlePlayerKeys(action, event);
      return;
    }
    switch (state.screen) {
      case "splash":
        if (action.type === "back") {
          openExitPrompt();
          return;
        }
        if (action.type === "enter") {
          safeRestoreSession();
        }
        break;
      case "code":
        handleCodeKeys(action, event);
        break;
      case "servers":
        handleServerKeys(action, event);
        break;
      case "payment":
        handlePaymentKeys(action, event);
        break;
      case "media":
        handleMediaKeys(action, event);
        break;
      case "home":
        handleHomeKeys(action, event);
        break;
      case "settings":
        handleSettingsKeys(action, event);
        break;
      case "catalog":
        handleCatalogKeys(action, event);
        break;
      default:
        break;
    }
  }
  function onKeyUp(event) {
    handleFavoriteHoldKeyUp(event);
  }
  function handleFavoriteHoldKeyDown(event) {
    if (!isEnterKeyEvent(event) || !shouldUseFavoriteHold()) {
      return false;
    }
    consumeKeyEvent(event);
    if (inputState.enterHoldActive) {
      return true;
    }
    inputState.enterHoldActive = true;
    inputState.enterHoldTriggered = false;
    inputState.enterHoldTimer = setTimeout(function () {
      inputState.enterHoldTimer = null;
      inputState.enterHoldTriggered = true;
      toggleFavoriteForFocusedItem();
    }, FAVORITE_HOLD_MS);
    return true;
  }
  function handleFavoriteHoldKeyUp(event) {
    if (!isEnterKeyEvent(event) || !inputState.enterHoldActive) {
      return false;
    }
    consumeKeyEvent(event);
    if (inputState.enterHoldTimer) {
      clearTimeout(inputState.enterHoldTimer);
      inputState.enterHoldTimer = null;
    }
    var wasHoldTriggered = inputState.enterHoldTriggered;
    inputState.enterHoldActive = false;
    inputState.enterHoldTriggered = false;
    if (!wasHoldTriggered) {
      handleCatalogKeys({
        type: "enter"
      }, event);
    }
    return true;
  }
  function isEnterKeyEvent(event) {
    return event.key === "Enter" || event.key === "NumpadEnter" || event.keyCode === 13;
  }
  function isReturnKeyEvent(event) {
    return Boolean(event && (event.keyCode === 10009 || event.keyCode === 461 || event.key === "BrowserBack" || event.key === "GoBack"));
  }
  function exitApplication() {
    try {
      persistCurrentPlaybackProgress(true);
    } catch (error) {
      console.log("Exit progress save skipped:", error);
    }
    stopSessionHeartbeat();
    clearNetworkProbe();
    clearNetworkPopupTimer();
    clearNetworkResumeTimer();
    suspendPlaybackEngines();
    stopCatalogPreview();
    appHidden = true;
    syncScreenSaverState();
    try {
      if (window.tizen && tizen.application && tizen.application.getCurrentApplication) {
        tizen.application.getCurrentApplication().exit();
        return;
      }
    } catch (error) {
      console.log("Native exit failed:", error);
    }
    try {
      window.close();
    } catch (error) {
      console.log("Window close failed:", error);
    }
    saindoPeloHistorico = true;
    try {
      window.history.go(-Math.max(1, window.history.length - 1));
    } catch (error) {
      console.log("History back failed:", error);
    }
    setTimeout(function () {
      if (document.hidden || !saindoPeloHistorico) {
        return;
      }
      saindoPeloHistorico = false;
      try {
        window.history.pushState({
          tropicalPlay: true
        }, "", window.location.href);
      } catch (error) {}
      appHidden = false;
      syncScreenSaverState();
      closeExitPrompt();
      var codigo = state.code || localStorage.getItem(STORAGE_KEYS.userCode) || "";
      if (codigo && state.profile) {
        startSessionHeartbeat(codigo);
      }
      showToast("Para sair, use o botao de inicio do aparelho ou feche esta aba.", "success");
    }, 1200);
  }
  function shouldUseFavoriteHold() {
    return state.screen === "catalog" && !state.player.open && state.catalog.zone === "items" && catalogSupportsFavoriteToggle() && Boolean(currentFocusedCatalogItem());
  }
  function consumeKeyEvent(event) {
    if (!event) {
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    event.stopPropagation();
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    }
  }
  function isSearchTextInputEvent(event) {
    return Boolean(event && event.key && event.key.length === 1 && /[a-z0-9 ]/i.test(event.key));
  }
  function isMediaInputTextEvent(event) {
    return Boolean(event && event.key && event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey);
  }
  function isNativeSearchInputFocused() {
    return Boolean(dom.searchNativeInput && document.activeElement === dom.searchNativeInput);
  }
  function normalizeKey(event) {
    var key = event.key;
    var code = event.keyCode;
    if (/^[0-9]$/.test(key)) {
      return {
        type: "digit",
        value: key
      };
    }
    if (key === "ArrowLeft") return {
      type: "left"
    };
    if (key === "ArrowRight") return {
      type: "right"
    };
    if (key === "ArrowUp") return {
      type: "up"
    };
    if (key === "ArrowDown") return {
      type: "down"
    };
    if (key === "Enter" || key === "NumpadEnter") return {
      type: "enter"
    };
    if (key === "Backspace" || key === "Escape") return {
      type: "back"
    };
    if (key === "MediaPlayPause") return {
      type: "playpause"
    };
    if (key === "MediaPause") return {
      type: "pause"
    };
    if (key === "MediaPlay") return {
      type: "play"
    };
    if (key === "MediaStop") return {
      type: "stop"
    };
    if (key === "MediaRewind") return {
      type: "rewind"
    };
    if (key === "MediaFastForward") return {
      type: "fastforward"
    };
    if (key === "MediaTrackNext") return {
      type: "next"
    };
    if (code === 37) return {
      type: "left"
    };
    if (code === 38) return {
      type: "up"
    };
    if (code === 39) return {
      type: "right"
    };
    if (code === 40) return {
      type: "down"
    };
    if (code === 10009) return {
      type: "back"
    };
    if (code === 461) return {
      type: "back"
    };
    if (code === 13) return {
      type: "enter"
    };
    if (code === 415) return {
      type: "play"
    };
    if (code === 19) return {
      type: "pause"
    };
    if (code === 10252) return {
      type: "playpause"
    };
    if (code === 413) return {
      type: "stop"
    };
    if (code === 412) return {
      type: "rewind"
    };
    if (code === 417) return {
      type: "fastforward"
    };
    if (code === 10233 || code === 425) return {
      type: "next"
    };
    return null;
  }
  function handleCodeKeys(action, event) {
    if (action.type === "digit") {
      event.preventDefault();
      appendDigit(action.value);
      return;
    }
    if (action.type === "back") {
      event.preventDefault();
      if (isReturnKeyEvent(event)) {
        openExitPrompt();
        return;
      }
      removeDigit();
      return;
    }
    var currentIndex = state.codeKeyIndex;
    var maxIndex = CODE_KEYS.length - 1;
    var cols = 3;
    if (action.type === "left") {
      event.preventDefault();
      state.codeKeyIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
      syncCodeFocus();
      return;
    }
    if (action.type === "right") {
      event.preventDefault();
      state.codeKeyIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
      syncCodeFocus();
      return;
    }
    if (action.type === "up") {
      event.preventDefault();
      state.codeKeyIndex = Math.max(0, currentIndex - cols);
      syncCodeFocus();
      return;
    }
    if (action.type === "down") {
      event.preventDefault();
      state.codeKeyIndex = Math.min(maxIndex, currentIndex + cols);
      syncCodeFocus();
      return;
    }
    if (action.type === "enter") {
      event.preventDefault();
      activateCodeKey(CODE_KEYS[state.codeKeyIndex]);
    }
  }
  function handleServerKeys(action, event) {
    var serverCount = currentServers().length;
    if (!serverCount) {
      if (action.type === "back") {
        event.preventDefault();
        setScreen("code");
      }
      return;
    }
    if (action.type === "up") {
      event.preventDefault();
      state.catalog.itemIndex = 0;
      state.homeCardIndex = 0;
      state.homeActionIndex = 0;
      state.serverIndex = (state.serverIndex || 0) - 1;
      if (state.serverIndex < 0) state.serverIndex = serverCount - 1;
      syncServerFocus();
      return;
    }
    if (action.type === "down") {
      event.preventDefault();
      state.serverIndex = ((state.serverIndex || 0) + 1) % serverCount;
      syncServerFocus();
      return;
    }
    if (action.type === "enter") {
      event.preventDefault();
      selectServer(state.serverIndex || 0);
      return;
    }
    if (action.type === "back") {
      event.preventDefault();
      setScreen("code");
    }
  }
  function handlePaymentKeys(action, event) {
    if (action.type === "enter" || action.type === "back") {
      event.preventDefault();
      var rememberedCode = state.code || localStorage.getItem(STORAGE_KEYS.userCode) || "";
      clearSession();
      state.code = rememberedCode;
      setScreen("code");
      showToast("Valide novamente após enviar o comprovante.", "success");
    }
  }
  function handleMediaKeys(action, event) {
    if (action.type === "back") {
      event.preventDefault();
      clearSession();
      setScreen("code");
      showToast("Pronto para validar outro acesso.", "success");
      return;
    }
    if (state.media.focusZone === "actions") {
      if (action.type === "up") {
        event.preventDefault();
        state.media.actionIndex = state.media.actionIndex > 0 ? state.media.actionIndex - 1 : MEDIA_HUB_ACTIONS.length - 1;
        syncMediaHubFocus();
        return;
      }
      if (action.type === "down") {
        event.preventDefault();
        state.media.actionIndex = (state.media.actionIndex + 1) % MEDIA_HUB_ACTIONS.length;
        syncMediaHubFocus();
        return;
      }
      if (action.type === "right" && state.media.items.length) {
        event.preventDefault();
        state.media.focusZone = "gallery";
        state.media.itemIndex = clampIndex(state.media.itemIndex, state.media.items.length);
        syncMediaHubFocus();
        return;
      }
    } else {
      if (action.type === "up") {
        event.preventDefault();
        state.media.itemIndex = state.media.itemIndex > 0 ? state.media.itemIndex - 1 : state.media.items.length - 1;
        syncMediaHubFocus();
        return;
      }
      if (action.type === "down") {
        event.preventDefault();
        state.media.itemIndex = (state.media.itemIndex + 1) % state.media.items.length;
        syncMediaHubFocus();
        return;
      }
      if (action.type === "left") {
        event.preventDefault();
        state.media.focusZone = "actions";
        syncMediaHubFocus();
        return;
      }
    }
    if (action.type === "enter") {
      event.preventDefault();
      if (state.media.focusZone === "actions") {
        mediaDebug("media.enter.action", {
          actionId: MEDIA_HUB_ACTIONS[state.media.actionIndex] && MEDIA_HUB_ACTIONS[state.media.actionIndex].id,
          actionIndex: state.media.actionIndex
        });
        runMediaHubAction(MEDIA_HUB_ACTIONS[state.media.actionIndex].id);
        return;
      }
      openMediaGalleryItem(currentMediaGalleryItem());
    }
  }
  function handleMediaInputPromptKeys(action, event) {
    if (action.type === "back" || action.type === "stop") {
      event.preventDefault();
      closeMediaInputPrompt();
      return;
    }
    if (action.type === "digit") {
      event.preventDefault();
      appendMediaInputCharacter(action.value);
      renderMediaInputOverlay();
      return;
    }
    if (state.media.inputPrompt.zone === "fields") {
      if (action.type === "left") {
        event.preventDefault();
        state.media.inputPrompt.fieldIndex = state.media.inputPrompt.fieldIndex > 0 ? state.media.inputPrompt.fieldIndex - 1 : state.media.inputPrompt.fields.length - 1;
        renderMediaInputOverlay();
        return;
      }
      if (action.type === "right") {
        event.preventDefault();
        state.media.inputPrompt.fieldIndex = state.media.inputPrompt.fieldIndex < state.media.inputPrompt.fields.length - 1 ? state.media.inputPrompt.fieldIndex + 1 : 0;
        renderMediaInputOverlay();
        return;
      }
      if (action.type === "down" || action.type === "enter") {
        event.preventDefault();
        state.media.inputPrompt.zone = "keyboard";
        renderMediaInputOverlay();
      }
      return;
    }
    var keyCount = mediaInputKeys().length;
    if (!keyCount) {
      return;
    }
    if (action.type === "left") {
      event.preventDefault();
      state.media.inputPrompt.keyIndex = state.media.inputPrompt.keyIndex > 0 ? state.media.inputPrompt.keyIndex - 1 : keyCount - 1;
      renderMediaInputOverlay();
      return;
    }
    if (action.type === "right") {
      event.preventDefault();
      state.media.inputPrompt.keyIndex = state.media.inputPrompt.keyIndex < keyCount - 1 ? state.media.inputPrompt.keyIndex + 1 : 0;
      renderMediaInputOverlay();
      return;
    }
    if (action.type === "up") {
      event.preventDefault();
      if (state.media.inputPrompt.keyIndex < MEDIA_INPUT_KEYBOARD_COLUMNS) {
        state.media.inputPrompt.zone = "fields";
      } else {
        state.media.inputPrompt.keyIndex = Math.max(0, state.media.inputPrompt.keyIndex - MEDIA_INPUT_KEYBOARD_COLUMNS);
      }
      renderMediaInputOverlay();
      return;
    }
    if (action.type === "down") {
      event.preventDefault();
      state.media.inputPrompt.keyIndex = Math.min(keyCount - 1, state.media.inputPrompt.keyIndex + MEDIA_INPUT_KEYBOARD_COLUMNS);
      renderMediaInputOverlay();
      return;
    }
    if (action.type === "enter") {
      event.preventDefault();
      activateMediaInputKey(mediaInputKeys()[state.media.inputPrompt.keyIndex]);
    }
  }
  function handleHomeKeys(action, event) {
    if (action.type === "back") {
      event.preventDefault();
      openExitPrompt();
      return;
    }
    if (state.homeFocusZone === "cards") {
      if (action.type === "left") {
        event.preventDefault();
        state.homeCardIndex = Math.max(0, state.homeCardIndex - 1);
        syncHomeFocus();
        return;
      }
      if (action.type === "right") {
        event.preventDefault();
        state.homeCardIndex = Math.min(HOME_CARDS.length - 1, state.homeCardIndex + 1);
        syncHomeFocus();
        return;
      }
      if (action.type === "down") {
        event.preventDefault();
        state.homeFocusZone = "actions";
        state.homeActionIndex = Math.min(state.homeCardIndex, HOME_ACTIONS.length - 1);
        syncHomeFocus();
        return;
      }
      if (action.type === "up") {
        event.preventDefault();
        return;
      }
    } else {
      if (action.type === "up") {
        event.preventDefault();
        state.homeFocusZone = "cards";
        state.homeCardIndex = Math.min(HOME_CARDS.length - 1, state.homeActionIndex);
        syncHomeFocus();
        return;
      }
      if (action.type === "down") {
        event.preventDefault();
        return;
      }
      if (action.type === "left") {
        event.preventDefault();
        state.homeActionIndex = Math.max(0, state.homeActionIndex - 1);
        syncHomeFocus();
        return;
      }
      if (action.type === "right") {
        event.preventDefault();
        state.homeActionIndex = Math.min(HOME_ACTIONS.length - 1, state.homeActionIndex + 1);
        syncHomeFocus();
        return;
      }
    }
    if (action.type === "enter") {
      event.preventDefault();
      if (state.homeFocusZone === "cards") {
        openCatalog(HOME_CARDS[state.homeCardIndex].id);
      } else {
        runHomeAction(HOME_ACTIONS[state.homeActionIndex].id);
      }
    }
  }
  function handleSettingsKeys(action, event) {
    if (action.type === "back") {
      event.preventDefault();
      setScreen("home");
      return;
    }
    if (!SETTINGS_ACTIONS.length) {
      return;
    }
    if (action.type === "up") {
      event.preventDefault();
      state.settingsIndex = state.settingsIndex > 0 ? state.settingsIndex - 1 : SETTINGS_ACTIONS.length - 1;
      syncSettingsFocus();
      return;
    }
    if (action.type === "down") {
      event.preventDefault();
      state.settingsIndex = (state.settingsIndex + 1) % SETTINGS_ACTIONS.length;
      syncSettingsFocus();
      return;
    }
    if (action.type === "enter") {
      event.preventDefault();
      runSettingsAction(SETTINGS_ACTIONS[state.settingsIndex].id);
    }
  }
  function handleCatalogKeys(action, event) {
    if (isPosterCatalogDetailView()) {
      handlePosterCatalogDetailKeys(action, event);
      return;
    }
    if (action.type === "back") {
      event.preventDefault();
      setScreen("home");
      return;
    }
    if (!isPosterCatalogType(state.catalog.type)) {
      if (tratarTeclaDoCoracao(action, event)) {
        return;
      }
      if (action.type === "right" && state.catalog.zone === "categories" && catalogUsesSelectionModel()) {
        event.preventDefault();
        openFocusedSelectionCategory();
        return;
      }
      if (action.type === "left" || action.type === "right") {
        event.preventDefault();
        state.catalog.zone = state.catalog.zone === "categories" ? "items" : "categories";
        syncCatalogFocus();
        return;
      }
      if (state.catalog.zone === "categories") {
        var categories = currentCategories();
        if (!categories.length) {
          return;
        }
        if (action.type === "up") {
          event.preventDefault();
          state.catalog.categoryIndex = state.catalog.categoryIndex > 0 ? state.catalog.categoryIndex - 1 : categories.length - 1;
          if (!catalogUsesSelectionModel()) {
            state.catalog.itemIndex = 0;
            ensureItemsForCurrentCategory().then(renderCatalogScreen);
            renderCatalogScreen();
          } else {
            syncCatalogFocus();
          }
          return;
        }
        if (action.type === "down") {
          event.preventDefault();
          state.catalog.categoryIndex = (state.catalog.categoryIndex + 1) % categories.length;
          if (!catalogUsesSelectionModel()) {
            state.catalog.itemIndex = 0;
            ensureItemsForCurrentCategory().then(renderCatalogScreen);
            renderCatalogScreen();
          } else {
            syncCatalogFocus();
          }
          return;
        }
        if (action.type === "enter") {
          event.preventDefault();
          if (catalogUsesSelectionModel()) {
            openFocusedSelectionCategory();
            return;
          }
          state.catalog.zone = "items";
          ensureItemsForCurrentCategory().then(renderCatalogScreen);
          syncCatalogFocus();
        }
        return;
      }
      var _items = currentItems();
      if (!_items.length) {
        if (action.type === "left") {
          state.catalog.zone = "categories";
          syncCatalogFocus();
        }
        return;
      }
      if (action.type === "up") {
        event.preventDefault();
        state.catalog.itemIndex = state.catalog.itemIndex > 0 ? state.catalog.itemIndex - 1 : _items.length - 1;
        syncCatalogFocus();
        return;
      }
      if (action.type === "down") {
        event.preventDefault();
        if (state.catalog.itemIndex >= _items.length - 1) {
          state.catalog.zone = "categories";
        } else {
          state.catalog.itemIndex += 1;
        }
        syncCatalogFocus();
        return;
      }
      if (action.type === "enter") {
        event.preventDefault();
        if (catalogUsesSelectionModel()) {
          if (isCatalogSearchAction(_items[state.catalog.itemIndex])) {
            activateCatalogItem(_items[state.catalog.itemIndex]);
            return;
          }
          if (state.catalog.selectedItemCategoryIndex === state.catalog.selectedCategoryIndex && state.catalog.selectedItemIndex === state.catalog.itemIndex) {
            activateCatalogItem(_items[state.catalog.itemIndex]);
            return;
          }
          state.catalog.selectedItemCategoryIndex = state.catalog.selectedCategoryIndex;
          state.catalog.selectedItemIndex = state.catalog.itemIndex;
          state.catalog.detailKey = "";
          syncCatalogSelectedState();
          renderCatalogDetail(true);
          return;
        }
        activateCatalogItem(_items[state.catalog.itemIndex]);
      }
      return;
    }
    if (state.catalog.zone === "categories") {
      var _categories = currentCategories();
      if (!_categories.length) {
        return;
      }
      if (state.catalog.lupaFocada) {
        event.preventDefault();
        if (action.type === "down") {
          state.catalog.lupaFocada = false;
          state.catalog.categoryIndex = 0;
          syncCatalogFocus();
        } else if (action.type === "enter" || action.type === "right") {
          abrirPesquisaEmTodos();
        }
        return;
      }
      if (action.type === "up") {
        event.preventDefault();
        if (state.catalog.categoryIndex === 0 && lupaDoCatalogoAtiva()) {
          state.catalog.lupaFocada = true;
          syncCatalogFocus();
          return;
        }
        state.catalog.categoryIndex = state.catalog.categoryIndex > 0 ? state.catalog.categoryIndex - 1 : _categories.length - 1;
        syncCatalogFocus();
        return;
      }
      if (action.type === "down") {
        event.preventDefault();
        state.catalog.categoryIndex = (state.catalog.categoryIndex + 1) % _categories.length;
        syncCatalogFocus();
        return;
      }
      if (action.type === "right" || action.type === "enter") {
        event.preventDefault();
        if (state.catalog.selectedCategoryIndex !== state.catalog.categoryIndex && categoriaBloqueada(_categories[state.catalog.categoryIndex])) {
          abrirSenhaParental("liberar", function () {
            handleCatalogKeys({
              type: "enter"
            }, {
              preventDefault: function preventDefault() {}
            });
          });
          return;
        }
        if (state.catalog.selectedCategoryIndex === state.catalog.categoryIndex) {
          state.catalog.zone = "items";
          state.catalog.itemIndex = clampIndex(state.catalog.itemIndex, itemsForCategoryIndex(state.catalog.selectedCategoryIndex).length);
          syncCatalogFocus();
          return;
        }
        state.catalog.selectedCategoryIndex = state.catalog.categoryIndex;
        state.catalog.itemIndex = 0;
        state.catalog.detailKey = "";
        state.catalog.zone = "items";
        ensureItemsForCategoryIndex(state.catalog.selectedCategoryIndex).then(renderCatalogScreen);
      }
      return;
    }
    var items = currentItems();
    if (!items.length) {
      if (action.type === "left") {
        event.preventDefault();
        state.catalog.zone = "categories";
        syncCatalogFocus();
      }
      return;
    }
    var columns = catalogGridColumns();
    if (action.type === "left") {
      event.preventDefault();
      if (state.catalog.itemIndex % columns === 0) {
        state.catalog.zone = "categories";
      } else {
        state.catalog.itemIndex -= 1;
      }
      syncCatalogFocus();
      return;
    }
    if (action.type === "right") {
      event.preventDefault();
      var nextIndex = state.catalog.itemIndex + 1;
      if (state.catalog.itemIndex % columns !== columns - 1 && nextIndex < items.length) {
        state.catalog.itemIndex = nextIndex;
        syncCatalogFocus();
      }
      return;
    }
    if (action.type === "up") {
      event.preventDefault();
      var _nextIndex = state.catalog.itemIndex - columns;
      if (_nextIndex >= 0) {
        state.catalog.itemIndex = _nextIndex;
        syncCatalogFocus();
      }
      return;
    }
    if (action.type === "down") {
      event.preventDefault();
      var _nextIndex2 = state.catalog.itemIndex + columns;
      if (_nextIndex2 < items.length) {
        state.catalog.itemIndex = _nextIndex2;
      } else if (Math.floor(state.catalog.itemIndex / columns) < Math.floor((items.length - 1) / columns)) {
        state.catalog.itemIndex = items.length - 1;
      } else {
        state.catalog.zone = "categories";
      }
      syncCatalogFocus();
      return;
    }
    if (action.type === "enter") {
      event.preventDefault();
      if (isCatalogSearchAction(items[state.catalog.itemIndex])) {
        openMovieSearchOverlay();
        return;
      }
      state.catalog.detailActionIndex = 0;
      state.catalog.seriesDetailPage = "overview";
      state.catalog.seriesDetailFocusZone = "actions";
      state.catalog.view = "detail";
      render();
    }
  }
  function handlePosterCatalogDetailKeys(action, event) {
    if (isSearchDetailView()) {
      handleSearchPromptKeys(action, event);
      return;
    }
    if (isSeriesPosterDetailView()) {
      handleSeriesPosterDetailKeys(action, event);
      return;
    }
    if (action.type === "back") {
      event.preventDefault();
      closePosterCatalogDetail();
      return;
    }
    var actions = posterCatalogDetailActions();
    if (!actions.length) {
      return;
    }
    if (action.type === "up" || action.type === "down") {
      event.preventDefault();
      scrollPosterDetailSummary(action.type);
      return;
    }
    if (action.type === "left") {
      event.preventDefault();
      state.catalog.detailActionIndex = state.catalog.detailActionIndex > 0 ? state.catalog.detailActionIndex - 1 : actions.length - 1;
      syncCatalogFocus();
      return;
    }
    if (action.type === "right") {
      event.preventDefault();
      state.catalog.detailActionIndex = (state.catalog.detailActionIndex + 1) % actions.length;
      syncCatalogFocus();
      return;
    }
    if (action.type === "enter") {
      event.preventDefault();
      runPosterCatalogDetailAction(actions[state.catalog.detailActionIndex]);
    }
  }
  function handleSeriesPosterDetailKeys(action, event) {
    var item = currentFocusedCatalogItem();
    var actions = posterCatalogDetailActions();
    var seasons = seriesSeasonEntries(item);
    var episodes = currentSeriesSeasonEpisodes(item);
    if (!isSeriesSeasonBrowserPage() && !isSeriesEpisodeBrowserPage()) {
      if (action.type === "back") {
        event.preventDefault();
        closePosterCatalogDetail();
        return;
      }
      if (!actions.length) {
        return;
      }
      if (action.type === "up") {
        event.preventDefault();
        if (state.catalog.detailActionIndex >= POSTER_DETAIL_ACTION_COLUMNS) {
          state.catalog.detailActionIndex -= POSTER_DETAIL_ACTION_COLUMNS;
          syncCatalogFocus();
          return;
        }
        scrollPosterDetailSummary(action.type);
        return;
      }
      if (action.type === "down") {
        event.preventDefault();
        var nextIndex = state.catalog.detailActionIndex + POSTER_DETAIL_ACTION_COLUMNS;
        if (nextIndex < actions.length) {
          state.catalog.detailActionIndex = nextIndex;
          syncCatalogFocus();
          return;
        }
        scrollPosterDetailSummary(action.type);
        return;
      }
      if (action.type === "left") {
        event.preventDefault();
        state.catalog.detailActionIndex = state.catalog.detailActionIndex > 0 ? state.catalog.detailActionIndex - 1 : actions.length - 1;
        syncCatalogFocus();
        return;
      }
      if (action.type === "right") {
        event.preventDefault();
        state.catalog.detailActionIndex = (state.catalog.detailActionIndex + 1) % actions.length;
        syncCatalogFocus();
        return;
      }
      if (action.type === "enter") {
        event.preventDefault();
        runPosterCatalogDetailAction(actions[state.catalog.detailActionIndex]);
      }
      return;
    }
    var zona = state.catalog.seriesDetailFocusZone === "episodes" && episodes.length ? "episodes" : "seasons";
    if (action.type === "back") {
      event.preventDefault();
      if (zona === "episodes" && seasons.length) {
        state.catalog.seriesDetailPage = "seasons";
        state.catalog.seriesDetailFocusZone = "seasons";
        syncCatalogFocus();
        return;
      }
      state.catalog.seriesDetailPage = "overview";
      state.catalog.seriesDetailFocusZone = "actions";
      state.catalog.detailActionIndex = 0;
      state.catalog.detailKey = "";
      renderCatalogScreen();
      return;
    }
    if (zona === "seasons") {
      state.catalog.seriesDetailFocusZone = "seasons";
      if (!seasons.length) {
        return;
      }
      if (action.type === "up" || action.type === "down") {
        event.preventDefault();
        var proxima = state.catalog.seriesDetailSeasonIndex + (action.type === "up" ? -1 : 1);
        if (proxima >= 0 && proxima < seasons.length) {
          state.catalog.seriesDetailSeasonIndex = proxima;
          state.catalog.seriesDetailEpisodeIndex = 0;
          state.catalog.detailKey = "";
        }
        syncCatalogFocus();
        return;
      }
      if (action.type === "right" || action.type === "enter") {
        event.preventDefault();
        if (currentSeriesSeasonEpisodes(item).length) {
          state.catalog.seriesDetailFocusZone = "episodes";
          state.catalog.detailKey = "";
          syncCatalogFocus();
        }
        return;
      }
      if (action.type === "left") {
        event.preventDefault();
      }
      return;
    }
    if (action.type === "up" || action.type === "down") {
      event.preventDefault();
      state.catalog.seriesDetailEpisodeIndex = clampIndex(state.catalog.seriesDetailEpisodeIndex + (action.type === "up" ? -1 : 1), episodes.length);
      syncCatalogFocus();
      return;
    }
    if (action.type === "left") {
      event.preventDefault();
      state.catalog.seriesDetailFocusZone = seasons.length ? "seasons" : "episodes";
      state.catalog.detailKey = "";
      syncCatalogFocus();
      return;
    }
    if (action.type === "right") {
      event.preventDefault();
      return;
    }
    if (action.type === "enter") {
      event.preventDefault();
      var episode = currentSeriesEpisode(item);
      if (!episode) {
        showToast("Nenhum episodio disponivel nesta temporada.", "error");
        return;
      }
      openSeriesEpisode(item, episode, {
        resumeFromSaved: true
      });
    }
  }
  function openFocusedSelectionCategory() {
    if (state.catalog.selectedCategoryIndex !== state.catalog.categoryIndex && categoriaBloqueada(currentCategories()[state.catalog.categoryIndex])) {
      abrirSenhaParental("liberar", openFocusedSelectionCategory);
      return;
    }
    if (state.catalog.selectedCategoryIndex === state.catalog.categoryIndex) {
      state.catalog.zone = "items";
      state.catalog.itemIndex = state.catalog.selectedItemCategoryIndex === state.catalog.selectedCategoryIndex ? clampIndex(state.catalog.selectedItemIndex, currentItems().length) : 0;
      syncCatalogFocus();
      return;
    }
    state.catalog.selectedCategoryIndex = state.catalog.categoryIndex;
    state.catalog.itemIndex = 0;
    state.catalog.zone = "items";
    ensureItemsForCategoryIndex(state.catalog.selectedCategoryIndex).then(function () {
      renderCatalogScreen();
    });
  }
  function handlePlayerKeys(action, event) {
    focusPlayerOverlay();
    if (state.player.recoveryOpen) {
      handlePlayerRecoveryKeys(action, event);
      return;
    }
    if (contagemDoProximo) {
      teclasDaContagemDoProximo(action, event);
      return;
    }
    if (action.type === "back" || action.type === "stop") {
      event.preventDefault();
      closePlayer();
      return;
    }
    if (action.type === "next") {
      event.preventDefault();
      irParaProximoEpisodio();
      return;
    }
    if (action.type === "rewind") {
      event.preventDefault();
      seekPlayerBy(-10);
      return;
    }
    if (action.type === "fastforward") {
      event.preventDefault();
      seekPlayerBy(10);
      return;
    }
    if (action.type === "left") {
      event.preventDefault();
      if (!state.player.controlsVisible && !state.player.paused) {
        state.player.focusZone = "controls";
        state.player.controlIndex = firstAvailablePlayerControlIndex("rewind");
        showPlayerControls();
        return;
      }
      if (isPlayerProgressFocused()) {
        seekPlayerBy(-playerTimelineStep());
        return;
      }
      movePlayerControlFocus(-1);
      return;
    }
    if (action.type === "right") {
      event.preventDefault();
      if (!state.player.controlsVisible && !state.player.paused) {
        state.player.focusZone = "controls";
        state.player.controlIndex = firstAvailablePlayerControlIndex("forward");
        showPlayerControls();
        return;
      }
      if (isPlayerProgressFocused()) {
        seekPlayerBy(playerTimelineStep());
        return;
      }
      movePlayerControlFocus(1);
      return;
    }
    if (action.type === "up") {
      event.preventDefault();
      if (!state.player.controlsVisible && !state.player.paused) {
        state.player.focusZone = state.player.canSeek ? "progress" : "controls";
        state.player.controlIndex = firstAvailablePlayerControlIndex("toggle");
        showPlayerControls(state.player.canSeek);
        return;
      }
      movePlayerFocusVertical(-1);
      return;
    }
    if (action.type === "down") {
      event.preventDefault();
      if (!state.player.controlsVisible && !state.player.paused) {
        state.player.focusZone = "controls";
        state.player.controlIndex = firstAvailablePlayerControlIndex("toggle");
        showPlayerControls();
        return;
      }
      movePlayerFocusVertical(1);
      return;
    }
    if (action.type === "enter" || action.type === "playpause") {
      event.preventDefault();
      if (!state.player.controlsVisible && !state.player.paused) {
        state.player.focusZone = "controls";
        state.player.controlIndex = firstAvailablePlayerControlIndex("toggle");
        showPlayerControls();
        return;
      }
      if (isPlayerProgressFocused()) {
        togglePlayPause();
        return;
      }
      runFocusedPlayerControl();
      return;
    }
    if (action.type === "pause") {
      event.preventDefault();
      if (state.player.mediaKind === "image") {
        closePlayer();
        return;
      }
      showPlayerControls(true);
      if (isNativePlayerActive()) {
        if (!state.player.paused) {
          toggleNativePlayerPause();
        }
        return;
      }
      dom.playerVideo.pause();
      return;
    }
    if (action.type === "play") {
      event.preventDefault();
      if (state.player.mediaKind === "image") {
        closePlayer();
        return;
      }
      showPlayerControls();
      if (isNativePlayerActive()) {
        if (state.player.paused) {
          toggleNativePlayerPause();
        }
        return;
      }
      dom.playerVideo.play().catch(function () {
        showToast("Nao foi possivel iniciar o video.", "error");
      });
    }
  }
  function appendDigit(digit) {
    if (state.code.length >= CODIGO_MAXIMO) {
      showToast("O codigo tem no maximo " + CODIGO_MAXIMO + " digitos.", "error");
      renderCodeScreen();
      return;
    }
    state.code += digit;
    renderCodeScreen();
  }
  function removeDigit() {
    state.code = state.code.slice(0, -1);
    renderCodeScreen();
  }
  function activateCodeKey(key) {
    if (!key) return;
    if (key.type === "digit") appendDigit(key.value);
    if (key.type === "clear") {
      state.code = "";
      renderCodeScreen();
    }
    if (key.type === "back") removeDigit();
    if (key.type === "submit") validateCode();
  }
  function validateCode() {
    return _validateCode.apply(this, arguments);
  }
  function _validateCode() {
    _validateCode = _asyncToGenerator(_regenerator().m(function _callee3() {
      var code, accessResult, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            code = state.code.trim();
            if (code) {
              _context3.n = 1;
              break;
            }
            showToast("Digite um codigo antes de continuar.", "error");
            return _context3.a(2);
          case 1:
            showLoading("Validando codigo...");
            accessResult = null;
            _context3.p = 2;
            _context3.n = 3;
            return checkDeviceAccess(code);
          case 3:
            accessResult = _context3.v;
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t3 = _context3.v;
            console.log("Code validation failed:", _t3);
            accessResult = {
              allowed: false,
              status: "error",
              message: "Nao foi possivel validar o acesso agora. Tente novamente."
            };
          case 5:
            _context3.p = 5;
            _context3.n = 6;
            return hideLoading();
          case 6:
            return _context3.f(5);
          case 7:
            if (!(accessResult.status === "alreadyInUse")) {
              _context3.n = 8;
              break;
            }
            openSessionConflict("login", code, accessResult.message);
            return _context3.a(2);
          case 8:
            if (!(accessResult.status === "notFound")) {
              _context3.n = 9;
              break;
            }
            showToast("Codigo nao encontrado. Verifique e tente novamente.", "error");
            return _context3.a(2);
          case 9:
            if (!(accessResult.status === "paymentPending")) {
              _context3.n = 10;
              break;
            }
            showPaymentScreen(accessResult.profile, code);
            return _context3.a(2);
          case 10:
            if (!(!accessResult.allowed || !accessResult.profile)) {
              _context3.n = 11;
              break;
            }
            showToast(accessResult.message || "Nao foi possivel validar o acesso agora.", "error");
            return _context3.a(2);
          case 11:
            completeAccessLogin(accessResult.profile, code);
          case 12:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 4, 5, 7]]);
    }));
    return _validateCode.apply(this, arguments);
  }
  function completeAccessLogin(profile, code) {
    state.profile = profile;
    state.selectedServer = null;
    localStorage.setItem(STORAGE_KEYS.rememberedCode, code);
    localStorage.removeItem(STORAGE_KEYS.loginNotice);
    localStorage.setItem(STORAGE_KEYS.userCode, code);
    localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
    localStorage.removeItem(STORAGE_KEYS.selectedServer);
    startSessionHeartbeat(code);
    state.serverIndex = 0;
    if (isMediaHubProfile(profile)) {
      setScreen("media");
      showToast("Acesso validado com sucesso.", "success");
      return;
    }
    setScreen("servers");
    showToast("Codigo validado com sucesso.", "success");
  }
  function fetchProfileByCode(_x) {
    return _fetchProfileByCode.apply(this, arguments);
  }
  function _fetchProfileByCode() {
    _fetchProfileByCode = _asyncToGenerator(_regenerator().m(function _callee4(code) {
      var result;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            if (!(code === DEMO_CODE)) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2, clone(DIRECT_PLAYER_PROFILE));
          case 1:
            _context4.n = 2;
            return fetchDeviceDocumentByCode(code);
          case 2:
            result = _context4.v;
            return _context4.a(2, result ? result.profile : null);
        }
      }, _callee4);
    }));
    return _fetchProfileByCode.apply(this, arguments);
  }
  function fetchDeviceDocumentByCode(_x2) {
    return _fetchDeviceDocumentByCode.apply(this, arguments);
  }
  function _fetchDeviceDocumentByCode() {
    _fetchDeviceDocumentByCode = _asyncToGenerator(_regenerator().m(function _callee5(code) {
      var trimmedCode, collection, directDoc, query, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (firestore) {
              _context5.n = 1;
              break;
            }
            showToast("Firebase indisponivel no momento. Tente novamente em instantes." + (motivoFirebase ? " (" + motivoFirebase + ")" : ""), "error");
            return _context5.a(2, null);
          case 1:
            _context5.p = 1;
            trimmedCode = String(code || "").trim();
            collection = firestore.collection("devices");
            _context5.n = 2;
            return collection.doc(trimmedCode).get();
          case 2:
            directDoc = _context5.v;
            if (!directDoc.exists) {
              _context5.n = 3;
              break;
            }
            return _context5.a(2, buildDeviceDocumentResult(directDoc, trimmedCode));
          case 3:
            _context5.n = 4;
            return collection.where("userNumber", "==", trimmedCode).limit(1).get();
          case 4:
            query = _context5.v;
            if (!(query.empty && /^[0-9]+$/.test(trimmedCode))) {
              _context5.n = 6;
              break;
            }
            _context5.n = 5;
            return collection.where("userNumber", "==", Number(trimmedCode)).limit(1).get();
          case 5:
            query = _context5.v;
          case 6:
            if (!query.empty) {
              _context5.n = 7;
              break;
            }
            return _context5.a(2, null);
          case 7:
            return _context5.a(2, buildDeviceDocumentResult(query.docs[0], trimmedCode));
          case 8:
            _context5.p = 8;
            _t4 = _context5.v;
            console.log("Firestore lookup failed:", _t4);
            showToast("Falha ao consultar o codigo no Firebase.", "error");
            return _context5.a(2, null);
        }
      }, _callee5, null, [[1, 8]]);
    }));
    return _fetchDeviceDocumentByCode.apply(this, arguments);
  }
  function buildDeviceDocumentResult(doc, fallbackCode) {
    var data = doc.data() || {};
    if (!data.userNumber && fallbackCode) {
      data.userNumber = fallbackCode;
    }
    var profile = normalizeProfile(data);
    profile.firestoreDocumentId = doc.id;
    profile.firestorePath = doc.ref.path;
    return {
      ref: doc.ref,
      id: doc.id,
      data: data,
      profile: profile
    };
  }
  function checkDeviceAccess(_x3, _x4) {
    return _checkDeviceAccess.apply(this, arguments);
  }
  function _checkDeviceAccess() {
    _checkDeviceAccess = _asyncToGenerator(_regenerator().m(function _callee6(code, options) {
      var trimmedCode, forceTakeover, deviceId, sessionId, deviceDoc, docData, profile, activeSessionId, activeDeviceId, lastSeenMs, nowMs, sameSession, sameDevice, hasActiveSession, hasLegacyActiveDevice, recentActivity, shouldPrompt, _t5;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            trimmedCode = String(code || "").trim();
            if (!(trimmedCode === DEMO_CODE)) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, {
              allowed: true,
              status: "allowed",
              profile: clone(DIRECT_PLAYER_PROFILE)
            });
          case 1:
            if (firestore) {
              _context6.n = 2;
              break;
            }
            return _context6.a(2, {
              allowed: false,
              status: "error",
              message: "Firebase indisponivel no momento. Tente novamente em instantes."
            });
          case 2:
            forceTakeover = Boolean(options && options.forceTakeover);
            deviceId = getOrCreateDeviceId();
            sessionId = forceTakeover ? createNewSessionId() : getOrCreateSessionId();
            _context6.p = 3;
            _context6.n = 4;
            return withOperationTimeout(fetchDeviceDocumentByCode(trimmedCode), SESSION_ACCESS_TIMEOUT_MS, "Tempo esgotado ao consultar o codigo.");
          case 4:
            deviceDoc = _context6.v;
            if (deviceDoc) {
              _context6.n = 5;
              break;
            }
            return _context6.a(2, {
              allowed: false,
              status: "notFound",
              message: "O codigo inserido nao foi encontrado."
            });
          case 5:
            docData = deviceDoc.data || {};
            profile = normalizeProfile(docData);
            profile.firestoreDocumentId = deviceDoc.id;
            profile.firestorePath = deviceDoc.ref.path;
            if (profile.paymentStatus) {
              _context6.n = 6;
              break;
            }
            return _context6.a(2, {
              allowed: false,
              status: "paymentPending",
              profile: profile,
              message: "Seu acesso foi pausado ate que o pagamento seja confirmado."
            });
          case 6:
            activeSessionId = normalizeSessionValue(docData.activeSessionId);
            activeDeviceId = normalizeSessionValue(docData.activeDeviceId);
            lastSeenMs = readFirestoreTimestampMs(docData.lastSeen);
            nowMs = Date.now();
            sameSession = activeSessionId && activeSessionId === sessionId;
            sameDevice = activeDeviceId && activeDeviceId === deviceId;
            hasActiveSession = Boolean(activeSessionId);
            hasLegacyActiveDevice = !hasActiveSession && Boolean(activeDeviceId);
            recentActivity = lastSeenMs > 0 ? nowMs - lastSeenMs < SESSION_TAKEOVER_AFTER_MS : false;
            shouldPrompt = !forceTakeover && !profile.allowConcurrentDevices && (hasActiveSession && !sameSession && !sameDevice && recentActivity || hasLegacyActiveDevice && !sameDevice && recentActivity);
            if (!shouldPrompt) {
              _context6.n = 7;
              break;
            }
            return _context6.a(2, {
              allowed: false,
              status: "alreadyInUse",
              message: "Este ponto ja esta sendo usado em outro dispositivo.\n\nPressione OK para usar aqui nesta TV ou escolha continuar no outro aparelho."
            });
          case 7:
            deviceDoc.ref.update({
              activeSessionId: sessionId,
              activeDeviceId: deviceId,
              activePlatform: SESSION_PLATFORM_LABEL,
              lastSeen: firebase.firestore.FieldValue.serverTimestamp()
            }).catch(function (updateError) {
              console.log("Session claim update failed:", updateError);
            });
            profile.activeSessionId = sessionId;
            profile.activeDeviceId = deviceId;
            profile.activePlatform = SESSION_PLATFORM_LABEL;
            return _context6.a(2, {
              allowed: true,
              status: "allowed",
              profile: profile
            });
          case 8:
            _context6.p = 8;
            _t5 = _context6.v;
            console.log("Device access check failed:", _t5);
            return _context6.a(2, {
              allowed: false,
              status: "error",
              message: "Nao foi possivel validar o acesso agora."
            });
        }
      }, _callee6, null, [[3, 8]]);
    }));
    return _checkDeviceAccess.apply(this, arguments);
  }
  function forceDeviceAccess(_x5) {
    return _forceDeviceAccess.apply(this, arguments);
  }
  function _forceDeviceAccess() {
    _forceDeviceAccess = _asyncToGenerator(_regenerator().m(function _callee7(code) {
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            return _context7.a(2, checkDeviceAccess(code, {
              forceTakeover: true
            }));
        }
      }, _callee7);
    }));
    return _forceDeviceAccess.apply(this, arguments);
  }
  function startSessionHeartbeat(code) {
    var targetCode = String(code || localStorage.getItem(STORAGE_KEYS.userCode) || "").trim();
    if (!targetCode || targetCode === DEMO_CODE) {
      return;
    }
    stopSessionHeartbeat();
    localStorage.setItem(STORAGE_KEYS.activeHeartbeatUserCode, targetCode);
    updateSessionHeartbeat(targetCode);
    sessionHeartbeatTimer = setInterval(function () {
      updateSessionHeartbeat(targetCode);
    }, SESSION_HEARTBEAT_MS);
  }
  function stopSessionHeartbeat() {
    if (sessionHeartbeatTimer) {
      clearInterval(sessionHeartbeatTimer);
      sessionHeartbeatTimer = null;
    }
  }
  function updateSessionHeartbeat(_x6) {
    return _updateSessionHeartbeat.apply(this, arguments);
  }
  function _updateSessionHeartbeat() {
    _updateSessionHeartbeat = _asyncToGenerator(_regenerator().m(function _callee8(code) {
      var targetCode, deviceDoc, docData, sessionId, deviceId, activeSessionId, activeDeviceId, lostBySession, lostByLegacyDevice, _t6;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            targetCode = String(code || localStorage.getItem(STORAGE_KEYS.activeHeartbeatUserCode) || "").trim();
            if (!(!targetCode || !firestore)) {
              _context8.n = 1;
              break;
            }
            return _context8.a(2);
          case 1:
            _context8.p = 1;
            _context8.n = 2;
            return fetchDeviceDocumentByCode(targetCode);
          case 2:
            deviceDoc = _context8.v;
            if (deviceDoc) {
              _context8.n = 3;
              break;
            }
            return _context8.a(2);
          case 3:
            docData = deviceDoc.data || {};
            sessionId = getOrCreateSessionId();
            deviceId = getOrCreateDeviceId();
            activeSessionId = normalizeSessionValue(docData.activeSessionId);
            activeDeviceId = normalizeSessionValue(docData.activeDeviceId);
            lostBySession = activeSessionId && activeSessionId !== sessionId;
            lostByLegacyDevice = !activeSessionId && activeDeviceId && activeDeviceId !== deviceId;
            if (!(lostBySession || lostByLegacyDevice)) {
              _context8.n = 4;
              break;
            }
            stopSessionHeartbeat();
            openSessionConflict("transferred", targetCode, "Seu acesso foi transferido para outro dispositivo.\n\nDeseja continuar la ou usar aqui?");
            return _context8.a(2);
          case 4:
            _context8.n = 5;
            return deviceDoc.ref.update({
              activeSessionId: sessionId,
              activeDeviceId: deviceId,
              activePlatform: SESSION_PLATFORM_LABEL,
              lastSeen: firebase.firestore.FieldValue.serverTimestamp()
            });
          case 5:
            _context8.n = 7;
            break;
          case 6:
            _context8.p = 6;
            _t6 = _context8.v;
            console.log("Session heartbeat failed:", _t6);
          case 7:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 6]]);
    }));
    return _updateSessionHeartbeat.apply(this, arguments);
  }
  function getOrCreateDeviceId() {
    return getOrCreateLocalId(STORAGE_KEYS.deviceId);
  }
  function getOrCreateSessionId() {
    return getOrCreateLocalId(STORAGE_KEYS.sessionId);
  }
  function createNewSessionId() {
    var sessionId = generateId();
    localStorage.setItem(STORAGE_KEYS.sessionId, sessionId);
    return sessionId;
  }
  function getOrCreateLocalId(key) {
    var savedId = localStorage.getItem(key);
    if (savedId && savedId.trim()) {
      return savedId;
    }
    var nextId = generateId();
    localStorage.setItem(key, nextId);
    return nextId;
  }
  function generateId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (char) {
      var random = Math.floor(Math.random() * 16);
      var value = char === "x" ? random : random & 0x3 | 0x8;
      return value.toString(16);
    });
  }
  function normalizeSessionValue(value) {
    return String(value || "").trim();
  }
  function readFirestoreTimestampMs(value) {
    if (!value) {
      return 0;
    }
    if (typeof value.toDate === "function") {
      return value.toDate().getTime();
    }
    if (value instanceof Date) {
      return value.getTime();
    }
    if (typeof value.seconds === "number") {
      return value.seconds * 1000;
    }
    if (typeof value === "string") {
      var parsed = Date.parse(value);
      return Number.isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  }
  function withOperationTimeout(promise, timeoutMs, message) {
    var timeoutId = null;
    var timeoutPromise = new Promise(function (_resolve, reject) {
      timeoutId = setTimeout(function () {
        reject(new Error(message || "Operacao demorou demais para responder."));
      }, timeoutMs);
    });
    return Promise.race([promise, timeoutPromise]).then(function (result) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      return result;
    }, function (error) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      throw error;
    });
  }
  function normalizeProfile(data) {
    var lists = Array.isArray(data.lists) ? data.lists : [];
    return {
      userNumber: String(data.userNumber || ""),
      paymentStatus: Boolean(data.paymentStatus),
      paymentUrl: data.paymentUrl || "",
      createdAt: normalizeDate(data.createdAt),
      expiresAt: normalizeDate(data.expiresAt),
      isDemo: false,
      activeSessionId: normalizeSessionValue(data.activeSessionId),
      activeDeviceId: normalizeSessionValue(data.activeDeviceId),
      activePlatform: normalizeSessionValue(data.activePlatform),
      parentalPin: data.msxParental && /^[0-9]{4}$/.test(String(data.msxParental.pin || "")) ? String(data.msxParental.pin) : "",
      allowConcurrentDevices: Boolean(data.allowConcurrentDevices),
      lists: lists.map(function (item, index) {
        return {
          name: item.name || "Servidor " + (index + 1),
          url: item.url || "",
          username: String(item.username || ""),
          password: String(item.password || ""),
          serverId: item.serverId || "server-" + index
        };
      })
    };
  }
  function showPaymentScreen(profile, code) {
    state.profile = profile;
    state.code = code || profile.userNumber || state.code || "";
    localStorage.setItem(STORAGE_KEYS.userCode, state.code);
    localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
    localStorage.removeItem(STORAGE_KEYS.selectedServer);
    renderPaymentScreen();
    setScreen("payment");
  }
  function paymentUrlForProfile(profile) {
    var savedUrl = String(profile && profile.paymentUrl || "").trim();
    if (savedUrl) return savedUrl;
    var renewalCode = renewalCodeForProfile(profile);
    if (!renewalCode) return "";
    var token = base64UrlEncode(JSON.stringify({
      u: renewalCode
    }));
    return "https://acompanhe.tropicalplaytv.com/renovar/" + token;
  }
  function renewalCodeForProfile(profile) {
    var lists = Array.isArray(profile && profile.lists) ? profile.lists : [];
    for (var i = 0; i < lists.length; i += 1) {
      var username = String(lists[i].username || "").trim();
      if (username) return username;
    }
    return String(profile && profile.userNumber || "").trim();
  }
  function base64UrlEncode(value) {
    return btoa(unescape(encodeURIComponent(value))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }
  function selectServer(_x7) {
    return _selectServer.apply(this, arguments);
  }
  function _selectServer() {
    _selectServer = _asyncToGenerator(_regenerator().m(function _callee9(index) {
      var server, parsedServer, resultado, parsedFalho, _t7;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            server = currentServers()[index];
            if (server) {
              _context9.n = 1;
              break;
            }
            showToast("Nenhum servidor disponivel para este perfil.", "error");
            return _context9.a(2);
          case 1:
            showLoading("Conectando ao servidor...");
            _context9.p = 2;
            parsedServer = parseServer(server);
            if (state.profile.isDemo) {
              _context9.n = 3;
              break;
            }
            _context9.n = 3;
            return authenticateServer(parsedServer);
          case 3:
            state.selectedServer = parsedServer;
            localStorage.setItem(STORAGE_KEYS.selectedServer, JSON.stringify(parsedServer));
            _context9.n = 4;
            return loadHomeData();
          case 4:
            hideLoading();
            setScreen("home");
            showToast("Servidor conectado com sucesso.", "success");
            _context9.n = 7;
            break;
          case 5:
            _context9.p = 5;
            _t7 = _context9.v;
            hideLoading();
            console.log("Server select failed:", _t7);
            _context9.n = 6;
            return verificarServidor(server).catch(function () {
              return null;
            });
          case 6:
            resultado = _context9.v;
            if (resultado && resultado.estado !== "online") {
              showToast(resultado.rotulo + ". " + (resultado.detalhe || ""), "error");
              try {
                parsedFalho = parseServer(server);
                resultado.em = Date.now();
                statusDosServidores[chaveDoServidor(parsedFalho)] = resultado;
              } catch (erroDoCadastro) {
                console.log("Server status cache skipped:", erroDoCadastro);
              }
              if (state.screen === "servers") {
                renderServerScreen();
              }
            } else {
              showToast(_t7.message || "Falha ao conectar ao servidor selecionado.", "error");
            }
          case 7:
            return _context9.a(2);
        }
      }, _callee9, null, [[2, 5]]);
    }));
    return _selectServer.apply(this, arguments);
  }
  function parseServer(server) {
    if (state.profile.isDemo) {
      return {
        id: server.serverId || "demo-server",
        name: server.name || "Tropical Server",
        username: server.username || "demo",
        password: server.password || "demo",
        baseUrl: "https://demo.tropical.play",
        sourceUrl: server.url || "",
        isDemo: true
      };
    }
    var url = new URL(server.url);
    return {
      id: server.serverId || "server",
      name: server.name || "Servidor",
      username: url.searchParams.get("username") || server.username || "",
      password: url.searchParams.get("password") || server.password || "",
      baseUrl: url.origin,
      sourceUrl: server.url,
      isDemo: false
    };
  }
  function authenticateServer(_x8) {
    return _authenticateServer.apply(this, arguments);
  }
  function _authenticateServer() {
    _authenticateServer = _asyncToGenerator(_regenerator().m(function _callee0(server) {
      var payload, authFlag;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return fetchJson(server.baseUrl + "/player_api.php?username=" + encodeURIComponent(server.username) + "&password=" + encodeURIComponent(server.password));
          case 1:
            payload = _context0.v;
            authFlag = payload && payload.user_info && String(payload.user_info.auth) === "1";
            if (authFlag) {
              _context0.n = 2;
              break;
            }
            throw new Error("O servidor respondeu, mas nao autenticou esse acesso.");
          case 2:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return _authenticateServer.apply(this, arguments);
  }
  function loadHomeData() {
    return _loadHomeData.apply(this, arguments);
  }
  function _loadHomeData() {
    _loadHomeData = _asyncToGenerator(_regenerator().m(function _callee1() {
      var live, movies, series, results;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            if (state.selectedServer) {
              _context1.n = 1;
              break;
            }
            throw new Error("Nenhum servidor selecionado.");
          case 1:
            resetLibraryState();
            if (!state.selectedServer.isDemo) {
              _context1.n = 2;
              break;
            }
            state.library = clone(SAMPLE_LIBRARY);
            updateHomeCounts();
            return _context1.a(2);
          case 2:
            live = fetchCategories("get_live_categories");
            movies = fetchCategories("get_vod_categories");
            series = fetchCategories("get_series_categories");
            _context1.n = 3;
            return Promise.all([live, movies, series]);
          case 3:
            results = _context1.v;
            state.library.live.categories = results[0];
            state.library.movies.categories = results[1];
            state.library.series.categories = results[2];
            updateHomeCounts();
          case 4:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    return _loadHomeData.apply(this, arguments);
  }
  function refreshSelectedServerData(_x9) {
    return _refreshSelectedServerData.apply(this, arguments);
  }
  function _refreshSelectedServerData() {
    _refreshSelectedServerData = _asyncToGenerator(_regenerator().m(function _callee10(options) {
      var previousLibrary, _t8;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (state.selectedServer) {
              _context10.n = 1;
              break;
            }
            showToast("Nenhum servidor conectado para atualizar.", "error");
            return _context10.a(2, false);
          case 1:
            previousLibrary = clone(state.library);
            showLoading(options && options.loadingText || "Atualizando dados...");
            _context10.p = 2;
            if (state.selectedServer.isDemo) {
              _context10.n = 3;
              break;
            }
            _context10.n = 3;
            return authenticateServer(state.selectedServer);
          case 3:
            _context10.n = 4;
            return loadHomeData();
          case 4:
            if (state.catalog.categoryIndex >= currentCategories().length) {
              state.catalog.categoryIndex = 0;
            }
            if (state.catalog.selectedCategoryIndex >= currentCategories().length) {
              state.catalog.selectedCategoryIndex = 0;
            }
            if (state.catalog.selectedItemCategoryIndex >= currentCategories().length) {
              state.catalog.selectedItemCategoryIndex = 0;
            }
            state.catalog.itemIndex = 0;
            state.catalog.selectedItemIndex = 0;
            state.catalog.detailKey = "";
            render();
            showToast(options && options.successMessage || "Dados do servidor atualizados com sucesso.", "success");
            return _context10.a(2, true);
          case 5:
            _context10.p = 5;
            _t8 = _context10.v;
            state.library = previousLibrary;
            updateHomeCounts();
            render();
            console.log("Refresh failed:", _t8);
            showToast(_t8.message || "Nao foi possivel atualizar os dados do servidor.", "error");
            return _context10.a(2, false);
          case 6:
            _context10.p = 6;
            _context10.n = 7;
            return hideLoading();
          case 7:
            return _context10.f(6);
          case 8:
            return _context10.a(2);
        }
      }, _callee10, null, [[2, 5, 6, 8]]);
    }));
    return _refreshSelectedServerData.apply(this, arguments);
  }
  function fetchCategories(_x0) {
    return _fetchCategories.apply(this, arguments);
  }
  function _fetchCategories() {
    _fetchCategories = _asyncToGenerator(_regenerator().m(function _callee11(action) {
      var server, url, data;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            server = state.selectedServer;
            url = server.baseUrl + "/player_api.php?username=" + encodeURIComponent(server.username) + "&password=" + encodeURIComponent(server.password) + "&action=" + encodeURIComponent(action);
            _context11.n = 1;
            return fetchJson(url);
          case 1:
            data = _context11.v;
            return _context11.a(2, Array.isArray(data) ? data : []);
        }
      }, _callee11);
    }));
    return _fetchCategories.apply(this, arguments);
  }
  function ensureItemsForCurrentCategory() {
    return _ensureItemsForCurrentCategory.apply(this, arguments);
  }
  function _ensureItemsForCurrentCategory() {
    _ensureItemsForCurrentCategory = _asyncToGenerator(_regenerator().m(function _callee12() {
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            return _context12.a(2, ensureItemsForCategoryIndex(state.catalog.categoryIndex));
        }
      }, _callee12);
    }));
    return _ensureItemsForCurrentCategory.apply(this, arguments);
  }
  function ensureItemsForCategoryIndex(_x1) {
    return _ensureItemsForCategoryIndex.apply(this, arguments);
  }
  function _ensureItemsForCategoryIndex() {
    _ensureItemsForCategoryIndex = _asyncToGenerator(_regenerator().m(function _callee13(categoryIndex) {
      var type, categories, category, categoryId;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            type = state.catalog.type;
            categories = currentCategories();
            category = categories[categoryIndex];
            if (category) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            if (!(type === FAVORITES_CATALOG_TYPE)) {
              _context13.n = 2;
              break;
            }
            return _context13.a(2);
          case 2:
            categoryId = category.category_id;
            if (!(type === "live" && isAllLiveCategoryId(categoryId))) {
              _context13.n = 4;
              break;
            }
            _context13.n = 3;
            return ensureAllLiveItems();
          case 3:
            return _context13.a(2);
          case 4:
            if (!(type === "movies" && isAllMoviesCategoryId(categoryId))) {
              _context13.n = 6;
              break;
            }
            _context13.n = 5;
            return ensureAllMovieItems();
          case 5:
            return _context13.a(2);
          case 6:
            if (!(type === "series" && isAllSeriesCategoryId(categoryId))) {
              _context13.n = 8;
              break;
            }
            _context13.n = 7;
            return ensureAllSeriesItems();
          case 7:
            return _context13.a(2);
          case 8:
            if (!(categoryId === RECENT_MOVIES_CATEGORY_ID)) {
              _context13.n = 9;
              break;
            }
            return _context13.a(2);
          case 9:
            if (!(categoryId === RECENT_SERIES_CATEGORY_ID)) {
              _context13.n = 10;
              break;
            }
            return _context13.a(2);
          case 10:
            if (!state.library[type].itemsByCategory[categoryId]) {
              _context13.n = 11;
              break;
            }
            return _context13.a(2);
          case 11:
            showLoading("Carregando conteudo...");
            _context13.p = 12;
            _context13.n = 13;
            return fetchCatalogItemsForCategory(type, categoryId);
          case 13:
            state.library[type].itemsByCategory[categoryId] = _context13.v;
          case 14:
            _context13.p = 14;
            _context13.n = 15;
            return hideLoading();
          case 15:
            return _context13.f(14);
          case 16:
            return _context13.a(2);
        }
      }, _callee13, null, [[12,, 14, 16]]);
    }));
    return _ensureItemsForCategoryIndex.apply(this, arguments);
  }
  function ensureAllLiveItems() {
    return _ensureAllLiveItems.apply(this, arguments);
  }
  function _ensureAllLiveItems() {
    _ensureAllLiveItems = _asyncToGenerator(_regenerator().m(function _callee14() {
      var sourceCategories, allItems, missingCategories;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            if (!state.library.live.itemsByCategory[ALL_LIVE_CATEGORY_ID]) {
              _context14.n = 1;
              break;
            }
            return _context14.a(2);
          case 1:
            sourceCategories = liveSourceCategories();
            showLoading("Carregando todos os canais.\nPreparando a lista completa para voce.", {
              minDurationMs: 10000,
              countdownSeconds: 10
            });
            _context14.p = 2;
            _context14.n = 3;
            return waitForNextPaint();
          case 3:
            _context14.n = 4;
            return fetchAllLiveItems();
          case 4:
            allItems = _context14.v;
            if (!(!allItems.length && sourceCategories.length)) {
              _context14.n = 6;
              break;
            }
            missingCategories = sourceCategories.filter(function (category) {
              return !state.library.live.itemsByCategory[category.category_id];
            });
            _context14.n = 5;
            return Promise.all(missingCategories.map(function (category) {
              return fetchCatalogItemsForCategory("live", category.category_id).then(function (items) {
                state.library.live.itemsByCategory[category.category_id] = items;
              });
            }));
          case 5:
            allItems = flattenLiveCategoryItems();
          case 6:
            state.library.live.itemsByCategory[ALL_LIVE_CATEGORY_ID] = allItems;
            if (hasNativeAllLiveCategory(state.library.live.categories)) {
              state.library.live.itemsByCategory.ALL = allItems;
            }
          case 7:
            _context14.p = 7;
            _context14.n = 8;
            return hideLoading();
          case 8:
            return _context14.f(7);
          case 9:
            return _context14.a(2);
        }
      }, _callee14, null, [[2,, 7, 9]]);
    }));
    return _ensureAllLiveItems.apply(this, arguments);
  }
  function fetchAllLiveItems() {
    return _fetchAllLiveItems.apply(this, arguments);
  }
  function _fetchAllLiveItems() {
    _fetchAllLiveItems = _asyncToGenerator(_regenerator().m(function _callee15() {
      var url, items;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.n) {
          case 0:
            if (!state.selectedServer.isDemo) {
              _context15.n = 1;
              break;
            }
            return _context15.a(2, flattenDemoLiveItems());
          case 1:
            url = state.selectedServer.baseUrl + "/player_api.php?username=" + encodeURIComponent(state.selectedServer.username) + "&password=" + encodeURIComponent(state.selectedServer.password) + "&action=" + encodeURIComponent("get_live_streams");
            _context15.n = 2;
            return fetchJson(url);
          case 2:
            items = _context15.v;
            return _context15.a(2, Array.isArray(items) ? dedupeCatalogItems(items) : []);
        }
      }, _callee15);
    }));
    return _fetchAllLiveItems.apply(this, arguments);
  }
  function ensureAllMovieItems() {
    return _ensureAllMovieItems.apply(this, arguments);
  }
  function _ensureAllMovieItems() {
    _ensureAllMovieItems = _asyncToGenerator(_regenerator().m(function _callee16() {
      var sourceCategories, allItems, missingCategories;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            if (!state.library.movies.itemsByCategory[ALL_MOVIES_CATEGORY_ID]) {
              _context16.n = 1;
              break;
            }
            return _context16.a(2);
          case 1:
            sourceCategories = movieSourceCategories();
            showLoading("Carregando todos os filmes...");
            _context16.p = 2;
            _context16.n = 3;
            return fetchAllMovieItems();
          case 3:
            allItems = _context16.v;
            if (!(!allItems.length && sourceCategories.length)) {
              _context16.n = 5;
              break;
            }
            missingCategories = sourceCategories.filter(function (category) {
              return !state.library.movies.itemsByCategory[category.category_id];
            });
            _context16.n = 4;
            return Promise.all(missingCategories.map(function (category) {
              return fetchCatalogItemsForCategory("movies", category.category_id).then(function (items) {
                state.library.movies.itemsByCategory[category.category_id] = items;
              });
            }));
          case 4:
            allItems = flattenMovieCategoryItems();
          case 5:
            state.library.movies.itemsByCategory[ALL_MOVIES_CATEGORY_ID] = allItems;
            if (hasNativeAllMoviesCategory(state.library.movies.categories)) {
              state.library.movies.itemsByCategory.ALL = allItems;
            }
          case 6:
            _context16.p = 6;
            hideLoading();
            return _context16.f(6);
          case 7:
            return _context16.a(2);
        }
      }, _callee16, null, [[2,, 6, 7]]);
    }));
    return _ensureAllMovieItems.apply(this, arguments);
  }
  function fetchAllMovieItems() {
    return _fetchAllMovieItems.apply(this, arguments);
  }
  function _fetchAllMovieItems() {
    _fetchAllMovieItems = _asyncToGenerator(_regenerator().m(function _callee17() {
      var url, items;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.n) {
          case 0:
            if (!state.selectedServer.isDemo) {
              _context17.n = 1;
              break;
            }
            return _context17.a(2, flattenDemoMovieItems());
          case 1:
            url = state.selectedServer.baseUrl + "/player_api.php?username=" + encodeURIComponent(state.selectedServer.username) + "&password=" + encodeURIComponent(state.selectedServer.password) + "&action=" + encodeURIComponent("get_vod_streams");
            _context17.n = 2;
            return fetchJson(url);
          case 2:
            items = _context17.v;
            return _context17.a(2, Array.isArray(items) ? dedupeCatalogItems(items) : []);
        }
      }, _callee17);
    }));
    return _fetchAllMovieItems.apply(this, arguments);
  }
  function ensureAllSeriesItems() {
    return _ensureAllSeriesItems.apply(this, arguments);
  }
  function _ensureAllSeriesItems() {
    _ensureAllSeriesItems = _asyncToGenerator(_regenerator().m(function _callee18() {
      var sourceCategories, allItems, missingCategories;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            if (!state.library.series.itemsByCategory[ALL_SERIES_CATEGORY_ID]) {
              _context18.n = 1;
              break;
            }
            return _context18.a(2);
          case 1:
            sourceCategories = seriesSourceCategories();
            showLoading("Carregando todas as series...");
            _context18.p = 2;
            _context18.n = 3;
            return fetchAllSeriesItems();
          case 3:
            allItems = _context18.v;
            if (!(!allItems.length && sourceCategories.length)) {
              _context18.n = 5;
              break;
            }
            missingCategories = sourceCategories.filter(function (category) {
              return !state.library.series.itemsByCategory[category.category_id];
            });
            _context18.n = 4;
            return Promise.all(missingCategories.map(function (category) {
              return fetchCatalogItemsForCategory("series", category.category_id).then(function (items) {
                state.library.series.itemsByCategory[category.category_id] = items;
              });
            }));
          case 4:
            allItems = flattenSeriesCategoryItems();
          case 5:
            state.library.series.itemsByCategory[ALL_SERIES_CATEGORY_ID] = allItems;
            if (hasNativeAllSeriesCategory(state.library.series.categories)) {
              state.library.series.itemsByCategory.ALL = allItems;
            }
          case 6:
            _context18.p = 6;
            hideLoading();
            return _context18.f(6);
          case 7:
            return _context18.a(2);
        }
      }, _callee18, null, [[2,, 6, 7]]);
    }));
    return _ensureAllSeriesItems.apply(this, arguments);
  }
  function fetchAllSeriesItems() {
    return _fetchAllSeriesItems.apply(this, arguments);
  }
  function _fetchAllSeriesItems() {
    _fetchAllSeriesItems = _asyncToGenerator(_regenerator().m(function _callee19() {
      var url, items;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.n) {
          case 0:
            if (!state.selectedServer.isDemo) {
              _context19.n = 1;
              break;
            }
            return _context19.a(2, flattenDemoSeriesItems());
          case 1:
            url = state.selectedServer.baseUrl + "/player_api.php?username=" + encodeURIComponent(state.selectedServer.username) + "&password=" + encodeURIComponent(state.selectedServer.password) + "&action=" + encodeURIComponent("get_series");
            _context19.n = 2;
            return fetchJson(url);
          case 2:
            items = _context19.v;
            return _context19.a(2, Array.isArray(items) ? dedupeCatalogItems(items) : []);
        }
      }, _callee19);
    }));
    return _fetchAllSeriesItems.apply(this, arguments);
  }
  function fetchCatalogItemsForCategory(_x10, _x11) {
    return _fetchCatalogItemsForCategory.apply(this, arguments);
  }
  function _fetchCatalogItemsForCategory() {
    _fetchCatalogItemsForCategory = _asyncToGenerator(_regenerator().m(function _callee20(type, categoryId) {
      var demoItems, actionMap, url, items;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.n) {
          case 0:
            if (!state.selectedServer.isDemo) {
              _context20.n = 1;
              break;
            }
            demoItems = SAMPLE_LIBRARY[type].itemsByCategory[categoryId] || [];
            return _context20.a(2, clone(demoItems));
          case 1:
            actionMap = {
              live: "get_live_streams",
              movies: "get_vod_streams",
              series: "get_series"
            };
            url = state.selectedServer.baseUrl + "/player_api.php?username=" + encodeURIComponent(state.selectedServer.username) + "&password=" + encodeURIComponent(state.selectedServer.password) + "&action=" + encodeURIComponent(actionMap[type]) + "&category_id=" + encodeURIComponent(categoryId);
            _context20.n = 2;
            return fetchJson(url);
          case 2:
            items = _context20.v;
            return _context20.a(2, Array.isArray(items) ? items : []);
        }
      }, _callee20);
    }));
    return _fetchCatalogItemsForCategory.apply(this, arguments);
  }
  function flattenDemoMovieItems() {
    var combined = [];
    Object.keys(SAMPLE_LIBRARY.movies.itemsByCategory).forEach(function (categoryId) {
      var items = SAMPLE_LIBRARY.movies.itemsByCategory[categoryId] || [];
      items.forEach(function (item) {
        combined.push(clone(item));
      });
    });
    return dedupeCatalogItems(combined);
  }
  function flattenDemoLiveItems() {
    var combined = [];
    Object.keys(SAMPLE_LIBRARY.live.itemsByCategory).forEach(function (categoryId) {
      var items = SAMPLE_LIBRARY.live.itemsByCategory[categoryId] || [];
      items.forEach(function (item) {
        combined.push(clone(item));
      });
    });
    return dedupeCatalogItems(combined);
  }
  function flattenDemoSeriesItems() {
    var combined = [];
    Object.keys(SAMPLE_LIBRARY.series.itemsByCategory).forEach(function (categoryId) {
      var items = SAMPLE_LIBRARY.series.itemsByCategory[categoryId] || [];
      items.forEach(function (item) {
        combined.push(clone(item));
      });
    });
    return dedupeCatalogItems(combined);
  }
  function openCatalog(type) {
    var initialCategoryIndex = preferredInitialCatalogCategoryIndex(type);
    if (state.catalog.type !== type) {
      clearMovieSearchQuery();
      state.catalog.movieSearchIndexKey = "";
      state.catalog.movieSearchIndexItems = [];
      state.catalog.movieSearchIndexTitles = [];
    }
    state.catalog.type = type;
    state.catalog.zone = "categories";
    state.catalog.lupaFocada = false;
    state.catalog.view = "browse";
    state.catalog.categoryIndex = initialCategoryIndex;
    state.catalog.itemIndex = 0;
    state.catalog.itemWindowStartIndex = 0;
    state.catalog.selectedCategoryIndex = initialCategoryIndex;
    state.catalog.selectedItemCategoryIndex = initialCategoryIndex;
    state.catalog.selectedItemIndex = 0;
    state.catalog.detailActionIndex = 0;
    state.catalog.detailKey = "";
    state.catalog.seriesDetailPage = "overview";
    state.catalog.seriesDetailFocusZone = "actions";
    state.catalog.seriesDetailSeasonIndex = 0;
    state.catalog.seriesDetailEpisodeIndex = 0;
    state.catalog.seriesDetailSeriesId = "";
    setScreen("catalog");
    ensureItemsForCurrentCategory().then(renderCatalogScreen);
  }
  function preferredInitialCatalogCategoryIndex(type) {
    if (type === FAVORITES_CATALOG_TYPE) {
      var firstNonEmptyFavoriteIndex = favoriteCatalogCategories().findIndex(function (category) {
        return currentFavoriteItems(favoriteTypeForCategoryId(category.category_id)).length;
      });
      return firstNonEmptyFavoriteIndex >= 0 ? firstNonEmptyFavoriteIndex : 0;
    }
    if (type === "live") {
      var liveCategories = displayLiveCategories();
      var firstPlayableLiveIndex = liveCategories.findIndex(function (category) {
        return !isAllLiveCategoryId(category && category.category_id ? category.category_id : "") && !categoriaBloqueada(category);
      });
      return firstPlayableLiveIndex >= 0 ? firstPlayableLiveIndex : 0;
    }
    if (type !== "movies" && type !== "series") {
      return 0;
    }
    var categories = type === "movies" ? displayMovieCategories() : displaySeriesCategories();
    var firstPlayableIndex = categories.findIndex(function (category) {
      var categoryId = String(category && category.category_id ? category.category_id : "");
      if (categoriaBloqueada(category)) {
        return false;
      }
      if (type === "movies") {
        return categoryId !== ALL_MOVIES_CATEGORY_ID && categoryId !== RECENT_MOVIES_CATEGORY_ID && categoryId.toUpperCase() !== "ALL";
      }
      return categoryId !== ALL_SERIES_CATEGORY_ID && categoryId !== RECENT_SERIES_CATEGORY_ID && categoryId.toUpperCase() !== "ALL";
    });
    return firstPlayableIndex >= 0 ? firstPlayableIndex : 0;
  }
  function activateCatalogItem(item, options) {
    if (!item) return;
    if (isCatalogSearchAction(item)) {
      openMovieSearchOverlay();
      return;
    }
    var config = options || {};
    var contentType = catalogContentType(item, state.catalog.type);
    if (contentType === "series") {
      showToast("Abra os detalhes da serie para ver temporadas e episodios.", "success");
      return;
    }
    var url = buildPlaybackUrl(item, contentType);
    if (!url) {
      showToast("Nao foi possivel montar a URL de reproducao.", "error");
      return;
    }
    var playerState = {
      title: item.name || "Sem titulo",
      eyebrow: contentType === "live" ? "Canal ao vivo" : "Video sob demanda",
      url: url,
      type: contentType,
      item: clone(item)
    };
    var playbackEntry = contentType === "movies" ? playbackEntryForItem(item) : null;
    if (contentType === "movies" && config.startFromBeginning) {
      clearPlaybackResumeForItem(item);
      playerState.resumeTime = 0;
      openPlayer(playerState);
      return;
    }
    if (contentType === "movies" && config.resumeFromSaved && playbackResumeAllowed(playbackEntry)) {
      playerState.resumeTime = playbackEntryPosition(playbackEntry);
      openPlayer(playerState);
      return;
    }
    if (contentType === "movies" && !config.skipResumePrompt && playbackResumeAllowed(playbackEntry)) {
      openResumePrompt(playerState, playbackEntry);
      return;
    }
    openPlayer(playerState);
  }
  function closePosterCatalogDetail() {
    state.catalog.view = "browse";
    state.catalog.detailActionIndex = 0;
    state.catalog.detailKey = "";
    state.catalog.seriesDetailPage = "overview";
    state.catalog.seriesDetailFocusZone = "actions";
    render();
  }
  function runPosterCatalogDetailAction(action) {
    if (!action) {
      return;
    }
    var item = currentFocusedCatalogItem();
    if (action.id === "back") {
      closePosterCatalogDetail();
      return;
    }
    if (action.id === "favorite") {
      var favoriteAdded = toggleFavoriteItem(item);
      state.catalog.detailKey = "";
      renderCatalogScreen();
      showToast(favoriteAdded ? favoriteTypeLabel(favoriteTypeForItem(item)) + " adicionado aos favoritos." : favoriteTypeLabel(favoriteTypeForItem(item)) + " removido dos favoritos.", "success");
      return;
    }
    if (action.id === "browse-seasons") {
      state.catalog.seriesDetailPage = "seasons";
      state.catalog.seriesDetailFocusZone = "seasons";
      state.catalog.detailActionIndex = 0;
      state.catalog.detailKey = "";
      renderCatalogScreen();
      return;
    }
    if (action.id === "series-back") {
      if (isSeriesEpisodeBrowserPage()) {
        state.catalog.seriesDetailPage = "seasons";
        state.catalog.seriesDetailFocusZone = seriesSeasonEntries(item).length ? "seasons" : "actions";
        state.catalog.detailActionIndex = 0;
        state.catalog.detailKey = "";
        renderCatalogScreen();
        return;
      }
      if (isSeriesSeasonBrowserPage()) {
        state.catalog.seriesDetailPage = "overview";
        state.catalog.seriesDetailFocusZone = "actions";
        state.catalog.detailActionIndex = 0;
        state.catalog.detailKey = "";
        renderCatalogScreen();
        return;
      }
      closePosterCatalogDetail();
      return;
    }
    if (action.id === "restart") {
      activateCatalogItem(item, {
        startFromBeginning: true,
        skipResumePrompt: true
      });
      return;
    }
    if (action.id === "play-episode") {
      var episode = currentSeriesEpisode(item);
      if (!episode) {
        showToast("Nenhum episodio disponivel nesta temporada.", "error");
        return;
      }
      openSeriesEpisode(item, episode, {
        resumeFromSaved: true
      });
      return;
    }
    if (action.id === "series-continue") {
      playSeriesFromResumeOrFirstEpisode(item);
      return;
    }
    if (action.id === "play") {
      if (state.catalog.type === "series") {
        playSeriesFromResumeOrFirstEpisode(item);
        return;
      }
      activateCatalogItem(item, {
        resumeFromSaved: true,
        skipResumePrompt: true
      });
      return;
    }
    activateCatalogItem(item, {
      skipResumePrompt: true
    });
  }
  function scrollPosterDetailSummary(direction) {
    var summaryShell = dom.detailCard ? dom.detailCard.querySelector(".poster-detail-summary-shell") : null;
    if (!summaryShell) {
      return false;
    }
    var maxScrollTop = Math.max(summaryShell.scrollHeight - summaryShell.clientHeight, 0);
    if (!maxScrollTop) {
      return false;
    }
    var delta = Math.max(Math.round(summaryShell.clientHeight * 0.78), 120);
    var nextScrollTop = direction === "up" ? Math.max(summaryShell.scrollTop - delta, 0) : Math.min(summaryShell.scrollTop + delta, maxScrollTop);
    if (nextScrollTop === summaryShell.scrollTop) {
      return false;
    }
    summaryShell.scrollTop = nextScrollTop;
    return true;
  }
  function buildPlaybackUrl(item, type) {
    if (item.direct_source && item.direct_source !== "null") {
      return item.direct_source;
    }
    if (!state.selectedServer || state.selectedServer.isDemo) {
      return "";
    }
    var contentType = catalogContentType(item, type);
    var server = state.selectedServer;
    if (contentType === "live") {
      return server.baseUrl + "/live/" + encodeURIComponent(server.username) + "/" + encodeURIComponent(server.password) + "/" + encodeURIComponent(item.stream_id) + ".m3u8";
    }
    if (contentType === "movies") {
      return server.baseUrl + "/movie/" + encodeURIComponent(server.username) + "/" + encodeURIComponent(server.password) + "/" + encodeURIComponent(item.stream_id) + "." + encodeURIComponent(item.container_extension || "mp4");
    }
    if (contentType === "series") {
      return server.baseUrl + "/series/" + encodeURIComponent(server.username) + "/" + encodeURIComponent(server.password) + "/" + encodeURIComponent(item.episode_id || item.id || item.stream_id || "") + "." + encodeURIComponent(item.container_extension || "mp4");
    }
    return "";
  }
  function buildSeriesEpisodePlayerState(seriesItem, episode, resumeEntry) {
    var episodeLabel = formatEpisodeLabel(episode && (episode.season_number || episode.season), episode && (episode.episode_number || episode.episode_num));
    var episodeTitle = firstNonEmpty(episode && episode.title, episode && episode.name, "Episodio");
    return {
      title: firstNonEmpty(seriesItem && seriesItem.name, "Serie") + (episodeLabel ? " | " + episodeLabel : "") + (episodeTitle ? " | " + episodeTitle : ""),
      eyebrow: episodeLabel ? "Serie | " + episodeLabel : "Serie",
      url: buildPlaybackUrl(episode, "series"),
      type: "series",
      item: clone(episode),
      seriesItem: seriesItem ? clone(seriesItem) : null,
      resumeTime: resumeEntry ? playbackEntryPosition(resumeEntry) : 0
    };
  }
  function openSeriesEpisode(seriesItem, episode, options) {
    if (!seriesItem || !episode) {
      showToast("Nenhum episodio disponivel nesta serie.", "error");
      return;
    }
    var playbackEntry = playbackEntryForItem(episode, "series");
    var playerState = buildSeriesEpisodePlayerState(seriesItem, episode, playbackEntry);
    var config = options || {};
    if (!playerState.url) {
      showToast("Nao foi possivel montar a URL deste episodio.", "error");
      return;
    }
    if (config.startFromBeginning) {
      clearPlaybackResumeForItem(episode);
      playerState.resumeTime = 0;
      openPlayer(playerState);
      return;
    }
    if (config.resumeFromSaved && playbackResumeAllowed(playbackEntry)) {
      playerState.resumeTime = playbackEntryPosition(playbackEntry);
    }
    openPlayer(playerState);
  }
  function playSeriesFromResumeOrFirstEpisode(seriesItem) {
    var seasons = seriesSeasonEntries(seriesItem);
    var detailState = catalogItemDetailState(seriesItem);
    if (!seasons.length) {
      showToast(detailState && detailState.loading ? "Carregando episodios desta serie..." : "Nenhum episodio disponivel nesta serie.", detailState && detailState.loading ? undefined : "error");
      return;
    }
    var resumeEntry = seriesResumeEntryForSeries(seriesItem);
    var resumeEpisode = seriesEpisodeForEntry(seriesItem, resumeEntry);
    if (playbackResumeAllowed(resumeEntry) && resumeEpisode) {
      openSeriesEpisode(seriesItem, resumeEpisode, {
        resumeFromSaved: true
      });
      return;
    }
    openSeriesEpisode(seriesItem, firstSeriesEpisode(seriesItem), {
      startFromBeginning: true
    });
  }
  function nextSeriesEpisodeAfter(seriesItem, episode) {
    if (!seriesItem || !episode) {
      return null;
    }
    var currentEpisodeId = catalogItemId(episode);
    var foundCurrent = false;
    var seasons = seriesSeasonEntries(seriesItem);
    for (var seasonIndex = 0; seasonIndex < seasons.length; seasonIndex += 1) {
      var seasonNumber = normalizeSeriesNumber(seasons[seasonIndex].season_number);
      var seasonEpisodes = seriesEpisodesForSeason(seriesItem, seasonNumber);
      for (var episodeIndex = 0; episodeIndex < seasonEpisodes.length; episodeIndex += 1) {
        var candidate = seasonEpisodes[episodeIndex];
        if (foundCurrent) {
          return candidate;
        }
        if (catalogItemId(candidate) === currentEpisodeId) {
          foundCurrent = true;
        }
      }
    }
    return null;
  }
  var SEGUNDOS_PARA_O_PROXIMO = 15;
  var contagemDoProximo = null;
  function proximoEpisodioDoPlayer() {
    if (state.player.type !== "series" || !state.player.seriesSnapshot || !state.player.itemSnapshot) {
      return null;
    }
    return nextSeriesEpisodeAfter(state.player.seriesSnapshot, state.player.itemSnapshot);
  }
  function irParaProximoEpisodio() {
    var serie = state.player.seriesSnapshot;
    var proximo = contagemDoProximo && contagemDoProximo.episodio || proximoEpisodioDoPlayer();
    if (!serie || !proximo) {
      showToast("Este e o ultimo episodio disponivel.", "error");
      return;
    }
    fecharContagemDoProximo();
    persistCurrentPlaybackProgress(true);
    openSeriesEpisode(serie, proximo, {
      startFromBeginning: true
    });
  }
  function rotuloDoEpisodio(episodio) {
    var codigo = formatEpisodeLabel(episodio.season_number || episodio.season, episodio.episode_number || episodio.episode_num);
    var nome = firstNonEmpty(episodio.title, episodio.name, "");
    return codigo && nome.indexOf(codigo) < 0 ? codigo + "  |  " + nome : nome || codigo || "Proximo episodio";
  }
  function abrirContagemDoProximo(episodio) {
    fecharContagemDoProximo();
    var serie = state.player.seriesSnapshot;
    var caixa = document.createElement("div");
    caixa.className = "proximo-episodio";
    caixa.innerHTML = '<img class="proximo-episodio-capa" alt="" src="' + escapeHtml(firstNonEmpty(episodio.stream_icon, episodio.cover, serie && catalogDetailImage(serie))) + '">' + '<div class="proximo-episodio-texto">' + '<p class="proximo-episodio-titulo">Proximo episodio</p>' + '<p class="proximo-episodio-nome">' + escapeHtml(rotuloDoEpisodio(episodio)) + "</p>" + '<p class="proximo-episodio-tempo">Comeca em <b class="proximo-episodio-segundos">' + SEGUNDOS_PARA_O_PROXIMO + "</b> segundos</p>" + '<div class="proximo-episodio-barra"><div class="proximo-episodio-barra-cheia"></div></div>' + '<div class="proximo-episodio-botoes">' + '<div class="proximo-episodio-botao" data-foco-grupo="proximoEpisodio" data-foco-indice="0">Assistir agora</div>' + '<div class="proximo-episodio-botao" data-foco-grupo="proximoEpisodio" data-foco-indice="1">Cancelar</div>' + "</div></div>";
    (dom.playerOverlay || document.getElementById("playerOverlay") || document.body).appendChild(caixa);
    contagemDoProximo = {
      episodio: episodio,
      restante: SEGUNDOS_PARA_O_PROXIMO,
      foco: 0,
      caixa: caixa,
      relogio: null
    };
    state.player.controlsVisible = false;
    clearPlayerHudTimer();
    renderPlayer();
    desenharContagemDoProximo();
    contagemDoProximo.relogio = setInterval(function () {
      if (!contagemDoProximo) {
        return;
      }
      contagemDoProximo.restante -= 1;
      if (contagemDoProximo.restante <= 0) {
        irParaProximoEpisodio();
        return;
      }
      desenharContagemDoProximo();
    }, 1000);
  }
  function desenharContagemDoProximo() {
    var c = contagemDoProximo;
    if (!c) {
      return;
    }
    var segundos = c.caixa.querySelector(".proximo-episodio-segundos");
    if (segundos) segundos.textContent = String(c.restante);
    var barra = c.caixa.querySelector(".proximo-episodio-barra-cheia");
    if (barra) barra.style.width = Math.round(c.restante / SEGUNDOS_PARA_O_PROXIMO * 100) + "%";
    Array.prototype.forEach.call(c.caixa.querySelectorAll(".proximo-episodio-botao"), function (botao, indice) {
      botao.classList.toggle("is-focused", indice === c.foco);
    });
  }
  function fecharContagemDoProximo() {
    var c = contagemDoProximo;
    contagemDoProximo = null;
    if (!c) {
      return;
    }
    if (c.relogio) clearInterval(c.relogio);
    if (c.caixa && c.caixa.parentNode) c.caixa.parentNode.removeChild(c.caixa);
  }
  function teclasDaContagemDoProximo(action, event) {
    var c = contagemDoProximo;
    if (action.type === "left" || action.type === "right" || action.type === "up" || action.type === "down") {
      event.preventDefault();
      c.foco = action.type === "left" || action.type === "up" ? 0 : 1;
      desenharContagemDoProximo();
      return;
    }
    if (action.type === "enter" || action.type === "playpause" || action.type === "play" || action.type === "next") {
      event.preventDefault();
      if (c.foco === 1 && action.type === "enter") {
        closePlayer();
        return;
      }
      irParaProximoEpisodio();
      return;
    }
    if (action.type === "back" || action.type === "stop") {
      event.preventDefault();
      closePlayer();
    }
  }
  function handlePlayerPlaybackEnded() {
    if (!state.player.open) {
      return;
    }
    persistCurrentPlaybackProgress(true);
    if (state.player.type === "series" && state.player.seriesSnapshot && state.player.itemSnapshot) {
      var nextEpisode = nextSeriesEpisodeAfter(state.player.seriesSnapshot, state.player.itemSnapshot);
      if (nextEpisode) {
        abrirContagemDoProximo(nextEpisode);
        return;
      }
    }
    closePlayer();
  }
  function openPlayer(playerState) {
    fecharContagemDoProximo();
    clearPlayerHudTimer();
    state.player.open = true;
    state.player.title = playerState.title;
    state.player.eyebrow = playerState.eyebrow;
    state.player.url = playerState.url;
    state.player.type = playerState.type || "";
    state.player.mediaKind = playerState.mediaKind === "image" ? "image" : "video";
    state.player.itemId = catalogItemId(playerState.item);
    state.player.itemSnapshot = playerState.item ? clone(playerState.item) : null;
    state.player.seriesSnapshot = playerState.seriesItem ? clone(playerState.seriesItem) : null;
    state.player.resumeTime = sanitizePlaybackTime(playerState.resumeTime);
    state.player.lastPersistedTime = 0;
    state.player.engine = "";
    state.player.controlsVisible = true;
    state.player.controlIndex = firstAvailablePlayerControlIndex(state.player.mediaKind === "image" ? "close" : "toggle");
    state.player.focusZone = "controls";
    state.player.currentTime = 0;
    state.player.duration = 0;
    state.player.paused = false;
    state.player.canSeek = state.player.mediaKind !== "image" && !isLiveLikeCatalogType(playerState.type);
    state.player.buffering = false;
    state.player.recoveryOpen = false;
    state.player.recoveryActionIndex = 0;
    state.player.reconnectAttempts = 0;
    state.player.reconnecting = false;
    markPlayerProgress(0, true);
    state.player.nativeActionPending = false;
    state.player.nativeLayoutDirty = false;
    if (promoteNativePreviewToPlayer(playerState)) {
      return;
    }
    if (promoverPreviaParaPlayer(playerState)) {
      return;
    }
    stopCatalogPreview();
    renderPlayer();
    focusPlayerOverlay();
    attachPlayerSource(playerState.url);
    startPlayerStallMonitor();
    showPlayerControls();
  }
  function closePlayer() {
    fecharContagemDoProximo();
    var shouldKeepLivePreview = shouldDemoteNativePlayerToPreview();
    var previewUrl = shouldKeepLivePreview ? state.player.url : "";
    var previewItemKey = shouldKeepLivePreview && state.player.itemSnapshot ? detailKeyFor(state.player.itemSnapshot) : "";
    persistCurrentPlaybackProgress(true);
    clearPlayerHudTimer();
    clearNativePlayerLayoutTimer();
    clearPlayerStallMonitor();
    clearNetworkResumeTimer();
    state.network.resumePlayback = false;
    if (!shouldKeepLivePreview) {
      stopNativePlayer();
    }
    var voltouParaPrevia = devolverPreviaNoCorpo() || devolverPlayerParaPrevia();
    if (!voltouParaPrevia) {
      destroyManagedHls("player");
      resetVideoElement(dom.playerVideo);
    }
    if (dom.playerImage) {
      dom.playerImage.removeAttribute("src");
    }
    state.player.open = false;
    state.player.title = "";
    state.player.eyebrow = "";
    state.player.url = "";
    state.player.type = "";
    state.player.mediaKind = "video";
    state.player.itemId = "";
    state.player.itemSnapshot = null;
    state.player.seriesSnapshot = null;
    state.player.resumeTime = 0;
    state.player.lastPersistedTime = 0;
    state.player.engine = "";
    state.player.controlsVisible = false;
    state.player.controlIndex = 1;
    state.player.focusZone = "controls";
    state.player.currentTime = 0;
    state.player.duration = 0;
    state.player.paused = false;
    state.player.canSeek = false;
    state.player.buffering = false;
    state.player.recoveryOpen = false;
    state.player.recoveryActionIndex = 0;
    state.player.reconnectAttempts = 0;
    state.player.reconnecting = false;
    state.player.lastProgressAt = 0;
    state.player.lastProgressTime = 0;
    state.player.nativeActionPending = false;
    state.player.nativeLayoutDirty = false;
    syncScreenSaverState();
    if (shouldKeepLivePreview) {
      state.nativePreview.active = true;
      state.nativePreview.preparing = false;
      state.nativePreview.url = previewUrl;
      state.nativePreview.itemKey = previewItemKey;
      try {
        nativeAvplay().setDisplayMethod("PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO");
      } catch (error) {
        console.log("Native preview demote display method skipped:", error);
      }
      setNativePreviewListener();
    }
    renderPlayer();
    blurPlayerOverlay();
    if (listaPrecisaRedesenhar && state.screen === "catalog") {
      listaPrecisaRedesenhar = false;
      renderCatalogScreen();
    }
    if (state.screen === "catalog") {
      if (shouldKeepLivePreview) {
        syncNativePreviewAfterPaint();
      } else if (!voltouParaPrevia) {
        renderCatalogDetail(true);
      }
    }
  }
  function shouldDemoteNativePlayerToPreview() {
    return Boolean(state.screen === "catalog" && isNativePlayerActive() && state.player.open && state.player.url && state.player.itemSnapshot && isLiveLikeCatalogType(state.player.type));
  }
  function startPlayerStallMonitor() {
    clearPlayerStallMonitor();
    if (!state.player.open || state.player.mediaKind === "image") {
      return;
    }
    markPlayerProgress(state.player.currentTime, true);
    playerStallTimer = setInterval(checkPlaybackHealth, LIVE_STALL_CHECK_MS);
  }
  function playerStallThresholdMs() {
    return isLiveLikeCatalogType(state.player.type) ? LIVE_STALL_THRESHOLD_MS : VOD_STALL_THRESHOLD_MS;
  }
  function clearPlayerStallMonitor() {
    if (!playerStallTimer) {
      return;
    }
    clearInterval(playerStallTimer);
    playerStallTimer = null;
  }
  function markPlayerProgress(position, force) {
    var nextPosition = Number(position) || 0;
    if (force || Math.abs(nextPosition - state.player.lastProgressTime) >= 0.75) {
      state.player.lastProgressAt = Date.now();
      state.player.lastProgressTime = nextPosition;
    }
  }
  function checkPlaybackHealth() {
    if (!state.player.open || state.player.mediaKind === "image" || state.player.recoveryOpen || state.player.reconnecting) {
      return;
    }
    if (!isNetworkConnected()) {
      handleNetworkOffline();
      return;
    }
    if (state.network.offline || state.player.paused || state.player.buffering) {
      return;
    }
    if (!isLiveLikeCatalogType(state.player.type) && isPlaybackNearEnd(state.player.currentTime, state.player.duration)) {
      return;
    }
    var lastProgressAt = state.player.lastProgressAt || Date.now();
    if (Date.now() - lastProgressAt < playerStallThresholdMs()) {
      return;
    }
    if (state.player.reconnectAttempts < LIVE_AUTO_RECONNECT_LIMIT) {
      restartPlayerStream({
        automatic: true
      });
      return;
    }
    openPlayerRecovery();
  }
  function restartPlayerStream(options) {
    var settings = options || {};
    if (!state.player.open || !state.player.url || state.player.mediaKind === "image" || state.player.reconnecting) {
      return false;
    }
    var isLive = isLiveLikeCatalogType(state.player.type);
    var resumeFrom = isLive ? 0 : Math.max(sanitizePlaybackTime(state.player.currentTime), sanitizePlaybackTime(state.player.resumeTime));
    state.player.reconnecting = true;
    state.player.buffering = true;
    if (settings.automatic) {
      state.player.reconnectAttempts += 1;
      showToast("Sinal instavel. Tentando reconectar " + state.player.reconnectAttempts + "/" + LIVE_AUTO_RECONNECT_LIMIT + "...", "error");
    } else if (settings.statusMessage) {
      showToast(settings.statusMessage, "success");
    }
    markPlayerProgress(resumeFrom, true);
    clearPlayerHudTimer();
    stopNativePlayer();
    destroyManagedHls("player");
    resetVideoElement(dom.playerVideo);
    state.player.engine = "";
    state.player.resumeTime = resumeFrom;
    state.player.currentTime = resumeFrom;
    if (isLive) {
      state.player.duration = 0;
    }
    state.player.paused = false;
    state.player.recoveryOpen = false;
    renderPlayer();
    focusPlayerOverlay();
    attachPlayerSource(state.player.url);
    startPlayerStallMonitor();
    window.setTimeout(function () {
      state.player.reconnecting = false;
      state.player.buffering = false;
      markPlayerProgress(state.player.currentTime, true);
    }, 2200);
    return true;
  }
  function openPlayerRecovery() {
    state.player.recoveryOpen = true;
    state.player.recoveryActionIndex = 0;
    state.player.buffering = false;
    state.player.reconnecting = false;
    showPlayerControls(true);
    renderPlayerRecovery();
  }
  function closePlayerRecovery() {
    state.player.recoveryOpen = false;
    state.player.recoveryActionIndex = 0;
    renderPlayerRecovery();
  }
  function handlePlayerRecoveryKeys(action, event) {
    if (action.type === "back" || action.type === "stop") {
      event.preventDefault();
      closePlayerRecovery();
      closePlayer();
      return;
    }
    if (action.type === "left" || action.type === "up") {
      event.preventDefault();
      state.player.recoveryActionIndex = state.player.recoveryActionIndex > 0 ? state.player.recoveryActionIndex - 1 : LIVE_RECOVERY_ACTIONS.length - 1;
      renderPlayerRecovery();
      return;
    }
    if (action.type === "right" || action.type === "down") {
      event.preventDefault();
      state.player.recoveryActionIndex = (state.player.recoveryActionIndex + 1) % LIVE_RECOVERY_ACTIONS.length;
      renderPlayerRecovery();
      return;
    }
    if (action.type === "enter" || action.type === "playpause") {
      event.preventDefault();
      runPlayerRecoveryAction(LIVE_RECOVERY_ACTIONS[state.player.recoveryActionIndex].id);
    }
  }
  function runPlayerRecoveryAction(actionId) {
    if (actionId === "retry") {
      state.player.reconnectAttempts = 0;
      closePlayerRecovery();
      restartPlayerStream({});
      return;
    }
    if (actionId === "servers") {
      closePlayerRecovery();
      closePlayer();
      setScreen("servers");
      showToast("Escolha outro servidor para melhorar a estabilidade.", "success");
      return;
    }
    closePlayerRecovery();
    closePlayer();
    showToast("Escolha outro canal. Se continuar travando, troque de servidor.", "success");
  }
  function togglePlayPause() {
    if (state.player.mediaKind === "image") {
      closePlayer();
      return;
    }
    if (isNativePlayerActive()) {
      showPlayerControls(state.player.paused);
      toggleNativePlayerPause();
      return;
    }
    showPlayerControls(dom.playerVideo.paused);
    if (dom.playerVideo.paused) {
      dom.playerVideo.play().catch(function () {
        showToast("Nao foi possivel continuar a reproducao.", "error");
      });
    } else {
      dom.playerVideo.pause();
    }
  }
  function playerControlActions() {
    if (state.player.mediaKind === "image") {
      return [{
        id: "rewind",
        enabled: false
      }, {
        id: "toggle",
        enabled: false
      }, {
        id: "forward",
        enabled: false
      }, {
        id: "favorite",
        enabled: false,
        oculta: true
      }, {
        id: "next",
        enabled: false,
        oculta: true
      }, {
        id: "close",
        enabled: true
      }];
    }
    if (isLiveLikeCatalogType(state.player.type)) {
      return [{
        id: "rewind",
        enabled: false,
        oculta: true
      }, {
        id: "toggle",
        enabled: false,
        oculta: true
      }, {
        id: "forward",
        enabled: false,
        oculta: true
      }, {
        id: "favorite",
        enabled: Boolean(state.player.itemSnapshot)
      }, {
        id: "next",
        enabled: false,
        oculta: true
      }, {
        id: "close",
        enabled: true
      }];
    }
    return [{
      id: "rewind",
      enabled: state.player.canSeek
    }, {
      id: "toggle",
      enabled: true
    }, {
      id: "forward",
      enabled: state.player.canSeek
    }, {
      id: "favorite",
      enabled: false,
      oculta: true
    }, {
      id: "next",
      enabled: Boolean(proximoEpisodioDoPlayer()),
      oculta: !proximoEpisodioDoPlayer()
    }, {
      id: "close",
      enabled: true
    }];
  }
  function availablePlayerControlIndexes() {
    return playerControlActions().map(function (action, index) {
      return action.enabled ? index : null;
    }).filter(function (value) {
      return value !== null;
    });
  }
  function firstAvailablePlayerControlIndex(preferredActionId) {
    var actions = playerControlActions();
    if (preferredActionId) {
      var preferredIndex = actions.findIndex(function (action) {
        return action.id === preferredActionId && action.enabled;
      });
      if (preferredIndex >= 0) {
        return preferredIndex;
      }
    }
    var available = availablePlayerControlIndexes();
    return available.length ? available[0] : 1;
  }
  function playerFocusZone() {
    if (!state.player.canSeek) {
      return "controls";
    }
    return state.player.focusZone === "progress" ? "progress" : "controls";
  }
  function isPlayerProgressFocused() {
    return playerFocusZone() === "progress";
  }
  function movePlayerFocusVertical(direction) {
    if (!state.player.canSeek) {
      state.player.focusZone = "controls";
      showPlayerControls(state.player.paused);
      return false;
    }
    if (direction < 0 && playerFocusZone() !== "progress") {
      state.player.focusZone = "progress";
      showPlayerControls(true);
      return true;
    }
    if (direction > 0 && playerFocusZone() !== "controls") {
      state.player.focusZone = "controls";
      showPlayerControls(state.player.paused);
      return true;
    }
    return false;
  }
  function playerTimelineStep() {
    var duration = state.player.duration > 0 ? state.player.duration : safePlayerDuration();
    if (duration > 0) {
      return Math.max(5, Math.min(Math.round(duration / 60), 30));
    }
    return 15;
  }
  function movePlayerControlFocus(direction) {
    var available = availablePlayerControlIndexes();
    if (!available.length) {
      return;
    }
    var currentIndex = available.indexOf(state.player.controlIndex);
    var fallbackIndex = currentIndex >= 0 ? currentIndex : available.indexOf(firstAvailablePlayerControlIndex("toggle"));
    var nextIndex = (fallbackIndex + direction + available.length) % available.length;
    state.player.controlIndex = available[nextIndex];
    showPlayerControls();
  }
  function runFocusedPlayerControl() {
    var actions = playerControlActions();
    var action = actions[state.player.controlIndex] || actions[firstAvailablePlayerControlIndex("toggle")] || actions[1];
    if (!action || !action.enabled) {
      return;
    }
    if (action.id === "rewind") {
      seekPlayerBy(-10);
      return;
    }
    if (action.id === "forward") {
      seekPlayerBy(10);
      return;
    }
    if (action.id === "close") {
      closePlayer();
      return;
    }
    if (action.id === "favorite") {
      favoritarNoPlayer();
      return;
    }
    if (action.id === "next") {
      irParaProximoEpisodio();
      return;
    }
    togglePlayPause();
  }
  var listaPrecisaRedesenhar = false;
  function favoritarNoPlayer() {
    var item = state.player.itemSnapshot;
    if (!item) {
      return;
    }
    if (!currentFavoriteScope()) {
      showToast("Conecte um servidor para salvar favoritos nesta TV.", "error");
      return;
    }
    var adicionado = toggleFavoriteItem(item);
    listaPrecisaRedesenhar = true;
    showToast(adicionado ? "Canal adicionado aos favoritos." : "Canal removido dos favoritos.", "success");
    showPlayerControls();
  }
  function atualizarBarraDoPlayer() {
    if (!dom.playerControlNodes) {
      return;
    }
    var acoes = playerControlActions();
    dom.playerControlNodes.forEach(function (no, indice) {
      var acao = acoes[indice];
      no.classList.toggle("pilula-oculta", Boolean(acao && acao.oculta));
    });
    var chave = document.getElementById("playerFavoriteKey");
    var rotulo = document.getElementById("playerFavoriteLabel");
    var favorito = Boolean(state.player.itemSnapshot && isItemFavorited(state.player.itemSnapshot));
    if (chave) chave.textContent = favorito ? "\u2665" : "\u2661";
    if (rotulo) rotulo.textContent = favorito ? "Remover favorito" : "Favoritar";
  }
  function seekPlayerBy(seconds) {
    if (isNativePlayerActive()) {
      return seekNativePlayerBy(seconds);
    }
    showPlayerControls();
    if (!playerCanSeek()) {
      showToast("Esse video ainda nao permite adiantar ou voltar.", "error");
      return false;
    }
    var currentTime = Number.isFinite(dom.playerVideo.currentTime) ? dom.playerVideo.currentTime : 0;
    var seekRange = playerSeekRange();
    var fallbackDuration = safePlayerDuration();
    var effectiveRange = seekRange.canSeek || fallbackDuration > 0 ? {
      start: seekRange.canSeek ? seekRange.start : 0,
      end: seekRange.canSeek ? seekRange.end : fallbackDuration
    } : null;
    var unclampedTime = currentTime + seconds;
    var nextTime = effectiveRange ? clampPlayerTime(unclampedTime, effectiveRange) : Math.max(unclampedTime, 0);
    if (Math.abs(nextTime - currentTime) < 0.25) {
      return false;
    }
    var shouldResume = !dom.playerVideo.paused;
    try {
      if (shouldResume) {
        dom.playerVideo.pause();
      }
    } catch (error) {
      console.log("Pause before seek skipped:", error);
    }
    if (typeof dom.playerVideo.fastSeek === "function") {
      try {
        dom.playerVideo.fastSeek(nextTime);
      } catch (error) {
        dom.playerVideo.currentTime = nextTime;
      }
    } else {
      dom.playerVideo.currentTime = nextTime;
    }
    state.player.currentTime = nextTime;
    renderPlayer();
    if (shouldResume) {
      window.setTimeout(function () {
        if (!state.player.open || !dom.playerVideo) {
          return;
        }
        dom.playerVideo.play().catch(function () {
          showToast("Nao foi possivel retomar o video apos adiantar.", "error");
        });
      }, 80);
    }
    window.setTimeout(function () {
      if (!state.player.open || !dom.playerVideo || isLiveLikeCatalogType(state.player.type)) {
        return;
      }
      var appliedTime = Number.isFinite(dom.playerVideo.currentTime) ? dom.playerVideo.currentTime : 0;
      if (Math.abs(appliedTime - currentTime) < 0.5) {
        showToast("Esse video ainda nao permite adiantar ou voltar.", "error");
      }
    }, 320);
    return true;
  }
  function attachPlayerSource(url) {
    if (state.player.mediaKind === "image") {
      attachPlayerImage(url);
      return;
    }
    if (shouldUseNativePlayer()) {
      attachNativePlayer(url);
      return;
    }
    state.player.engine = "html5";
    renderPlayer();
    attachManagedVideo(dom.playerVideo, url, {
      kind: "player",
      muted: false,
      startTime: state.player.resumeTime,
      errorMessage: "Falha ao carregar o stream HLS.",
      playErrorMessage: "Video carregado. Pressione Enter para tentar reproduzir."
    });
  }
  function attachPlayerImage(url) {
    stopNativePlayer();
    destroyManagedHls("player");
    resetVideoElement(dom.playerVideo);
    state.player.engine = "image";
    state.player.canSeek = false;
    state.player.paused = false;
    renderPlayer();
    if (dom.playerImage) {
      dom.playerImage.src = url || "";
    }
  }
  function attachCatalogPreview(item) {
    var previewVideo = dom.detailCard.querySelector(".detail-preview-video");
    if (!previewVideo || !item || !isLiveLikeCatalogType(state.catalog.type)) {
      stopCatalogPreview();
      return;
    }
    var url = buildPlaybackUrl(item, "live");
    if (!url) {
      stopCatalogPreview();
      return;
    }
    if (attachNativeCatalogPreview(item, url)) {
      return;
    }
    attachHtmlCatalogPreview(previewVideo, url);
  }
  var previaNoCorpo = null;
  var previaPromovidaNoCorpo = null;
  function usaPreviaNoCorpo() {
    return document.documentElement.classList.contains("video-no-corpo") && Boolean(dom.playerVideo);
  }
  function marcarLugarDaPrevia(moldura) {
    var caixa = moldura.getBoundingClientRect();
    var raiz = document.documentElement;
    raiz.style.setProperty("--pv-x", caixa.left + "px");
    raiz.style.setProperty("--pv-y", caixa.top + "px");
    raiz.style.setProperty("--pv-w", caixa.width + "px");
    raiz.style.setProperty("--pv-h", caixa.height + "px");
  }
  function tocarPreviaNoCorpo(previewVideo, url) {
    var moldura = previewVideo.closest(".detail-preview-shell") || previewVideo;
    marcarLugarDaPrevia(moldura);
    document.documentElement.classList.add("previa-no-corpo");
    attachManagedVideo(dom.playerVideo, url, {
      kind: "preview",
      muted: false,
      suppressErrors: true
    });
    previaNoCorpo = {
      url: url
    };
  }
  function pararPreviaNoCorpo() {
    document.documentElement.classList.remove("previa-no-corpo");
    if (previaNoCorpo && !state.player.open) {
      resetVideoElement(dom.playerVideo);
    }
    previaNoCorpo = null;
  }
  function promoverPreviaNoCorpo(playerState) {
    if (!usaPreviaNoCorpo() || !previaNoCorpo || previaNoCorpo.url !== playerState.url || playerState.mediaKind === "image") {
      return false;
    }
    document.documentElement.classList.remove("previa-no-corpo");
    previaNoCorpo = null;
    previaPromovidaNoCorpo = {
      url: playerState.url,
      chave: state.catalog.detailKey
    };
    state.player.engine = "html5";
    state.player.paused = dom.playerVideo.paused;
    startPlayerStallMonitor();
    showPlayerControls();
    return true;
  }
  function devolverPreviaNoCorpo() {
    var promovida = previaPromovidaNoCorpo;
    previaPromovidaNoCorpo = null;
    if (!promovida || state.screen !== "catalog" || state.player.url !== promovida.url || state.catalog.detailKey !== promovida.chave) {
      return false;
    }
    document.documentElement.classList.add("previa-no-corpo");
    previaNoCorpo = {
      url: promovida.url
    };
    return true;
  }
  function attachHtmlCatalogPreview(previewVideo, url) {
    if (usaPreviaNoCorpo()) {
      tocarPreviaNoCorpo(previewVideo, url);
      return;
    }
    attachManagedVideo(previewVideo, url, {
      kind: "preview",
      muted: false,
      suppressErrors: true
    });
    previaHtml = {
      url: url,
      elemento: previewVideo
    };
  }
  var previaHtml = null;
  var previaPromovida = null;
  function trocarDeLugar(a, b) {
    var marca = document.createComment("troca");
    a.parentNode.insertBefore(marca, a);
    b.parentNode.insertBefore(a, b);
    marca.parentNode.insertBefore(b, marca);
    marca.parentNode.removeChild(marca);
  }
  function previaPodeIrParaTelaCheia() {
    return !/Tizen/i.test(navigator.userAgent || "");
  }
  function promoverPreviaParaPlayer(playerState) {
    if (promoverPreviaNoCorpo(playerState)) {
      return true;
    }
    if (!previaPodeIrParaTelaCheia() || nativeAvplay() || playerState.mediaKind === "image" || !previaHtml || previaHtml.url !== playerState.url || !(previewMpegtsInstance || previewHlsInstance)) {
      return false;
    }
    var previa = previaHtml.elemento;
    var doPlayer = dom.playerVideo;
    if (!previa || !previa.isConnected || !doPlayer || !doPlayer.parentNode) {
      return false;
    }
    trocarDeLugar(previa, doPlayer);
    desligarEventosDoPlayer(doPlayer);
    doPlayer.removeAttribute("id");
    doPlayer.className = "detail-preview-video";
    previa.id = "playerVideo";
    previa.className = "player-video is-ready";
    dom.playerVideo = previa;
    ligarEventosDoPlayer(previa);
    mpegtsInstance = previewMpegtsInstance;
    previewMpegtsInstance = null;
    hlsInstance = previewHlsInstance;
    previewHlsInstance = null;
    previaPromovida = {
      url: playerState.url,
      chave: state.catalog.detailKey,
      lugar: doPlayer
    };
    previaHtml = null;
    state.player.engine = "html5";
    state.player.paused = previa.paused;
    startPlayerStallMonitor();
    showPlayerControls();
    return true;
  }
  function devolverPlayerParaPrevia() {
    var promovida = previaPromovida;
    previaPromovida = null;
    if (!promovida || nativeAvplay() || state.screen !== "catalog" || state.player.url !== promovida.url || state.catalog.detailKey !== promovida.chave || !promovida.lugar.isConnected) {
      return false;
    }
    var tocando = dom.playerVideo;
    var lugar = promovida.lugar;
    trocarDeLugar(tocando, lugar);
    desligarEventosDoPlayer(tocando);
    tocando.removeAttribute("id");
    tocando.className = "detail-preview-video is-ready";
    lugar.id = "playerVideo";
    lugar.className = "player-video";
    dom.playerVideo = lugar;
    ligarEventosDoPlayer(lugar);
    previewMpegtsInstance = mpegtsInstance;
    mpegtsInstance = null;
    previewHlsInstance = hlsInstance;
    hlsInstance = null;
    previaHtml = {
      url: promovida.url,
      elemento: tocando
    };
    return true;
  }
  function attachManagedVideo(videoElement, url, options) {
    if (!videoElement || !url) {
      return;
    }
    var config = options || {};
    var kind = config.kind || "player";
    var startTime = sanitizePlaybackTime(config.startTime);
    destroyManagedHls(kind);
    resetVideoElement(videoElement);
    if (config.muted) {
      videoElement.muted = true;
      videoElement.defaultMuted = true;
      videoElement.setAttribute("muted", "muted");
    } else {
      videoElement.muted = false;
      videoElement.defaultMuted = false;
      videoElement.removeAttribute("muted");
    }
    videoElement.autoplay = true;
    videoElement.playsInline = true;
    videoElement.controls = false;
    videoElement.removeAttribute("controls");
    videoElement.tabIndex = -1;
    videoElement.setAttribute("playsinline", "playsinline");
    videoElement.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");
    videoElement.setAttribute("disablePictureInPicture", "true");
    videoElement.disablePictureInPicture = true;
    try {
      videoElement.disableRemotePlayback = true;
    } catch (error) {
      console.log("disableRemotePlayback skipped:", error);
    }
    try {
      videoElement.blur();
    } catch (error) {
      console.log("Video blur skipped:", error);
    }
    videoElement.classList.remove("is-ready");
    videoElement.addEventListener("loadeddata", function onLoadedData() {
      videoElement.classList.add("is-ready");
    }, {
      once: true
    });
    var handlePlayError = function handlePlayError() {
      if (!config.suppressErrors && config.playErrorMessage) {
        showToast(config.playErrorMessage, "error");
      }
    };
    var startPlayback = function startPlayback() {
      seekVideoElementTo(videoElement, startTime);
      videoElement.play().catch(handlePlayError);
    };
    var urlDoMpegts = config.semMpegts ? "" : urlParaMpegts(url);
    if (urlDoMpegts) {
      var tocador = mpegts.createPlayer({
        type: "mpegts",
        isLive: true,
        url: urlDoMpegts
      }, {
        isLive: true,
        enableWorker: true,
        lazyLoad: false,
        liveBufferLatencyChasing: false
      });
      setManagedMpegts(kind, tocador);
      var caiu = false;
      tocador.on(mpegts.Events.ERROR, function (tipo, detalhe) {
        if (caiu) {
          return;
        }
        caiu = true;
        console.log("mpegts falhou, voltando ao HLS:", tipo, detalhe);
        attachManagedVideo(videoElement, url, Object.assign({}, config, {
          semMpegts: true
        }));
      });
      console.info("[tocador] ao vivo pelo mpegts.js");
      tocador.attachMediaElement(videoElement);
      tocador.load();
      videoElement.addEventListener("loadedmetadata", function onMpegtsMetadata() {
        videoElement.removeEventListener("loadedmetadata", onMpegtsMetadata);
        startPlayback();
      }, {
        once: true
      });
      return;
    }
    if (!videoNativoDaTv() && window.Hls && Hls.isSupported() && /\.m3u8($|\?)/.test(url) && !videoElement.canPlayType("application/vnd.apple.mpegurl")) {
      var instance = new Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      setManagedHls(kind, instance);
      instance.loadSource(url);
      instance.attachMedia(videoElement);
      instance.on(Hls.Events.MANIFEST_PARSED, function () {
        if (videoElement.readyState >= 1) {
          startPlayback();
          return;
        }
        videoElement.addEventListener("loadedmetadata", function onHlsMetadata() {
          videoElement.removeEventListener("loadedmetadata", onHlsMetadata);
          startPlayback();
        }, {
          once: true
        });
      });
      instance.on(Hls.Events.ERROR, function () {
        if (!config.suppressErrors && config.errorMessage) {
          showToast(config.errorMessage, "error");
        }
      });
      return;
    }
    videoElement.src = url;
    videoElement.addEventListener("loadedmetadata", function onLoadedMetadata() {
      videoElement.removeEventListener("loadedmetadata", onLoadedMetadata);
      startPlayback();
    }, {
      once: true
    });
  }
  function seekVideoElementTo(videoElement, startTime) {
    if (!videoElement || !(startTime > 0)) {
      return;
    }
    var seekRange = readVideoSeekRange(videoElement);
    var duration = Number.isFinite(videoElement.duration) && videoElement.duration > 0 ? videoElement.duration : seekRange.end;
    var upperBound = duration > 0 ? Math.max(duration - 1, 0) : seekRange.end;
    var nextTime = clampPlayerTime(startTime, {
      start: seekRange.start,
      end: upperBound > 0 ? upperBound : startTime
    });
    try {
      if (typeof videoElement.fastSeek === "function") {
        videoElement.fastSeek(nextTime);
      } else {
        videoElement.currentTime = nextTime;
      }
    } catch (error) {
      try {
        videoElement.currentTime = nextTime;
      } catch (seekError) {
        console.log("Initial seek skipped:", seekError);
      }
    }
  }
  function stopCatalogPreview() {
    previaHtml = null;
    if (previaNoCorpo) {
      pararPreviaNoCorpo();
    }
    stopNativeCatalogPreview();
    destroyManagedHls("preview");
    var previewVideo = dom.detailCard ? dom.detailCard.querySelector(".detail-preview-video") : null;
    if (previewVideo) {
      resetVideoElement(previewVideo);
    }
  }
  function attachNativeCatalogPreview(item, url) {
    var avplay = nativeAvplay();
    if (!avplay || state.player.open) {
      return false;
    }
    var itemKey = detailKeyFor(item);
    if (state.nativePreview.url === url && state.nativePreview.itemKey === itemKey && (state.nativePreview.active || state.nativePreview.preparing)) {
      syncNativePreviewDisplayRect();
      return true;
    }
    stopNativeCatalogPreview();
    destroyManagedHls("preview");
    var previewVideo = dom.detailCard ? dom.detailCard.querySelector(".detail-preview-video") : null;
    if (previewVideo) {
      resetVideoElement(previewVideo);
    }
    state.nativePreview.active = false;
    state.nativePreview.preparing = true;
    state.nativePreview.url = url;
    state.nativePreview.itemKey = itemKey;
    renderPlayer();
    try {
      avplay.open(url);
      configureNativeBuffering(avplay, true);
      try {
        avplay.setDisplayMethod("PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO");
      } catch (error) {
        console.log("Native preview display method skipped:", error);
      }
      setNativePreviewListener();
      syncNativePreviewDisplayRect();
      avplay.prepareAsync(function () {
        if (state.player.open || state.nativePreview.url !== url || state.nativePreview.itemKey !== itemKey) {
          return;
        }
        state.nativePreview.preparing = false;
        state.nativePreview.active = true;
        renderPlayer();
        syncNativePreviewDisplayRect();
        try {
          avplay.play();
        } catch (error) {
          console.log("Native preview play failed:", error);
          stopNativeCatalogPreview();
          if (previewVideo) {
            attachHtmlCatalogPreview(previewVideo, url);
          }
        }
      }, function (error) {
        console.log("Native preview prepare failed:", error);
        stopNativeCatalogPreview();
        if (previewVideo) {
          attachHtmlCatalogPreview(previewVideo, url);
        }
      });
      return true;
    } catch (error) {
      console.log("Native preview setup failed:", error);
      stopNativeCatalogPreview();
      return false;
    }
  }
  function stopNativeCatalogPreview() {
    if (!state.nativePreview.active && !state.nativePreview.preparing) {
      state.nativePreview.url = "";
      state.nativePreview.itemKey = "";
      return;
    }
    state.nativePreview.active = false;
    state.nativePreview.preparing = false;
    state.nativePreview.url = "";
    state.nativePreview.itemKey = "";
    stopNativePlayer();
    renderPlayer();
  }
  function syncNativePreviewDisplayRect() {
    if (!state.nativePreview.active && !state.nativePreview.preparing || state.player.open) {
      return;
    }
    var avplay = nativeAvplay();
    var previewShell = dom.detailCard ? dom.detailCard.querySelector(".detail-preview-shell") : null;
    if (!avplay || !previewShell) {
      return;
    }
    var rect = previewShell.getBoundingClientRect();
    var viewportWidth = Math.max(window.innerWidth || document.documentElement.clientWidth || NATIVE_PLAYER_WIDTH, 1);
    var viewportHeight = Math.max(window.innerHeight || document.documentElement.clientHeight || NATIVE_PLAYER_HEIGHT, 1);
    var scaleX = NATIVE_PLAYER_WIDTH / viewportWidth;
    var scaleY = NATIVE_PLAYER_HEIGHT / viewportHeight;
    var left = Math.max(Math.round(rect.left * scaleX), 0);
    var top = Math.max(Math.round(rect.top * scaleY), 0);
    var width = Math.max(Math.round(rect.width * scaleX), 0);
    var height = Math.max(Math.round(rect.height * scaleY), 0);
    var boundedWidth = Math.min(width, Math.max(NATIVE_PLAYER_WIDTH - left, 0));
    var boundedHeight = Math.min(height, Math.max(NATIVE_PLAYER_HEIGHT - top, 0));
    if (!boundedWidth || !boundedHeight) {
      return;
    }
    try {
      avplay.setDisplayRect(left, top, boundedWidth, boundedHeight);
    } catch (error) {
      console.log("Native preview display rect skipped:", error);
    }
  }
  function syncNativePreviewAfterPaint() {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(function () {
        syncNativePreviewDisplayRect();
      });
      return;
    }
    window.setTimeout(syncNativePreviewDisplayRect, 0);
  }
  function setNativePreviewListener() {
    var avplay = nativeAvplay();
    if (!avplay) {
      return;
    }
    avplay.setListener({
      onbufferingstart: function onbufferingstart() {},
      onbufferingcomplete: function onbufferingcomplete() {
        syncNativePreviewDisplayRect();
      },
      oncurrentplaytime: function oncurrentplaytime() {},
      onstreamcompleted: function onstreamcompleted() {
        stopNativeCatalogPreview();
      },
      onerror: function onerror(error) {
        console.log("Native preview error:", error);
        stopNativeCatalogPreview();
      },
      onerrormsg: function onerrormsg(error) {
        console.log("Native preview error message:", error);
      }
    });
  }
  function videoNativoDaTv() {
    return /Tizen/i.test(navigator.userAgent || "") && !nativeAvplay();
  }
  function urlParaMpegts(url) {
    if (videoNativoDaTv() || nativeAvplay() || !window.mpegts || typeof mpegts.getFeatureList !== "function") {
      return "";
    }
    var recursos = null;
    try {
      recursos = mpegts.getFeatureList();
    } catch (error) {
      console.log("mpegts sem recursos:", error);
      return "";
    }
    if (!recursos || !recursos.mseLivePlayback) {
      return "";
    }
    var achado = /^(https?:\/\/[^/]+\/live\/[^/]+\/[^/]+\/[^/?#.]+)(\.(m3u8|ts))?([?#].*)?$/i.exec(String(url || ""));
    return achado ? achado[1] + ".ts" + (achado[4] || "") : "";
  }
  var mpegtsInstance = null;
  var previewMpegtsInstance = null;
  function setManagedMpegts(kind, instance) {
    if (kind === "player") {
      mpegtsInstance = instance;
      return;
    }
    previewMpegtsInstance = instance;
  }
  function destroyManagedMpegts(kind) {
    var alvo = kind === "player" ? mpegtsInstance : previewMpegtsInstance;
    if (kind === "player") {
      mpegtsInstance = null;
    } else {
      previewMpegtsInstance = null;
    }
    if (!alvo) {
      return;
    }
    try {
      alvo.pause();
      alvo.unload();
      alvo.detachMediaElement();
      alvo.destroy();
    } catch (error) {
      console.log("mpegts destroy skipped:", error);
    }
  }
  function destroyManagedHls(kind) {
    destroyManagedMpegts(kind);
    if (kind === "player" && hlsInstance) {
      hlsInstance.destroy();
      hlsInstance = null;
    }
    if (kind === "preview" && previewHlsInstance) {
      previewHlsInstance.destroy();
      previewHlsInstance = null;
    }
  }
  function setManagedHls(kind, instance) {
    if (kind === "player") {
      hlsInstance = instance;
      return;
    }
    previewHlsInstance = instance;
  }
  function resetVideoElement(videoElement) {
    if (!videoElement) {
      return;
    }
    try {
      videoElement.pause();
    } catch (error) {
      console.log("Video pause skipped:", error);
    }
    videoElement.classList.remove("is-ready");
    videoElement.removeAttribute("src");
    videoElement.load();
  }
  function handlePlayerVideoTelemetry() {
    if (!state.player.open) {
      return;
    }
    if (state.player.mediaKind === "image") {
      renderPlayer();
      return;
    }
    if (isNativePlayerActive()) {
      updateNativePlayerTelemetry();
      return;
    }
    var seekRange = playerSeekRange();
    var duration = seekRange.end > 0 ? seekRange.end : safePlayerDuration();
    state.player.currentTime = Number.isFinite(dom.playerVideo.currentTime) ? dom.playerVideo.currentTime : 0;
    state.player.duration = duration;
    state.player.canSeek = !isLiveLikeCatalogType(state.player.type);
    markPlayerProgress(state.player.currentTime, false);
    persistCurrentPlaybackProgress(false);
    renderPlayer();
  }
  function handlePlayerVideoPlaybackChange() {
    if (!state.player.open) {
      return;
    }
    if (state.player.mediaKind === "image") {
      return;
    }
    state.player.paused = dom.playerVideo.paused;
    handlePlayerVideoTelemetry();
    persistCurrentPlaybackProgress(state.player.paused);
    if (state.player.paused) {
      showPlayerControls(true);
      return;
    }
    showPlayerControls();
  }
  function clearPlayerHudTimer() {
    if (playerHudTimer) {
      clearTimeout(playerHudTimer);
      playerHudTimer = null;
    }
  }
  function clearNativePlayerLayoutTimer() {
    if (nativePlayerLayoutTimer) {
      clearTimeout(nativePlayerLayoutTimer);
      nativePlayerLayoutTimer = null;
    }
  }
  function nativeAvplay() {
    return window.webapis && webapis.avplay ? webapis.avplay : null;
  }
  function shouldUseNativePlayer() {
    if (!nativeAvplay()) {
      return false;
    }
    return state.player.mediaKind !== "image" && Boolean(state.player.url);
  }
  function isNativePlayerActive() {
    return state.player.engine === "avplay";
  }
  function stopNativePlayer() {
    var avplay = nativeAvplay();
    if (!avplay) {
      return;
    }
    try {
      avplay.stop();
    } catch (error) {
      console.log("Native stop skipped:", error);
    }
    try {
      avplay.close();
    } catch (error) {
      console.log("Native close skipped:", error);
    }
  }
  function scheduleNativePlayerLayoutSync() {
    if (!isNativePlayerActive()) {
      return;
    }
    if (state.player.nativeActionPending) {
      state.player.nativeLayoutDirty = true;
      return;
    }
    clearNativePlayerLayoutTimer();
    nativePlayerLayoutTimer = setTimeout(function () {
      nativePlayerLayoutTimer = null;
      syncNativePlayerDisplayRect();
    }, 0);
  }
  function syncNativePlayerDisplayRect() {
    var avplay = nativeAvplay();
    if (!avplay || !dom.playerStage) {
      return;
    }
    if (isLiveLikeCatalogType(state.player.type) || state.player.type === "series") {
      try {
        avplay.setDisplayRect(0, 0, NATIVE_PLAYER_WIDTH, NATIVE_PLAYER_HEIGHT);
      } catch (error) {
        console.log("Native fullscreen display rect skipped:", error);
      }
      return;
    }
    var rect = dom.playerStage.getBoundingClientRect();
    var viewportWidth = Math.max(window.innerWidth || document.documentElement.clientWidth || NATIVE_PLAYER_WIDTH, 1);
    var viewportHeight = Math.max(window.innerHeight || document.documentElement.clientHeight || NATIVE_PLAYER_HEIGHT, 1);
    var scaleX = NATIVE_PLAYER_WIDTH / viewportWidth;
    var scaleY = NATIVE_PLAYER_HEIGHT / viewportHeight;
    var left = Math.max(Math.round(rect.left * scaleX), 0);
    var top = Math.max(Math.round(rect.top * scaleY), 0);
    var width = Math.max(Math.round(rect.width * scaleX), 0);
    var height = Math.max(Math.round(rect.height * scaleY), 0);
    var boundedWidth = Math.min(width, Math.max(NATIVE_PLAYER_WIDTH - left, 0));
    var boundedHeight = Math.min(height, Math.max(NATIVE_PLAYER_HEIGHT - top, 0));
    if (!boundedWidth || !boundedHeight) {
      return;
    }
    try {
      avplay.setDisplayRect(left, top, boundedWidth, boundedHeight);
    } catch (error) {
      console.log("Native display rect skipped:", error);
    }
  }
  function attachNativePlayer(url) {
    var avplay = nativeAvplay();
    if (!avplay) {
      state.player.engine = "html5";
      renderPlayer();
      attachPlayerVideoWithHtml5(url);
      return;
    }
    state.player.engine = "avplay";
    state.player.paused = false;
    state.player.nativeActionPending = false;
    state.player.nativeLayoutDirty = false;
    resetVideoElement(dom.playerVideo);
    renderPlayer();
    scheduleNativePlayerLayoutSync();
    try {
      stopNativePlayer();
      avplay.open(url);
      configureNativeBuffering(avplay, false);
      try {
        if (state.player.type === "series" || isLiveLikeCatalogType(state.player.type)) {
          avplay.setDisplayMethod("PLAYER_DISPLAY_MODE_FULL_SCREEN");
        } else {
          avplay.setDisplayMethod("PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO");
        }
      } catch (error) {
        console.log("Native display method skipped:", error);
      }
      setNativePlayerListener();
      avplay.prepareAsync(function () {
        scheduleNativePlayerLayoutSync();
        updateNativePlayerTelemetry();
        startNativePlayback(avplay, state.player.resumeTime);
      }, function (error) {
        console.log("Native prepare failed:", error);
        stopNativePlayer();
        state.player.engine = "html5";
        renderPlayer();
        attachPlayerVideoWithHtml5(url);
      });
    } catch (error) {
      console.log("Native player setup failed:", error);
      stopNativePlayer();
      state.player.engine = "html5";
      renderPlayer();
      attachPlayerVideoWithHtml5(url);
    }
  }
  function promoteNativePreviewToPlayer(playerState) {
    var avplay = nativeAvplay();
    if (!avplay || !state.nativePreview.active || state.nativePreview.url !== playerState.url || playerState.mediaKind === "image") {
      return false;
    }
    state.nativePreview.active = false;
    state.nativePreview.preparing = false;
    state.nativePreview.url = "";
    state.nativePreview.itemKey = "";
    state.player.engine = "avplay";
    state.player.paused = false;
    state.player.nativeActionPending = false;
    state.player.nativeLayoutDirty = false;
    resetVideoElement(dom.playerVideo);
    setNativePlayerListener();
    configureNativeBuffering(avplay, false);
    try {
      avplay.setDisplayMethod("PLAYER_DISPLAY_MODE_FULL_SCREEN");
    } catch (error) {
      console.log("Native promoted display method skipped:", error);
    }
    renderPlayer();
    focusPlayerOverlay();
    syncNativePlayerDisplayRect();
    updateNativePlayerTelemetry();
    showPlayerControls();
    startPlayerStallMonitor();
    return true;
  }
  function setNativePlayerListener() {
    var avplay = nativeAvplay();
    if (!avplay) {
      return;
    }
    avplay.setListener({
      onbufferingstart: function onbufferingstart() {
        state.player.buffering = true;
        dom.playerStatus.textContent = "Carregando...";
      },
      onbufferingcomplete: function onbufferingcomplete() {
        state.player.buffering = false;
        markPlayerProgress(state.player.currentTime, true);
        updateNativePlayerTelemetry();
      },
      oncurrentplaytime: function oncurrentplaytime(currentTime) {
        state.player.currentTime = Math.max(Number(currentTime) || 0, 0) / 1000;
        markPlayerProgress(state.player.currentTime, false);
        updateNativePlayerTelemetry();
      },
      onstreamcompleted: function onstreamcompleted() {
        handlePlayerPlaybackEnded();
      },
      onerror: function onerror(error) {
        console.log("Native player error:", error);
        if (state.player.open && isLiveLikeCatalogType(state.player.type)) {
          openPlayerRecovery();
          return;
        }
        showToast("Nao foi possivel reproduzir este video.", "error");
      },
      onerrormsg: function onerrormsg(error) {
        console.log("Native player error message:", error);
      }
    });
  }
  function configureNativeBuffering(avplay, isPreview) {
    if (!avplay || typeof avplay.setBufferingParam !== "function") {
      return;
    }
    var playBufferSeconds = isPreview ? 2 : 4;
    var resumeBufferSeconds = isPreview ? 3 : 6;
    try {
      avplay.setBufferingParam("PLAYER_BUFFER_FOR_PLAY", "PLAYER_BUFFER_SIZE_IN_SECOND", playBufferSeconds);
      avplay.setBufferingParam("PLAYER_BUFFER_FOR_RESUME", "PLAYER_BUFFER_SIZE_IN_SECOND", resumeBufferSeconds);
    } catch (error) {
      console.log("Native buffering setup skipped:", error);
    }
  }
  function startNativePlayback(avplay, startTime) {
    var initialTime = sanitizePlaybackTime(startTime);
    var beginPlayback = function beginPlayback() {
      try {
        avplay.play();
        state.player.paused = false;
        showPlayerControls();
      } catch (error) {
        console.log("Native play failed:", error);
        showToast("Nao foi possivel iniciar o video.", "error");
      }
    };
    if (!(initialTime > 0)) {
      beginPlayback();
      return;
    }
    try {
      avplay.seekTo(Math.round(initialTime * 1000), function () {
        beginPlayback();
      }, function (error) {
        console.log("Native initial seek failed:", error);
        beginPlayback();
      });
    } catch (error) {
      console.log("Native initial seek skipped:", error);
      beginPlayback();
    }
  }
  function attachPlayerVideoWithHtml5(url) {
    state.player.engine = "html5";
    renderPlayer();
    attachManagedVideo(dom.playerVideo, url, {
      kind: "player",
      muted: false,
      startTime: state.player.resumeTime,
      errorMessage: "Falha ao carregar o stream HLS.",
      playErrorMessage: "Video carregado. Pressione Enter para tentar reproduzir."
    });
  }
  function updateNativePlayerTelemetry() {
    if (!isNativePlayerActive()) {
      return;
    }
    var avplay = nativeAvplay();
    if (!avplay) {
      return;
    }
    try {
      state.player.currentTime = Math.max(Number(avplay.getCurrentTime()) || 0, 0) / 1000;
      markPlayerProgress(state.player.currentTime, false);
    } catch (error) {
      console.log("Native current time skipped:", error);
    }
    try {
      state.player.duration = Math.max(Number(avplay.getDuration()) || 0, 0) / 1000;
    } catch (error) {
      console.log("Native duration skipped:", error);
    }
    persistCurrentPlaybackProgress(false);
    renderPlayer();
  }
  function persistCurrentPlaybackProgress(force) {
    if (!state.player.open || !isTrackablePlaybackType(state.player.type) || !state.player.itemSnapshot) {
      return false;
    }
    var position = Math.max(sanitizePlaybackTime(state.player.currentTime), sanitizePlaybackTime(state.player.resumeTime));
    var duration = sanitizePlaybackTime(state.player.duration);
    if (!force) {
      if (!shouldTrackPlaybackPosition(position, duration)) {
        return false;
      }
      if (Math.abs(position - state.player.lastPersistedTime) < PLAYBACK_SAVE_INTERVAL_SECONDS) {
        return false;
      }
    }
    var saved = persistPlaybackProgress(state.player.itemSnapshot, position, duration, force, {
      type: state.player.type,
      seriesItem: state.player.seriesSnapshot
    });
    if (saved) {
      state.player.lastPersistedTime = position;
    }
    return saved;
  }
  function toggleNativePlayerPause() {
    var avplay = nativeAvplay();
    if (!avplay) {
      return;
    }
    try {
      if (state.player.paused) {
        avplay.play();
        state.player.paused = false;
      } else {
        avplay.pause();
        state.player.paused = true;
      }
      updateNativePlayerTelemetry();
    } catch (error) {
      console.log("Native play/pause failed:", error);
      showToast("Nao foi possivel controlar este video.", "error");
    }
  }
  function seekNativePlayerBy(seconds) {
    if (!playerCanSeek()) {
      showToast("Esse video ainda nao permite adiantar ou voltar.", "error");
      return false;
    }
    var avplay = nativeAvplay();
    if (!avplay) {
      showToast("Controle de avancar indisponivel nesta TV.", "error");
      return false;
    }
    clearNativePlayerLayoutTimer();
    state.player.nativeActionPending = true;
    state.player.nativeLayoutDirty = false;
    showPlayerControls(true);
    var jumpMs = Math.max(Math.round(Math.abs(seconds) * 1000), 1000);
    var describeNativeError = function describeNativeError(error) {
      if (!error) {
        return "erro desconhecido";
      }
      if (typeof error === "string") {
        return error;
      }
      if (typeof error.message === "string" && error.message) {
        return error.message;
      }
      return String(error);
    };
    var isSeekUnsupportedError = function isSeekUnsupportedError(error) {
      return describeNativeError(error).toUpperCase().indexOf("PLAYER_ERROR_SEEK_FAILED") >= 0;
    };
    var finalizeNativeSeek = function finalizeNativeSeek() {
      state.player.nativeActionPending = false;
      if (state.player.nativeLayoutDirty) {
        state.player.nativeLayoutDirty = false;
        scheduleNativePlayerLayoutSync();
      }
    };
    var recoverNativePlaybackAfterSeekError = function recoverNativePlaybackAfterSeekError() {
      try {
        syncNativePlayerDisplayRect();
      } catch (error) {
        console.log("Native display recovery skipped:", error);
      }
      if (!state.player.paused) {
        try {
          avplay.play();
        } catch (error) {
          console.log("Native play recovery skipped:", error);
        }
      }
      updateNativePlayerTelemetry();
    };
    var onSuccess = function onSuccess() {
      finalizeNativeSeek();
      setTimeout(function () {
        updateNativePlayerTelemetry();
        showPlayerControls();
      }, 140);
    };
    var trySeekToFallback = function trySeekToFallback(reason) {
      console.log("Native jump failed:", reason);
      var currentTime = Number(avplay.getCurrentTime()) || 0;
      var duration = Number(avplay.getDuration()) || 0;
      var upperBound = duration > 0 ? Math.max(duration - 1000, 0) : Math.max(currentTime + seconds * 1000, 0);
      var nextTime = Math.max(0, Math.min(currentTime + seconds * 1000, upperBound));
      avplay.seekTo(nextTime, onSuccess, function (error) {
        finalizeNativeSeek();
        console.log("Native seek fallback failed:", error);
        recoverNativePlaybackAfterSeekError();
        if (isSeekUnsupportedError(error)) {
          state.player.canSeek = false;
          renderPlayer();
          showToast("Este video nao permite adiantar ou voltar neste servidor.", "error");
          return;
        }
        showToast("Nao foi possivel adiantar ou voltar este video. " + describeNativeError(error), "error");
      });
    };
    try {
      if (seconds >= 0) {
        avplay.jumpForward(jumpMs, onSuccess, trySeekToFallback);
      } else {
        avplay.jumpBackward(jumpMs, onSuccess, trySeekToFallback);
      }
      return true;
    } catch (error) {
      console.log("Native jump call failed:", error);
      try {
        trySeekToFallback(error);
        return true;
      } catch (fallbackError) {
        finalizeNativeSeek();
        console.log("Native fallback invocation failed:", fallbackError);
        recoverNativePlaybackAfterSeekError();
        if (isSeekUnsupportedError(fallbackError)) {
          state.player.canSeek = false;
          renderPlayer();
          showToast("Este video nao permite adiantar ou voltar neste servidor.", "error");
          return false;
        }
        showToast("Nao foi possivel adiantar ou voltar este video. " + describeNativeError(fallbackError), "error");
        return false;
      }
    }
  }
  function handleResumePromptKeys(action, event) {
    focusResumeOverlay();
    if (action.type === "back" || action.type === "stop") {
      event.preventDefault();
      closeResumePrompt();
      return;
    }
    if (action.type === "left" || action.type === "up") {
      event.preventDefault();
      state.resumePrompt.optionIndex = state.resumePrompt.optionIndex > 0 ? state.resumePrompt.optionIndex - 1 : 1;
      renderResumePrompt();
      return;
    }
    if (action.type === "right" || action.type === "down") {
      event.preventDefault();
      state.resumePrompt.optionIndex = state.resumePrompt.optionIndex < 1 ? state.resumePrompt.optionIndex + 1 : 0;
      renderResumePrompt();
      return;
    }
    if (action.type === "enter" || action.type === "playpause" || action.type === "play") {
      event.preventDefault();
      runResumePromptAction();
    }
  }
  function openResumePrompt(playerState, entry) {
    state.resumePrompt.open = true;
    state.resumePrompt.optionIndex = 0;
    state.resumePrompt.playerState = clone(playerState);
    state.resumePrompt.entry = entry ? clone(entry) : null;
    render();
  }
  function closeResumePrompt() {
    state.resumePrompt.open = false;
    state.resumePrompt.optionIndex = 0;
    state.resumePrompt.playerState = null;
    state.resumePrompt.entry = null;
    render();
  }
  function runResumePromptAction() {
    var playerState = state.resumePrompt.playerState ? clone(state.resumePrompt.playerState) : null;
    var entry = state.resumePrompt.entry ? clone(state.resumePrompt.entry) : null;
    var shouldResume = state.resumePrompt.optionIndex === 0;
    closeResumePrompt();
    if (!playerState) {
      return;
    }
    if (shouldResume) {
      playerState.resumeTime = playbackEntryPosition(entry);
      openPlayer(playerState);
      return;
    }
    clearPlaybackResumeForItem(playerState.item);
    playerState.resumeTime = 0;
    openPlayer(playerState);
  }
  function handleSearchPromptKeys(action, event) {
    if (dom.searchNativeInput) {
      if (action.type === "back" || action.type === "stop") {
        event.preventDefault();
        closeMovieSearchOverlay();
        return;
      }
      if (action.type === "enter" || action.type === "playpause" || action.type === "play") {
        event.preventDefault();
        focusNativeSearchInput();
      }
      return;
    }
    if (!isSearchDetailView()) {
      focusSearchOverlay();
    }
    if (action.type === "back" || action.type === "stop") {
      event.preventDefault();
      closeMovieSearchOverlay();
      return;
    }
    if (action.type === "left") {
      event.preventDefault();
      state.searchPrompt.keyIndex = state.searchPrompt.keyIndex > 0 ? state.searchPrompt.keyIndex - 1 : SEARCH_KEYBOARD_KEYS.length - 1;
      refreshMovieSearchUi();
      return;
    }
    if (action.type === "right") {
      event.preventDefault();
      state.searchPrompt.keyIndex = state.searchPrompt.keyIndex < SEARCH_KEYBOARD_KEYS.length - 1 ? state.searchPrompt.keyIndex + 1 : 0;
      refreshMovieSearchUi();
      return;
    }
    if (action.type === "up") {
      event.preventDefault();
      state.searchPrompt.keyIndex = moveSearchKeyboardIndex(-SEARCH_KEYBOARD_COLUMNS);
      refreshMovieSearchUi();
      return;
    }
    if (action.type === "down") {
      event.preventDefault();
      state.searchPrompt.keyIndex = moveSearchKeyboardIndex(SEARCH_KEYBOARD_COLUMNS);
      refreshMovieSearchUi();
      return;
    }
    if (action.type === "enter" || action.type === "playpause" || action.type === "play") {
      event.preventDefault();
      runSearchPromptKey();
    }
  }
  function moveSearchKeyboardIndex(step) {
    var total = SEARCH_KEYBOARD_KEYS.length;
    if (!total) {
      return 0;
    }
    var currentIndex = clampIndex(state.searchPrompt.keyIndex, total);
    var currentColumn = currentIndex % SEARCH_KEYBOARD_COLUMNS;
    var nextIndex = currentIndex + step;
    if (step < 0 && nextIndex < 0) {
      var lastRowStart = Math.floor((total - 1) / SEARCH_KEYBOARD_COLUMNS) * SEARCH_KEYBOARD_COLUMNS;
      nextIndex = Math.min(lastRowStart + currentColumn, total - 1);
      while (nextIndex >= total) {
        nextIndex -= SEARCH_KEYBOARD_COLUMNS;
      }
      return nextIndex;
    }
    if (step > 0 && nextIndex >= total) {
      nextIndex = currentColumn;
      while (nextIndex >= total) {
        nextIndex -= SEARCH_KEYBOARD_COLUMNS;
      }
      return Math.max(0, nextIndex);
    }
    return Math.max(0, Math.min(nextIndex, total - 1));
  }
  function runSearchPromptKey() {
    var key = SEARCH_KEYBOARD_KEYS[state.searchPrompt.keyIndex];
    if (!key) {
      return;
    }
    if (key.type === "char") {
      appendMovieSearchQuery(key.value);
      refreshMovieSearchResults();
      return;
    }
    if (key.type === "space") {
      appendMovieSearchQuery(" ");
      refreshMovieSearchResults();
      return;
    }
    if (key.type === "backspace") {
      removeMovieSearchCharacter();
      refreshMovieSearchResults();
      return;
    }
    if (key.type === "clear") {
      clearMovieSearchQuery();
      refreshMovieSearchResults();
      return;
    }
    if (key.type === "apply") {
      closeMovieSearchOverlay();
    }
  }
  function focusResumeOverlay() {
    if (!dom.resumeOverlay) {
      return;
    }
    window.setTimeout(function () {
      if (!state.resumePrompt.open || !dom.resumeOverlay) {
        return;
      }
      try {
        dom.resumeOverlay.focus({
          preventScroll: true
        });
      } catch (error) {
        try {
          dom.resumeOverlay.focus();
        } catch (focusError) {
          console.log("Resume overlay focus skipped:", focusError);
        }
      }
    }, 0);
  }
  function focusSearchOverlay() {
    if (isSearchDetailView() || !dom.searchOverlay || dom.searchOverlay.classList.contains("hidden")) {
      return;
    }
    window.setTimeout(function () {
      if (!state.searchPrompt.open || !dom.searchOverlay) {
        return;
      }
      try {
        dom.searchOverlay.focus({
          preventScroll: true
        });
      } catch (error) {
        try {
          dom.searchOverlay.focus();
        } catch (focusError) {
          console.log("Search overlay focus skipped:", focusError);
        }
      }
    }, 0);
  }
  function focusNativeSearchInput() {
    if (!dom.searchNativeInput) {
      return;
    }
    window.setTimeout(function () {
      if (!state.searchPrompt.open || !dom.searchNativeInput) {
        return;
      }
      try {
        dom.searchNativeInput.focus({
          preventScroll: true
        });
      } catch (error) {
        try {
          dom.searchNativeInput.focus();
        } catch (focusError) {
          console.log("Native search input focus skipped:", focusError);
        }
      }
      if (typeof dom.searchNativeInput.select === "function") {
        try {
          dom.searchNativeInput.select();
        } catch (selectionError) {
          console.log("Native search input select skipped:", selectionError);
        }
      }
    }, 60);
  }
  function focusMediaInputOverlay() {
    if (!dom.mediaInputOverlay) {
      return;
    }
    window.setTimeout(function () {
      if (!state.media.inputPrompt.open || !dom.mediaInputOverlay) {
        return;
      }
      try {
        dom.mediaInputOverlay.focus({
          preventScroll: true
        });
      } catch (error) {
        try {
          dom.mediaInputOverlay.focus();
        } catch (focusError) {
          console.log("Media input overlay focus skipped:", focusError);
        }
      }
    }, 0);
  }
  function syncNativeSearchInput() {
    if (!dom.searchNativeInput) {
      return;
    }
    dom.searchNativeInput.value = movieSearchQueryValue();
    dom.searchNativeInput.oninput = function (event) {
      updateMovieSearchQuery(event && event.target ? event.target.value : "");
    };
    dom.searchNativeInput.onchange = function (event) {
      submitNativeSearchInput(event && event.target ? event.target.value : "");
    };
    dom.searchNativeInput.onsearch = function (event) {
      submitNativeSearchInput(event && event.target ? event.target.value : "");
    };
    dom.searchNativeInput.onkeydown = function (event) {
      if (!event || event.key !== "Enter" && event.key !== "NumpadEnter") {
        return;
      }
      window.setTimeout(function () {
        submitNativeSearchInput(dom.searchNativeInput ? dom.searchNativeInput.value : "");
      }, 0);
    };
    dom.searchNativeInput.onblur = function () {
      if (dom.searchNativeInput) {
        updateMovieSearchQuery(dom.searchNativeInput.value);
      }
    };
  }
  function submitNativeSearchInput(value) {
    updateMovieSearchQuery(value);
    var resultItems = filteredAllMovieItems();
    if (dom.searchNativeInput) {
      try {
        dom.searchNativeInput.blur();
      } catch (error) {
        console.log("Native search input blur skipped:", error);
      }
    }
    state.searchPrompt.open = false;
    state.searchPrompt.keyIndex = 0;
    state.searchPrompt.inline = false;
    state.catalog.view = "browse";
    state.catalog.detailKey = "";
    state.catalog.itemIndex = resultItems.length ? 1 : 0;
    if (state.catalog.type === "live") {
      state.catalog.selectedItemCategoryIndex = state.catalog.selectedCategoryIndex;
      state.catalog.selectedItemIndex = state.catalog.itemIndex;
    }
    applyAppStateAttributes();
    renderFooter();
    renderCatalogScreen();
    renderSearchOverlay();
  }
  function openMovieSearchOverlay() {
    var category = currentCatalogCategory();
    if (!catalogSupportsMovieSearch(category)) {
      return;
    }
    state.searchPrompt.open = true;
    state.searchPrompt.keyIndex = 0;
    if (state.catalog.type === "live") {
      state.searchPrompt.inline = true;
      state.catalog.selectedItemCategoryIndex = state.catalog.selectedCategoryIndex;
      state.catalog.selectedItemIndex = state.catalog.itemIndex;
      state.catalog.detailKey = "";
      applyAppStateAttributes();
      renderFooter();
      renderCatalogDetail(true);
      renderSearchOverlay();
      syncCatalogSelectedState();
      syncCatalogFocus();
      focusNativeSearchInput();
      return;
    }
    state.searchPrompt.inline = false;
    state.catalog.view = "detail";
    state.catalog.detailKey = "";
    applyAppStateAttributes();
    renderFooter();
    renderCatalogDetail(true);
    renderSearchOverlay();
    syncCatalogFocus();
    focusNativeSearchInput();
  }
  function closeMovieSearchOverlay() {
    if (dom.searchNativeInput) {
      try {
        dom.searchNativeInput.blur();
      } catch (error) {
        console.log("Native search input blur skipped:", error);
      }
    }
    state.searchPrompt.open = false;
    state.searchPrompt.keyIndex = 0;
    state.searchPrompt.inline = false;
    if (state.catalog.type === "live") {
      var resultItems = filteredAllMovieItems();
      state.catalog.itemIndex = resultItems.length ? 1 : 0;
      state.catalog.selectedItemCategoryIndex = state.catalog.selectedCategoryIndex;
      state.catalog.selectedItemIndex = state.catalog.itemIndex;
    }
    if (isCatalogSearchAction(currentSelectedItem())) {
      state.catalog.view = "browse";
      state.catalog.detailKey = "";
    }
    applyAppStateAttributes();
    renderFooter();
    renderCatalogScreen();
    renderSearchOverlay();
  }
  function refreshMovieSearchResults() {
    if (isSearchDetailView()) {
      renderCatalogDetail(true);
      syncCatalogFocus();
      return;
    }
    renderSearchOverlay();
  }
  function refreshMovieSearchUi() {
    if (isSearchDetailView()) {
      syncCatalogFocus();
      return;
    }
    if (!dom.searchKeyNodes || !dom.searchKeyNodes.length) {
      renderSearchOverlay();
      return;
    }
    setFocusedState(dom.searchKeyNodes, state.searchPrompt.keyIndex, true, "searchKeys");
    focusSearchOverlay();
  }
  function focusPlayerOverlay() {
    if (!dom.playerOverlay) {
      return;
    }
    window.setTimeout(function () {
      if (!state.player.open || !dom.playerOverlay) {
        return;
      }
      try {
        dom.playerOverlay.focus({
          preventScroll: true
        });
      } catch (error) {
        try {
          dom.playerOverlay.focus();
        } catch (focusError) {
          console.log("Player overlay focus skipped:", focusError);
        }
      }
    }, 0);
  }
  function blurPlayerOverlay() {
    if (!dom.playerOverlay) {
      return;
    }
    try {
      dom.playerOverlay.blur();
    } catch (error) {
      console.log("Player overlay blur skipped:", error);
    }
  }
  var TEMPO_DA_BARRA_MS = 10000;
  function showPlayerControls(persistent) {
    if (!state.player.open) {
      return;
    }
    clearPlayerHudTimer();
    state.player.controlsVisible = true;
    if (!state.player.canSeek) {
      state.player.focusZone = "controls";
    }
    state.player.controlIndex = firstAvailablePlayerControlIndex(playerControlActions()[state.player.controlIndex] && playerControlActions()[state.player.controlIndex].id);
    renderPlayer();
    focusPlayerOverlay();
    scheduleNativePlayerLayoutSync();
    if (persistent || state.player.paused || isPlayerProgressFocused()) {
      return;
    }
    playerHudTimer = setTimeout(function () {
      playerHudTimer = null;
      if (!state.player.open || state.player.paused || isPlayerProgressFocused()) {
        return;
      }
      state.player.controlsVisible = false;
      renderPlayer();
    }, TEMPO_DA_BARRA_MS);
  }
  function safePlayerDuration() {
    var duration = dom.playerVideo ? dom.playerVideo.duration : 0;
    return Number.isFinite(duration) && duration > 0 ? duration : 0;
  }
  function readVideoSeekRange(videoElement) {
    if (!videoElement) {
      return {
        start: 0,
        end: 0,
        canSeek: false
      };
    }
    try {
      if (videoElement.seekable && videoElement.seekable.length) {
        var start = videoElement.seekable.start(0);
        var end = videoElement.seekable.end(videoElement.seekable.length - 1);
        if (Number.isFinite(start) && Number.isFinite(end) && end > start) {
          return {
            start: start,
            end: end,
            canSeek: true
          };
        }
      }
    } catch (error) {
      console.log("Seek range read skipped:", error);
    }
    var duration = Number.isFinite(videoElement.duration) && videoElement.duration > 0 ? videoElement.duration : 0;
    return {
      start: 0,
      end: duration,
      canSeek: duration > 0
    };
  }
  function playerSeekRange() {
    return readVideoSeekRange(dom.playerVideo);
  }
  function playerCanSeek() {
    if (isNativePlayerActive()) {
      return Boolean(state.player.canSeek && !isLiveLikeCatalogType(state.player.type));
    }
    return Boolean(state.player.canSeek && dom.playerVideo && !isLiveLikeCatalogType(state.player.type));
  }
  function clampPlayerTime(value, seekRange) {
    var start = seekRange && Number.isFinite(seekRange.start) ? seekRange.start : 0;
    var end = seekRange && Number.isFinite(seekRange.end) ? seekRange.end : 0;
    if (!Number.isFinite(value)) {
      return start;
    }
    var maxTime = end > 0 ? Math.max(end - 0.25, start) : start;
    if (value < start) {
      return start;
    }
    if (end > 0 && value > maxTime) {
      return maxTime;
    }
    return value;
  }
  function runMediaHubAction(_x12) {
    return _runMediaHubAction.apply(this, arguments);
  }
  function _runMediaHubAction() {
    _runMediaHubAction = _asyncToGenerator(_regenerator().m(function _callee21(actionId) {
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.n) {
          case 0:
            if (!(actionId === "xtream" || actionId === "m3u" || actionId === "video" || actionId === "photo")) {
              _context21.n = 1;
              break;
            }
            openMediaInputPrompt(actionId);
            return _context21.a(2);
          case 1:
            if (!(actionId === "clear")) {
              _context21.n = 3;
              break;
            }
            if (state.media.items.length) {
              _context21.n = 2;
              break;
            }
            showToast("A galeria ja esta vazia nesta TV.", "error");
            return _context21.a(2);
          case 2:
            clearMediaGallery();
            renderMediaHubScreen();
            showToast("Galeria limpa com sucesso.", "success");
            return _context21.a(2);
          case 3:
            if (actionId === "logout") {
              clearSession();
              setScreen("code");
              showToast("Voltamos para a tela de codigo.", "success");
            }
          case 4:
            return _context21.a(2);
        }
      }, _callee21);
    }));
    return _runMediaHubAction.apply(this, arguments);
  }
  function handleMediaHubActionClick(event) {
    var actionNode = findEventMatch(event, ".media-hub-action", dom.mediaHubActions);
    if (!actionNode || !dom.mediaHubActions || !dom.mediaHubActions.contains(actionNode)) {
      return;
    }
    var actionId = actionNode.getAttribute("data-media-action-id");
    var actionIndex = MEDIA_HUB_ACTIONS.findIndex(function (action) {
      return action.id === actionId;
    });
    if (actionIndex < 0) {
      return;
    }
    state.media.focusZone = "actions";
    state.media.actionIndex = actionIndex;
    syncMediaHubFocus();
    runMediaHubAction(actionId);
  }
  function handleMediaGalleryClick(event) {
    var itemNode = findEventMatch(event, ".media-gallery-item", dom.mediaGalleryList);
    if (!itemNode || !dom.mediaGalleryList || !dom.mediaGalleryList.contains(itemNode)) {
      return;
    }
    var itemId = itemNode.getAttribute("data-media-item-id");
    var itemIndex = state.media.items.findIndex(function (item) {
      return item.id === itemId;
    });
    if (itemIndex < 0) {
      return;
    }
    state.media.focusZone = "gallery";
    state.media.itemIndex = itemIndex;
    syncMediaHubFocus();
    openMediaGalleryItem(state.media.items[itemIndex]);
  }
  function handleMediaInputFieldClick(event) {
    var fieldNode = findEventMatch(event, ".media-input-field", dom.appShell);
    if (!fieldNode || !state.media.inputPrompt.open) {
      return;
    }
    var fieldIndex = Number(fieldNode.getAttribute("data-media-field-index"));
    if (!Number.isFinite(fieldIndex)) {
      return;
    }
    state.media.inputPrompt.zone = "fields";
    state.media.inputPrompt.fieldIndex = clampIndex(fieldIndex, state.media.inputPrompt.fields.length);
    renderMediaInputOverlay();
  }
  function handleMediaInputKeyboardClick(event) {
    var keyNode = findEventMatch(event, ".media-input-key", dom.appShell);
    if (!keyNode || !state.media.inputPrompt.open) {
      return;
    }
    var keyId = keyNode.getAttribute("data-media-key-id");
    var keyboardKeys = mediaInputKeys();
    var keyIndex = keyboardKeys.findIndex(function (key) {
      return key.id === keyId;
    });
    if (keyIndex < 0) {
      return;
    }
    state.media.inputPrompt.zone = "keyboard";
    state.media.inputPrompt.keyIndex = keyIndex;
    syncMediaInputFocus();
    activateMediaInputKey(keyboardKeys[keyIndex]);
  }
  function findEventMatch(event, selector, container) {
    var node = event && event.target ? event.target : null;
    if (node && node.nodeType !== 1) {
      node = node.parentElement || null;
    }
    while (node) {
      if (node.matches && node.matches(selector)) {
        return node;
      }
      if (container && node === container) {
        break;
      }
      node = node.parentElement;
    }
    return null;
  }
  function runHomeAction(_x13) {
    return _runHomeAction.apply(this, arguments);
  }
  function _runHomeAction() {
    _runHomeAction = _asyncToGenerator(_regenerator().m(function _callee22(actionId) {
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.n) {
          case 0:
            if (!(actionId === "favorites")) {
              _context22.n = 1;
              break;
            }
            openCatalog(FAVORITES_CATALOG_TYPE);
            return _context22.a(2);
          case 1:
            if (!(actionId === "settings")) {
              _context22.n = 2;
              break;
            }
            state.settingsIndex = 0;
            setScreen("settings");
            return _context22.a(2);
          case 2:
            if (!(actionId === "change-server")) {
              _context22.n = 3;
              break;
            }
            setScreen("servers");
            return _context22.a(2);
          case 3:
            if (!(actionId === "refresh")) {
              _context22.n = 4;
              break;
            }
            _context22.n = 4;
            return refreshSelectedServerData({
              loadingText: "Atualizando a tela inicial...",
              successMessage: "Tela inicial atualizada com os dados mais recentes."
            });
          case 4:
            return _context22.a(2);
        }
      }, _callee22);
    }));
    return _runHomeAction.apply(this, arguments);
  }
  var confirmacaoDeLimpeza = 0;
  function runSettingsAction(_x14) {
    return _runSettingsAction.apply(this, arguments);
  }
  function _runSettingsAction() {
    _runSettingsAction = _asyncToGenerator(_regenerator().m(function _callee23(actionId) {
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.n) {
          case 0:
            if (!(actionId === "refresh")) {
              _context23.n = 2;
              break;
            }
            _context23.n = 1;
            return refreshSelectedServerData({
              loadingText: "Atualizando configuracoes e servidor...",
              successMessage: "Configuracoes sincronizadas com sucesso."
            });
          case 1:
            return _context23.a(2);
          case 2:
            if (!(actionId === "parental")) {
              _context23.n = 3;
              break;
            }
            abrirSenhaParental("atual", null);
            return _context23.a(2);
          case 3:
            if (!(actionId === "renovar")) {
              _context23.n = 4;
              break;
            }
            abrirRenovacao(false);
            return _context23.a(2);
          case 4:
            if (!(actionId === "limpar")) {
              _context23.n = 6;
              break;
            }
            if (!(!confirmacaoDeLimpeza || Date.now() - confirmacaoDeLimpeza > 5000)) {
              _context23.n = 5;
              break;
            }
            confirmacaoDeLimpeza = Date.now();
            showToast("Pressione OK de novo para apagar a lista de assistidos.", "success");
            return _context23.a(2);
          case 5:
            confirmacaoDeLimpeza = 0;
            limparAssistidos();
            return _context23.a(2);
          case 6:
            if (actionId === "logout") {
              controleParentalLiberado = false;
              limparFiltroAdulto();
              clearSession();
              setScreen("code");
              showToast("Sessao removida desta TV.", "success");
            }
          case 7:
            return _context23.a(2);
        }
      }, _callee23);
    }));
    return _runSettingsAction.apply(this, arguments);
  }
  function clearSession() {
    stopSessionHeartbeat();
    var rememberedCode = state.code || localStorage.getItem(STORAGE_KEYS.userCode) || localStorage.getItem(STORAGE_KEYS.rememberedCode) || "";
    localStorage.removeItem(STORAGE_KEYS.userCode);
    localStorage.removeItem(STORAGE_KEYS.profile);
    localStorage.removeItem(STORAGE_KEYS.selectedServer);
    localStorage.removeItem(STORAGE_KEYS.lastScreen);
    localStorage.removeItem(STORAGE_KEYS.activeHeartbeatUserCode);
    localStorage.removeItem(STORAGE_KEYS.sessionId);
    if (rememberedCode) {
      localStorage.setItem(STORAGE_KEYS.rememberedCode, rememberedCode);
    }
    closeSessionConflict();
    resetMediaInputPromptState();
    cancelFavoriteHold();
    state.code = rememberedCode;
    state.profile = null;
    state.selectedServer = null;
    state.serverIndex = 0;
    state.media.focusZone = "actions";
    state.media.actionIndex = 0;
    state.media.itemIndex = 0;
    state.homeFocusZone = "cards";
    state.homeCardIndex = 0;
    state.homeActionIndex = 0;
    state.catalog.zone = "categories";
    state.catalog.view = "browse";
    state.catalog.categoryIndex = 0;
    state.catalog.itemIndex = 0;
    state.catalog.itemWindowStartIndex = 0;
    state.catalog.selectedCategoryIndex = 0;
    state.catalog.selectedItemCategoryIndex = 0;
    state.catalog.selectedItemIndex = 0;
    state.catalog.detailActionIndex = 0;
    state.catalog.detailKey = "";
    state.catalog.movieSearchQuery = "";
    state.catalog.movieSearchCacheKey = "";
    state.catalog.movieSearchCacheItems = [];
    state.catalog.movieSearchIndexKey = "";
    state.catalog.movieSearchIndexItems = [];
    state.catalog.movieSearchIndexTitles = [];
    state.catalog.seriesDetailPage = "overview";
    state.catalog.seriesDetailFocusZone = "actions";
    state.catalog.seriesDetailSeasonIndex = 0;
    state.catalog.seriesDetailEpisodeIndex = 0;
    state.catalog.seriesDetailSeriesId = "";
    state.settingsIndex = 0;
    state.resumePrompt.open = false;
    state.resumePrompt.optionIndex = 0;
    state.resumePrompt.playerState = null;
    state.resumePrompt.entry = null;
    state.searchPrompt.open = false;
    state.searchPrompt.keyIndex = 0;
    resetLibraryState();
  }
  function setScreen(screen) {
    if (state.screen === "catalog" && screen !== "catalog") {
      stopCatalogPreview();
    }
    if (state.screen !== screen) {
      cancelFavoriteHold();
    }
    if (screen !== "catalog" && state.resumePrompt.open) {
      state.resumePrompt.open = false;
      state.resumePrompt.optionIndex = 0;
      state.resumePrompt.playerState = null;
      state.resumePrompt.entry = null;
    }
    if (screen !== "catalog" && state.searchPrompt.open) {
      state.searchPrompt.open = false;
      state.searchPrompt.keyIndex = 0;
      state.searchPrompt.inline = false;
    }
    if (screen !== "media" && state.media.inputPrompt.open) {
      resetMediaInputPromptState();
    }
    state.screen = screen;
    localStorage.setItem(STORAGE_KEYS.lastScreen, screen);
    render();
    if (screen === "home") {
      sincronizarDadosAoEntrar();
      avisarVencimentoSePerto();
    }
    if (screen !== "splash") {
      etapaDaAbertura(null, -1, true);
    }
  }
  function etapaDaAbertura(texto, pct, fechar) {
    var abertura = window.TPAbertura;
    if (!abertura) return;
    try {
      if (fechar) {
        abertura.fechar();
        return;
      }
      abertura.etapa(texto, pct);
    } catch (error) {}
  }
  function guardarCapasDaAbertura(itens) {
    try {
      var novas = itens.map(function (item) {
        return String(item.stream_icon || item.cover || "");
      }).filter(function (url) {
        return /^https?:\/\//i.test(url);
      });
      if (novas.length < 4) return;
      var antigas = JSON.parse(localStorage.getItem("tp_abertura_capas") || "[]") || [];
      var juntas = novas.concat(antigas).filter(function (url, i, lista) {
        return lista.indexOf(url) === i;
      }).slice(0, 24);
      localStorage.setItem("tp_abertura_capas", JSON.stringify(juntas));
    } catch (error) {}
  }
  function render() {
    applyAppStateAttributes();
    Object.keys(dom.screens).forEach(function (key) {
      dom.screens[key].classList.toggle("screen-visible", key === state.screen);
    });
    renderStatus();
    renderTopbarContext();
    renderFooter();
    renderAppVersionLabels();
    renderCodeScreen();
    renderServerScreen();
    renderPaymentScreen();
    renderMediaHubScreen();
    renderHomeScreen();
    renderSettingsScreen();
    renderCatalogScreen();
    renderPlayer();
    renderLoading();
    renderNetworkOverlay();
    renderSessionConflictOverlay();
    renderExitPromptOverlay();
    renderResumePrompt();
    renderSearchOverlay();
    renderMediaInputOverlay();
  }
  function applyAppStateAttributes() {
    enforceVoiceGuideSuppression();
    if (dom.appShell) {
      dom.appShell.setAttribute("data-screen", state.screen);
      dom.appShell.setAttribute("data-player-open", state.player.open ? "true" : "false");
      dom.appShell.setAttribute("data-resume-prompt", state.resumePrompt.open ? "true" : "false");
      dom.appShell.setAttribute("data-search-prompt", state.searchPrompt.open ? "true" : "false");
      dom.appShell.setAttribute("data-media-input-open", state.media.inputPrompt.open ? "true" : "false");
      dom.appShell.setAttribute("data-catalog-variant", state.screen === "catalog" ? catalogVariant() : "default");
      dom.appShell.setAttribute("data-catalog-view", state.screen === "catalog" ? catalogView() : "browse");
    }
    if (dom.catalogScreen) {
      dom.catalogScreen.setAttribute("data-variant", state.screen === "catalog" ? catalogVariant() : "default");
      dom.catalogScreen.setAttribute("data-view", state.screen === "catalog" ? catalogView() : "browse");
    }
    if (dom.catalogGrid) {
      dom.catalogGrid.setAttribute("data-variant", state.screen === "catalog" ? catalogVariant() : "default");
      dom.catalogGrid.setAttribute("data-view", state.screen === "catalog" ? catalogView() : "browse");
    }
  }
  function renderAppVersionLabels() {
    var label = "Versao " + APP_VERSION;
    if (dom.loginAppVersion) {
      dom.loginAppVersion.textContent = label;
    }
    if (dom.homeAppVersion) {
      dom.homeAppVersion.textContent = label;
    }
    if (window.TPAbertura && window.TPAbertura.aberta()) {
      try {
        window.TPAbertura.versao(APP_VERSION);
      } catch (error) {}
    }
  }
  function renderStatus() {
    if (state.screen === "servers") {
      dom.statusStrip.innerHTML = "";
      return;
    }
    var bits = [];
    if (state.screen === "media") {
      if (state.profile && state.profile.userNumber) {
        bits.push('<div class="pill"><strong>Codigo</strong> ' + escapeHtml(state.profile.userNumber) + "</div>");
      }
      dom.statusStrip.innerHTML = bits.join("");
      return;
    }
    if (state.screen !== "catalog") {
      bits.push('<div class="pill"><strong>' + (state.screen === "splash" ? "TP Media" : "Tropical Play") + "</strong> " + escapeHtml(SESSION_PLATFORM_LABEL) + "</div>");
    }
    if (state.profile && state.profile.userNumber) {
      bits.push('<div class="pill"><strong>Codigo</strong> ' + escapeHtml(state.profile.userNumber) + "</div>");
    }
    if (state.selectedServer && state.selectedServer.name) {
      bits.push('<div class="pill"><strong>Servidor</strong> ' + escapeHtml(state.selectedServer.name) + "</div>");
    }
    dom.statusStrip.innerHTML = bits.join("");
  }
  function renderTopbarContext() {
    if (!dom.catalogTopbarType) {
      return;
    }
    if (state.screen !== "catalog") {
      dom.catalogTopbarType.textContent = "";
      return;
    }
    dom.catalogTopbarType.textContent = catalogLabelForType(state.catalog.type);
  }
  function renderFooter() {
    if (state.resumePrompt.open) {
      state.footerText = [footerActionMarkup("nav", "Escolher"), footerActionMarkup("enter", "Confirmar"), footerActionMarkup("return", "Cancelar")].join("");
      dom.footerHint.innerHTML = state.footerText;
      return;
    }
    if (state.searchPrompt.open) {
      state.footerText = [footerActionMarkup("enter", "Abrir teclado"), footerActionMarkup("return", "Fechar busca")].join("");
      dom.footerHint.innerHTML = state.footerText;
      return;
    }
    if (state.media.inputPrompt.open) {
      state.footerText = [footerActionMarkup("nav", "Escolher campo ou tecla"), footerActionMarkup("enter", "Digitar ou salvar"), footerActionMarkup("return", "Cancelar")].join("");
      dom.footerHint.innerHTML = state.footerText;
      return;
    }
    if (state.screen === "catalog") {
      state.footerText = renderCatalogFooterHint();
      dom.footerHint.innerHTML = state.footerText;
      return;
    }
    var hints = {
      splash: "Enter avanca se a splash ainda estiver visivel.",
      code: "Setas movem o foco, numeros digitam direto, Enter confirma.",
      servers: "Use cima/baixo para escolher o servidor e Enter para conectar.",
      payment: "Escaneie o QR Code. Pressione OK em Ja paguei para validar novamente.",
      media: "Use OK para abrir a entrada desejada ou reproduzir um item da galeria.",
      home: "Setas navegam entre cards e acoes. Enter abre ou executa.",
      settings: "Use cima/baixo para escolher a opcao. Enter confirma e Back retorna."
    };
    state.footerText = hints[state.screen] || "";
    dom.footerHint.textContent = state.footerText;
  }
  function renderCatalogFooterHint() {
    if (isPosterCatalogDetailView()) {
      if (isSeriesPosterDetailView()) {
        if (isSeriesSeasonBrowserPage() || isSeriesEpisodeBrowserPage()) {
          if (state.catalog.seriesDetailFocusZone === "episodes") {
            return [footerActionMarkup("nav", "Cima/baixo escolhem o episodio, esquerda volta as temporadas"), footerActionMarkup("enter", "Assistir"), footerActionMarkup("return", "Voltar para as temporadas")].join("");
          }
          return [footerActionMarkup("nav", "Cima/baixo escolhem a temporada, direita vai aos episodios"), footerActionMarkup("enter", "Ver episodios"), footerActionMarkup("return", "Voltar para a serie")].join("");
        }
        return [footerActionMarkup("nav", "Esq/dir escolhem, cima/baixo rolam"), footerActionMarkup("enter", "Confirmar acao"), footerActionMarkup("return", "Voltar para as series")].join("");
      }
      return [footerActionMarkup("nav", "Esq/dir escolhem, cima/baixo rolam"), footerActionMarkup("enter", state.catalog.type === "movies" ? "Assistir" : "Abrir serie"), footerActionMarkup("return", "Voltar para os " + (state.catalog.type === "movies" ? "filmes" : "series"))].join("");
    }
    var parts = [footerActionMarkup("nav", "Navegar"), footerActionMarkup("enter", catalogPrimaryActionLabel())];
    if (catalogSupportsFavoriteToggle()) {
      parts.push(footerActionMarkup("enter-hold", state.catalog.type === FAVORITES_CATALOG_TYPE ? "Segure para remover dos favoritos" : "Segure para adicionar aos favoritos"));
    }
    parts.push(footerActionMarkup("return", "Voltar para a home"));
    return parts.join("");
  }
  function footerActionMarkup(iconType, label) {
    return '<span class="footer-action">' + remoteKeyIcon(iconType) + '<span class="footer-action-label">' + escapeHtml(label) + "</span></span>";
  }
  function remoteKeyIcon(type) {
    if (type === "nav") {
      return '<span class="remote-key remote-key-nav" aria-hidden="true">' + '<span class="remote-key-nav-grid">' + '<span class="nav-cell"></span>' + '<span class="nav-triangle nav-up"></span>' + '<span class="nav-cell"></span>' + '<span class="nav-triangle nav-left"></span>' + '<span class="nav-center"></span>' + '<span class="nav-triangle nav-right"></span>' + '<span class="nav-cell"></span>' + '<span class="nav-triangle nav-down"></span>' + '<span class="nav-cell"></span>' + "</span></span>";
    }
    if (type === "enter" || type === "enter-hold") {
      return '<span class="remote-key remote-key-enter' + (type === "enter-hold" ? " is-hold" : "") + '" aria-hidden="true">' + '<svg viewBox="0 0 48 48" focusable="false" aria-hidden="true">' + '<path d="M34 11v12H15"/>' + '<path d="M22 16l-7 7 7 7"/>' + "</svg>" + (type === "enter-hold" ? '<span class="hold-badge">segure</span>' : "") + "</span>";
    }
    return '<span class="remote-key remote-key-return" aria-hidden="true">' + '<svg viewBox="0 0 48 48" focusable="false" aria-hidden="true">' + '<path d="M35 15c0-4.4-3.6-8-8-8H15"/>' + '<path d="M22 7l-7 8 7 8"/>' + "</svg></span>";
  }
  function restoreFavorites() {
    var savedFavorites = safeJsonParse(localStorage.getItem(STORAGE_KEYS.favorites));
    if (!Array.isArray(savedFavorites)) {
      state.favorites = [];
      return;
    }
    state.favorites = savedFavorites.map(normalizeFavoriteEntry).filter(function (entry) {
      return Boolean(entry);
    });
  }
  function normalizeFavoriteEntry(entry) {
    if (!entry || _typeof(entry) !== "object") {
      return null;
    }
    var item = entry.item && _typeof(entry.item) === "object" ? clone(entry.item) : null;
    var itemId = entry.itemId || favoriteItemId(item);
    if (!item || !itemId) {
      return null;
    }
    var favoriteType = normalizeFavoriteType(entry.type);
    item.favorite_type = favoriteType;
    return {
      scope: String(entry.scope || ""),
      type: favoriteType,
      itemId: String(itemId),
      addedAt: entry.addedAt || new Date().toISOString(),
      item: item
    };
  }
  function saveFavorites() {
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(state.favorites));
    marcarDadosAlterados(3000);
  }
  function restorePlaybackHistory() {
    var savedHistory = safeJsonParse(localStorage.getItem(STORAGE_KEYS.playbackHistory));
    if (!Array.isArray(savedHistory)) {
      state.playbackHistory = [];
      return;
    }
    state.playbackHistory = savedHistory.map(normalizePlaybackHistoryEntry).filter(function (entry) {
      return Boolean(entry);
    }).sort(function (a, b) {
      return String(b.updatedAt).localeCompare(String(a.updatedAt));
    }).slice(0, PLAYBACK_HISTORY_LIMIT);
  }
  function normalizePlaybackHistoryEntry(entry) {
    if (!entry || _typeof(entry) !== "object") {
      return null;
    }
    var item = entry.item && _typeof(entry.item) === "object" ? clone(entry.item) : null;
    var seriesItem = entry.seriesItem && _typeof(entry.seriesItem) === "object" ? clone(entry.seriesItem) : null;
    var itemId = entry.itemId || catalogItemId(item);
    if (!item || !itemId) {
      return null;
    }
    var playbackType = entry.type === "series" ? "series" : "movies";
    return {
      scope: String(entry.scope || ""),
      type: playbackType,
      itemId: String(itemId),
      updatedAt: entry.updatedAt || new Date().toISOString(),
      position: sanitizePlaybackTime(entry.position),
      duration: sanitizePlaybackTime(entry.duration),
      completed: Boolean(entry.completed),
      item: item,
      seriesId: playbackType === "series" ? String(entry.seriesId || seriesItem && seriesItem.series_id || item.series_id || "") : "",
      seasonNumber: playbackType === "series" ? normalizeSeriesNumber(entry.seasonNumber || item.season_number || item.season) : 0,
      episodeNumber: playbackType === "series" ? normalizeEpisodeNumber(entry.episodeNumber || item.episode_number || item.episode_num) : 0,
      episodeTitle: playbackType === "series" ? firstNonEmpty(entry.episodeTitle, item.title, item.name) : "",
      seriesItem: playbackType === "series" ? seriesItem : null
    };
  }
  function savePlaybackHistory() {
    localStorage.setItem(STORAGE_KEYS.playbackHistory, JSON.stringify(state.playbackHistory.slice(0, PLAYBACK_HISTORY_LIMIT)));
    marcarDadosAlterados(30000);
  }
  function cancelFavoriteHold() {
    if (inputState.enterHoldTimer) {
      clearTimeout(inputState.enterHoldTimer);
      inputState.enterHoldTimer = null;
    }
    inputState.enterHoldActive = false;
    inputState.enterHoldTriggered = false;
  }
  function setFocusedState(nodes, activeIndex, enabled, key) {
    if (!nodes || !nodes.length) {
      return;
    }
    if (key) {
      nodes.forEach(function (node, index) {
        node.setAttribute("data-foco-grupo", key);
        node.setAttribute("data-foco-indice", String(index));
      });
    }
    if (!key) {
      nodes.forEach(function (node, index) {
        node.classList.toggle("is-focused", Boolean(enabled) && index === activeIndex);
      });
      return;
    }
    var previous = focusState[key];
    var isEnabled = Boolean(enabled);
    var nextNode = isEnabled ? nodes[activeIndex] : null;
    if (!previous || previous.nodes !== nodes) {
      nodes.forEach(function (node) {
        node.classList.remove("is-focused");
      });
      if (nextNode) {
        nextNode.classList.add("is-focused");
      }
      focusState[key] = {
        nodes: nodes,
        index: activeIndex,
        enabled: isEnabled
      };
      return;
    }
    if (previous.enabled === isEnabled && previous.index === activeIndex) {
      return;
    }
    if (previous.enabled && nodes[previous.index]) {
      nodes[previous.index].classList.remove("is-focused");
    }
    if (nextNode) {
      nextNode.classList.add("is-focused");
    }
    focusState[key] = {
      nodes: nodes,
      index: activeIndex,
      enabled: isEnabled
    };
  }
  function syncCodeFocus() {
    setFocusedState(dom.codeKeyNodes, state.codeKeyIndex, true, "code");
  }
  function syncServerFocus() {
    setFocusedState(dom.serverNodes, state.serverIndex || 0, true, "servers");
  }
  function syncMediaHubFocus() {
    var hasItems = Boolean(dom.mediaItemNodes && dom.mediaItemNodes.length);
    if (!hasItems && state.media.focusZone === "gallery") {
      state.media.focusZone = "actions";
    }
    setFocusedState(dom.mediaActionNodes, state.media.actionIndex, state.media.focusZone === "actions", "mediaActions");
    setFocusedState(dom.mediaItemNodes, clampIndex(state.media.itemIndex, dom.mediaItemNodes ? dom.mediaItemNodes.length : 0), state.media.focusZone === "gallery", "mediaItems");
    ensureNodeVisible(state.media.focusZone === "gallery" ? dom.mediaItemNodes && dom.mediaItemNodes[state.media.itemIndex] : dom.mediaActionNodes && dom.mediaActionNodes[state.media.actionIndex]);
  }
  function syncMediaInputFocus() {
    if (!state.media.inputPrompt.open) {
      setFocusedState(dom.mediaInputFieldNodes, 0, false, "mediaInputFields");
      setFocusedState(dom.mediaInputKeyNodes, 0, false, "mediaInputKeys");
      return;
    }
    setFocusedState(dom.mediaInputFieldNodes, state.media.inputPrompt.fieldIndex, state.media.inputPrompt.zone === "fields", "mediaInputFields");
    setFocusedState(dom.mediaInputKeyNodes, state.media.inputPrompt.keyIndex, state.media.inputPrompt.zone === "keyboard", "mediaInputKeys");
    ensureNodeVisible(state.media.inputPrompt.zone === "fields" ? dom.mediaInputFieldNodes && dom.mediaInputFieldNodes[state.media.inputPrompt.fieldIndex] : dom.mediaInputKeyNodes && dom.mediaInputKeyNodes[state.media.inputPrompt.keyIndex]);
  }
  function syncHomeFocus() {
    setFocusedState(dom.homeCardNodes, state.homeCardIndex, state.homeFocusZone === "cards", "homeCards");
    setFocusedState(dom.homeActionNodes, state.homeActionIndex, state.homeFocusZone === "actions", "homeActions");
  }
  function syncSettingsFocus() {
    setFocusedState(dom.settingsNodes, state.settingsIndex, true, "settings");
  }
  function syncCatalogFocus() {
    if (isPosterCatalogDetailView()) {
      if (isSeriesSeasonBrowserPage() || isSeriesEpisodeBrowserPage()) {
        renderCatalogDetail(true);
        setFocusedState(dom.categoryNodes, state.catalog.categoryIndex, false, "catalogCategories");
        setFocusedState(dom.itemNodes, catalogVisibleItemIndex(), false, "catalogItems");
        setFocusedState(dom.catalogDetailActionNodes, state.catalog.detailActionIndex, state.catalog.seriesDetailFocusZone === "actions", "catalogDetailActions");
        setFocusedState(dom.seriesSeasonNodes, state.catalog.seriesDetailSeasonIndex, state.catalog.seriesDetailFocusZone === "seasons", "seriesSeasons");
        setFocusedState(dom.seriesEpisodeNodes, state.catalog.seriesDetailEpisodeIndex, state.catalog.seriesDetailFocusZone === "episodes", "seriesEpisodes");
        setFocusedState(dom.searchKeyNodes, state.searchPrompt.keyIndex, false, "searchKeys");
        syncCatalogCategorySelectedState();
        syncCatalogSelectedState();
        ensureNodeVisible(dom.seriesSeasonNodes && dom.seriesSeasonNodes[state.catalog.seriesDetailSeasonIndex]);
        ensureNodeVisible(dom.seriesEpisodeNodes && dom.seriesEpisodeNodes[state.catalog.seriesDetailEpisodeIndex]);
        renderFooter();
        return;
      }
      if (isSearchDetailView()) {
        if (!dom.searchNativeInput && (!dom.searchKeyNodes || !dom.searchKeyNodes.length)) {
          renderCatalogDetail(true);
        }
        setFocusedState(dom.categoryNodes, state.catalog.categoryIndex, false, "catalogCategories");
        setFocusedState(dom.itemNodes, catalogVisibleItemIndex(), false, "catalogItems");
        setFocusedState(dom.catalogDetailActionNodes, state.catalog.detailActionIndex, false, "catalogDetailActions");
        setFocusedState(dom.searchKeyNodes, state.searchPrompt.keyIndex, false, "searchKeys");
        syncCatalogCategorySelectedState();
        syncCatalogSelectedState();
        return;
      }
      renderCatalogDetail(true);
      setFocusedState(dom.categoryNodes, state.catalog.categoryIndex, false, "catalogCategories");
      setFocusedState(dom.itemNodes, catalogVisibleItemIndex(), false, "catalogItems");
      setFocusedState(dom.catalogDetailActionNodes, state.catalog.detailActionIndex, true, "catalogDetailActions");
      setFocusedState(dom.seriesSeasonNodes, state.catalog.seriesDetailSeasonIndex, false, "seriesSeasons");
      setFocusedState(dom.seriesEpisodeNodes, state.catalog.seriesDetailEpisodeIndex, false, "seriesEpisodes");
      setFocusedState(dom.searchKeyNodes, state.searchPrompt.keyIndex, false, "searchKeys");
      syncCatalogCategorySelectedState();
      syncCatalogSelectedState();
      return;
    }
    if (catalogItemWindowNeedsRefresh()) {
      renderCatalogScreen();
      return;
    }
    var categoryVisibleIndex = state.catalog.zone === "categories" ? state.catalog.categoryIndex : catalogDisplayCategoryIndex();
    var itemVisibleIndex = catalogVisibleItemIndex();
    var lupaComFoco = Boolean(state.catalog.lupaFocada && state.catalog.zone === "categories" && lupaDoCatalogoAtiva());
    setFocusedState(dom.categoryNodes, state.catalog.categoryIndex, state.catalog.zone === "categories" && !lupaComFoco, "catalogCategories");
    setFocusedState(dom.itemNodes, itemVisibleIndex, state.catalog.zone === "items", "catalogItems");
    if (dom.catalogLupa) {
      setFocusedState([dom.catalogLupa], 0, lupaComFoco, "catalogLupa");
    }
    setFocusedState(dom.catalogDetailActionNodes, state.catalog.detailActionIndex, false, "catalogDetailActions");
    setFocusedState(dom.seriesSeasonNodes, state.catalog.seriesDetailSeasonIndex, false, "seriesSeasons");
    setFocusedState(dom.seriesEpisodeNodes, state.catalog.seriesDetailEpisodeIndex, false, "seriesEpisodes");
    setFocusedState(dom.searchKeyNodes, state.searchPrompt.keyIndex, false, "searchKeys");
    syncCatalogCategorySelectedState();
    syncCatalogSelectedState();
    ensureNodeVisible(dom.categoryNodes && dom.categoryNodes[categoryVisibleIndex]);
    ensureNodeVisible(dom.itemNodes && dom.itemNodes[itemVisibleIndex]);
    renderCatalogDetail();
    mostrarProgramacaoDoFoco();
    marcarFocoDoCoracao();
  }
  function mostrarProgramacaoDoFoco() {
    var alvo = dom.detailCard && dom.detailCard.querySelector(".detail-epg");
    if (!alvo || state.catalog.zone !== "items") {
      return;
    }
    var foco = currentFocusedCatalogItem();
    if (!foco || isCatalogSearchAction(foco) || catalogContentType(foco, state.catalog.type) !== "live") {
      return;
    }
    var chave = chaveDaProgramacao(foco);
    if (alvo.getAttribute("data-epg-key") === chave) {
      return;
    }
    var selecionado = currentSelectedItem();
    var outroCanal = !selecionado || chaveDaProgramacao(selecionado) !== chave;
    alvo.setAttribute("data-epg-key", chave);
    alvo.setAttribute("data-epg-nome", outroCanal ? String(foco.name || "") : "");
    alvo.innerHTML = htmlDaProgramacao(programacaoEmCache(foco), alvo.getAttribute("data-epg-nome"));
    agendarProgramacao(foco);
  }
  function syncCatalogCategorySelectedState() {
    if (!dom.categoryNodes || !dom.categoryNodes.length) {
      return;
    }
    var selectedCategoryIndex = clampIndex(catalogCategorySelectionIndex(), dom.categoryNodes.length);
    dom.categoryNodes.forEach(function (node, index) {
      node.classList.toggle("is-selected", index === selectedCategoryIndex);
    });
  }
  function syncCatalogSelectedState() {
    if (!dom.itemNodes || !dom.itemNodes.length) {
      return;
    }
    var isLiveSelectedInVisibleList = catalogUsesSelectionModel() && state.catalog.selectedItemCategoryIndex === catalogDisplayCategoryIndex();
    var visibleStartIndex = state.catalog.itemWindowStartIndex || 0;
    dom.itemNodes.forEach(function (node, index) {
      node.classList.toggle("is-selected", isLiveSelectedInVisibleList && state.catalog.selectedItemIndex === visibleStartIndex + index);
    });
  }
  function renderCodeScreen() {
    if (state.code && state.code.length > CODIGO_MAXIMO) {
      state.code = state.code.slice(0, CODIGO_MAXIMO);
    }
    var masked = state.code ? state.code : '<span class="code-placeholder">Digite usando o teclado abaixo</span>';
    dom.codeDisplay.innerHTML = masked;
    if (dom.loginSessionNotice) {
      var notice = localStorage.getItem(STORAGE_KEYS.loginNotice) || "";
      dom.loginSessionNotice.textContent = notice;
      dom.loginSessionNotice.classList.toggle("hidden", !notice);
    }
    if (dom.codeKeypad.querySelectorAll(".key").length !== CODE_KEYS.length) {
      dom.codeKeypad.innerHTML = CODE_KEYS.map(function (key) {
        var extraClass = key.type === "submit" ? " key-confirm" : key.type !== "digit" ? " key-action" : "";
        return '<div class="key' + extraClass + '" data-key="' + escapeHtml(key.id) + '">' + escapeHtml(key.label) + "</div>";
      }).join("");
      dom.codeKeyNodes = Array.from(dom.codeKeypad.querySelectorAll(".key"));
    }
    syncCodeFocus();
  }
  function renderServerScreen() {
    var servers = currentServers();
    if (!state.profile) {
      dom.serverSubtitle.textContent = "Valide um codigo para continuar.";
      dom.serverList.innerHTML = '<div class="empty-state">Nenhum perfil carregado ainda.</div>';
      return;
    }
    dom.serverSubtitle.textContent = (state.profile.lists || []).length + " servidor(es) disponivel(is) para voce escolher.";
    if (!servers.length) {
      dom.serverList.innerHTML = '<div class="empty-state">Esse codigo nao trouxe servidores. Verifique o cadastro no Firebase.</div>';
      return;
    }
    dom.serverList.innerHTML = servers.map(function (server) {
      var status = statusDoServidorNaTela(server);
      return '<div class="server-card">' + '<div class="server-texto">' + '<p class="server-name">' + escapeHtml(server.name || "Servidor") + "</p>" + '<p class="server-status is-' + escapeHtml(status.estado) + '"><span class="server-ponto"></span>' + escapeHtml(status.rotulo) + "</p>" + (status.detalhe ? '<p class="server-detalhe">' + escapeHtml(status.detalhe) + "</p>" : "") + "</div></div>";
    }).join("");
    verificarServidoresDaTela();
    dom.serverNodes = Array.from(dom.serverList.querySelectorAll(".server-card"));
    syncServerFocus();
  }
  function renderPaymentScreen() {
    if (!dom.paymentActions || !dom.paymentQrImage || !dom.paymentQrCaption) return;
    var paymentUrl = paymentUrlForProfile(state.profile);
    if (paymentUrl) {
      dom.paymentQrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=" + encodeURIComponent(paymentUrl);
      dom.paymentQrImage.classList.remove("hidden");
      dom.paymentQrCaption.textContent = "Aponte a câmera do celular para renovar.";
    } else {
      dom.paymentQrImage.removeAttribute("src");
      dom.paymentQrImage.classList.add("hidden");
      dom.paymentQrCaption.textContent = "Link de pagamento não encontrado. Entre em contato com o suporte.";
    }
    dom.paymentActions.innerHTML = '<div class="payment-action is-focused">' + '<span class="action-title">Já paguei</span>' + '<span class="action-copy">Pressione OK para voltar e validar novamente.</span>' + "</div>";
  }
  function renderMediaHubScreen() {
    if (!dom.mediaHubActions || !dom.mediaGalleryList || !dom.mediaGalleryTitle || !dom.mediaGallerySubtitle) {
      return;
    }
    dom.mediaHubActions.innerHTML = MEDIA_HUB_ACTIONS.map(function (action) {
      return '<div class="media-hub-action" data-media-action-id="' + escapeHtml(action.id) + '">' + '<div class="media-action-badge">' + escapeHtml(action.badge) + "</div>" + '<div class="media-action-copy-shell">' + '<p class="media-action-title">' + escapeHtml(action.title) + "</p>" + '<p class="media-action-copy">' + escapeHtml(action.subtitle) + "</p>" + "</div></div>";
    }).join("");
    dom.mediaActionNodes = Array.from(dom.mediaHubActions.querySelectorAll(".media-hub-action"));
    dom.mediaInputFieldNodes = [];
    dom.mediaInputKeyNodes = [];
    if (state.media.inputPrompt.open) {
      var fields = state.media.inputPrompt.fields || [];
      var keyboardKeys = mediaInputKeys();
      dom.mediaGalleryTitle.textContent = state.media.inputPrompt.title || "Nova entrada";
      dom.mediaGallerySubtitle.textContent = state.media.inputPrompt.subtitle || "Preencha os campos abaixo e use o teclado para concluir.";
      dom.mediaGalleryList.innerHTML = '<div class="media-inline-form">' + '<div class="media-input-fields" data-count="' + escapeHtml(String(fields.length || 0)) + '">' + fields.map(function (field, index) {
        var displayValue = mediaInputFieldDisplayValue(field);
        return '<div class="media-input-field" data-media-field-index="' + index + '">' + '<span class="media-input-field-label">' + escapeHtml(field.label) + "</span>" + '<div class="media-input-field-value' + (displayValue ? "" : " is-placeholder") + '">' + escapeHtml(displayValue || field.placeholder || "Selecione este campo para preencher") + "</div></div>";
      }).join("") + "</div>" + '<div class="media-input-keyboard">' + keyboardKeys.map(function (key) {
        return '<div class="media-input-key' + (key.type === "apply" ? " is-apply" : "") + (key.wide ? " is-wide" : "") + '" data-media-key-id="' + escapeHtml(key.id) + '">' + escapeHtml(key.label) + "</div>";
      }).join("") + "</div>" + "</div>";
      dom.mediaItemNodes = [];
      dom.mediaInputFieldNodes = Array.from(dom.mediaGalleryList.querySelectorAll(".media-input-field"));
      dom.mediaInputKeyNodes = Array.from(dom.mediaGalleryList.querySelectorAll(".media-input-key"));
      state.media.inputPrompt.keyIndex = clampIndex(state.media.inputPrompt.keyIndex, dom.mediaInputKeyNodes.length);
      setFocusedState(dom.mediaActionNodes, state.media.actionIndex, false, "mediaActions");
      setFocusedState(dom.mediaItemNodes, 0, false, "mediaItems");
      syncMediaInputFocus();
      mediaDebug("inline.prompt.ready", {
        fieldCount: dom.mediaInputFieldNodes.length,
        keyCount: dom.mediaInputKeyNodes.length,
        mode: state.media.inputPrompt.mode,
        zone: state.media.inputPrompt.zone
      });
      return;
    }
    if (!state.media.items.length) {
      dom.mediaGalleryTitle.textContent = "Conteudo pronto para abrir";
      dom.mediaGallerySubtitle.textContent = "Use as acoes ao lado para montar sua propria galeria nesta TV.";
      dom.mediaGalleryList.innerHTML = '<div class="media-gallery-empty">' + '<h3 role="presentation">Sua galeria aparece aqui</h3>' + "<p>Adicione uma lista M3U, um acesso Xtream, um video direto ou uma foto por URL. O aplicativo apenas reproduz o que voce informar.</p>" + "</div>";
      dom.mediaItemNodes = [];
      syncMediaHubFocus();
      return;
    }
    var focusedItem = currentMediaGalleryItem();
    dom.mediaGalleryTitle.textContent = focusedItem ? trimText(focusedItem.title, 44) : "Conteudo pronto para abrir";
    dom.mediaGallerySubtitle.textContent = focusedItem ? firstNonEmpty(focusedItem.groupTitle, focusedItem.sourceLabel, focusedItem.mediaType === "photo" ? "Foto pronta para visualizacao." : "Item pronto para reproducao.") : "Escolha um item para abrir em tela cheia.";
    dom.mediaGalleryList.innerHTML = state.media.items.map(function (item) {
      return '<div class="media-gallery-item" data-media-item-id="' + escapeHtml(item.id) + '">' + '<div class="media-gallery-badge">' + escapeHtml(mediaBadgeLabel(item)) + "</div>" + '<div class="media-gallery-copy-shell">' + '<p class="media-gallery-title">' + escapeHtml(item.title) + "</p>" + '<p class="media-gallery-copy">' + escapeHtml(mediaGalleryCopy(item)) + "</p>" + "</div>" + '<div class="media-gallery-host">' + escapeHtml(mediaGalleryHost(item)) + "</div></div>";
    }).join("");
    dom.mediaItemNodes = Array.from(dom.mediaGalleryList.querySelectorAll(".media-gallery-item"));
    state.media.itemIndex = clampIndex(state.media.itemIndex, dom.mediaItemNodes.length);
    syncMediaHubFocus();
  }
  function renderMediaInputOverlay() {
    if (!dom.mediaInputOverlay) {
      return;
    }
    dom.mediaInputOverlay.classList.add("hidden");
    if (state.screen === "media") {
      renderMediaHubScreen();
    }
  }
  function renderHomeScreen() {
    dom.homeTitle.textContent = "Tropical Play";
    dom.heroMeta.innerHTML = [metaCard("Servidor conectado", state.selectedServer ? state.selectedServer.name : "Nao definido"), metaCard("Expira em", formatDate(state.profile && state.profile.expiresAt))].join("");
    dom.homeCards.innerHTML = HOME_CARDS.map(function (card) {
      return '<div class="home-card ' + escapeHtml(card.className) + '">' + '<div class="home-card-top">' + '<div class="card-icon-shell">' + '<img aria-hidden="true" role="presentation" class="card-icon" src="' + escapeHtml(card.icon) + '" alt="' + escapeHtml(card.displayTitle || card.title) + '">' + "</div>" + '<div class="card-count-badge">' + escapeHtml(contentCountLabel(card.id)) + "</div></div>" + '<div class="home-card-body">' + '<p class="card-title card-title-main">' + escapeHtml(card.displayTitle || card.title) + "</p>" + '<p class="card-copy">' + escapeHtml(card.teaser || card.subtitle) + "</p>" + "</div></div>";
    }).join("");
    dom.homeCardNodes = Array.from(dom.homeCards.querySelectorAll(".home-card"));
    dom.homeActions.innerHTML = HOME_ACTIONS.map(function (action) {
      return '<div class="action-card ' + escapeHtml(action.id) + '">' + '<p class="action-title">' + escapeHtml(action.title) + "</p></div>";
    }).join("");
    dom.homeActionNodes = Array.from(dom.homeActions.querySelectorAll(".action-card"));
    syncHomeFocus();
  }
  function renderSettingsScreen() {
    dom.settingsSummary.innerHTML = [metaCard("Servidor conectado", state.selectedServer ? state.selectedServer.name : "Nao definido"), metaCard("Codigo", state.profile && state.profile.userNumber ? state.profile.userNumber : "Sem codigo"), cartaoDoVencimento()].join("");
    renderSuporte();
    atualizarDadosDoPlano();
    carregarSuporte();
    dom.settingsList.innerHTML = SETTINGS_ACTIONS.map(function (action) {
      return '<div class="settings-card ' + escapeHtml(action.id) + '">' + '<div class="settings-badge">' + escapeHtml(action.badge) + "</div>" + '<div class="settings-body">' + '<p class="action-title">' + escapeHtml(action.title) + "</p>" + '<p class="action-copy">' + escapeHtml(action.subtitle) + "</p></div></div>";
    }).join("");
    dom.settingsNodes = Array.from(dom.settingsList.querySelectorAll(".settings-card"));
    syncSettingsFocus();
  }
  function renderCatalogScreen() {
    if (state.screen !== "catalog") {
      stopCatalogPreview();
      return;
    }
    var posterLayout = isPosterCatalogType(state.catalog.type);
    var categories = currentCategories();
    state.catalog.categoryIndex = clampIndex(state.catalog.categoryIndex, categories.length);
    state.catalog.selectedCategoryIndex = clampIndex(state.catalog.selectedCategoryIndex, categories.length);
    state.catalog.selectedItemCategoryIndex = clampIndex(state.catalog.selectedItemCategoryIndex, categories.length);
    var activeCategory = currentCatalogCategory();
    var items = currentItems();
    if (dom.catalogEyebrow) {
      dom.catalogEyebrow.textContent = posterLayout ? catalogLabelForType(state.catalog.type) : "";
    }
    if (dom.catalogTitle) {
      dom.catalogTitle.textContent = posterLayout ? "Categorias" : "";
    }
    if (dom.catalogHint) {
      dom.catalogHint.textContent = posterLayout ? catalogSidebarHint(categories.length) : "";
    }
    if (dom.catalogLupa) {
      var lupaAtiva = lupaDoCatalogoAtiva();
      dom.catalogLupa.classList.toggle("hidden", !lupaAtiva);
      if (!lupaAtiva) {
        state.catalog.lupaFocada = false;
      }
      if (dom.catalogLupaTitulo) {
        dom.catalogLupaTitulo.textContent = state.catalog.type === "series" ? "Pesquisar series" : "Pesquisar filmes";
      }
    }
    if (dom.itemList) {
      dom.itemList.setAttribute("data-heading", posterLayout ? catalogPanelHeading(activeCategory) : "");
    }
    dom.catalogDetailActionNodes = [];
    if (!categories.length) {
      dom.categoryList.innerHTML = '<div class="empty-state">' + escapeHtml(emptyCategoryMessageForCatalog()) + "</div>";
      dom.itemList.innerHTML = "";
      dom.itemNodes = [];
      dom.categoryNodes = [];
      dom.searchNativeInput = null;
      dom.seriesSeasonNodes = [];
      dom.seriesEpisodeNodes = [];
      state.catalog.itemWindowStartIndex = 0;
      state.catalog.detailKey = "";
      stopCatalogPreview();
      dom.detailCard.innerHTML = '<div class="empty-state">' + escapeHtml(emptyDetailMessageForCatalog()) + "</div>";
      return;
    }
    dom.categoryList.innerHTML = categories.map(function (category, index) {
      var copy = catalogCategoryCopy(category, index);
      return '<div class="category-chip">' + '<p class="category-name">' + escapeHtml(category.category_name || "Sem nome") + "</p>" + '<p class="category-copy">' + escapeHtml(copy) + "</p></div>";
    }).join("");
    dom.categoryNodes = Array.from(dom.categoryList.querySelectorAll(".category-chip"));
    syncCatalogCategorySelectedState();
    if (!items.length) {
      dom.itemList.innerHTML = '<div class="empty-state">' + escapeHtml(emptyItemMessageForCatalog()) + "</div>";
      dom.itemNodes = [];
      dom.catalogDetailActionNodes = [];
      dom.searchNativeInput = null;
      dom.seriesSeasonNodes = [];
      dom.seriesEpisodeNodes = [];
      state.catalog.itemWindowStartIndex = 0;
      if (catalogUsesSelectionModel() && currentSelectedItem()) {
        renderCatalogDetail(true);
        return;
      }
      state.catalog.detailKey = "";
      stopCatalogPreview();
      dom.detailCard.innerHTML = '<div class="empty-state">Foco pronto para o controle remoto. Essa base ja separa categorias e lista de conteudo sem depender do Flutter.</div>';
      return;
    }
    state.catalog.itemIndex = clampIndex(state.catalog.itemIndex, items.length);
    if (catalogUsesSelectionModel()) {
      var selectedItems = itemsForCategoryIndex(state.catalog.selectedItemCategoryIndex);
      state.catalog.selectedItemIndex = clampIndex(state.catalog.selectedItemIndex, selectedItems.length);
    }
    var visibleItemsState = visibleCatalogItems(items, activeCategory);
    state.catalog.itemWindowStartIndex = visibleItemsState.startIndex;
    if (posterLayout) {
      guardarCapasDaAbertura(visibleItemsState.items);
    }
    dom.itemList.innerHTML = visibleItemsState.items.map(function (item, visibleIndex) {
      var index = visibleItemsState.startIndex + visibleIndex;
      var image = item.stream_icon || item.cover || iconForType(state.catalog.type);
      var title = item.name || item.title || "Sem titulo";
      var copy = catalogItemCopy(item);
      var coverClass = posterLayout ? " cover poster-grid-thumb" : state.catalog.type === "series" ? " cover" : "";
      var selectedClass = catalogUsesSelectionModel() && state.catalog.selectedItemCategoryIndex === catalogDisplayCategoryIndex() && state.catalog.selectedItemIndex === index ? " is-selected" : "";
      var favoriteMarkup = isItemFavorited(item) && !mostraCoracao() ? favoriteMarkerMarkup() : "";
      if (posterLayout) {
        if (isCatalogSearchAction(item)) {
          return '<div class="media-card poster-card search-card' + selectedClass + '">' + '<div class="media-copy-shell">' + searchIconMarkup() + '<p class="media-title">' + escapeHtml(title) + "</p>" + '<p class="media-copy">' + escapeHtml(copy) + "</p>" + '<p class="search-card-query">' + escapeHtml(item.queryLabel || "Sem filtro ativo") + "</p></div></div>";
        }
        return '<div class="media-card poster-card' + selectedClass + '">' + '<img aria-hidden="true" role="presentation" class="media-thumb' + coverClass + '" src="' + escapeHtml(image) + '" alt="' + escapeHtml(title) + '" loading="lazy" decoding="async">' + '<div class="media-copy-shell">' + '<p class="media-title">' + escapeHtml(title) + "</p>" + '<p class="media-copy">' + escapeHtml(trimText(copy, 84)) + "</p></div></div>";
      }
      return '<div class="media-card' + selectedClass + '">' + '<img aria-hidden="true" role="presentation" class="media-thumb' + coverClass + '" src="' + escapeHtml(image) + '" alt="' + escapeHtml(title) + '" loading="lazy" decoding="async">' + '<div class="media-copy-shell">' + '<div class="media-head">' + '<p class="media-title">' + escapeHtml(title) + "</p>" + favoriteMarkup + "</div>" + '<p class="media-copy">' + escapeHtml(trimText(copy, 170)) + "</p></div>" + (mostraCoracao() && !isCatalogSearchAction(item) ? coracaoMarkup(isItemFavorited(item)) : "") + "</div>";
    }).join("");
    dom.itemNodes = Array.from(dom.itemList.querySelectorAll(".media-card"));
    if (posterLayout && state.catalog.view !== "detail") {
      state.catalog.detailKey = "";
      dom.searchNativeInput = null;
      dom.seriesSeasonNodes = [];
      dom.seriesEpisodeNodes = [];
      dom.detailCard.innerHTML = "";
    }
    syncCatalogSelectedState();
    syncCatalogFocus();
  }
  function renderCatalogDetail(force) {
    if (state.screen !== "catalog") {
      return;
    }
    if (isPosterCatalogType(state.catalog.type) && state.catalog.view !== "detail") {
      return;
    }
    var item = currentSelectedItem();
    var nextKey = detailKeyFor(item);
    if (!force && state.catalog.detailKey === nextKey) {
      return;
    }
    state.catalog.detailKey = nextKey;
    stopCatalogPreview();
    if (state.catalog.type === "series" && isPosterCatalogDetailView() && item && !isCatalogSearchAction(item)) {
      syncSeriesDetailSelection(item);
    }
    guardarRolagemDasSeries();
    dom.detailCard.innerHTML = renderDetail(item);
    restaurarRolagemDasSeries();
    dom.catalogDetailActionNodes = Array.from(dom.detailCard.querySelectorAll(".catalog-action"));
    dom.searchKeyNodes = Array.from(dom.detailCard.querySelectorAll(".search-key"));
    dom.searchNativeInput = dom.detailCard.querySelector("#movieSearchNativeInput");
    dom.seriesSeasonNodes = Array.from(dom.detailCard.querySelectorAll(".series-season-chip"));
    dom.seriesEpisodeNodes = Array.from(dom.detailCard.querySelectorAll(".series-episode-card"));
    state.catalog.detailActionIndex = clampIndex(state.catalog.detailActionIndex, dom.catalogDetailActionNodes.length);
    state.searchPrompt.keyIndex = clampIndex(state.searchPrompt.keyIndex, dom.searchKeyNodes.length);
    state.catalog.seriesDetailSeasonIndex = clampIndex(state.catalog.seriesDetailSeasonIndex, dom.seriesSeasonNodes.length);
    state.catalog.seriesDetailEpisodeIndex = clampIndex(state.catalog.seriesDetailEpisodeIndex, dom.seriesEpisodeNodes.length);
    if (dom.searchNativeInput) {
      syncNativeSearchInput();
    }
    if (isPosterCatalogType(state.catalog.type) && item && !isCatalogSearchAction(item)) {
      if (state.catalog.type !== "series" || isPosterCatalogDetailView()) {
        ensureCatalogItemDetail(item);
      }
    }
    if (catalogContentType(item, state.catalog.type) === "live" && item) {
      agendarProgramacao(item);
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(function () {
          attachCatalogPreview(item);
        });
      } else {
        attachCatalogPreview(item);
      }
    }
  }
  function renderDetail(item) {
    if (!item) {
      return '<div class="empty-state">Selecione um item para ver detalhes.</div>';
    }
    if (isCatalogSearchAction(item)) {
      return renderMovieSearchDetail();
    }
    var title = item.name || item.title || "Sem titulo";
    var image = catalogDetailImage(item);
    var plot = isPosterCatalogType(state.catalog.type) ? catalogDetailPlot(item) : item.plot || item.blurb || "Detalhes prontos para crescer daqui: sinopse, episodios, favoritos e recomendacoes.";
    if (isPosterCatalogType(state.catalog.type)) {
      if (state.catalog.type === "series" && isPosterCatalogDetailView()) {
        return renderSeriesPosterDetail(item, title, image, plot);
      }
      var _tags = [];
      var activeCategory = currentCatalogCategory();
      var playbackEntry = state.catalog.type === "movies" ? playbackEntryForItem(item) : null;
      var seriesEntry = state.catalog.type === "series" ? seriesResumeEntryForSeries(item) : null;
      if (activeCategory && activeCategory.category_name) _tags.push(activeCategory.category_name);
      if (catalogDetailRating(item)) _tags.push("Nota " + catalogDetailRating(item));
      if (state.catalog.type === "movies" && playbackResumeAllowed(playbackEntry)) {
        _tags.push("Retomar em " + formatPlaybackTime(playbackEntryPosition(playbackEntry)));
      } else if (state.catalog.type === "movies" && item.playback_completed) {
        _tags.push("Assistido recentemente");
      }
      if (state.catalog.type === "series" && playbackResumeAllowed(seriesEntry)) {
        var resumeLabel = formatEpisodeLabelFromEntry(seriesEntry);
        _tags.push("Retomar " + (resumeLabel ? resumeLabel + " " : "") + (seriesEntry && seriesEntry.episodeTitle ? "em " + seriesEntry.episodeTitle : "na serie"));
      }
      if (state.catalog.type === "series" && isItemFavorited(item)) {
        _tags.push("Favorita");
      }
      _tags.push(state.catalog.type === "movies" ? "Catalogo de filmes" : "Catalogo de series");
      var actions = posterCatalogDetailActions();
      return '<div class="poster-detail-shell">' + '<div class="poster-detail-art">' + '<img aria-hidden="true" role="presentation" class="detail-poster poster-detail-poster" src="' + escapeHtml(image) + '" alt="' + escapeHtml(title) + '">' + "</div>" + '<div class="poster-detail-copy">' + '<p class="poster-detail-eyebrow">' + escapeHtml(catalogLabelForType(state.catalog.type)) + "</p>" + '<p class="card-title poster-detail-title">' + escapeHtml(title) + "</p>" + '<div class="poster-detail-summary-shell">' + '<p class="detail-copy poster-detail-summary">' + escapeHtml(plot) + "</p></div>" + '<div class="detail-tags">' + _tags.map(function (tag) {
        return '<span class="tag">' + escapeHtml(tag) + "</span>";
      }).join("") + "</div>" + '<div class="poster-detail-actions">' + actions.map(function (action) {
        return '<button aria-hidden="true" role="presentation" tabindex="-1" class="catalog-action' + (action.kind ? " " + escapeHtml(action.kind) : "") + '" type="button">' + '<span class="catalog-action-title">' + escapeHtml(action.title) + "</span>" + '<span class="catalog-action-copy">' + escapeHtml(action.subtitle) + "</span></button>";
      }).join("") + "</div></div></div>";
    }
    var tags = [];
    var contentType = catalogContentType(item, state.catalog.type);
    if (item.category_id) tags.push(item.category_id);
    if (item.rating) tags.push("Nota " + item.rating);
    if (item.container_extension) tags.push(item.container_extension.toUpperCase());
    if (contentType === "series") tags.push("Estrutura de episodios");
    if (contentType === "live") tags.push("Ao vivo");
    if (contentType === "movies") tags.push("VOD");
    if (isItemFavorited(item)) tags.push("Favorito");
    var previewMarkup = contentType === "live" ? '<div class="detail-preview-shell">' + '<img aria-hidden="true" role="presentation" class="detail-preview-fallback" src="' + escapeHtml(image) + '" alt="' + escapeHtml(title) + '">' + '<video class="detail-preview-video" autoplay playsinline preload="metadata"></video>' + '<div class="detail-preview-shade"><span class="detail-preview-badge">Preview ao vivo</span></div>' + "</div>" : '<img aria-hidden="true" role="presentation" class="detail-poster" src="' + escapeHtml(image) + '" alt="' + escapeHtml(title) + '">';
    var corpo = contentType === "live" && !item.plot && !item.blurb ? '<div class="detail-epg" data-epg-key="' + escapeHtml(chaveDaProgramacao(item)) + '">' + htmlDaProgramacao(programacaoEmCache(item)) + "</div>" : '<p class="detail-copy">' + escapeHtml(plot) + "</p>";
    return previewMarkup + '<p class="card-title">' + escapeHtml(title) + "</p>" + corpo + '<div class="detail-tags">' + tags.map(function (tag) {
      return '<span class="tag">' + escapeHtml(tag) + "</span>";
    }).join("") + "</div>";
  }
  var ESPERA_DA_PROGRAMACAO_MS = 350;
  var VALIDADE_DA_PROGRAMACAO_MS = 5 * 60 * 1000;
  var programacoes = {};
  var relogioDaProgramacao = null;
  function chaveDaProgramacao(item) {
    var servidor = state.selectedServer || {};
    return String(servidor.baseUrl || "") + "|" + String(servidor.username || "") + "|" + String(item && item.stream_id || "");
  }
  function programacaoEmCache(item) {
    var guardada = programacoes[chaveDaProgramacao(item)];
    if (!guardada || Date.now() - guardada.em > VALIDADE_DA_PROGRAMACAO_MS) {
      return null;
    }
    return guardada.lista;
  }
  function textoDoEpg(valor) {
    var bruto = String(valor || "");
    if (!bruto) {
      return "";
    }
    try {
      var binario = atob(bruto);
      if (window.TextDecoder) {
        var bytes = new Uint8Array(binario.length);
        for (var i = 0; i < binario.length; i += 1) {
          bytes[i] = binario.charCodeAt(i);
        }
        return new TextDecoder("utf-8").decode(bytes).trim();
      }
      return decodeURIComponent(escape(binario)).trim();
    } catch (error) {
      return bruto.trim();
    }
  }
  function horaDoEpg(registro, campoTimestamp, campoTexto) {
    var segundos = Number(registro[campoTimestamp]);
    if (segundos > 0) {
      return segundos * 1000;
    }
    var texto = String(registro[campoTexto] || "").replace(" ", "T");
    var ms = Date.parse(texto);
    return Number.isNaN(ms) ? 0 : ms;
  }
  function buscarProgramacao(_x15) {
    return _buscarProgramacao.apply(this, arguments);
  }
  function _buscarProgramacao() {
    _buscarProgramacao = _asyncToGenerator(_regenerator().m(function _callee24(item) {
      var servidor, url, resposta, registros, agora;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.n) {
          case 0:
            servidor = state.selectedServer;
            if (!(!servidor || servidor.isDemo || !item || !item.stream_id)) {
              _context24.n = 1;
              break;
            }
            return _context24.a(2, []);
          case 1:
            url = servidor.baseUrl + "/player_api.php?username=" + encodeURIComponent(servidor.username) + "&password=" + encodeURIComponent(servidor.password) + "&action=get_short_epg&limit=4&stream_id=" + encodeURIComponent(item.stream_id);
            _context24.n = 2;
            return fetchJson(url);
          case 2:
            resposta = _context24.v;
            registros = resposta && Array.isArray(resposta.epg_listings) ? resposta.epg_listings : [];
            agora = Date.now();
            return _context24.a(2, registros.map(function (registro) {
              return {
                titulo: textoDoEpg(registro.title),
                descricao: textoDoEpg(registro.description),
                inicio: horaDoEpg(registro, "start_timestamp", "start"),
                fim: horaDoEpg(registro, "stop_timestamp", "end")
              };
            }).filter(function (programa) {
              return programa.titulo && programa.fim > agora;
            }).sort(function (a, b) {
              return a.inicio - b.inicio;
            }));
        }
      }, _callee24);
    }));
    return _buscarProgramacao.apply(this, arguments);
  }
  function horaCurta(ms) {
    var data = new Date(ms);
    return String(data.getHours()).padStart(2, "0") + ":" + String(data.getMinutes()).padStart(2, "0");
  }
  function htmlDaProgramacao(lista, nomeDoCanal) {
    var cabeca = nomeDoCanal ? '<p class="detail-epg-canal">' + escapeHtml(nomeDoCanal) + "</p>" : "";
    if (lista === null) {
      return cabeca + '<p class="detail-copy detail-epg-vazio">Carregando a programacao...</p>';
    }
    if (!lista.length) {
      return cabeca + '<p class="detail-copy detail-epg-vazio">Programacao nao informada para este canal.</p>';
    }
    var agora = Date.now();
    var atual = lista[0];
    var andamento = atual.inicio && atual.fim > atual.inicio ? Math.max(0, Math.min(100, (agora - atual.inicio) / (atual.fim - atual.inicio) * 100)) : 0;
    var proximos = lista.slice(1, 3);
    return cabeca + '<div class="detail-epg-agora">' + '<span class="detail-epg-rotulo">Agora</span>' + '<span class="detail-epg-hora">' + escapeHtml(horaCurta(atual.inicio) + " - " + horaCurta(atual.fim)) + "</span>" + '<p class="detail-epg-titulo">' + escapeHtml(atual.titulo) + "</p>" + '<div class="detail-epg-barra"><span style="width:' + andamento.toFixed(1) + '%"></span></div>' + (atual.descricao ? '<p class="detail-epg-descricao">' + escapeHtml(atual.descricao) + "</p>" : "") + "</div>" + proximos.map(function (programa) {
      return '<div class="detail-epg-seguinte">' + '<span class="detail-epg-hora">' + escapeHtml(horaCurta(programa.inicio)) + "</span>" + '<span class="detail-epg-titulo-seguinte">' + escapeHtml(programa.titulo) + "</span></div>";
    }).join("");
  }
  function agendarProgramacao(item) {
    if (relogioDaProgramacao) {
      clearTimeout(relogioDaProgramacao);
      relogioDaProgramacao = null;
    }
    if (programacaoEmCache(item) !== null) {
      return;
    }
    var chave = chaveDaProgramacao(item);
    relogioDaProgramacao = setTimeout(_asyncToGenerator(_regenerator().m(function _callee() {
      var lista, alvo, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            relogioDaProgramacao = null;
            lista = [];
            _context.p = 1;
            _context.n = 2;
            return buscarProgramacao(item);
          case 2:
            lista = _context.v;
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.log("Programacao indisponivel:", _t);
          case 4:
            programacoes[chave] = {
              em: Date.now(),
              lista: lista
            };
            alvo = dom.detailCard && dom.detailCard.querySelector(".detail-epg");
            if (alvo && alvo.getAttribute("data-epg-key") === chave) {
              alvo.innerHTML = htmlDaProgramacao(lista, alvo.getAttribute("data-epg-nome"));
            }
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    })), ESPERA_DA_PROGRAMACAO_MS);
  }
  function renderSeriesPosterDetail(item, title, image, plot) {
    if (isSeriesSeasonBrowserPage() || isSeriesEpisodeBrowserPage()) {
      return renderSeriesBrowserPage(item, title, image);
    }
    var detailState = catalogItemDetailState(item);
    var activeCategory = currentCatalogCategory();
    var resumeEntry = seriesResumeEntryForSeries(item);
    var resumeLabel = formatEpisodeLabelFromEntry(resumeEntry);
    var seasons = seriesSeasonEntries(item);
    var totalEpisodes = seasons.reduce(function (count, season) {
      return count + seriesEpisodesForSeason(item, season.season_number).length;
    }, 0);
    var tags = [];
    var actions = posterCatalogDetailActions();
    if (activeCategory && activeCategory.category_name) tags.push(activeCategory.category_name);
    if (catalogDetailRating(item)) tags.push("Nota " + catalogDetailRating(item));
    if (seasons.length) tags.push(seasons.length + (seasons.length === 1 ? " temporada" : " temporadas"));
    if (totalEpisodes) tags.push(totalEpisodes + (totalEpisodes === 1 ? " episodio" : " episodios"));
    if (playbackResumeAllowed(resumeEntry)) {
      tags.push("Retomar " + (resumeLabel ? resumeLabel + " " : "") + (resumeEntry && resumeEntry.episodeTitle ? "em " + resumeEntry.episodeTitle : "na serie"));
    }
    if (isItemFavorited(item)) tags.push("Favorita");
    tags.push("Catalogo de series");
    return '<div class="poster-detail-shell series-detail-shell">' + '<div class="poster-detail-art">' + '<img aria-hidden="true" role="presentation" class="detail-poster poster-detail-poster" src="' + escapeHtml(image) + '" alt="' + escapeHtml(title) + '">' + "</div>" + '<div class="poster-detail-copy series-detail-copy">' + '<p class="poster-detail-eyebrow">' + escapeHtml(catalogLabelForType(state.catalog.type)) + "</p>" + '<p class="card-title poster-detail-title">' + escapeHtml(title) + "</p>" + '<div class="poster-detail-summary-shell">' + '<p class="detail-copy poster-detail-summary">' + escapeHtml(plot) + "</p></div>" + '<div class="detail-tags">' + tags.map(function (tag) {
      return '<span class="tag">' + escapeHtml(tag) + "</span>";
    }).join("") + "</div>" + '<div class="poster-detail-actions">' + actions.map(function (action) {
      return '<button aria-hidden="true" role="presentation" tabindex="-1" class="catalog-action' + (action.kind ? " " + escapeHtml(action.kind) : "") + '" type="button">' + '<span class="catalog-action-title">' + escapeHtml(action.title) + "</span>" + '<span class="catalog-action-copy">' + escapeHtml(action.subtitle) + "</span></button>";
    }).join("") + "</div>" + "</div></div>";
  }
  function renderSeriesBrowserPage(item, title, image) {
    var detailState = catalogItemDetailState(item);
    var detail = catalogDetailData(item);
    var loading = Boolean(detailState && detailState.loading && !detail);
    var seasons = seriesSeasonEntries(item);
    var selectedSeason = currentSeriesSeason(item);
    var selectedSeasonNumber = selectedSeason ? normalizeSeriesNumber(selectedSeason.season_number) : 0;
    var episodes = currentSeriesSeasonEpisodes(item);
    var naListaDeEpisodios = state.catalog.seriesDetailFocusZone === "episodes";
    var totalEpisodes = seasons.reduce(function (count, season) {
      return count + seriesEpisodesForSeason(item, season.season_number).length;
    }, 0);
    var tags = [];
    if (catalogDetailRating(item)) tags.push("Nota " + catalogDetailRating(item));
    if (seasons.length) tags.push(seasons.length + (seasons.length === 1 ? " temporada" : " temporadas"));
    if (totalEpisodes) tags.push(totalEpisodes + (totalEpisodes === 1 ? " episodio" : " episodios"));
    if (isItemFavorited(item)) tags.push("Favorita");
    var nomeDaTemporada = function nomeDaTemporada(season) {
      var numero = normalizeSeriesNumber(season && season.season_number);
      return firstNonEmpty(season && season.name, numero ? "Temporada " + numero : "Temporada");
    };
    var colunaTemporadas;
    if (loading) {
      colunaTemporadas = '<div class="series-browser-empty">Carregando temporadas...</div>';
    } else if (!seasons.length) {
      colunaTemporadas = '<div class="series-browser-empty">Ainda nao encontramos temporadas para esta serie.</div>';
    } else {
      colunaTemporadas = '<div class="series-season-list">' + seasons.map(function (season, index) {
        var quantos = seriesEpisodesForSeason(item, normalizeSeriesNumber(season.season_number)).length;
        return '<div class="series-season-chip' + (index === state.catalog.seriesDetailSeasonIndex ? " is-selected" : "") + '">' + '<span class="series-season-title">' + escapeHtml(nomeDaTemporada(season)) + "</span>" + '<span class="series-season-copy">' + escapeHtml(quantos ? quantos + (quantos === 1 ? " episodio" : " episodios") : "Sem episodios") + "</span></div>";
      }).join("") + "</div>";
    }
    var listaEpisodios;
    if (loading) {
      listaEpisodios = '<div class="series-browser-empty">Carregando episodios...</div>';
    } else if (!episodes.length) {
      listaEpisodios = '<div class="series-browser-empty">Nenhum episodio disponivel nesta temporada.</div>';
    } else {
      listaEpisodios = '<div class="series-episode-list">' + episodes.map(function (episode, index) {
        var episodeLabel = formatEpisodeLabel(episode.season_number || episode.season, episode.episode_number || episode.episode_num);
        var playbackEntry = playbackEntryForItem(episode, "series");
        var canResume = playbackResumeAllowed(playbackEntry);
        var releaseLabel = formatDate(episode.releaseDate);
        var metaParts = [];
        if (releaseLabel !== "Sem data") metaParts.push(releaseLabel);
        if (canResume) metaParts.push("Retomar em " + formatPlaybackTime(playbackEntryPosition(playbackEntry)));
        return '<div class="series-episode-card' + (index === state.catalog.seriesDetailEpisodeIndex ? " is-selected" : "") + '">' + '<img aria-hidden="true" role="presentation" class="series-episode-thumb" src="' + escapeHtml(firstNonEmpty(episode.stream_icon, episode.cover, catalogDetailImage(item))) + '" alt="">' + '<div class="series-episode-copy">' + '<div class="series-episode-kicker">' + (episodeLabel ? '<span class="series-episode-chip">' + escapeHtml(episodeLabel) + "</span>" : "") + (canResume ? '<span class="series-episode-chip resume">Retomar</span>' : "") + "</div>" + '<p class="series-episode-title">' + escapeHtml(firstNonEmpty(episode.title, episode.name, episodeLabel ? "Episodio " + episodeLabel : "Episodio")) + "</p>" + (metaParts.length ? '<p class="series-episode-meta">' + escapeHtml(metaParts.join(" | ")) + "</p>" : "") + '<p class="series-episode-description">' + escapeHtml(trimText(firstNonEmpty(episode.plot, episode.description, "Sem sinopse para este episodio."), 220)) + "</p></div></div>";
      }).join("") + "</div>";
    }
    return '<div class="series-page">' + '<div class="series-page-head">' + '<img aria-hidden="true" role="presentation" class="series-page-poster" src="' + escapeHtml(image) + '" alt="">' + '<div class="series-page-info">' + '<p class="series-page-eyebrow">Temporadas e episodios</p>' + '<p class="series-page-title">' + escapeHtml(title) + "</p>" + (tags.length ? '<div class="series-page-tags">' + tags.map(function (tag) {
      return '<span class="tag">' + escapeHtml(tag) + "</span>";
    }).join("") + "</div>" : "") + "</div></div>" + '<div class="series-page-body">' + '<div class="series-page-seasons' + (naListaDeEpisodios ? "" : " is-active") + '">' + '<div class="series-page-col-head"><p class="series-page-col-title">Temporadas</p></div>' + colunaTemporadas + "</div>" + '<div class="series-page-episodes' + (naListaDeEpisodios ? " is-active" : "") + '">' + '<div class="series-page-col-head">' + '<p class="series-page-col-title">' + escapeHtml(selectedSeason ? nomeDaTemporada(selectedSeason) : "Episodios") + (episodes.length ? '<span class="series-page-col-count">' + episodes.length + (episodes.length === 1 ? " episodio" : " episodios") + "</span>" : "") + "</p>" + '<p class="series-page-col-hint">' + escapeHtml(naListaDeEpisodios ? "OK para assistir  |  Esquerda volta para as temporadas" : selectedSeasonNumber || seasons.length ? "Direita ou OK para escolher o episodio" : "") + "</p></div>" + listaEpisodios + "</div></div></div>";
  }
  var rolagemDasSeries = null;
  function guardarRolagemDasSeries() {
    if (!dom.detailCard) return;
    var temporadas = dom.detailCard.querySelector(".series-page .series-season-list");
    var episodios = dom.detailCard.querySelector(".series-page .series-episode-list");
    if (!temporadas && !episodios) {
      rolagemDasSeries = null;
      return;
    }
    rolagemDasSeries = {
      serie: state.catalog.seriesDetailSeriesId,
      temporada: rolagemDasSeries && rolagemDasSeries.temporadaAtual,
      temporadas: temporadas ? temporadas.scrollTop : 0,
      episodios: episodios ? episodios.scrollTop : 0
    };
  }
  function restaurarRolagemDasSeries() {
    if (!dom.detailCard) return;
    var temporadas = dom.detailCard.querySelector(".series-page .series-season-list");
    var episodios = dom.detailCard.querySelector(".series-page .series-episode-list");
    var antes = rolagemDasSeries;
    var temporadaAtual = state.catalog.seriesDetailSeasonIndex;
    if (antes && antes.serie === state.catalog.seriesDetailSeriesId) {
      if (temporadas) temporadas.scrollTop = antes.temporadas;
      if (episodios && antes.temporada === temporadaAtual) episodios.scrollTop = antes.episodios;
    }
    rolagemDasSeries = temporadas || episodios ? {
      serie: state.catalog.seriesDetailSeriesId,
      temporadaAtual: temporadaAtual
    } : null;
  }
  function detailKeyFor(item) {
    if (!item) {
      return "empty";
    }
    if (isCatalogSearchAction(item)) {
      return [state.catalog.type, item.stream_id || item.name || "search", catalogDetailCategoryIndex(), catalogDetailItemIndex(), movieSearchQueryValue()].join(":");
    }
    var parts = [state.catalog.type, item.stream_id || item.series_id || item.category_id || item.name || "item", catalogDetailCategoryIndex(), catalogDetailItemIndex()];
    if (state.catalog.type === "series" && isPosterCatalogDetailView()) {
      parts.push(state.catalog.seriesDetailPage, state.catalog.seriesDetailSeasonIndex, state.catalog.seriesDetailEpisodeIndex, state.catalog.seriesDetailFocusZone);
    }
    return parts.join(":");
  }
  function renderPlayer() {
    syncScreenSaverState();
    var hudVisible = Boolean(state.player.controlsVisible || state.player.paused) && !contagemDoProximo;
    var progressFocused = Boolean(hudVisible && state.player.canSeek && isPlayerProgressFocused());
    var playerEngine = state.player.open ? state.player.engine || "html5" : state.nativePreview.active || state.nativePreview.preparing ? "avplay" : "none";
    var isImagePlayer = state.player.mediaKind === "image";
    if (dom.appShell) {
      dom.appShell.setAttribute("data-player-open", state.player.open ? "true" : "false");
      dom.appShell.setAttribute("data-player-engine", playerEngine);
      dom.appShell.setAttribute("data-native-preview", state.nativePreview.active || state.nativePreview.preparing ? "true" : "false");
    }
    if (document.documentElement) {
      document.documentElement.setAttribute("data-player-engine", playerEngine);
    }
    if (document.body) {
      document.body.setAttribute("data-player-engine", playerEngine);
    }
    dom.playerOverlay.classList.toggle("hidden", !state.player.open);
    dom.playerOverlay.setAttribute("data-can-seek", state.player.canSeek ? "true" : "false");
    dom.playerOverlay.setAttribute("data-hud-visible", state.player.open && hudVisible ? "true" : "false");
    dom.playerOverlay.setAttribute("data-player-engine", state.player.engine || "html5");
    dom.playerOverlay.setAttribute("data-media-kind", isImagePlayer ? "image" : "video");
    dom.playerOverlay.setAttribute("data-player-focus-zone", progressFocused ? "progress" : "controls");
    dom.playerEyebrow.textContent = state.player.eyebrow || (isImagePlayer ? "Foto" : "Reproducao");
    dom.playerTitle.textContent = state.player.title || (isImagePlayer ? "Abrindo foto" : "Abrindo video");
    dom.playerStatus.textContent = isImagePlayer ? "Visualizando foto" : progressFocused ? "Linha do tempo" : state.player.canSeek ? state.player.paused ? "Pausado" : "Reproduzindo" : state.player.paused ? "Ao vivo pausado" : "Ao vivo";
    dom.playerCurrentTime.textContent = isImagePlayer ? "--:--" : formatPlaybackTime(state.player.currentTime);
    dom.playerDuration.textContent = isImagePlayer ? "FOTO" : state.player.canSeek && state.player.duration > 0 ? formatPlaybackTime(state.player.duration) : state.player.canSeek ? "--:--" : "AO VIVO";
    dom.playerProgressFill.style.width = state.player.canSeek && state.player.duration > 0 ? Math.max(0, Math.min(state.player.currentTime / state.player.duration * 100, 100)) + "%" : "0%";
    dom.playerProgressRow.hidden = !state.player.canSeek;
    dom.playerProgressRow.classList.toggle("is-focused", progressFocused);
    dom.playerToggleLabel.textContent = isImagePlayer ? "Fechar" : state.player.paused ? "Continuar" : "Pausar";
    dom.playerHud.classList.toggle("is-visible", hudVisible);
    atualizarBarraDoPlayer();
    setFocusedState(dom.playerControlNodes, state.player.controlIndex, hudVisible && !progressFocused, "playerControls");
    renderPlayerRecovery();
    scheduleNativePlayerLayoutSync();
  }
  function renderPlayerRecovery() {
    if (!dom.playerRecovery) {
      return;
    }
    var isOpen = Boolean(state.player.open && state.player.recoveryOpen);
    dom.playerRecovery.classList.toggle("hidden", !isOpen);
    if (!isOpen) {
      if (dom.playerRecoveryActions) {
        dom.playerRecoveryActions.innerHTML = "";
      }
      dom.playerRecoveryActionNodes = [];
      return;
    }
    if (dom.playerRecoveryMessage) {
      dom.playerRecoveryMessage.textContent = "Tentamos reconectar automaticamente, mas o canal continuou travando. Voce pode tentar novamente, escolher outro canal ou trocar de servidor.";
    }
    dom.playerRecoveryActions.innerHTML = LIVE_RECOVERY_ACTIONS.map(function (action, index) {
      return '<button aria-hidden="true" role="presentation" tabindex="-1" class="player-recovery-action' + (index === state.player.recoveryActionIndex ? " is-focused" : "") + '" type="button">' + escapeHtml(action.title) + "</button>";
    }).join("");
    dom.playerRecoveryActionNodes = Array.from(dom.playerRecoveryActions.querySelectorAll(".player-recovery-action"));
  }
  function renderLoading() {
    dom.loadingOverlay.classList.toggle("hidden", !state.loading);
    dom.loadingText.textContent = state.loading ? currentLoadingText() : "Carregando...";
  }
  function renderNetworkOverlay() {
    if (!dom.networkOverlay) {
      return;
    }
    dom.networkOverlay.classList.toggle("hidden", !state.network.offline);
    if (dom.networkTitle) {
      dom.networkTitle.textContent = "Verifique sua internet";
    }
    if (dom.networkMessage) {
      dom.networkMessage.textContent = state.network.message || "Nao foi possivel conectar. Verifique a rede da TV e tente novamente.";
    }
  }
  function renderSessionConflictOverlay() {
    if (!dom.sessionOverlay) {
      return;
    }
    var isOpen = Boolean(state.sessionConflict.open);
    dom.sessionOverlay.classList.toggle("hidden", !isOpen);
    if (!isOpen) {
      if (dom.sessionActions) {
        dom.sessionActions.innerHTML = "";
      }
      dom.sessionActionNodes = [];
      return;
    }
    var isTransferred = state.sessionConflict.mode === "transferred";
    var isLoginConflict = state.sessionConflict.mode === "login";
    dom.sessionEyebrow.textContent = isTransferred ? "Sessao transferida" : "Acesso em uso";
    dom.sessionTitle.textContent = isTransferred ? "Usar este ponto aqui?" : "Este codigo esta em outro dispositivo";
    dom.sessionMessage.textContent = state.sessionConflict.message || "Este ponto ja esta sendo usado em outro dispositivo.\n\nUm ponto pode ser usado em varios aparelhos, mas nao em dois ao mesmo tempo.";
    dom.sessionCountdown.textContent = !isLoginConflict && state.sessionConflict.secondsLeft > 0 ? "Tempo para decidir: " + state.sessionConflict.secondsLeft + "s" : "";
    var actions = isTransferred ? [{
      id: "useHere",
      title: "Usar aqui"
    }, {
      id: "useThere",
      title: "Continuar no outro"
    }] : [{
      id: "useHere",
      title: "OK: usar aqui nesta TV"
    }, {
      id: "cancel",
      title: "Continuar no outro"
    }];
    dom.sessionActions.innerHTML = actions.map(function (action, index) {
      return '<button aria-hidden="true" role="presentation" tabindex="-1" class="session-action' + (index === state.sessionConflict.optionIndex ? " is-focused" : "") + '" type="button" data-session-action="' + escapeHtml(action.id) + '">' + escapeHtml(action.title) + "</button>";
    }).join("");
    dom.sessionActionNodes = Array.from(dom.sessionActions.querySelectorAll(".session-action"));
  }
  function renderExitPromptOverlay() {
    if (!dom.exitOverlay || !dom.exitActions) {
      return;
    }
    var isOpen = Boolean(state.exitPrompt.open);
    dom.exitOverlay.classList.toggle("hidden", !isOpen);
    if (!isOpen) {
      dom.exitActions.innerHTML = "";
      dom.exitActionNodes = [];
      return;
    }
    var actions = [{
      id: "yes",
      title: "Sim"
    }, {
      id: "no",
      title: "Nao"
    }];
    dom.exitActions.innerHTML = actions.map(function (action, index) {
      return '<button aria-hidden="true" role="presentation" tabindex="-1" class="exit-action' + (index === state.exitPrompt.optionIndex ? " is-focused" : "") + '" type="button" data-exit-action="' + escapeHtml(action.id) + '">' + escapeHtml(action.title) + "</button>";
    }).join("");
    dom.exitActionNodes = Array.from(dom.exitActions.querySelectorAll(".exit-action"));
  }
  function openExitPrompt() {
    state.exitPrompt.open = true;
    state.exitPrompt.optionIndex = 0;
    cancelFavoriteHold();
    renderExitPromptOverlay();
    focusExitOverlay();
  }
  function closeExitPrompt() {
    state.exitPrompt.open = false;
    state.exitPrompt.optionIndex = 0;
    renderExitPromptOverlay();
  }
  function focusExitOverlay() {
    if (!dom.exitOverlay) {
      return;
    }
    window.setTimeout(function () {
      if (!state.exitPrompt.open || !dom.exitOverlay) {
        return;
      }
      try {
        dom.exitOverlay.focus({
          preventScroll: true
        });
      } catch (error) {
        try {
          dom.exitOverlay.focus();
        } catch (focusError) {
          console.log("Exit overlay focus skipped:", focusError);
        }
      }
    }, 0);
  }
  function handleExitPromptKeys(action) {
    if (action.type === "left" || action.type === "right" || action.type === "up" || action.type === "down") {
      state.exitPrompt.optionIndex = state.exitPrompt.optionIndex === 0 ? 1 : 0;
      renderExitPromptOverlay();
      return;
    }
    if (action.type === "back" || action.type === "stop") {
      closeExitPrompt();
      return;
    }
    if (action.type === "enter") {
      if (state.exitPrompt.optionIndex === 0) {
        exitApplication();
        return;
      }
      closeExitPrompt();
    }
  }
  function openSessionConflict(mode, code, message) {
    closeSessionConflictCountdown();
    state.sessionConflict.open = true;
    state.sessionConflict.mode = mode || "login";
    state.sessionConflict.code = String(code || state.code || localStorage.getItem(STORAGE_KEYS.userCode) || "").trim();
    state.sessionConflict.message = message || "Este ponto ja esta sendo usado em outro dispositivo.\n\nUm ponto pode ser usado em varios aparelhos, mas nao em dois ao mesmo tempo.";
    state.sessionConflict.optionIndex = 0;
    state.sessionConflict.secondsLeft = SESSION_CONFLICT_COUNTDOWN_SECONDS;
    renderSessionConflictOverlay();
    focusSessionOverlay();
    if (state.sessionConflict.mode !== "login") {
      startSessionConflictCountdown();
    }
  }
  function closeSessionConflict() {
    closeSessionConflictCountdown();
    state.sessionConflict.open = false;
    state.sessionConflict.mode = "";
    state.sessionConflict.code = "";
    state.sessionConflict.message = "";
    state.sessionConflict.optionIndex = 0;
    state.sessionConflict.secondsLeft = SESSION_CONFLICT_COUNTDOWN_SECONDS;
    renderSessionConflictOverlay();
  }
  function focusSessionOverlay() {
    if (!dom.sessionOverlay) {
      return;
    }
    window.setTimeout(function () {
      if (!state.sessionConflict.open || !dom.sessionOverlay) {
        return;
      }
      try {
        dom.sessionOverlay.focus({
          preventScroll: true
        });
      } catch (error) {
        try {
          dom.sessionOverlay.focus();
        } catch (focusError) {
          console.log("Session overlay focus skipped:", focusError);
        }
      }
    }, 0);
  }
  function startSessionConflictCountdown() {
    closeSessionConflictCountdown();
    sessionConflictCountdownTimer = setInterval(function () {
      if (!state.sessionConflict.open) {
        closeSessionConflictCountdown();
        return;
      }
      state.sessionConflict.secondsLeft -= 1;
      if (state.sessionConflict.secondsLeft <= 0) {
        handleSessionConflictTimeout();
        return;
      }
      renderSessionConflictOverlay();
    }, 1000);
  }
  function closeSessionConflictCountdown() {
    if (!sessionConflictCountdownTimer) {
      return;
    }
    clearInterval(sessionConflictCountdownTimer);
    sessionConflictCountdownTimer = null;
  }
  function handleSessionTransferredToOtherDevice(code) {
    var rememberedCode = String(code || state.code || localStorage.getItem(STORAGE_KEYS.userCode) || "").trim();
    if (rememberedCode) {
      localStorage.setItem(STORAGE_KEYS.rememberedCode, rememberedCode);
    }
    localStorage.setItem(STORAGE_KEYS.loginNotice, "Voce foi deslogado desta TV porque este mesmo codigo entrou em outro dispositivo.");
    if (state.player.open) {
      closePlayer();
    }
    clearSession();
    state.code = rememberedCode;
    setScreen("code");
    showToast("Sessao transferida para outro dispositivo.", "error");
  }
  function handleSessionConflictTimeout() {
    var mode = state.sessionConflict.mode;
    var code = state.sessionConflict.code;
    closeSessionConflict();
    if (mode === "transferred") {
      handleSessionTransferredToOtherDevice(code);
    } else {
      showToast("Acesso mantido no outro dispositivo.", "error");
    }
  }
  function handleSessionConflictKeys(action) {
    if (action.type === "left" || action.type === "right" || action.type === "up" || action.type === "down") {
      state.sessionConflict.optionIndex = state.sessionConflict.optionIndex === 0 ? 1 : 0;
      renderSessionConflictOverlay();
      return;
    }
    if (action.type === "back" || action.type === "stop") {
      runSessionConflictAction("cancel");
      return;
    }
    if (action.type === "enter") {
      var isUseHere = state.sessionConflict.optionIndex === 0;
      runSessionConflictAction(isUseHere ? "useHere" : "cancel");
    }
  }
  function runSessionConflictAction(_x16) {
    return _runSessionConflictAction.apply(this, arguments);
  }
  function _runSessionConflictAction() {
    _runSessionConflictAction = _asyncToGenerator(_regenerator().m(function _callee25(actionId) {
      var mode, code, result;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.n) {
          case 0:
            mode = state.sessionConflict.mode;
            code = state.sessionConflict.code;
            if (!(actionId !== "useHere")) {
              _context25.n = 1;
              break;
            }
            closeSessionConflict();
            if (mode === "transferred") {
              handleSessionTransferredToOtherDevice(code);
            }
            return _context25.a(2);
          case 1:
            closeSessionConflict();
            showLoading("Assumindo acesso nesta TV...");
            _context25.n = 2;
            return forceDeviceAccess(code);
          case 2:
            result = _context25.v;
            hideLoading();
            if (!(!result.allowed || !result.profile)) {
              _context25.n = 3;
              break;
            }
            showToast(result.message || "Nao foi possivel assumir este ponto agora.", "error");
            if (mode === "transferred") {
              handleSessionTransferredToOtherDevice(code);
            }
            return _context25.a(2);
          case 3:
            if (!(mode === "transferred")) {
              _context25.n = 4;
              break;
            }
            state.profile = result.profile;
            localStorage.setItem(STORAGE_KEYS.rememberedCode, code);
            localStorage.removeItem(STORAGE_KEYS.loginNotice);
            localStorage.setItem(STORAGE_KEYS.userCode, code);
            localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(result.profile));
            startSessionHeartbeat(code);
            showToast("Este dispositivo voltou a usar o ponto.", "success");
            return _context25.a(2);
          case 4:
            completeAccessLogin(result.profile, code);
          case 5:
            return _context25.a(2);
        }
      }, _callee25);
    }));
    return _runSessionConflictAction.apply(this, arguments);
  }
  function registerNetworkListeners() {
    window.addEventListener("online", handleNetworkOnline);
    window.addEventListener("offline", handleNetworkOffline);
    registerTizenNetworkListener();
  }
  function registerTizenNetworkListener() {
    try {
      if (!window.webapis || !webapis.network || typeof webapis.network.addNetworkStateChangeListener !== "function") {
        return;
      }
      webapis.network.addNetworkStateChangeListener(function (value) {
        var states = webapis.network.NetworkState || {};
        if (value === states.GATEWAY_DISCONNECTED || value === states.DISCONNECTED) {
          handleNetworkOffline();
          return;
        }
        if (value === states.GATEWAY_CONNECTED || value === states.CONNECTED) {
          handleNetworkOnline();
        }
      });
    } catch (error) {
      console.log("Tizen network listener skipped:", error);
    }
  }
  function isNetworkConnected() {
    try {
      if (window.webapis && webapis.network && typeof webapis.network.isConnectedToGateway === "function") {
        return Boolean(webapis.network.isConnectedToGateway());
      }
    } catch (error) {
      console.log("Gateway check skipped:", error);
    }
    if (typeof navigator !== "undefined" && typeof navigator.onLine === "boolean") {
      return navigator.onLine;
    }
    return true;
  }
  function syncNetworkState() {
    if (!isNetworkConnected()) {
      showNetworkUnavailable("A TV esta sem conexao com a internet. Conecte a rede para continuar.");
      return false;
    }
    handleNetworkOnline();
    return true;
  }
  function showNetworkUnavailable(message) {
    state.network.offline = true;
    state.network.message = message || "Nao foi possivel conectar. Verifique a rede da TV e tente novamente.";
    if (state.loading) {
      state.loading = false;
      clearLoadingTicker();
    }
    renderNetworkOverlay();
    renderLoading();
    startNetworkProbe();
    startNetworkPopupTimer();
  }
  function dismissNetworkOverlay(manual) {
    clearNetworkPopupTimer();
    if (!state.network.offline) {
      return;
    }
    state.network.offline = false;
    state.network.message = "";
    state.network.dismissed = true;
    renderNetworkOverlay();
    startNetworkProbe();
    showToast(manual ? "Sem conexao. Continuamos tentando reconectar." : "Sem conexao. Tentando reconectar em segundo plano.", "error");
  }
  function clearNetworkUnavailable() {
    clearNetworkProbe();
    clearNetworkPopupTimer();
    state.network.dismissed = false;
    if (!state.network.offline) {
      return;
    }
    state.network.offline = false;
    state.network.message = "";
    renderNetworkOverlay();
  }
  function startNetworkProbe() {
    clearNetworkProbe();
    networkProbeTimer = window.setInterval(function () {
      if (isNetworkConnected()) {
        handleNetworkOnline();
      }
    }, NETWORK_PROBE_INTERVAL_MS);
  }
  function clearNetworkProbe() {
    if (!networkProbeTimer) {
      return;
    }
    clearInterval(networkProbeTimer);
    networkProbeTimer = null;
  }
  function startNetworkPopupTimer() {
    clearNetworkPopupTimer();
    networkPopupTimer = window.setTimeout(function () {
      networkPopupTimer = null;
      dismissNetworkOverlay(false);
    }, NETWORK_POPUP_TIMEOUT_MS);
  }
  function clearNetworkPopupTimer() {
    if (!networkPopupTimer) {
      return;
    }
    clearTimeout(networkPopupTimer);
    networkPopupTimer = null;
  }
  function clearNetworkResumeTimer() {
    if (!networkResumeTimer) {
      return;
    }
    clearTimeout(networkResumeTimer);
    networkResumeTimer = null;
  }
  function captureNetworkPlaybackSnapshot() {
    if (!state.player.open || state.player.mediaKind === "image" || !state.player.url) {
      return;
    }
    persistCurrentPlaybackProgress(true);
    if (!isLiveLikeCatalogType(state.player.type)) {
      state.player.resumeTime = Math.max(sanitizePlaybackTime(state.player.currentTime), sanitizePlaybackTime(state.player.resumeTime));
    }
    state.network.resumePlayback = true;
  }
  function handleNetworkOffline() {
    if (state.network.offline || state.network.dismissed) {
      return;
    }
    captureNetworkPlaybackSnapshot();
    showNetworkUnavailable("A TV esta sem conexao com a internet. Verifique o Wi-Fi ou cabo de rede.");
  }
  function handleNetworkOnline() {
    var wasOffline = state.network.offline || state.network.dismissed;
    var shouldResume = state.network.resumePlayback;
    clearNetworkUnavailable();
    if (!wasOffline && !shouldResume) {
      return;
    }
    showToast("Conexao restaurada.", "success");
    scheduleNetworkPlaybackResume();
  }
  function scheduleNetworkPlaybackResume() {
    if (!state.network.resumePlayback) {
      return;
    }
    state.network.resumePlayback = false;
    clearNetworkResumeTimer();
    networkResumeTimer = window.setTimeout(function () {
      networkResumeTimer = null;
      if (!state.player.open || state.player.mediaKind === "image") {
        return;
      }
      state.player.reconnectAttempts = 0;
      restartPlayerStream({
        statusMessage: "Retomando de onde parou..."
      });
    }, NETWORK_RESUME_DELAY_MS);
  }
  function handleNetworkKeys(action) {
    if (action.type === "back" || action.type === "stop") {
      openExitPrompt();
      return;
    }
    if (action.type === "enter") {
      if (isNetworkConnected()) {
        handleNetworkOnline();
        return;
      }
      dismissNetworkOverlay(true);
    }
  }
  function isNetworkError(error) {
    if (!error) {
      return false;
    }
    var message = String(error.message || error.name || error);
    return error.name === "TypeError" || /network|failed to fetch|load failed|internet|conexao|conex/i.test(message);
  }
  function currentLoadingText() {
    var baseText = state.loadingBaseText || state.loadingText || "Carregando...";
    var remainingMs = Math.max(0, (state.loadingMinUntil || 0) - Date.now());
    var remainingSeconds = Math.ceil(remainingMs / 1000);
    if (state.loadingCountdownSeconds > 0 && remainingSeconds > 0) {
      return baseText + "\nAguarde " + remainingSeconds + "s e nao aperte outros botoes do controle.";
    }
    if (state.loadingCountdownSeconds > 0) {
      return baseText + "\nFinalizando a preparacao. Aguarde mais um instante.";
    }
    return baseText;
  }
  function clearLoadingTicker() {
    if (!state.loadingTicker) {
      return;
    }
    clearInterval(state.loadingTicker);
    state.loadingTicker = null;
  }
  function startLoadingTicker(requestId) {
    clearLoadingTicker();
    if (!state.loading || state.loadingCountdownSeconds <= 0) {
      return;
    }
    state.loadingTicker = setInterval(function () {
      if (!state.loading || state.loadingRequestId !== requestId) {
        clearLoadingTicker();
        return;
      }
      renderLoading();
      if (Date.now() >= state.loadingMinUntil) {
        clearLoadingTicker();
      }
    }, 250);
  }
  function waitForDelay(ms) {
    return new Promise(function (resolve) {
      window.setTimeout(resolve, Math.max(0, ms || 0));
    });
  }
  function waitForNextPaint() {
    return new Promise(function (resolve) {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(function () {
          window.setTimeout(resolve, 0);
        });
        return;
      }
      window.setTimeout(resolve, 0);
    });
  }
  function renderResumePrompt() {
    if (!dom.resumeOverlay) {
      return;
    }
    var isOpen = Boolean(state.resumePrompt.open && state.resumePrompt.playerState);
    dom.resumeOverlay.classList.toggle("hidden", !isOpen);
    if (!isOpen) {
      if (dom.resumeActions) {
        dom.resumeActions.innerHTML = "";
      }
      dom.resumeActionNodes = [];
      return;
    }
    var playerState = state.resumePrompt.playerState || {};
    var entry = state.resumePrompt.entry || null;
    var resumeTime = playbackEntryPosition(entry);
    var duration = playbackEntryDuration(entry);
    dom.resumeTitle.textContent = playerState.title || "Continuar assistindo?";
    dom.resumeSubtitle.textContent = resumeTime > 0 ? "Encontramos um ponto salvo nesta TV para este filme. Escolha como deseja continuar." : "Esse filme ja foi aberto nesta TV. Escolha como deseja continuar.";
    dom.resumeMeta.innerHTML = ['<span class="resume-pill">Parado em ' + escapeHtml(formatPlaybackTime(resumeTime)) + "</span>", duration > 0 ? '<span class="resume-pill">Duracao ' + escapeHtml(formatPlaybackTime(duration)) + "</span>" : "", '<span class="resume-pill">Servidor ' + escapeHtml(state.selectedServer ? state.selectedServer.name : "Atual") + "</span>"].filter(Boolean).join("");
    dom.resumeActions.innerHTML = [{
      title: "Continuar de onde parou",
      copy: resumeTime > 0 ? "Retoma em " + formatPlaybackTime(resumeTime) + "." : "Abre o ultimo ponto salvo.",
      kind: "primary"
    }, {
      title: "Comecar do inicio",
      copy: "Limpa o ponto salvo para este filme e reinicia do zero.",
      kind: "secondary"
    }].map(function (action) {
      return '<div class="resume-action ' + action.kind + '">' + '<span class="resume-action-title">' + escapeHtml(action.title) + "</span>" + '<span class="resume-action-copy">' + escapeHtml(action.copy) + "</span></div>";
    }).join("");
    dom.resumeActionNodes = Array.from(dom.resumeActions.querySelectorAll(".resume-action"));
    state.resumePrompt.optionIndex = clampIndex(state.resumePrompt.optionIndex, dom.resumeActionNodes.length);
    setFocusedState(dom.resumeActionNodes, state.resumePrompt.optionIndex, true, "resumeActions");
    focusResumeOverlay();
  }
  function renderMovieSearchDetail() {
    var labels = catalogSearchLabels();
    var query = movieSearchQueryValue();
    var filteredItems = filteredAllMovieItems();
    var resultCount = filteredItems.length;
    var searchTitle = searchablePosterType() === "live" ? "Pesquisar em Todos os canais" : "Pesquisar em Todos";
    return '<div class="search-dialog search-dialog-inline">' + '<p class="eyebrow">Busca de ' + escapeHtml(labels.subject) + "</p>" + '<h2 role="presentation">' + escapeHtml(searchTitle) + "</h2>" + '<p class="panel-subtitle search-subtitle">Digite o nome e pressione Voltar para ver os resultados de todas as categorias.</p>' + '<label class="search-native-field">' + '<span class="search-native-label">' + escapeHtml(labels.fieldLabel) + "</span>" + '<input id="movieSearchNativeInput" class="search-native-input" type="search" inputmode="search" enterkeyhint="search" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" placeholder="' + escapeHtml(labels.placeholder) + '" value="' + escapeHtml(query) + '">' + "</label>" + '<div class="search-meta">' + '<span class="search-pill">' + escapeHtml(resultCount + (resultCount === 1 ? " resultado" : " resultados")) + "</span>" + (query ? '<span class="search-pill">Filtro atual: ' + escapeHtml(trimText(query, MOVIE_SEARCH_MAX_LENGTH)) + "</span>" : '<span class="search-pill">Sem filtro ativo</span>') + "</div>" + '<p class="search-native-hint">OK reabre o teclado. Voltar fecha a busca e mostra a lista filtrada.</p>' + "</div>";
  }
  function renderSearchOverlay() {
    if (!dom.searchOverlay) {
      ensureSearchOverlayDom();
      dom.searchOverlay = document.getElementById("searchOverlay");
      dom.searchTitle = document.getElementById("searchTitle");
      dom.searchSubtitle = document.getElementById("searchSubtitle");
      dom.searchQueryDisplay = document.getElementById("searchQueryDisplay");
      dom.searchMeta = document.getElementById("searchMeta");
      dom.searchKeyboard = document.getElementById("searchKeyboard");
    }
    if (!dom.searchOverlay || !dom.searchKeyboard) {
      return;
    }
    var isOpen = Boolean(state.searchPrompt.open && state.screen === "catalog" && !state.searchPrompt.inline && !isSearchDetailView());
    dom.searchOverlay.classList.toggle("hidden", !isOpen);
    if (!isOpen) {
      if (dom.searchKeyboard) {
        dom.searchKeyboard.innerHTML = "";
      }
      if (!isSearchDetailView()) {
        dom.searchKeyNodes = [];
      }
      return;
    }
    var query = movieSearchQueryValue();
    var filteredItems = filteredAllMovieItems();
    var resultCount = filteredItems.length;
    var labels = catalogSearchLabels();
    var searchTitle = searchablePosterType() === "live" ? "Pesquisar em Todos os canais" : "Pesquisar em Todos";
    dom.searchTitle.textContent = searchTitle;
    dom.searchSubtitle.textContent = "Use o teclado abaixo para filtrar " + labels.plural + " pelo nome.";
    dom.searchQueryDisplay.textContent = query || labels.placeholder;
    dom.searchQueryDisplay.classList.toggle("is-placeholder", !query);
    dom.searchMeta.innerHTML = ['<span class="search-pill">' + escapeHtml(resultCount + (resultCount === 1 ? " resultado" : " resultados")) + "</span>", query ? '<span class="search-pill">Filtro atual: ' + escapeHtml(trimText(query, MOVIE_SEARCH_MAX_LENGTH)) + "</span>" : '<span class="search-pill">Sem filtro ativo</span>'].join("");
    dom.searchKeyboard.innerHTML = SEARCH_KEYBOARD_KEYS.map(function (key) {
      var applyClass = key.type === "apply" ? " search-key-apply" : "";
      return '<div class="search-key' + applyClass + '" data-search-key="' + escapeHtml(key.id) + '">' + escapeHtml(key.label) + "</div>";
    }).join("");
    dom.searchKeyNodes = Array.from(dom.searchKeyboard.querySelectorAll(".search-key"));
    state.searchPrompt.keyIndex = clampIndex(state.searchPrompt.keyIndex, dom.searchKeyNodes.length);
    setFocusedState(dom.searchKeyNodes, state.searchPrompt.keyIndex, true, "searchKeys");
    focusSearchOverlay();
  }
  function showLoading(text, options) {
    var config = options || {};
    var minDurationMs = Number(config.minDurationMs) > 0 ? Number(config.minDurationMs) : 0;
    var countdownSeconds = Number(config.countdownSeconds) > 0 ? Number(config.countdownSeconds) : 0;
    state.loadingRequestId += 1;
    state.loading = true;
    state.loadingText = text || "Carregando...";
    state.loadingBaseText = text || "Carregando...";
    state.loadingMinUntil = Date.now() + minDurationMs;
    state.loadingCountdownSeconds = countdownSeconds;
    cancelFavoriteHold();
    renderLoading();
    startLoadingTicker(state.loadingRequestId);
    startLoadingWatchdog(state.loadingRequestId, minDurationMs);
  }
  function startLoadingWatchdog(requestId, minDurationMs) {
    clearLoadingWatchdog();
    loadingWatchdogTimer = window.setTimeout(function () {
      loadingWatchdogTimer = null;
      if (!state.loading || state.loadingRequestId !== requestId) {
        return;
      }
      console.log("Loading watchdog released a stuck overlay.");
      clearLoadingTicker();
      state.loading = false;
      state.loadingBaseText = "Carregando...";
      state.loadingMinUntil = 0;
      state.loadingCountdownSeconds = 0;
      renderLoading();
      if (!isNetworkConnected()) {
        handleNetworkOffline();
        return;
      }
      showToast("A operacao demorou demais. Tente novamente.", "error");
    }, LOADING_WATCHDOG_MS + Math.max(0, minDurationMs || 0));
  }
  function clearLoadingWatchdog() {
    if (!loadingWatchdogTimer) {
      return;
    }
    clearTimeout(loadingWatchdogTimer);
    loadingWatchdogTimer = null;
  }
  function hideLoading() {
    return _hideLoading.apply(this, arguments);
  }
  function _hideLoading() {
    _hideLoading = _asyncToGenerator(_regenerator().m(function _callee26() {
      var requestId, remainingMs;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.n) {
          case 0:
            requestId = state.loadingRequestId;
            remainingMs = Math.max(0, (state.loadingMinUntil || 0) - Date.now());
            if (!(remainingMs > 0)) {
              _context26.n = 1;
              break;
            }
            _context26.n = 1;
            return waitForDelay(remainingMs);
          case 1:
            if (!(requestId !== state.loadingRequestId)) {
              _context26.n = 2;
              break;
            }
            return _context26.a(2);
          case 2:
            clearLoadingTicker();
            clearLoadingWatchdog();
            state.loading = false;
            state.loadingBaseText = "Carregando...";
            state.loadingMinUntil = 0;
            state.loadingCountdownSeconds = 0;
            renderLoading();
          case 3:
            return _context26.a(2);
        }
      }, _callee26);
    }));
    return _hideLoading.apply(this, arguments);
  }
  function showToast(message, tone) {
    clearTimeout(state.toastTimer);
    dom.toast.textContent = message;
    dom.toast.className = "toast";
    if (tone === "error") dom.toast.classList.add("toast-error");
    if (tone === "success") dom.toast.classList.add("toast-success");
    dom.toast.classList.remove("hidden");
    state.toastTimer = setTimeout(function () {
      dom.toast.classList.add("hidden");
    }, 3200);
  }
  function toggleFavoriteForFocusedItem() {
    var item = currentFocusedCatalogItem();
    if (!item) {
      return;
    }
    if (isCatalogSearchAction(item)) {
      return;
    }
    if (!currentFavoriteScope()) {
      showToast("Conecte um servidor para salvar favoritos nesta TV.", "error");
      return;
    }
    var favoriteAdded = toggleFavoriteItem(item);
    if (!favoriteAdded && state.catalog.type === FAVORITES_CATALOG_TYPE) {
      if (!currentFavoriteItems(currentFavoriteCatalogType()).length) {
        state.catalog.zone = "categories";
      }
      state.catalog.itemIndex = clampIndex(state.catalog.itemIndex, currentFavoriteItems(currentFavoriteCatalogType()).length);
      state.catalog.selectedItemIndex = clampIndex(state.catalog.selectedItemIndex, currentFavoriteItems(currentFavoriteCatalogType()).length);
    }
    state.catalog.detailKey = "";
    renderCatalogScreen();
    showToast(favoriteAdded ? favoriteTypeLabel(favoriteTypeForItem(item)) + " adicionado aos favoritos." : favoriteTypeLabel(favoriteTypeForItem(item)) + " removido dos favoritos.", "success");
  }
  function toggleFavoriteItem(item) {
    var scope = currentFavoriteScope();
    var itemId = favoriteItemId(item);
    var favoriteType = favoriteTypeForItem(item);
    if (!scope || !itemId) {
      return false;
    }
    var existingIndex = state.favorites.findIndex(function (entry) {
      return entry.scope === scope && entry.type === favoriteType && entry.itemId === itemId;
    });
    if (existingIndex >= 0) {
      state.favorites.splice(existingIndex, 1);
      saveFavorites();
      return false;
    }
    state.favorites.unshift({
      scope: scope,
      type: favoriteType,
      itemId: itemId,
      addedAt: new Date().toISOString(),
      item: clone(favoriteSnapshot(item, favoriteType))
    });
    saveFavorites();
    return true;
  }
  function favoriteSnapshot(item, favoriteType) {
    return {
      stream_id: item.stream_id || "",
      series_id: item.series_id || "",
      name: item.name || item.title || "Sem titulo",
      stream_icon: item.stream_icon || "",
      cover: item.cover || "",
      direct_source: item.direct_source || "",
      blurb: item.blurb || "",
      plot: item.plot || "",
      description: item.description || "",
      category_id: item.category_id || "",
      container_extension: item.container_extension || "",
      rating: item.rating || "",
      favorite_type: favoriteTypeForItem(item, favoriteType)
    };
  }
  function currentFavoriteScope() {
    if (!state.profile || !state.selectedServer) {
      return "";
    }
    return [state.profile.userNumber || "sem-codigo", state.selectedServer.serverId || state.selectedServer.id || state.selectedServer.baseUrl || state.selectedServer.name || "sem-servidor"].join("::");
  }
  function currentFavoriteEntries(type) {
    var scope = currentFavoriteScope();
    if (!scope) {
      return [];
    }
    var favoriteType = type ? normalizeFavoriteType(type) : "";
    return state.favorites.filter(function (entry) {
      return entry.scope === scope && (!favoriteType || entry.type === favoriteType);
    }).sort(function (a, b) {
      return String(b.addedAt).localeCompare(String(a.addedAt));
    });
  }
  function favoriteCatalogCategories() {
    return [{
      category_id: FAVORITES_CATEGORY_ID,
      category_name: "Favoritos | Ao vivo"
    }, {
      category_id: FAVORITES_MOVIES_CATEGORY_ID,
      category_name: "Favoritos | Filmes"
    }, {
      category_id: FAVORITES_SERIES_CATEGORY_ID,
      category_name: "Favoritos | Series"
    }];
  }
  function favoriteTypeForCategoryId(categoryId) {
    if (categoryId === FAVORITES_MOVIES_CATEGORY_ID) {
      return "movies";
    }
    if (categoryId === FAVORITES_SERIES_CATEGORY_ID) {
      return "series";
    }
    return "live";
  }
  function currentFavoriteItems(type) {
    return currentFavoriteEntries(type).map(function (entry) {
      var item = clone(entry.item);
      item.favorite_type = normalizeFavoriteType(entry.type);
      return item;
    });
  }
  function currentPlaybackScope() {
    return currentFavoriteScope();
  }
  function currentPlaybackEntries(type) {
    var scope = currentPlaybackScope();
    if (!scope) {
      return [];
    }
    return state.playbackHistory.filter(function (entry) {
      return entry.scope === scope && (!type || entry.type === type);
    }).sort(function (a, b) {
      return String(b.updatedAt).localeCompare(String(a.updatedAt));
    });
  }
  function recentMovieEntries() {
    return currentPlaybackEntries("movies").slice(0, PLAYBACK_HISTORY_LIMIT);
  }
  function recentMovieItems() {
    return recentMovieEntries().map(function (entry) {
      var item = clone(entry.item);
      item.resume_position = playbackEntryPosition(entry);
      item.resume_duration = playbackEntryDuration(entry);
      item.recently_watched_at = entry.updatedAt || "";
      item.playback_completed = Boolean(entry.completed);
      item.is_recent_movie = true;
      return item;
    });
  }
  function recentSeriesEntries() {
    return currentPlaybackEntries("series").slice(0, PLAYBACK_HISTORY_LIMIT);
  }
  function recentSeriesItems() {
    var seenSeries = Object.create(null);
    var items = [];
    recentSeriesEntries().forEach(function (entry) {
      var seriesId = String(entry.seriesId || "");
      if (!seriesId || seenSeries[seriesId] || !entry.seriesItem) {
        return;
      }
      seenSeries[seriesId] = true;
      var item = clone(entry.seriesItem);
      item.resume_position = playbackEntryPosition(entry);
      item.resume_duration = playbackEntryDuration(entry);
      item.recently_watched_at = entry.updatedAt || "";
      item.playback_completed = Boolean(entry.completed);
      item.is_recent_series = true;
      item.last_episode_title = entry.episodeTitle || "";
      item.last_episode_label = formatEpisodeLabelFromEntry(entry);
      items.push(item);
    });
    return items;
  }
  function playbackEntryForItem(item, type) {
    var itemId = catalogItemId(item);
    var playbackType = type || normalizePlaybackType(state.catalog.type);
    if (!itemId) {
      return null;
    }
    return currentPlaybackEntries(playbackType).find(function (entry) {
      return entry.itemId === itemId;
    }) || null;
  }
  function seriesResumeEntryForSeries(item) {
    var seriesId = item && item.series_id ? String(item.series_id) : "";
    if (!seriesId) {
      return null;
    }
    return currentPlaybackEntries("series").find(function (entry) {
      return String(entry.seriesId || "") === seriesId;
    }) || null;
  }
  function playbackSnapshot(item) {
    return {
      stream_id: item.stream_id || "",
      series_id: item.series_id || "",
      episode_id: item.episode_id || item.id || item.stream_id || "",
      name: item.name || item.title || "Sem titulo",
      stream_icon: item.stream_icon || "",
      cover: item.cover || "",
      direct_source: item.direct_source || "",
      plot: item.plot || "",
      description: item.description || "",
      category_id: item.category_id || "",
      container_extension: item.container_extension || "",
      rating: item.rating || "",
      releaseDate: item.releaseDate || "",
      season_number: item.season_number || item.season || "",
      episode_number: item.episode_number || item.episode_num || "",
      playback_type: normalizePlaybackType(item.playback_type || state.player.type || state.catalog.type)
    };
  }
  function seriesPlaybackSnapshot(item) {
    return {
      series_id: item.series_id || "",
      name: item.name || item.title || "Sem titulo",
      stream_icon: item.stream_icon || "",
      cover: item.cover || "",
      plot: item.plot || "",
      description: item.description || "",
      category_id: item.category_id || "",
      rating: item.rating || "",
      favorite_type: "series"
    };
  }
  function playbackEntryPosition(entry) {
    return entry ? sanitizePlaybackTime(entry.position) : 0;
  }
  function playbackEntryDuration(entry) {
    return entry ? sanitizePlaybackTime(entry.duration) : 0;
  }
  function sanitizePlaybackTime(value) {
    var number = Number(value);
    return Number.isFinite(number) && number > 0 ? number : 0;
  }
  function normalizePlaybackType(type) {
    return type === "series" ? "series" : "movies";
  }
  function isTrackablePlaybackType(type) {
    return type === "movies" || type === "series";
  }
  function normalizeSeriesNumber(value) {
    var number = Number(value);
    return Number.isFinite(number) && number > 0 ? Math.round(number) : 0;
  }
  function normalizeEpisodeNumber(value) {
    var number = Number(value);
    return Number.isFinite(number) && number > 0 ? Math.round(number) : 0;
  }
  function formatEpisodeLabel(seasonNumber, episodeNumber) {
    var season = normalizeSeriesNumber(seasonNumber);
    var episode = normalizeEpisodeNumber(episodeNumber);
    if (!season && !episode) {
      return "";
    }
    return "T" + String(season || 0).padStart(2, "0") + "E" + String(episode || 0).padStart(2, "0");
  }
  function formatEpisodeLabelFromEntry(entry) {
    if (!entry) {
      return "";
    }
    return formatEpisodeLabel(entry.seasonNumber, entry.episodeNumber);
  }
  function playbackResumeAllowed(entry) {
    if (!entry || entry.completed) {
      return false;
    }
    var position = playbackEntryPosition(entry);
    var duration = playbackEntryDuration(entry);
    if (position < PLAYBACK_RESUME_MIN_SECONDS) {
      return false;
    }
    if (duration > 0 && isPlaybackNearEnd(position, duration)) {
      return false;
    }
    return true;
  }
  function isPlaybackNearEnd(position, duration) {
    if (!(duration > 0)) {
      return false;
    }
    var remaining = Math.max(duration - position, 0);
    return remaining <= Math.min(PLAYBACK_COMPLETE_BUFFER_SECONDS, Math.max(duration * 0.04, 12)) || position / duration >= PLAYBACK_COMPLETE_RATIO;
  }
  function shouldTrackPlaybackPosition(position, duration) {
    return position >= PLAYBACK_RESUME_MIN_SECONDS || isPlaybackNearEnd(position, duration);
  }
  function persistPlaybackProgress(item, position, duration, force, options) {
    var config = options || {};
    var playbackType = normalizePlaybackType(config.type || state.player.type || item && item.playback_type || state.catalog.type);
    if (!item || !isTrackablePlaybackType(playbackType)) {
      return false;
    }
    var scope = currentPlaybackScope();
    var itemId = catalogItemId(item);
    if (!scope || !itemId) {
      return false;
    }
    var normalizedPosition = sanitizePlaybackTime(position);
    var normalizedDuration = sanitizePlaybackTime(duration);
    var existingEntry = playbackEntryForItem(item, playbackType);
    if (!force && !shouldTrackPlaybackPosition(normalizedPosition, normalizedDuration)) {
      return false;
    }
    if (force && !existingEntry && !shouldTrackPlaybackPosition(normalizedPosition, normalizedDuration)) {
      return false;
    }
    var completed = normalizedDuration > 0 && isPlaybackNearEnd(normalizedPosition, normalizedDuration);
    var seriesItem = playbackType === "series" ? config.seriesItem || state.player.seriesSnapshot || null : null;
    var nextEntry = {
      scope: scope,
      type: playbackType,
      itemId: itemId,
      updatedAt: new Date().toISOString(),
      position: completed ? 0 : normalizedPosition,
      duration: normalizedDuration,
      completed: completed,
      item: clone(playbackSnapshot(item)),
      seriesId: playbackType === "series" ? String(seriesItem && seriesItem.series_id || item.series_id || "") : "",
      seasonNumber: playbackType === "series" ? normalizeSeriesNumber(item.season_number || item.season) : 0,
      episodeNumber: playbackType === "series" ? normalizeEpisodeNumber(item.episode_number || item.episode_num) : 0,
      episodeTitle: playbackType === "series" ? firstNonEmpty(item.title, item.name) : "",
      seriesItem: playbackType === "series" && seriesItem ? clone(seriesPlaybackSnapshot(seriesItem)) : null
    };
    var existingIndex = state.playbackHistory.findIndex(function (entry) {
      return entry.scope === scope && entry.type === playbackType && entry.itemId === itemId;
    });
    if (existingIndex >= 0) {
      state.playbackHistory.splice(existingIndex, 1);
    }
    state.playbackHistory.unshift(nextEntry);
    if (state.playbackHistory.length > PLAYBACK_HISTORY_LIMIT) {
      state.playbackHistory = state.playbackHistory.slice(0, PLAYBACK_HISTORY_LIMIT);
    }
    savePlaybackHistory();
    updateHomeCounts();
    return true;
  }
  function clearPlaybackResumeForItem(item) {
    var playbackType = normalizePlaybackType(item && item.playback_type || state.catalog.type);
    var entry = playbackEntryForItem(item, playbackType);
    if (!entry) {
      return;
    }
    entry.position = 0;
    entry.completed = false;
    entry.updatedAt = new Date().toISOString();
    savePlaybackHistory();
    updateHomeCounts();
  }
  function isItemFavorited(item) {
    var itemId = favoriteItemId(item);
    var favoriteType = favoriteTypeForItem(item);
    if (!itemId) {
      return false;
    }
    return currentFavoriteEntries(favoriteType).some(function (entry) {
      return entry.itemId === itemId;
    });
  }
  function favoriteItemId(item) {
    if (!item) {
      return "";
    }
    return String(item.stream_id || item.series_id || item.name || "");
  }
  function normalizeFavoriteType(type) {
    if (type === "movies") {
      return "movies";
    }
    if (type === "series") {
      return "series";
    }
    return "live";
  }
  function favoriteTypeForItem(item, fallbackType) {
    return normalizeFavoriteType(item && item.favorite_type || fallbackType || state.catalog.type);
  }
  function favoriteTypeLabel(type) {
    var favoriteType = normalizeFavoriteType(type);
    if (favoriteType === "movies") {
      return "Filme";
    }
    if (favoriteType === "series") {
      return "Serie";
    }
    return "Canal";
  }
  function currentFavoriteCatalogType() {
    var category = currentCategories()[catalogItemsCategoryIndex()] || currentCategories()[0] || null;
    return favoriteTypeForCategoryId(category && category.category_id);
  }
  function catalogContentType(item, fallbackType) {
    var type = fallbackType || state.catalog.type;
    if (type === FAVORITES_CATALOG_TYPE) {
      return favoriteTypeForItem(item, currentFavoriteCatalogType());
    }
    return type;
  }
  function currentFocusedCatalogItem() {
    var items = currentItems();
    return items[state.catalog.itemIndex] || null;
  }
  function catalogSupportsFavoriteToggle() {
    if (isCatalogSearchAction(currentFocusedCatalogItem())) {
      return false;
    }
    return isLiveLikeCatalogType(state.catalog.type);
  }
  function isLiveLikeCatalogType(type) {
    return type === "live" || type === FAVORITES_CATALOG_TYPE;
  }
  function emptyCategoryMessageForCatalog() {
    if (state.catalog.type === FAVORITES_CATALOG_TYPE) {
      return "Nenhum favorito ainda. Adicione canais ou filmes nesta TV.";
    }
    return "Nenhuma categoria encontrada para esse tipo de conteudo.";
  }
  function emptyItemMessageForCatalog() {
    if (state.catalog.type === FAVORITES_CATALOG_TYPE) {
      return "Nenhum favorito salvo nesta TV para este servidor.";
    }
    return "Ainda nao carregamos itens desta categoria. Pressione Enter para buscar o conteudo.";
  }
  function emptyDetailMessageForCatalog() {
    if (state.catalog.type === FAVORITES_CATALOG_TYPE) {
      return "Use os favoritos em canais, filmes e series para montar sua lista nesta TV.";
    }
    return "Use Atualizar na home ou valide o servidor novamente.";
  }
  var focoNoCoracao = false;
  function mostraCoracao() {
    return document.documentElement.classList.contains("app-escalado") && catalogSupportsFavoriteToggle();
  }
  function coracaoMarkup(ativo) {
    return '<span class="coracao' + (ativo ? " ativo" : "") + '" aria-label="' + (ativo ? "Remover dos favoritos" : "Adicionar aos favoritos") + '">' + '<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">' + '<path d="M12 20.6l-1.3-1.2C5.6 14.8 2.4 11.9 2.4 8.3 2.4 5.4 4.7 3.2 7.5 3.2c1.7 0 3.3.8 4.5 2 1.2-1.2 2.8-2 4.5-2 2.8 0 5.1 2.2 5.1 5.1 0 3.6-3.2 6.5-8.3 11.1L12 20.6z"/>' + "</svg></span>";
  }
  function marcarFocoDoCoracao() {
    if (!dom.itemNodes) {
      return;
    }
    var alvo = state.catalog.zone === "items" && focoNoCoracao ? dom.itemNodes[catalogVisibleItemIndex()] : null;
    dom.itemNodes.forEach(function (no) {
      no.classList.toggle("coracao-focado", no === alvo);
    });
  }
  function tratarTeclaDoCoracao(action, event) {
    if (state.catalog.zone !== "items" || !mostraCoracao() || isCatalogSearchAction(currentFocusedCatalogItem())) {
      focoNoCoracao = false;
      return false;
    }
    if (action.type === "right") {
      event.preventDefault();
      focoNoCoracao = true;
      marcarFocoDoCoracao();
      return true;
    }
    if (action.type === "left" && focoNoCoracao) {
      event.preventDefault();
      focoNoCoracao = false;
      marcarFocoDoCoracao();
      return true;
    }
    if (action.type === "enter" && focoNoCoracao) {
      event.preventDefault();
      toggleFavoriteForFocusedItem();
      return true;
    }
    return false;
  }
  function favoriteMarkerMarkup() {
    return '<span class="favorite-marker" aria-label="Favorito">' + '<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">' + '<path d="M12 2.8l2.85 5.77 6.37.93-4.61 4.49 1.09 6.35L12 17.34 6.3 20.34l1.09-6.35-4.61-4.49 6.37-.93L12 2.8z"/>' + "</svg></span>";
  }
  function searchIconMarkup() {
    return '<span class="search-card-icon" aria-hidden="true">' + '<svg viewBox="0 0 24 24" focusable="false">' + '<circle cx="11" cy="11" r="6.5"></circle>' + '<path d="M16 16l4.5 4.5"></path>' + "</svg></span>";
  }
  function firstNonEmpty() {
    for (var index = 0; index < arguments.length; index += 1) {
      var value = arguments[index];
      if (value === undefined || value === null) {
        continue;
      }
      var text = String(value).trim();
      if (!text || text.toLowerCase() === "null" || text.toLowerCase() === "undefined") {
        continue;
      }
      return text;
    }
    return "";
  }
  function catalogItemId(item) {
    if (!item) {
      return "";
    }
    return String(item.stream_id || item.series_id || item.name || "");
  }
  function detailCacheForType(type) {
    var libraryEntry = state.library[type];
    if (!libraryEntry) {
      return null;
    }
    if (!libraryEntry.detailsById) {
      libraryEntry.detailsById = {};
    }
    return libraryEntry.detailsById;
  }
  function catalogItemDetailState(item) {
    if (!isPosterCatalogType(state.catalog.type) || !item) {
      return null;
    }
    var cache = detailCacheForType(state.catalog.type);
    var itemId = catalogItemId(item);
    if (!cache || !itemId) {
      return null;
    }
    return cache[itemId] || null;
  }
  function catalogDetailImage(item) {
    var detailState = catalogItemDetailState(item);
    var detail = detailState && detailState.data ? detailState.data : null;
    return firstNonEmpty(detail && detail.cover, detail && detail.stream_icon, item && item.stream_icon, item && item.cover, iconForType(state.catalog.type));
  }
  function catalogDetailRating(item) {
    var detailState = catalogItemDetailState(item);
    var detail = detailState && detailState.data ? detailState.data : null;
    return firstNonEmpty(detail && detail.rating, item && item.rating);
  }
  function catalogDetailPlot(item) {
    var detailState = catalogItemDetailState(item);
    var detail = detailState && detailState.data ? detailState.data : null;
    var plot = firstNonEmpty(detail && detail.plot, detail && detail.description, item && item.plot, item && item.description, item && item.blurb);
    if (plot) {
      return plot;
    }
    if (detailState && detailState.loading) {
      return "Carregando sinopse...";
    }
    return "Sinopse nao disponivel.";
  }
  function applyCatalogItemDetail(item, detail) {
    if (!item || !detail) {
      return;
    }
    if (detail.plot) {
      item.plot = detail.plot;
    }
    if (detail.description) {
      item.description = detail.description;
    }
    if (detail.rating) {
      item.rating = detail.rating;
    }
    if (detail.stream_icon) {
      item.stream_icon = detail.stream_icon;
    }
    if (detail.cover) {
      item.cover = detail.cover;
    }
  }
  function ensureCatalogItemDetail(_x17) {
    return _ensureCatalogItemDetail.apply(this, arguments);
  }
  function _ensureCatalogItemDetail() {
    _ensureCatalogItemDetail = _asyncToGenerator(_regenerator().m(function _callee27(item) {
      var type, itemId, cache, cachedState, detail, _t9;
      return _regenerator().w(function (_context27) {
        while (1) switch (_context27.p = _context27.n) {
          case 0:
            if (!(!isPosterCatalogType(state.catalog.type) || !item || !state.selectedServer || state.selectedServer.isDemo)) {
              _context27.n = 1;
              break;
            }
            return _context27.a(2);
          case 1:
            type = state.catalog.type;
            itemId = catalogItemId(item);
            cache = detailCacheForType(type);
            if (!(!cache || !itemId)) {
              _context27.n = 2;
              break;
            }
            return _context27.a(2);
          case 2:
            cachedState = cache[itemId];
            if (!(cachedState && (cachedState.loading || cachedState.loaded))) {
              _context27.n = 3;
              break;
            }
            return _context27.a(2);
          case 3:
            cache[itemId] = {
              loading: true,
              loaded: false,
              data: null,
              error: ""
            };
            _context27.p = 4;
            _context27.n = 5;
            return fetchCatalogItemDetail(type, item);
          case 5:
            detail = _context27.v;
            cache[itemId] = {
              loading: false,
              loaded: true,
              data: detail,
              error: ""
            };
            applyCatalogItemDetail(item, detail);
            _context27.n = 7;
            break;
          case 6:
            _context27.p = 6;
            _t9 = _context27.v;
            console.log("Catalog detail fetch failed:", _t9);
            cache[itemId] = {
              loading: false,
              loaded: true,
              data: {},
              error: _t9 && _t9.message ? _t9.message : "detail-fetch-failed"
            };
          case 7:
            if (state.screen === "catalog" && isPosterCatalogDetailView() && catalogItemId(currentFocusedCatalogItem()) === itemId) {
              state.catalog.detailKey = "";
              render();
            }
          case 8:
            return _context27.a(2);
        }
      }, _callee27, null, [[4, 6]]);
    }));
    return _ensureCatalogItemDetail.apply(this, arguments);
  }
  function fetchCatalogItemDetail(_x18, _x19) {
    return _fetchCatalogItemDetail.apply(this, arguments);
  }
  function _fetchCatalogItemDetail() {
    _fetchCatalogItemDetail = _asyncToGenerator(_regenerator().m(function _callee28(type, item) {
      var actionMap, request, url, payload;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.n) {
          case 0:
            actionMap = {
              movies: {
                action: "get_vod_info",
                param: "vod_id",
                value: item.stream_id
              },
              series: {
                action: "get_series_info",
                param: "series_id",
                value: item.series_id
              }
            };
            request = actionMap[type];
            if (!(!request || !request.value)) {
              _context28.n = 1;
              break;
            }
            return _context28.a(2, {});
          case 1:
            url = state.selectedServer.baseUrl + "/player_api.php?username=" + encodeURIComponent(state.selectedServer.username) + "&password=" + encodeURIComponent(state.selectedServer.password) + "&action=" + encodeURIComponent(request.action) + "&" + encodeURIComponent(request.param) + "=" + encodeURIComponent(request.value);
            _context28.n = 2;
            return fetchJson(url);
          case 2:
            payload = _context28.v;
            return _context28.a(2, normalizeCatalogDetailPayload(payload));
        }
      }, _callee28);
    }));
    return _fetchCatalogItemDetail.apply(this, arguments);
  }
  function normalizeCatalogDetailPayload(payload) {
    var info = payload && _typeof(payload.info) === "object" ? payload.info : {};
    var movieData = payload && _typeof(payload.movie_data) === "object" ? payload.movie_data : {};
    var seriesData = payload && _typeof(payload.series_data) === "object" ? payload.series_data : {};
    var rawEpisodes = payload && _typeof(payload.episodes) === "object" ? payload.episodes : {};
    var episodesBySeason = {};
    Object.keys(rawEpisodes).forEach(function (seasonKey) {
      var seasonEpisodes = Array.isArray(rawEpisodes[seasonKey]) ? rawEpisodes[seasonKey] : [];
      var normalizedEpisodes = seasonEpisodes.map(function (episode) {
        return normalizeSeriesEpisodeEntry(episode, seasonKey);
      }).filter(function (episode) {
        return Boolean(episode && (episode.episode_id || episode.stream_id || episode.id));
      });
      if (!normalizedEpisodes.length) {
        return;
      }
      var normalizedSeasonKey = String(normalizeSeriesNumber(seasonKey || normalizedEpisodes[0].season_number || normalizedEpisodes[0].season) || normalizedEpisodes[0].season_number || normalizedEpisodes[0].season || seasonKey || "0");
      episodesBySeason[normalizedSeasonKey] = normalizedEpisodes;
    });
    var seasons = Array.isArray(payload && payload.seasons) ? payload.seasons.map(normalizeSeriesSeasonEntry) : [];
    seasons = seasons.filter(function (season) {
      return season && (season.season_number || season.name);
    });
    if (!seasons.length) {
      seasons = Object.keys(episodesBySeason).map(function (seasonKey) {
        return normalizeSeriesSeasonEntry({
          season_number: seasonKey,
          name: "Temporada " + seasonKey
        });
      });
    }
    seasons.sort(function (a, b) {
      return normalizeSeriesNumber(a.season_number) - normalizeSeriesNumber(b.season_number);
    });
    return {
      plot: firstNonEmpty(info.plot, info.description, movieData.plot, movieData.description, seriesData.plot, seriesData.description),
      description: firstNonEmpty(info.description, movieData.description, seriesData.description, info.plot, movieData.plot, seriesData.plot),
      rating: firstNonEmpty(info.rating, movieData.rating, seriesData.rating),
      stream_icon: firstNonEmpty(info.movie_image, movieData.stream_icon, seriesData.stream_icon),
      cover: firstNonEmpty(info.cover_big, info.cover, info.movie_image, movieData.cover_big, movieData.cover, seriesData.cover),
      seasons: seasons,
      episodesBySeason: episodesBySeason,
      episodeRunTime: firstNonEmpty(info.episode_run_time, seriesData.episode_run_time)
    };
  }
  function normalizeSeriesSeasonEntry(season) {
    var seasonNumber = normalizeSeriesNumber(firstNonEmpty(season && season.season_number, season && season.season, season && season.id));
    return {
      season_number: seasonNumber,
      name: firstNonEmpty(season && season.name, seasonNumber ? "Temporada " + seasonNumber : "Temporada"),
      air_date: firstNonEmpty(season && season.air_date, season && season.releaseDate),
      cover: firstNonEmpty(season && season.cover_big, season && season.cover, season && season.stream_icon),
      episode_count: Number(season && season.episode_count) || 0,
      plot: firstNonEmpty(season && season.plot, season && season.overview, season && season.description),
      description: firstNonEmpty(season && season.description, season && season.overview, season && season.plot)
    };
  }
  function normalizeSeriesEpisodeEntry(episode, fallbackSeason) {
    var info = episode && _typeof(episode.info) === "object" ? episode.info : {};
    var seasonNumber = normalizeSeriesNumber(firstNonEmpty(episode && episode.season, episode && episode.season_number, info.season, fallbackSeason));
    var episodeNumber = normalizeEpisodeNumber(firstNonEmpty(episode && episode.episode_num, episode && episode.episode_number, info.episode_num));
    var title = firstNonEmpty(episode && episode.title, info.title, episodeNumber ? "Episodio " + episodeNumber : "Episodio");
    var image = firstNonEmpty(info.movie_image, info.cover_big, info.cover, episode && episode.stream_icon, episode && episode.cover);
    return {
      id: String(episode && (episode.id || episode.stream_id) || ""),
      stream_id: String(episode && (episode.id || episode.stream_id) || ""),
      episode_id: String(episode && (episode.id || episode.stream_id) || ""),
      series_id: String(firstNonEmpty(episode && episode.series_id, info.series_id)),
      name: title,
      title: title,
      stream_icon: image,
      cover: image,
      direct_source: firstNonEmpty(episode && episode.direct_source, info.direct_source),
      plot: firstNonEmpty(info.plot, info.description, episode && episode.plot, episode && episode.description),
      description: firstNonEmpty(info.description, info.plot, episode && episode.description, episode && episode.plot),
      category_id: firstNonEmpty(episode && episode.category_id),
      container_extension: firstNonEmpty(episode && episode.container_extension, info.container_extension, "mp4"),
      rating: firstNonEmpty(info.rating, episode && episode.rating),
      releaseDate: firstNonEmpty(info.releaseDate, episode && episode.releaseDate),
      season: seasonNumber,
      season_number: seasonNumber,
      episode_num: episodeNumber,
      episode_number: episodeNumber,
      playback_type: "series",
      is_series_episode: true
    };
  }
  function catalogDetailData(item) {
    var detailState = catalogItemDetailState(item);
    return detailState && detailState.data ? detailState.data : null;
  }
  function seriesSeasonEntries(item) {
    var detail = catalogDetailData(item);
    return detail && Array.isArray(detail.seasons) ? detail.seasons : [];
  }
  function seriesSeasonNumberAt(item, index) {
    var seasons = seriesSeasonEntries(item);
    var season = seasons[clampIndex(index, seasons.length)] || null;
    return season ? normalizeSeriesNumber(season.season_number) : 0;
  }
  function seriesEpisodesForSeason(item, seasonNumber) {
    var detail = catalogDetailData(item);
    var detailEpisodes = detail && detail.episodesBySeason ? detail.episodesBySeason : null;
    if (!detailEpisodes) {
      return [];
    }
    return detailEpisodes[String(normalizeSeriesNumber(seasonNumber))] || [];
  }
  function currentSeriesSeasonEpisodes(item) {
    return seriesEpisodesForSeason(item, seriesSeasonNumberAt(item, state.catalog.seriesDetailSeasonIndex));
  }
  function currentSeriesSeason(item) {
    var seasons = seriesSeasonEntries(item);
    return seasons[clampIndex(state.catalog.seriesDetailSeasonIndex, seasons.length)] || null;
  }
  function currentSeriesEpisode(item) {
    var episodes = currentSeriesSeasonEpisodes(item);
    return episodes[clampIndex(state.catalog.seriesDetailEpisodeIndex, episodes.length)] || null;
  }
  function firstSeriesEpisode(item) {
    var seasons = seriesSeasonEntries(item);
    for (var index = 0; index < seasons.length; index += 1) {
      var seasonNumber = normalizeSeriesNumber(seasons[index].season_number);
      var episodes = seriesEpisodesForSeason(item, seasonNumber);
      if (episodes.length) {
        return episodes[0];
      }
    }
    return null;
  }
  function seriesEpisodeForEntry(item, entry) {
    if (!item || !entry) {
      return null;
    }
    var episodes = seriesEpisodesForSeason(item, entry.seasonNumber);
    var entryItemId = String(entry.itemId || "");
    return episodes.find(function (episode) {
      return catalogItemId(episode) === entryItemId;
    }) || null;
  }
  function syncSeriesDetailSelection(item) {
    if (state.catalog.type !== "series" || !item) {
      return;
    }
    var seriesId = String(item.series_id || "");
    var seasons = seriesSeasonEntries(item);
    if (!seasons.length) {
      state.catalog.seriesDetailSeriesId = seriesId;
      state.catalog.seriesDetailSeasonIndex = 0;
      state.catalog.seriesDetailEpisodeIndex = 0;
      return;
    }
    var resumeEntry = seriesResumeEntryForSeries(item);
    if (state.catalog.seriesDetailSeriesId !== seriesId) {
      var seasonIndex = 0;
      var episodeIndex = 0;
      if (resumeEntry) {
        var matchedSeasonIndex = seasons.findIndex(function (season) {
          return normalizeSeriesNumber(season.season_number) === normalizeSeriesNumber(resumeEntry.seasonNumber);
        });
        if (matchedSeasonIndex >= 0) {
          seasonIndex = matchedSeasonIndex;
          var seasonEpisodes = seriesEpisodesForSeason(item, resumeEntry.seasonNumber);
          var matchedEpisodeIndex = seasonEpisodes.findIndex(function (episode) {
            return catalogItemId(episode) === String(resumeEntry.itemId || "");
          });
          if (matchedEpisodeIndex >= 0) {
            episodeIndex = matchedEpisodeIndex;
          }
        }
      }
      state.catalog.seriesDetailSeriesId = seriesId;
      state.catalog.seriesDetailFocusZone = "actions";
      state.catalog.seriesDetailSeasonIndex = seasonIndex;
      state.catalog.seriesDetailEpisodeIndex = episodeIndex;
      return;
    }
    state.catalog.seriesDetailSeasonIndex = clampIndex(state.catalog.seriesDetailSeasonIndex, seasons.length);
    var currentEpisodes = currentSeriesSeasonEpisodes(item);
    state.catalog.seriesDetailEpisodeIndex = clampIndex(state.catalog.seriesDetailEpisodeIndex, currentEpisodes.length);
  }
  function isPosterCatalogType(type) {
    return type === "movies" || type === "series";
  }
  function catalogVariant() {
    return isPosterCatalogType(state.catalog.type) ? "poster" : "default";
  }
  function catalogView() {
    return isPosterCatalogType(state.catalog.type) ? state.catalog.view || "browse" : "browse";
  }
  function isPosterCatalogDetailView() {
    return isPosterCatalogType(state.catalog.type) && catalogView() === "detail";
  }
  function isSeriesPosterDetailView() {
    return state.catalog.type === "series" && isPosterCatalogDetailView() && !isSearchDetailView();
  }
  function isSeriesSeasonBrowserPage() {
    return isSeriesPosterDetailView() && state.catalog.seriesDetailPage === "seasons";
  }
  function isSeriesEpisodeBrowserPage() {
    return isSeriesPosterDetailView() && state.catalog.seriesDetailPage === "episodes";
  }
  function catalogGridColumns() {
    return isPosterCatalogType(state.catalog.type) ? POSTER_GRID_COLUMNS : 1;
  }
  function currentCatalogCategory() {
    return currentCategories()[catalogCategorySelectionIndex()] || null;
  }
  function catalogSidebarHint(count) {
    if (!count) {
      return "Nenhuma categoria disponivel";
    }
    return count === 1 ? "1 categoria disponivel" : count + " categorias disponiveis";
  }
  function catalogPanelHeading(category) {
    var label = catalogLabelForType(state.catalog.type);
    if (!category || !category.category_name) {
      return label;
    }
    return label + "  |  " + category.category_name;
  }
  function catalogCategoryCopy(category, index) {
    if (categoriaBloqueada(category)) {
      return "Protegida por senha (+18)";
    }
    if (category.category_id === FAVORITES_CATEGORY_ID) {
      return "Canais ao vivo adicionados aos favoritos";
    }
    if (category.category_id === FAVORITES_MOVIES_CATEGORY_ID) {
      return "Filmes adicionados aos favoritos";
    }
    if (category.category_id === FAVORITES_SERIES_CATEGORY_ID) {
      return "Series adicionadas aos favoritos";
    }
    if (state.catalog.type === "live" && isAllLiveCategoryId(category.category_id)) {
      return "Todos os canais reunidos em uma unica lista com busca";
    }
    if (isAllMoviesCategoryId(category.category_id)) {
      return "Todos os filmes reunidos em uma unica grade";
    }
    if (category.category_id === RECENT_MOVIES_CATEGORY_ID) {
      return "Filmes vistos ou em andamento nesta TV";
    }
    if (isAllSeriesCategoryId(category.category_id)) {
      return "Todas as series reunidas em uma unica grade";
    }
    if (category.category_id === RECENT_SERIES_CATEGORY_ID) {
      return "Series vistas ou em andamento nesta TV";
    }
    if (isPosterCatalogType(state.catalog.type)) {
      if (String(category.category_id || "").toUpperCase() === "ALL") {
        return "Catalogo completo";
      }
      return index === 0 ? "Colecao em destaque" : "Explore esta selecao";
    }
    return "Categoria " + String(index + 1);
  }
  function catalogItemCopy(item) {
    if (isCatalogSearchAction(item)) {
      var labels = catalogSearchLabels();
      var resultCount = filteredAllMovieItems().length;
      var singularLabel = labels.singular;
      var pluralLabel = labels.plural;
      if (movieSearchQueryValue()) {
        if (!resultCount) {
          return labels.gender === "feminine" ? "Nenhuma " + singularLabel + " encontrada. Abra para ajustar a busca." : "Nenhum " + singularLabel + " encontrado. Abra para ajustar a busca.";
        }
        if (labels.gender === "feminine") {
          return resultCount + (resultCount === 1 ? " " + singularLabel + " encontrada para esse filtro." : " " + pluralLabel + " encontradas para esse filtro.");
        }
        return resultCount + (resultCount === 1 ? " " + singularLabel + " encontrado para esse filtro." : " " + pluralLabel + " encontrados para esse filtro.");
      }
      if (searchablePosterType() === "live") {
        return "Clique aqui para abrir o teclado e pesquisar um canal.";
      }
      return "Abra o teclado para buscar " + labels.plural + " pelo nome.";
    }
    var playbackEntry = state.catalog.type === "movies" ? playbackEntryForItem(item, "movies") : null;
    var seriesEntry = state.catalog.type === "series" ? seriesResumeEntryForSeries(item) : null;
    if (isPosterCatalogType(state.catalog.type)) {
      if (state.catalog.type === "movies" && playbackResumeAllowed(playbackEntry)) {
        return "Retome em " + formatPlaybackTime(playbackEntryPosition(playbackEntry)) + ".";
      }
      if (state.catalog.type === "movies" && item && item.playback_completed) {
        return "Assistido recentemente nesta TV.";
      }
      if (state.catalog.type === "series" && playbackResumeAllowed(seriesEntry)) {
        return "Continue " + (formatEpisodeLabelFromEntry(seriesEntry) ? formatEpisodeLabelFromEntry(seriesEntry) + " " : "") + (seriesEntry && seriesEntry.episodeTitle ? "em " + seriesEntry.episodeTitle + "." : "de onde parou.");
      }
      if (state.catalog.type === "series" && item && item.last_episode_title) {
        return "Ultimo episodio: " + (item.last_episode_label ? item.last_episode_label + " | " : "") + item.last_episode_title;
      }
      return item.plot || item.blurb || (state.catalog.type === "movies" ? "Selecione para abrir o filme desta colecao." : "Selecione para explorar esta serie.");
    }
    return item.plot || item.blurb || (isItemFavorited(item) ? "Canal salvo nos favoritos desta TV." : item.category_id) || "Selecione para abrir detalhes ou player.";
  }
  function catalogPrimaryActionLabel() {
    if (state.catalog.zone === "items" && isCatalogSearchAction(currentFocusedCatalogItem())) {
      return state.catalog.type === "live" ? "Pesquisar canais" : state.catalog.type === "series" ? "Pesquisar series" : "Pesquisar filmes";
    }
    if (isPosterCatalogType(state.catalog.type) && state.catalog.zone === "categories") {
      return "Selecionar categoria";
    }
    if (isPosterCatalogType(state.catalog.type)) {
      return state.catalog.type === "movies" ? "Abrir detalhes" : "Ver detalhes";
    }
    if (state.catalog.type === "movies") {
      return "Abrir filme";
    }
    if (state.catalog.type === "series") {
      return "Selecionar serie";
    }
    if (state.catalog.type === FAVORITES_CATALOG_TYPE) {
      return currentFavoriteCatalogType() === "movies" ? "Abrir filme" : currentFavoriteCatalogType() === "series" ? "Abrir serie" : "Abrir canal";
    }
    return "Abrir canal";
  }
  function posterCatalogDetailActions() {
    if (!isPosterCatalogType(state.catalog.type)) {
      return [];
    }
    var item = currentFocusedCatalogItem();
    var playbackEntry = state.catalog.type === "movies" ? playbackEntryForItem(item) : null;
    var actions = [];
    if (state.catalog.type === "movies") {
      if (playbackResumeAllowed(playbackEntry)) {
        actions.push({
          id: "play",
          title: "Continuar assistindo",
          subtitle: "Retoma do ponto salvo nesta TV.",
          kind: "primary"
        });
        actions.push({
          id: "restart",
          title: "Assistir do inicio",
          subtitle: "Reinicia este filme desde o comeco.",
          kind: "secondary"
        });
      } else {
        actions.push({
          id: "play",
          title: item && item.playback_completed ? "Assistir novamente" : "Assistir agora",
          subtitle: item && item.playback_completed ? "Inicia novamente este filme." : "Inicia o video selecionado.",
          kind: "primary"
        });
      }
      actions.push({
        id: "favorite",
        title: isItemFavorited(item) ? "Remover dos favoritos" : "Adicionar aos favoritos",
        subtitle: isItemFavorited(item) ? "Remove este filme da sua lista de favoritos nesta TV." : "Guarda este filme na sua lista de favoritos nesta TV.",
        kind: "secondary"
      });
    } else {
      var resumeEntry = seriesResumeEntryForSeries(item);
      var resumeLabel = formatEpisodeLabelFromEntry(resumeEntry);
      if (!isSeriesSeasonBrowserPage() && !isSeriesEpisodeBrowserPage()) {
        if (playbackResumeAllowed(resumeEntry)) {
          actions.push({
            id: "series-continue",
            title: "Continuar assistindo",
            subtitle: "Retoma " + (resumeLabel ? resumeLabel + " " : "") + (resumeEntry && resumeEntry.episodeTitle ? "em " + resumeEntry.episodeTitle + "." : "na serie selecionada."),
            kind: "primary"
          });
        }
        actions.push({
          id: "favorite",
          title: isItemFavorited(item) ? "Remover dos favoritos" : "Adicionar aos favoritos",
          subtitle: isItemFavorited(item) ? "Remove esta serie da sua lista de favoritos nesta TV." : "Guarda esta serie na sua lista de favoritos nesta TV.",
          kind: "secondary"
        });
        actions.push({
          id: "browse-seasons",
          title: "Ir para temporadas",
          subtitle: "Abre a lista de temporadas e episodios desta serie.",
          kind: "primary"
        });
        actions.push({
          id: "series-back",
          title: "Voltar",
          subtitle: "Retorna para a grade de capas.",
          kind: "secondary"
        });
      }
    }
    if (state.catalog.type !== "series") {
      actions.push({
        id: "back",
        title: "Voltar",
        subtitle: "Retorna para a grade de capas.",
        kind: "secondary"
      });
    }
    return actions;
  }
  function currentServers() {
    return state.profile && Array.isArray(state.profile.lists) ? state.profile.lists : [];
  }
  function hasNativeAllLiveCategory(categories) {
    return (categories || []).some(function (category) {
      return isAllLiveCategoryId(category && category.category_id ? category.category_id : "");
    });
  }
  function hasNativeAllMoviesCategory(categories) {
    return (categories || []).some(function (category) {
      return isAllMoviesCategoryId(category && category.category_id ? category.category_id : "");
    });
  }
  function hasNativeAllSeriesCategory(categories) {
    return (categories || []).some(function (category) {
      return isAllSeriesCategoryId(category && category.category_id ? category.category_id : "");
    });
  }
  function isAllLiveCategoryId(categoryId) {
    var normalizedId = String(categoryId || "");
    return normalizedId === ALL_LIVE_CATEGORY_ID || normalizedId.toUpperCase() === "ALL";
  }
  function isAllMoviesCategoryId(categoryId) {
    var normalizedId = String(categoryId || "");
    return normalizedId === ALL_MOVIES_CATEGORY_ID || normalizedId.toUpperCase() === "ALL";
  }
  function isAllSeriesCategoryId(categoryId) {
    var normalizedId = String(categoryId || "");
    return normalizedId === ALL_SERIES_CATEGORY_ID || normalizedId.toUpperCase() === "ALL";
  }
  function isAllPosterCategoryId(type, categoryId) {
    return type === "series" ? isAllSeriesCategoryId(categoryId) : isAllMoviesCategoryId(categoryId);
  }
  var DADOS_NO_BANCO = "https://tropicalplaymsx.web.app/msx/webdata";
  var CHAVE_DADOS_EDITADOS_EM = "tropical.dadosEditadosEm";
  var CHAVE_DADOS_DO_CODIGO = "tropical.dadosDoCodigo";
  var CAMPOS_LONGOS = ["plot", "description", "cast", "actors", "director", "backdrop_path", "youtube_trailer", "info"];
  var sincronia = {
    codigo: "",
    carregando: false,
    timer: null,
    prazo: 0,
    pendente: false
  };
  function codigoDaSincronia() {
    return String(state.profile && state.profile.userNumber || state.code || "").trim();
  }
  function lerNumeroLocal(chave) {
    try {
      return Number(localStorage.getItem(chave)) || 0;
    } catch (error) {
      return 0;
    }
  }
  function compactarItem(item) {
    if (!item || _typeof(item) !== "object") {
      return item;
    }
    var copia = {};
    Object.keys(item).forEach(function (chave) {
      if (CAMPOS_LONGOS.indexOf(chave) === -1) {
        copia[chave] = item[chave];
      }
    });
    return copia;
  }
  function pacoteDosDados(codigo) {
    var favoritos = (state.favorites || []).map(function (entrada) {
      var copia = Object.assign({}, entrada);
      copia.item = compactarItem(entrada.item);
      return copia;
    });
    var historico = (state.playbackHistory || []).slice(0, PLAYBACK_HISTORY_LIMIT).map(function (entrada) {
      var copia = Object.assign({}, entrada);
      copia.item = compactarItem(entrada.item);
      copia.seriesItem = compactarItem(entrada.seriesItem);
      return copia;
    });
    return JSON.stringify({
      code: codigo,
      acao: "salvar",
      favoritos: JSON.stringify(favoritos),
      historico: JSON.stringify(historico),
      em: lerNumeroLocal(CHAVE_DADOS_EDITADOS_EM) || Date.now()
    });
  }
  function marcarDadosAlterados(esperaMs) {
    var codigo = codigoDaSincronia();
    if (!codigo || codigo === DEMO_CODE) {
      return;
    }
    try {
      localStorage.setItem(CHAVE_DADOS_EDITADOS_EM, String(Date.now()));
      localStorage.setItem(CHAVE_DADOS_DO_CODIGO, codigo);
    } catch (error) {
      console.log("Local data mark skipped:", error);
    }
    sincronia.pendente = true;
    agendarEnvioDosDados(esperaMs);
  }
  function agendarEnvioDosDados(esperaMs) {
    var prazo = Date.now() + esperaMs;
    if (sincronia.timer && sincronia.prazo <= prazo) {
      return;
    }
    if (sincronia.timer) {
      clearTimeout(sincronia.timer);
    }
    sincronia.prazo = prazo;
    sincronia.timer = setTimeout(enviarDadosAoBanco, esperaMs);
  }
  function enviarDadosAoBanco() {
    return _enviarDadosAoBanco.apply(this, arguments);
  }
  function _enviarDadosAoBanco() {
    _enviarDadosAoBanco = _asyncToGenerator(_regenerator().m(function _callee29() {
      var codigo, resposta, _t0;
      return _regenerator().w(function (_context29) {
        while (1) switch (_context29.p = _context29.n) {
          case 0:
            sincronia.timer = null;
            codigo = codigoDaSincronia();
            if (!(!sincronia.pendente || !codigo || codigo === DEMO_CODE || sincronia.carregando)) {
              _context29.n = 1;
              break;
            }
            return _context29.a(2);
          case 1:
            _context29.p = 1;
            _context29.n = 2;
            return fetch(DADOS_NO_BANCO, {
              method: "POST",
              headers: {
                "Content-Type": "text/plain;charset=UTF-8"
              },
              body: pacoteDosDados(codigo)
            });
          case 2:
            resposta = _context29.v;
            if (!resposta.ok) {
              _context29.n = 3;
              break;
            }
            sincronia.pendente = false;
            return _context29.a(2);
          case 3:
            console.log("Data sync refused:", resposta.status);
            _context29.n = 5;
            break;
          case 4:
            _context29.p = 4;
            _t0 = _context29.v;
            console.log("Data sync failed, retrying later:", _t0);
          case 5:
            agendarEnvioDosDados(60000);
          case 6:
            return _context29.a(2);
        }
      }, _callee29, null, [[1, 4]]);
    }));
    return _enviarDadosAoBanco.apply(this, arguments);
  }
  function enviarDadosAoSair() {
    var codigo = codigoDaSincronia();
    if (!sincronia.pendente || !codigo || codigo === DEMO_CODE || !navigator.sendBeacon) {
      return;
    }
    try {
      var enviado = navigator.sendBeacon(DADOS_NO_BANCO, new Blob([pacoteDosDados(codigo)], {
        type: "text/plain;charset=UTF-8"
      }));
      if (enviado) {
        sincronia.pendente = false;
      }
    } catch (error) {
      console.log("Data beacon skipped:", error);
    }
  }
  function sincronizarDadosAoEntrar() {
    return _sincronizarDadosAoEntrar.apply(this, arguments);
  }
  function _sincronizarDadosAoEntrar() {
    _sincronizarDadosAoEntrar = _asyncToGenerator(_regenerator().m(function _callee30() {
      var codigo, resposta, remoto, donoLocal, localEDesteCodigo, editadoLocal, temLocal, remotoVazio, _t1, _t10;
      return _regenerator().w(function (_context30) {
        while (1) switch (_context30.p = _context30.n) {
          case 0:
            codigo = codigoDaSincronia();
            if (!(!codigo || codigo === DEMO_CODE || sincronia.codigo === codigo || sincronia.carregando)) {
              _context30.n = 1;
              break;
            }
            return _context30.a(2);
          case 1:
            sincronia.carregando = true;
            _context30.p = 2;
            _context30.n = 3;
            return fetch(DADOS_NO_BANCO + "?code=" + encodeURIComponent(codigo), {
              method: "GET"
            });
          case 3:
            resposta = _context30.v;
            if (!resposta.ok) {
              _context30.n = 5;
              break;
            }
            _context30.n = 4;
            return resposta.json();
          case 4:
            _t1 = _context30.v;
            _context30.n = 6;
            break;
          case 5:
            _t1 = null;
          case 6:
            remoto = _t1;
            if (!(!remoto || !remoto.ok || codigoDaSincronia() !== codigo)) {
              _context30.n = 7;
              break;
            }
            return _context30.a(2);
          case 7:
            sincronia.codigo = codigo;
            donoLocal = "";
            try {
              donoLocal = localStorage.getItem(CHAVE_DADOS_DO_CODIGO) || "";
            } catch (error) {
              donoLocal = "";
            }
            localEDesteCodigo = !donoLocal || donoLocal === codigo;
            editadoLocal = localEDesteCodigo ? lerNumeroLocal(CHAVE_DADOS_EDITADOS_EM) : 0;
            temLocal = (state.favorites || []).length || (state.playbackHistory || []).length;
            remotoVazio = !/[^\[\]\s]/.test(String(remoto.favoritos || "")) && !/[^\[\]\s]/.test(String(remoto.historico || ""));
            if (!(remotoVazio && temLocal && localEDesteCodigo)) {
              _context30.n = 8;
              break;
            }
            try {
              localStorage.setItem(CHAVE_DADOS_EDITADOS_EM, String(Date.now()));
              localStorage.setItem(CHAVE_DADOS_DO_CODIGO, codigo);
            } catch (error) {
              console.log("Local data mark skipped:", error);
            }
            sincronia.pendente = true;
            agendarEnvioDosDados(1500);
            return _context30.a(2);
          case 8:
            if (!(remoto.em > editadoLocal || !localEDesteCodigo)) {
              _context30.n = 9;
              break;
            }
            aplicarDadosDoBanco(remoto, codigo);
            return _context30.a(2);
          case 9:
            if (temLocal && editadoLocal >= remoto.em) {
              if (!editadoLocal) {
                try {
                  localStorage.setItem(CHAVE_DADOS_EDITADOS_EM, String(Date.now()));
                } catch (error) {
                  console.log("Local data mark skipped:", error);
                }
              }
              try {
                localStorage.setItem(CHAVE_DADOS_DO_CODIGO, codigo);
              } catch (error) {
                console.log("Local data owner skipped:", error);
              }
              sincronia.pendente = true;
              agendarEnvioDosDados(1500);
            }
            _context30.n = 11;
            break;
          case 10:
            _context30.p = 10;
            _t10 = _context30.v;
            console.log("Data load from Firebase skipped:", _t10);
          case 11:
            _context30.p = 11;
            sincronia.carregando = false;
            return _context30.f(11);
          case 12:
            return _context30.a(2);
        }
      }, _callee30, null, [[2, 10, 11, 12]]);
    }));
    return _sincronizarDadosAoEntrar.apply(this, arguments);
  }
  function aplicarDadosDoBanco(remoto, codigo) {
    var favoritos = safeJsonParse(remoto.favoritos);
    var historico = safeJsonParse(remoto.historico);
    state.favorites = (Array.isArray(favoritos) ? favoritos : []).map(normalizeFavoriteEntry).filter(Boolean);
    state.playbackHistory = (Array.isArray(historico) ? historico : []).map(normalizePlaybackHistoryEntry).filter(Boolean).sort(function (a, b) {
      return String(b.updatedAt).localeCompare(String(a.updatedAt));
    }).slice(0, PLAYBACK_HISTORY_LIMIT);
    try {
      localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(state.favorites));
      localStorage.setItem(STORAGE_KEYS.playbackHistory, JSON.stringify(state.playbackHistory));
      localStorage.setItem(CHAVE_DADOS_EDITADOS_EM, String(remoto.em || 0));
      localStorage.setItem(CHAVE_DADOS_DO_CODIGO, codigo);
    } catch (error) {
      console.log("Local data copy skipped:", error);
    }
    if (state.screen === "home") {
      renderHomeScreen();
    } else if (state.screen === "catalog") {
      renderCatalogScreen();
    }
  }
  function limparAssistidos() {
    state.playbackHistory = [];
    savePlaybackHistory();
    agendarEnvioDosDados(1000);
    showToast("Lista de assistidos apagada.", "success");
  }
  function textoDoVencimento(dias) {
    if (dias === null) return "Renove seu acesso pelo QR Code.";
    if (dias < 0) return "Seu acesso venceu.";
    if (dias === 0) return "Seu acesso vence hoje.";
    if (dias === 1) return "Seu acesso vence amanha.";
    return "Seu acesso vence em " + dias + " dias.";
  }
  function abrirRenovacao(automatico) {
    if (!dom.renovacaoOverlay || !state.profile) {
      return;
    }
    var dias = diasParaVencer(state.profile.expiresAt);
    var link = paymentUrlForProfile(state.profile);
    dom.renovacaoTitulo.textContent = automatico ? textoDoVencimento(dias) : "Renovar acesso";
    dom.renovacaoTexto.textContent = (automatico ? "" : textoDoVencimento(dias) + " ") + "Aponte a camera do celular para o QR Code. Pagando por ele, a liberacao e na hora e seus dias restantes sao mantidos.";
    if (link) {
      dom.renovacaoQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=8&data=" + encodeURIComponent(link);
      dom.renovacaoQr.classList.remove("hidden");
    } else {
      dom.renovacaoQr.removeAttribute("src");
      dom.renovacaoQr.classList.add("hidden");
      dom.renovacaoTexto.textContent = "Link de renovacao nao encontrado. Fale com o suporte pelo contato das configuracoes.";
    }
    state.renovacaoAberta = true;
    cancelFavoriteHold();
    dom.renovacaoOverlay.classList.remove("hidden");
  }
  function fecharRenovacao() {
    state.renovacaoAberta = false;
    if (dom.renovacaoOverlay) {
      dom.renovacaoOverlay.classList.add("hidden");
    }
  }
  function avisarVencimentoSePerto() {
    var profile = state.profile;
    if (!profile || profile.isDemo || !profile.paymentStatus) {
      return;
    }
    var dias = diasParaVencer(profile.expiresAt);
    if (dias === null || dias < 0 || dias > 3) {
      return;
    }
    var hoje = new Date();
    var chave = "tropical.avisoVencimento:" + String(profile.userNumber || "") + ":" + hoje.getFullYear() + "-" + (hoje.getMonth() + 1) + "-" + hoje.getDate();
    try {
      if (localStorage.getItem(chave)) {
        return;
      }
      localStorage.setItem(chave, "1");
    } catch (error) {
      console.log("Renewal reminder mark skipped:", error);
    }
    abrirRenovacao(true);
  }
  var statusDosServidores = {};
  var STATUS_VALIDO_MS = 90000;
  function chaveDoServidor(parsed) {
    return String(parsed.baseUrl || "") + "|" + String(parsed.username || "");
  }
  function dataCurta(ms) {
    var d = new Date(ms);
    return ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear();
  }
  function pedirJsonComPrazo(_x20, _x21) {
    return _pedirJsonComPrazo.apply(this, arguments);
  }
  function _pedirJsonComPrazo() {
    _pedirJsonComPrazo = _asyncToGenerator(_regenerator().m(function _callee31(url, prazoMs) {
      var controle, corte, resposta, dados, _t11;
      return _regenerator().w(function (_context31) {
        while (1) switch (_context31.p = _context31.n) {
          case 0:
            controle = typeof AbortController === "function" ? new AbortController() : null;
            corte = controle ? setTimeout(function () {
              controle.abort();
            }, prazoMs) : null;
            _context31.p = 1;
            _context31.n = 2;
            return fetch(url, {
              method: "GET",
              headers: {
                Accept: "application/json, text/plain, */*"
              },
              signal: controle ? controle.signal : undefined
            });
          case 2:
            resposta = _context31.v;
            dados = null;
            _context31.p = 3;
            _context31.n = 4;
            return resposta.json();
          case 4:
            dados = _context31.v;
            _context31.n = 6;
            break;
          case 5:
            _context31.p = 5;
            _t11 = _context31.v;
            dados = null;
          case 6:
            return _context31.a(2, {
              status: resposta.status,
              ok: resposta.ok,
              dados: dados
            });
          case 7:
            _context31.p = 7;
            if (corte) clearTimeout(corte);
            return _context31.f(7);
          case 8:
            return _context31.a(2);
        }
      }, _callee31, null, [[3, 5], [1,, 7, 8]]);
    }));
    return _pedirJsonComPrazo.apply(this, arguments);
  }
  function statusPelosDadosDoPainel(dados) {
    var info = dados && dados.user_info;
    if (!info) {
      return {
        estado: "fora",
        rotulo: "Servidor sem resposta",
        detalhe: "O servidor respondeu de um jeito inesperado. Tente de novo em alguns minutos."
      };
    }
    if (String(info.auth) !== "1") {
      return {
        estado: "erro",
        rotulo: "Usuario nao reconhecido",
        detalhe: "O servidor nao aceitou este usuario. Fale com o suporte para conferir."
      };
    }
    var status = String(info.status || "").toLowerCase();
    var vence = Number(info.exp_date) > 0 ? Number(info.exp_date) * 1000 : 0;
    if (status === "expired" || vence && vence < Date.now()) {
      return {
        estado: "vencido",
        rotulo: "Vencido",
        detalhe: vence ? "O acesso deste servidor venceu em " + dataCurta(vence) + "." : "O acesso deste servidor venceu."
      };
    }
    if (status === "banned") {
      return {
        estado: "erro",
        rotulo: "Bloqueado pelo servidor",
        detalhe: "O proprio servidor bloqueou este acesso. Fale com o suporte."
      };
    }
    if (status === "disabled") {
      return {
        estado: "erro",
        rotulo: "Desativado pelo servidor",
        detalhe: "O proprio servidor desativou este acesso. Fale com o suporte."
      };
    }
    if (status && status !== "active") {
      return {
        estado: "aviso",
        rotulo: "Status: " + String(info.status),
        detalhe: "O servidor informou este status para o acesso."
      };
    }
    var emUso = Number(info.active_cons) || 0;
    var maximo = Number(info.max_connections) || 0;
    if (maximo > 0 && emUso >= maximo) {
      return {
        estado: "aviso",
        rotulo: "Online - telas em uso (" + emUso + "/" + maximo + ")",
        detalhe: "Todas as telas deste acesso estao sendo usadas. Feche em outro aparelho se nao abrir."
      };
    }
    return {
      estado: "online",
      rotulo: "Online",
      detalhe: ""
    };
  }
  function verificarServidor(_x22) {
    return _verificarServidor.apply(this, arguments);
  }
  function _verificarServidor() {
    _verificarServidor = _asyncToGenerator(_regenerator().m(function _callee32(server) {
      var parsed, url, diretoFalhou, direto, pelaPonte, status, _t12, _t13, _t14, _t15;
      return _regenerator().w(function (_context32) {
        while (1) switch (_context32.p = _context32.n) {
          case 0:
            _context32.p = 0;
            parsed = parseServer(server);
            _context32.n = 2;
            break;
          case 1:
            _context32.p = 1;
            _t12 = _context32.v;
            return _context32.a(2, {
              estado: "erro",
              rotulo: "Cadastro incompleto",
              detalhe: "O endereco deste servidor esta incorreto. Fale com o suporte."
            });
          case 2:
            if (!parsed.isDemo) {
              _context32.n = 3;
              break;
            }
            return _context32.a(2, {
              estado: "online",
              rotulo: "Online",
              detalhe: ""
            });
          case 3:
            url = parsed.baseUrl + "/player_api.php?username=" + encodeURIComponent(parsed.username) + "&password=" + encodeURIComponent(parsed.password);
            diretoFalhou = false;
            if (!(!pedidoMisto(url) && !usarPonteParaEsteServidor(url))) {
              _context32.n = 12;
              break;
            }
            _context32.p = 4;
            _context32.n = 5;
            return pedirJsonComPrazo(url, 9000);
          case 5:
            direto = _context32.v;
            if (!(direto.dados && direto.dados.user_info)) {
              _context32.n = 6;
              break;
            }
            return _context32.a(2, statusPelosDadosDoPainel(direto.dados));
          case 6:
            if (!(direto.status === 401 || direto.status === 403)) {
              _context32.n = 7;
              break;
            }
            return _context32.a(2, {
              estado: "erro",
              rotulo: "Usuario nao reconhecido",
              detalhe: "O servidor nao aceitou este usuario. Fale com o suporte para conferir."
            });
          case 7:
            diretoFalhou = true;
            _context32.n = 9;
            break;
          case 8:
            _context32.p = 8;
            _t13 = _context32.v;
            diretoFalhou = true;
          case 9:
            _t14 = diretoFalhou;
            if (!_t14) {
              _context32.n = 11;
              break;
            }
            _context32.n = 10;
            return painelRespondeSemCors(url);
          case 10:
            _t14 = _context32.v;
          case 11:
            if (!_t14) {
              _context32.n = 12;
              break;
            }
            diretoFalhou = false;
            marcarServidorPelaPonte(url);
          case 12:
            pelaPonte = null;
            _context32.p = 13;
            _context32.n = 14;
            return pedirJsonComPrazo(urlPelaPonte(url), 15000);
          case 14:
            pelaPonte = _context32.v;
            _context32.n = 16;
            break;
          case 15:
            _context32.p = 15;
            _t15 = _context32.v;
            pelaPonte = null;
          case 16:
            if (!(pelaPonte && pelaPonte.dados && pelaPonte.dados.user_info)) {
              _context32.n = 18;
              break;
            }
            status = statusPelosDadosDoPainel(pelaPonte.dados);
            if (!(diretoFalhou && (status.estado === "online" || status.estado === "aviso"))) {
              _context32.n = 17;
              break;
            }
            return _context32.a(2, {
              estado: "bloqueio",
              rotulo: "Possivel bloqueio na internet",
              detalhe: "O servidor esta no ar, mas esta rede nao deixa conectar. Teste outro Wi-Fi ou os dados do celular."
            });
          case 17:
            return _context32.a(2, status);
          case 18:
            if (!(pelaPonte && pelaPonte.dados && pelaPonte.dados.erro === "acesso vencido")) {
              _context32.n = 19;
              break;
            }
            return _context32.a(2, {
              estado: "vencido",
              rotulo: "Plano vencido",
              detalhe: "Seu plano Tropical Play venceu. Renove para voltar a assistir."
            });
          case 19:
            return _context32.a(2, {
              estado: "fora",
              rotulo: "Servidor sem resposta",
              detalhe: "O servidor nao respondeu agora. Pode ser instabilidade dele: tente de novo em alguns minutos."
            });
        }
      }, _callee32, null, [[13, 15], [4, 8], [0, 1]]);
    }));
    return _verificarServidor.apply(this, arguments);
  }
  function verificarServidoresDaTela() {
    var servers = currentServers();
    servers.forEach(function (server) {
      var chave;
      try {
        chave = chaveDoServidor(parseServer(server));
      } catch (error) {
        chave = String(server && server.url);
      }
      var guardado = statusDosServidores[chave];
      if (guardado && (guardado.verificando || Date.now() - guardado.em < STATUS_VALIDO_MS)) {
        return;
      }
      statusDosServidores[chave] = {
        verificando: true,
        em: Date.now(),
        estado: "verificando",
        rotulo: "Verificando...",
        detalhe: ""
      };
      verificarServidor(server).catch(function () {
        return {
          estado: "fora",
          rotulo: "Servidor sem resposta",
          detalhe: ""
        };
      }).then(function (resultado) {
        resultado.em = Date.now();
        resultado.verificando = false;
        statusDosServidores[chave] = resultado;
        if (state.screen === "servers") {
          renderServerScreen();
        }
      });
    });
  }
  function statusDoServidorNaTela(server) {
    var chave;
    try {
      chave = chaveDoServidor(parseServer(server));
    } catch (error) {
      chave = String(server && server.url);
    }
    return statusDosServidores[chave] || {
      estado: "verificando",
      rotulo: "Verificando...",
      detalhe: ""
    };
  }
  var CHAVE_SENHA_PARENTAL = "tp_controle_parental_senha";
  var SENHA_PARENTAL_PADRAO = "0000";
  var MARCAS_DE_ADULTO = ["adulto", "adult", "xxx", "porn", "erotic", "erotico", "sexy", "sex ", "+18", "18+", "proibido", "onlyfans", "only fans", "privacy"];
  var controleParentalLiberado = false;
  var filtroAdultoCache = typeof WeakMap === "function" ? new WeakMap() : null;
  var idsAdultosCache = {};
  function senhaParentalAtual() {
    if (state.profile && /^[0-9]{4}$/.test(String(state.profile.parentalPin || ""))) {
      return String(state.profile.parentalPin);
    }
    try {
      var salva = localStorage.getItem(CHAVE_SENHA_PARENTAL);
      return /^[0-9]{4}$/.test(salva || "") ? salva : SENHA_PARENTAL_PADRAO;
    } catch (error) {
      return SENHA_PARENTAL_PADRAO;
    }
  }
  function nomeDeConteudoAdulto(nome) {
    var texto = normalizedSearchText(nome).trim();
    if (!texto) {
      return false;
    }
    if (/\bsex\b/.test(texto)) {
      return true;
    }
    return MARCAS_DE_ADULTO.some(function (marca) {
      return texto.indexOf(marca) >= 0;
    });
  }
  function categoriaBloqueada(category) {
    return Boolean(!controleParentalLiberado && category && nomeDeConteudoAdulto(category.category_name));
  }
  function tipoDaBiblioteca(tipo) {
    if (tipo === "movie" || tipo === "movies") return "movies";
    if (tipo === "series") return "series";
    return "live";
  }
  function idsDeCategoriasAdultas(tipo) {
    var chave = tipoDaBiblioteca(tipo);
    var biblioteca = state.library[chave];
    var categorias = biblioteca && biblioteca.categories || [];
    var guardado = idsAdultosCache[chave];
    if (guardado && guardado.categorias === categorias) {
      return guardado.ids;
    }
    var ids = Object.create(null);
    categorias.forEach(function (category) {
      if (category && nomeDeConteudoAdulto(category.category_name)) {
        ids[String(category.category_id)] = true;
      }
    });
    idsAdultosCache[chave] = {
      categorias: categorias,
      ids: ids
    };
    return ids;
  }
  function itemAdulto(item, tipo) {
    if (!item || item.searchAction) {
      return false;
    }
    if (String(item.is_adult) === "1") {
      return true;
    }
    var tipoDoItem = item.favorite_type ? favoriteTypeForItem(item, tipo) : tipo;
    return Boolean(idsDeCategoriasAdultas(tipoDoItem)[String(item.category_id || "")]);
  }
  function filtrarAdultos(items, tipo) {
    if (controleParentalLiberado || !Array.isArray(items) || !items.length) {
      return items;
    }
    if (filtroAdultoCache && filtroAdultoCache.has(items)) {
      return filtroAdultoCache.get(items);
    }
    var algumAdulto = false;
    var filtrados = items.filter(function (item) {
      var adulto = itemAdulto(item, tipo);
      algumAdulto = algumAdulto || adulto;
      return !adulto;
    });
    var resultado = algumAdulto ? filtrados : items;
    if (filtroAdultoCache) {
      filtroAdultoCache.set(items, resultado);
    }
    return resultado;
  }
  function limparFiltroAdulto() {
    filtroAdultoCache = typeof WeakMap === "function" ? new WeakMap() : null;
    invalidateMovieSearchCache();
    state.catalog.movieSearchIndexKey = "";
  }
  function abrirSenhaParental(etapa, aoLiberar) {
    state.senhaParental.open = true;
    state.senhaParental.etapa = etapa;
    state.senhaParental.digitos = "";
    state.senhaParental.keyIndex = 0;
    state.senhaParental.nova = "";
    state.senhaParental.erro = "";
    state.senhaParental.aoLiberar = aoLiberar || null;
    cancelFavoriteHold();
    renderSenhaParental();
  }
  function fecharSenhaParental() {
    state.senhaParental.open = false;
    state.senhaParental.digitos = "";
    state.senhaParental.aoLiberar = null;
    renderSenhaParental();
  }
  function renderSenhaParental() {
    if (!dom.senhaOverlay) {
      return;
    }
    var senha = state.senhaParental;
    dom.senhaOverlay.classList.toggle("hidden", !senha.open);
    if (!senha.open) {
      return;
    }
    var textos = {
      liberar: ["Conteudo adulto (+18)", "Digite a senha do controle parental para abrir esta categoria."],
      atual: ["Controle parental", "Digite a senha atual. (A senha padrao e 0000)"],
      nova: ["Nova senha", "Digite a nova senha de 4 numeros."],
      confirmar: ["Confirme a nova senha", "Digite a nova senha mais uma vez."]
    };
    var texto = textos[senha.etapa] || textos.liberar;
    dom.senhaTitulo.textContent = texto[0];
    dom.senhaTexto.textContent = texto[1];
    dom.senhaErro.textContent = senha.erro || "";
    dom.senhaPontos.innerHTML = [0, 1, 2, 3].map(function (i) {
      return '<span class="senha-ponto' + (i < senha.digitos.length ? " is-cheio" : "") + '"></span>';
    }).join("");
    dom.senhaTeclado.innerHTML = CODE_KEYS.map(function (tecla, indice) {
      return '<button aria-hidden="true" role="presentation" tabindex="-1" type="button" class="senha-tecla' + (tecla.type === "submit" ? " is-ok" : "") + (indice === senha.keyIndex ? " is-focused" : "") + '" data-indice="' + indice + '">' + escapeHtml(tecla.label) + "</button>";
    }).join("");
  }
  function teclasDaSenhaParental(action) {
    var senha = state.senhaParental;
    if (action.type === "digit") {
      digitarNaSenha(action.value);
      return;
    }
    if (action.type === "back" || action.type === "stop") {
      fecharSenhaParental();
      return;
    }
    var colunas = 3;
    var total = CODE_KEYS.length;
    if (action.type === "left") {
      senha.keyIndex = senha.keyIndex % colunas === 0 ? senha.keyIndex + colunas - 1 : senha.keyIndex - 1;
    } else if (action.type === "right") {
      senha.keyIndex = senha.keyIndex % colunas === colunas - 1 ? senha.keyIndex - colunas + 1 : senha.keyIndex + 1;
    } else if (action.type === "up") {
      senha.keyIndex = (senha.keyIndex - colunas + total) % total;
    } else if (action.type === "down") {
      senha.keyIndex = (senha.keyIndex + colunas) % total;
    } else if (action.type === "enter") {
      executarTeclaDaSenha();
      return;
    } else {
      return;
    }
    renderSenhaParental();
  }
  function executarTeclaDaSenha() {
    var senha = state.senhaParental;
    var tecla = CODE_KEYS[senha.keyIndex];
    if (!tecla) {
      return;
    }
    if (tecla.type === "digit") {
      digitarNaSenha(tecla.value);
    } else if (tecla.type === "back") {
      senha.digitos = senha.digitos.slice(0, -1);
      senha.erro = "";
      renderSenhaParental();
    } else if (tecla.type === "submit") {
      conferirSenhaParental();
    }
  }
  function digitarNaSenha(digito) {
    var senha = state.senhaParental;
    if (senha.digitos.length >= 4) {
      return;
    }
    senha.digitos += String(digito);
    senha.erro = "";
    renderSenhaParental();
    if (senha.digitos.length === 4) {
      window.setTimeout(conferirSenhaParental, 160);
    }
  }
  function conferirSenhaParental() {
    var senha = state.senhaParental;
    if (!senha.open) {
      return;
    }
    if (senha.digitos.length < 4) {
      if (senha.digitos.length) {
        senha.erro = "A senha tem 4 numeros.";
        renderSenhaParental();
      }
      return;
    }
    var digitado = senha.digitos;
    senha.digitos = "";
    if (senha.etapa === "liberar") {
      if (digitado !== senhaParentalAtual()) {
        senha.erro = "Senha incorreta. Tente de novo.";
        renderSenhaParental();
        return;
      }
      var continuar = senha.aoLiberar;
      controleParentalLiberado = true;
      limparFiltroAdulto();
      fecharSenhaParental();
      showToast("Conteudo adulto liberado ate fechar o app.", "success");
      if (typeof continuar === "function") {
        continuar();
      } else if (state.screen === "catalog") {
        renderCatalogScreen();
      }
      return;
    }
    if (senha.etapa === "atual") {
      if (digitado !== senhaParentalAtual()) {
        senha.erro = "Senha incorreta. Tente de novo.";
        renderSenhaParental();
        return;
      }
      senha.etapa = "nova";
      senha.keyIndex = 0;
      renderSenhaParental();
      return;
    }
    if (senha.etapa === "nova") {
      senha.nova = digitado;
      senha.etapa = "confirmar";
      senha.keyIndex = 0;
      renderSenhaParental();
      return;
    }
    if (digitado !== senha.nova) {
      senha.etapa = "nova";
      senha.nova = "";
      senha.erro = "As senhas nao conferem. Digite a nova senha de novo.";
      renderSenhaParental();
      return;
    }
    var senhaAnterior = senhaParentalAtual();
    try {
      localStorage.setItem(CHAVE_SENHA_PARENTAL, digitado);
    } catch (error) {
      console.log("Parental PIN save skipped:", error);
    }
    salvarSenhaNoBanco(senhaAnterior, digitado);
    controleParentalLiberado = false;
    limparFiltroAdulto();
    fecharSenhaParental();
    showToast("Senha do controle parental alterada.", "success");
  }
  function salvarSenhaNoBanco(_x23, _x24) {
    return _salvarSenhaNoBanco.apply(this, arguments);
  }
  function _salvarSenhaNoBanco() {
    _salvarSenhaNoBanco = _asyncToGenerator(_regenerator().m(function _callee33(atual, nova) {
      var codigo, resposta, _t16;
      return _regenerator().w(function (_context33) {
        while (1) switch (_context33.p = _context33.n) {
          case 0:
            codigo = codigoDaSincronia();
            if (state.profile) {
              state.profile.parentalPin = nova;
              try {
                localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(state.profile));
              } catch (error) {
                console.log("Profile save skipped:", error);
              }
            }
            if (!(!codigo || codigo === DEMO_CODE)) {
              _context33.n = 1;
              break;
            }
            return _context33.a(2);
          case 1:
            _context33.p = 1;
            _context33.n = 2;
            return fetch(DADOS_NO_BANCO, {
              method: "POST",
              headers: {
                "Content-Type": "text/plain;charset=UTF-8"
              },
              body: JSON.stringify({
                code: codigo,
                acao: "pin",
                atual: atual,
                nova: nova
              })
            });
          case 2:
            resposta = _context33.v;
            if (!resposta.ok) {
              console.log("Parental PIN sync refused:", resposta.status);
            }
            _context33.n = 4;
            break;
          case 3:
            _context33.p = 3;
            _t16 = _context33.v;
            console.log("Parental PIN sync failed:", _t16);
          case 4:
            return _context33.a(2);
        }
      }, _callee33, null, [[1, 3]]);
    }));
    return _salvarSenhaNoBanco.apply(this, arguments);
  }
  function diasParaVencer(expiresAt) {
    if (!expiresAt) return null;
    var data = new Date(expiresAt);
    if (Number.isNaN(data.getTime())) return null;
    return Math.ceil((data.getTime() - Date.now()) / 86400000);
  }
  function cartaoDoVencimento() {
    var expiresAt = state.profile && state.profile.expiresAt;
    var dias = diasParaVencer(expiresAt);
    var data = "Sem data";
    if (dias !== null) {
      var d = new Date(expiresAt);
      data = ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear();
    }
    var situacao = "";
    var classe = "";
    if (dias !== null) {
      if (dias < 0) {
        situacao = "Plano vencido";
        classe = " is-vencido";
      } else if (dias === 0) {
        situacao = "Vence hoje";
        classe = " is-perto";
      } else if (dias === 1) {
        situacao = "Vence amanha";
        classe = " is-perto";
      } else {
        situacao = "Faltam " + dias + " dias";
        classe = dias <= 3 ? " is-perto" : "";
      }
    }
    return '<div class="meta-card vencimento-card' + classe + '">' + '<p class="meta-label">Seu plano vence em</p>' + '<p class="meta-value">' + escapeHtml(data) + "</p>" + (situacao ? '<p class="vencimento-situacao">' + escapeHtml(situacao) + "</p>" : "") + "</div>";
  }
  var ultimaLeituraDoPlano = 0;
  function atualizarDadosDoPlano() {
    return _atualizarDadosDoPlano.apply(this, arguments);
  }
  function _atualizarDadosDoPlano() {
    _atualizarDadosDoPlano = _asyncToGenerator(_regenerator().m(function _callee34() {
      var profile, doc, data, pinDoBanco, novaData, _t17;
      return _regenerator().w(function (_context34) {
        while (1) switch (_context34.p = _context34.n) {
          case 0:
            profile = state.profile;
            if (!(!firestore || !profile || !profile.firestoreDocumentId || Date.now() - ultimaLeituraDoPlano < 60000)) {
              _context34.n = 1;
              break;
            }
            return _context34.a(2);
          case 1:
            ultimaLeituraDoPlano = Date.now();
            _context34.p = 2;
            _context34.n = 3;
            return firestore.collection("devices").doc(profile.firestoreDocumentId).get();
          case 3:
            doc = _context34.v;
            if (!(!doc.exists || state.profile !== profile)) {
              _context34.n = 4;
              break;
            }
            return _context34.a(2);
          case 4:
            data = doc.data() || {};
            pinDoBanco = data.msxParental && /^[0-9]{4}$/.test(String(data.msxParental.pin || "")) ? String(data.msxParental.pin) : "";
            if (pinDoBanco && pinDoBanco !== profile.parentalPin) {
              profile.parentalPin = pinDoBanco;
              localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
            }
            novaData = normalizeDate(data.expiresAt);
            if (novaData && novaData !== profile.expiresAt) {
              profile.expiresAt = novaData;
              profile.paymentStatus = Boolean(data.paymentStatus);
              localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
              if (state.screen === "settings" && dom.settingsSummary) {
                renderSettingsScreen();
              }
            }
            _context34.n = 6;
            break;
          case 5:
            _context34.p = 5;
            _t17 = _context34.v;
            console.log("Plan refresh skipped:", _t17);
          case 6:
            return _context34.a(2);
        }
      }, _callee34, null, [[2, 5]]);
    }));
    return _atualizarDadosDoPlano.apply(this, arguments);
  }
  function carregarSuporte() {
    return _carregarSuporte.apply(this, arguments);
  }
  function _carregarSuporte() {
    _carregarSuporte = _asyncToGenerator(_regenerator().m(function _callee35() {
      var suporte, doc, data, _t18;
      return _regenerator().w(function (_context35) {
        while (1) switch (_context35.p = _context35.n) {
          case 0:
            suporte = state.suporte;
            if (!(!firestore || suporte.carregando || suporte.carregado)) {
              _context35.n = 1;
              break;
            }
            return _context35.a(2);
          case 1:
            suporte.carregando = true;
            _context35.p = 2;
            _context35.n = 3;
            return firestore.collection("app_settings").doc("support_info").get();
          case 3:
            doc = _context35.v;
            data = doc.exists ? doc.data() || {} : {};
            suporte.dados = data.isActive === true ? {
              email: String(data.supportEmail || data.email || ""),
              link: String(data.supportLink || data.whatsapp_link || data.whatsapp || ""),
              mensagemQr: String(data.supportMessage || data.qr_message || ""),
              mensagem: String(data.message || ""),
              tipo: String(data.supportType || ""),
              valor: String(data.supportValue || "")
            } : null;
            suporte.carregado = true;
            _context35.n = 5;
            break;
          case 4:
            _context35.p = 4;
            _t18 = _context35.v;
            console.log("Support info load failed:", _t18);
          case 5:
            _context35.p = 5;
            suporte.carregando = false;
            return _context35.f(5);
          case 6:
            renderSuporte();
          case 7:
            return _context35.a(2);
        }
      }, _callee35, null, [[2, 4, 5, 6]]);
    }));
    return _carregarSuporte.apply(this, arguments);
  }
  function linkDoQrDeSuporte(dados) {
    if (dados.link) {
      return dados.link;
    }
    var numero = String(dados.valor || "").replace(/[^0-9]/g, "");
    return numero.length >= 8 ? "https://wa.me/" + numero : "";
  }
  function renderSuporte() {
    if (!dom.settingsSupport) {
      return;
    }
    var suporte = state.suporte;
    if (!suporte.carregado) {
      dom.settingsSupport.innerHTML = '<div class="suporte-card"><div class="suporte-info"><p class="eyebrow">Suporte Tropical Play</p>' + '<p class="suporte-linha">' + (suporte.carregando ? "Carregando contato..." : "Contato indisponivel no momento.") + "</p></div></div>";
      return;
    }
    var dados = suporte.dados;
    if (!dados) {
      dom.settingsSupport.innerHTML = '<div class="suporte-card"><div class="suporte-info"><p class="eyebrow">Suporte Tropical Play</p>' + '<p class="suporte-linha">Informacoes de suporte indisponiveis.</p></div></div>';
      return;
    }
    var linhas = [];
    if (dados.valor) {
      var rotulo = dados.tipo && !/^outro$/i.test(dados.tipo) ? dados.tipo : "Contato";
      linhas.push('<p class="suporte-linha"><span>' + escapeHtml(rotulo) + "</span>" + escapeHtml(dados.valor) + "</p>");
    }
    if (dados.email) {
      linhas.push('<p class="suporte-linha"><span>E-mail</span>' + escapeHtml(dados.email) + "</p>");
    }
    if (dados.mensagem) {
      linhas.push('<p class="suporte-recado">' + escapeHtml(dados.mensagem) + "</p>");
    }
    var link = linkDoQrDeSuporte(dados);
    var qr = link ? '<div class="suporte-qr"><img alt="" src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=8&data=' + encodeURIComponent(link) + '"><p>' + escapeHtml(dados.mensagemQr || "Aponte a camera do celular para falar com o suporte.") + "</p></div>" : "";
    dom.settingsSupport.innerHTML = '<div class="suporte-card">' + '<div class="suporte-info"><p class="eyebrow">Suporte Tropical Play</p>' + '<h3 class="suporte-titulo">Fale com a gente</h3>' + linhas.join("") + "</div>" + qr + "</div>";
  }
  function lupaDoCatalogoAtiva() {
    return (state.catalog.type === "movies" || state.catalog.type === "series") && currentCategories().length > 0;
  }
  var abrindoPesquisa = false;
  function abrirPesquisaEmTodos() {
    return _abrirPesquisaEmTodos.apply(this, arguments);
  }
  function _abrirPesquisaEmTodos() {
    _abrirPesquisaEmTodos = _asyncToGenerator(_regenerator().m(function _callee36() {
      var tipo, indiceDeTodos;
      return _regenerator().w(function (_context36) {
        while (1) switch (_context36.p = _context36.n) {
          case 0:
            if (!abrindoPesquisa) {
              _context36.n = 1;
              break;
            }
            return _context36.a(2);
          case 1:
            tipo = state.catalog.type;
            indiceDeTodos = currentCategories().findIndex(function (category) {
              return isAllPosterCategoryId(tipo, category && category.category_id ? category.category_id : "");
            });
            if (!(indiceDeTodos < 0)) {
              _context36.n = 2;
              break;
            }
            showToast("A busca nao esta disponivel neste servidor.", "error");
            return _context36.a(2);
          case 2:
            abrindoPesquisa = true;
            _context36.p = 3;
            state.catalog.lupaFocada = false;
            state.catalog.view = "browse";
            state.catalog.zone = "items";
            state.catalog.categoryIndex = indiceDeTodos;
            state.catalog.selectedCategoryIndex = indiceDeTodos;
            state.catalog.selectedItemCategoryIndex = indiceDeTodos;
            state.catalog.itemIndex = 0;
            state.catalog.itemWindowStartIndex = 0;
            state.catalog.selectedItemIndex = 0;
            state.catalog.detailKey = "";
            clearMovieSearchQuery();
            renderCatalogScreen();
            _context36.n = 4;
            return ensureItemsForCategoryIndex(indiceDeTodos);
          case 4:
            if (!(state.screen !== "catalog" || state.catalog.type !== tipo || state.catalog.selectedCategoryIndex !== indiceDeTodos)) {
              _context36.n = 5;
              break;
            }
            return _context36.a(2);
          case 5:
            state.catalog.itemIndex = 0;
            state.catalog.selectedItemIndex = 0;
            renderCatalogScreen();
            openMovieSearchOverlay();
          case 6:
            _context36.p = 6;
            abrindoPesquisa = false;
            return _context36.f(6);
          case 7:
            return _context36.a(2);
        }
      }, _callee36, null, [[3,, 6, 7]]);
    }));
    return _abrirPesquisaEmTodos.apply(this, arguments);
  }
  function isSearchDetailView() {
    return Boolean(state.searchPrompt.open && isPosterCatalogType(state.catalog.type) && state.catalog.view === "detail" && isCatalogSearchAction(currentSelectedItem()));
  }
  function catalogSupportsMovieSearch(category) {
    if (!category) {
      return false;
    }
    if (state.catalog.type === "live") {
      return isAllLiveCategoryId(category.category_id);
    }
    return isPosterCatalogType(state.catalog.type) && isAllPosterCategoryId(state.catalog.type, category.category_id);
  }
  function liveSourceCategories() {
    return (state.library.live.categories || []).filter(function (category) {
      return !isAllLiveCategoryId(category && category.category_id ? category.category_id : "");
    });
  }
  function movieSourceCategories() {
    return (state.library.movies.categories || []).filter(function (category) {
      return !isAllMoviesCategoryId(category && category.category_id ? category.category_id : "");
    });
  }
  function seriesSourceCategories() {
    return (state.library.series.categories || []).filter(function (category) {
      return !isAllSeriesCategoryId(category && category.category_id ? category.category_id : "");
    });
  }
  function searchablePosterType() {
    if (state.catalog.type === "series") {
      return "series";
    }
    if (state.catalog.type === "live") {
      return "live";
    }
    return "movies";
  }
  function catalogSearchLabels() {
    var searchableType = searchablePosterType();
    if (searchableType === "series") {
      return {
        singular: "serie",
        plural: "series",
        subject: "series",
        fieldLabel: "Nome da serie",
        placeholder: "Digite o nome da serie",
        gender: "feminine"
      };
    }
    if (searchableType === "live") {
      return {
        singular: "canal",
        plural: "canais",
        subject: "canais ao vivo",
        fieldLabel: "Nome do canal",
        placeholder: "Digite o nome do canal",
        gender: "masculine"
      };
    }
    return {
      singular: "filme",
      plural: "filmes",
      subject: "filmes",
      fieldLabel: "Nome do filme",
      placeholder: "Digite o nome do filme",
      gender: "masculine"
    };
  }
  function movieSearchQueryValue() {
    return String(state.catalog.movieSearchQuery || "");
  }
  function normalizedSearchText(text) {
    var lowerText = String(text || "").toLowerCase();
    if (!lowerText) {
      return "";
    }
    if (typeof lowerText.normalize === "function") {
      return lowerText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    return lowerText;
  }
  function movieSearchSourceSignature(items) {
    var firstItem = items && items.length ? catalogItemId(items[0]) : "";
    var lastItem = items && items.length ? catalogItemId(items[items.length - 1]) : "";
    return searchablePosterType() + ":" + String(items.length) + ":" + firstItem + ":" + lastItem;
  }
  function ensureMovieSearchIndex(items, sourceKey) {
    var nextSourceKey = sourceKey || movieSearchSourceSignature(items);
    if (state.catalog.movieSearchIndexKey === nextSourceKey && Array.isArray(state.catalog.movieSearchIndexItems) && state.catalog.movieSearchIndexItems.length === items.length && Array.isArray(state.catalog.movieSearchIndexTitles) && state.catalog.movieSearchIndexTitles.length === items.length) {
      return;
    }
    state.catalog.movieSearchIndexKey = nextSourceKey;
    state.catalog.movieSearchIndexItems = items;
    state.catalog.movieSearchIndexTitles = items.map(function (item) {
      var title = firstNonEmpty(item && item.name, item && item.title);
      return normalizedSearchText(title);
    });
  }
  function invalidateMovieSearchCache() {
    state.catalog.movieSearchCacheKey = "";
    state.catalog.movieSearchCacheItems = [];
  }
  function updateMovieSearchQuery(query) {
    state.catalog.movieSearchQuery = String(query || "").slice(0, MOVIE_SEARCH_MAX_LENGTH);
    invalidateMovieSearchCache();
  }
  function appendMovieSearchQuery(value) {
    var nextQuery = movieSearchQueryValue() + String(value || "");
    updateMovieSearchQuery(nextQuery);
  }
  function removeMovieSearchCharacter() {
    updateMovieSearchQuery(movieSearchQueryValue().slice(0, -1));
  }
  function clearMovieSearchQuery() {
    updateMovieSearchQuery("");
  }
  function dedupeCatalogItems(items) {
    var seen = Object.create(null);
    var combined = [];
    (items || []).forEach(function (item) {
      var itemId = catalogItemId(item);
      if (!itemId || seen[itemId]) {
        return;
      }
      seen[itemId] = true;
      combined.push(item);
    });
    return combined;
  }
  function flattenMovieCategoryItems() {
    var combined = [];
    movieSourceCategories().forEach(function (category) {
      var items = state.library.movies.itemsByCategory[category.category_id] || [];
      items.forEach(function (item) {
        combined.push(item);
      });
    });
    return dedupeCatalogItems(combined);
  }
  function flattenLiveCategoryItems() {
    var combined = [];
    liveSourceCategories().forEach(function (category) {
      var items = state.library.live.itemsByCategory[category.category_id] || [];
      items.forEach(function (item) {
        combined.push(item);
      });
    });
    return dedupeCatalogItems(combined);
  }
  function flattenSeriesCategoryItems() {
    var combined = [];
    seriesSourceCategories().forEach(function (category) {
      var items = state.library.series.itemsByCategory[category.category_id] || [];
      items.forEach(function (item) {
        combined.push(item);
      });
    });
    return dedupeCatalogItems(combined);
  }
  function allMovieItems() {
    if (Object.prototype.hasOwnProperty.call(state.library.movies.itemsByCategory, ALL_MOVIES_CATEGORY_ID)) {
      return state.library.movies.itemsByCategory[ALL_MOVIES_CATEGORY_ID] || [];
    }
    if (Object.prototype.hasOwnProperty.call(state.library.movies.itemsByCategory, "ALL")) {
      return dedupeCatalogItems(state.library.movies.itemsByCategory.ALL || []);
    }
    return flattenMovieCategoryItems();
  }
  function allSeriesItems() {
    if (Object.prototype.hasOwnProperty.call(state.library.series.itemsByCategory, ALL_SERIES_CATEGORY_ID)) {
      return state.library.series.itemsByCategory[ALL_SERIES_CATEGORY_ID] || [];
    }
    if (Object.prototype.hasOwnProperty.call(state.library.series.itemsByCategory, "ALL")) {
      return dedupeCatalogItems(state.library.series.itemsByCategory.ALL || []);
    }
    return flattenSeriesCategoryItems();
  }
  function allLiveItems() {
    if (Object.prototype.hasOwnProperty.call(state.library.live.itemsByCategory, ALL_LIVE_CATEGORY_ID)) {
      return state.library.live.itemsByCategory[ALL_LIVE_CATEGORY_ID] || [];
    }
    if (Object.prototype.hasOwnProperty.call(state.library.live.itemsByCategory, "ALL")) {
      return dedupeCatalogItems(state.library.live.itemsByCategory.ALL || []);
    }
    return flattenLiveCategoryItems();
  }
  function allPosterItems() {
    if (searchablePosterType() === "series") {
      return filtrarAdultos(allSeriesItems(), "series");
    }
    if (searchablePosterType() === "live") {
      return filtrarAdultos(allLiveItems(), "live");
    }
    return filtrarAdultos(allMovieItems(), "movies");
  }
  function filteredAllMovieItems() {
    var query = normalizedSearchText(movieSearchQueryValue()).trim();
    var items = allPosterItems();
    if (!query) {
      return items;
    }
    var sourceKey = movieSearchSourceSignature(items);
    var cacheKey = query + "::" + sourceKey;
    if (state.catalog.movieSearchCacheKey === cacheKey && Array.isArray(state.catalog.movieSearchCacheItems)) {
      return state.catalog.movieSearchCacheItems;
    }
    ensureMovieSearchIndex(items, sourceKey);
    var filteredItems = [];
    state.catalog.movieSearchIndexItems.forEach(function (item, index) {
      if (state.catalog.movieSearchIndexTitles[index].indexOf(query) >= 0) {
        filteredItems.push(item);
      }
    });
    state.catalog.movieSearchCacheKey = cacheKey;
    state.catalog.movieSearchCacheItems = filteredItems;
    return filteredItems;
  }
  function movieSearchActionItem() {
    var labels = catalogSearchLabels();
    var query = movieSearchQueryValue();
    var resultCount = filteredAllMovieItems().length;
    var singularLabel = labels.singular;
    var pluralLabel = labels.plural;
    var title = query ? 'Busca: "' + trimText(query, 18) + '"' : "Pesquisar " + singularLabel;
    var queryLabel = query ? "Filtro atual: " + trimText(query, 24) : "Sem filtro ativo";
    var searchableType = searchablePosterType();
    var searchActionId = searchableType === "live" ? LIVE_SEARCH_ACTION_ID : searchableType === "series" ? SERIES_SEARCH_ACTION_ID : MOVIE_SEARCH_ACTION_ID;
    return {
      stream_id: searchActionId,
      name: title,
      blurb: resultCount > 0 ? labels.gender === "feminine" ? resultCount + (resultCount === 1 ? " " + singularLabel + " localizada" : " " + pluralLabel + " localizadas") : resultCount + (resultCount === 1 ? " " + singularLabel + " localizado" : " " + pluralLabel + " localizados") : "Nenhum resultado no filtro atual",
      queryLabel: queryLabel,
      searchAction: true
    };
  }
  function isCatalogSearchAction(item) {
    return Boolean(item && item.searchAction);
  }
  function allMovieDisplayItems() {
    return [movieSearchActionItem()].concat(filteredAllMovieItems());
  }
  function displayMovieCategories() {
    var categories = (state.library.movies.categories || []).slice();
    var nativeAllIndex = categories.findIndex(function (category) {
      return isAllMoviesCategoryId(category && category.category_id ? category.category_id : "");
    });
    if (nativeAllIndex > 0) {
      var nativeAllCategory = categories.splice(nativeAllIndex, 1)[0];
      categories.unshift(nativeAllCategory);
    } else if (nativeAllIndex < 0 && categories.length) {
      categories.unshift({
        category_id: ALL_MOVIES_CATEGORY_ID,
        category_name: "Todos"
      });
    }
    if (recentMovieEntries().length) {
      categories.splice(categories.length ? 1 : 0, 0, {
        category_id: RECENT_MOVIES_CATEGORY_ID,
        category_name: "Assistidos recentemente"
      });
    }
    return categories;
  }
  function displayLiveCategories() {
    var categories = (state.library.live.categories || []).slice();
    var nativeAllIndex = categories.findIndex(function (category) {
      return isAllLiveCategoryId(category && category.category_id ? category.category_id : "");
    });
    if (nativeAllIndex > 0) {
      var nativeAllCategory = categories.splice(nativeAllIndex, 1)[0];
      categories.unshift(nativeAllCategory);
    } else if (nativeAllIndex < 0 && categories.length) {
      categories.unshift({
        category_id: ALL_LIVE_CATEGORY_ID,
        category_name: "Todos"
      });
    }
    return categories;
  }
  function displaySeriesCategories() {
    var categories = (state.library.series.categories || []).slice();
    var nativeAllIndex = categories.findIndex(function (category) {
      return isAllSeriesCategoryId(category && category.category_id ? category.category_id : "");
    });
    if (nativeAllIndex > 0) {
      var nativeAllCategory = categories.splice(nativeAllIndex, 1)[0];
      categories.unshift(nativeAllCategory);
    } else if (nativeAllIndex < 0 && categories.length) {
      categories.unshift({
        category_id: ALL_SERIES_CATEGORY_ID,
        category_name: "Todos"
      });
    }
    if (recentSeriesEntries().length) {
      categories.splice(categories.length ? 1 : 0, 0, {
        category_id: RECENT_SERIES_CATEGORY_ID,
        category_name: "Assistidos recentemente"
      });
    }
    return categories;
  }
  function shouldWindowCatalogItems(items, category) {
    if (state.catalog.type === "live" && category && isAllLiveCategoryId(category.category_id) && items.length > LIVE_LIST_WINDOW_ITEMS) {
      return true;
    }
    return isPosterCatalogType(state.catalog.type) && category && items.length > POSTER_GRID_COLUMNS * POSTER_WINDOW_ROWS;
  }
  function normalizeCatalogItemWindowStart(startIndex, columns, maxStartIndex) {
    if (!startIndex) {
      return 0;
    }
    var boundedStartIndex = Math.max(0, Math.min(startIndex, maxStartIndex));
    return boundedStartIndex - boundedStartIndex % columns;
  }
  function visibleCatalogItems(items, category) {
    if (!shouldWindowCatalogItems(items, category)) {
      return {
        startIndex: 0,
        items: items
      };
    }
    if (state.catalog.type === "live" && category && isAllLiveCategoryId(category.category_id)) {
      var _currentIndex = clampIndex(state.catalog.itemIndex, items.length);
      var _itemsPerWindow = LIVE_LIST_WINDOW_ITEMS;
      var _maxStartIndex = Math.max(0, items.length - _itemsPerWindow);
      var _startIndex = Math.max(0, Math.min(state.catalog.itemWindowStartIndex || 0, _maxStartIndex));
      var windowStartThreshold = _startIndex + LIVE_LIST_WINDOW_BUFFER;
      var windowEndThreshold = _startIndex + _itemsPerWindow - LIVE_LIST_WINDOW_BUFFER;
      if (_currentIndex < windowStartThreshold || _currentIndex >= windowEndThreshold) {
        _startIndex = Math.max(0, Math.min(_currentIndex - LIVE_LIST_WINDOW_BUFFER, _maxStartIndex));
      }
      return {
        startIndex: _startIndex,
        items: items.slice(_startIndex, _startIndex + _itemsPerWindow)
      };
    }
    var columns = catalogGridColumns();
    var itemsPerWindow = columns * POSTER_WINDOW_ROWS;
    var currentIndex = clampIndex(state.catalog.itemIndex, items.length);
    var maxStartIndex = Math.max(0, items.length - itemsPerWindow);
    var previousStartIndex = normalizeCatalogItemWindowStart(state.catalog.itemWindowStartIndex, columns, maxStartIndex);
    var previousEndIndex = Math.min(items.length, previousStartIndex + itemsPerWindow);
    var startIndex = previousStartIndex;
    if (currentIndex < previousStartIndex || currentIndex >= previousEndIndex) {
      var currentRow = Math.floor(currentIndex / columns);
      var desiredStartRow = Math.max(0, currentRow - POSTER_WINDOW_BUFFER_ROWS);
      startIndex = normalizeCatalogItemWindowStart(desiredStartRow * columns, columns, maxStartIndex);
    }
    return {
      startIndex: startIndex,
      items: items.slice(startIndex, startIndex + itemsPerWindow)
    };
  }
  function catalogVisibleItemIndex() {
    return state.catalog.itemIndex - (state.catalog.itemWindowStartIndex || 0);
  }
  function catalogItemWindowNeedsRefresh() {
    if (!dom.itemNodes || !dom.itemNodes.length) {
      return false;
    }
    var visibleIndex = catalogVisibleItemIndex();
    return visibleIndex < 0 || visibleIndex >= dom.itemNodes.length;
  }
  function currentCategories() {
    if (state.catalog.type === FAVORITES_CATALOG_TYPE) {
      return favoriteCatalogCategories();
    }
    if (state.catalog.type === "live") {
      return displayLiveCategories();
    }
    if (state.catalog.type === "movies") {
      return displayMovieCategories();
    }
    if (state.catalog.type === "series") {
      return displaySeriesCategories();
    }
    return state.library[state.catalog.type].categories || [];
  }
  function currentItems() {
    var category = currentCategories()[catalogItemsCategoryIndex()];
    if (!category) return [];
    if (state.catalog.type === FAVORITES_CATALOG_TYPE || category.category_id === FAVORITES_CATEGORY_ID || category.category_id === FAVORITES_MOVIES_CATEGORY_ID || category.category_id === FAVORITES_SERIES_CATEGORY_ID) {
      var tipoFavorito = favoriteTypeForCategoryId(category.category_id);
      return filtrarAdultos(currentFavoriteItems(tipoFavorito), tipoFavorito);
    }
    if (state.catalog.type === "live" && isAllLiveCategoryId(category.category_id)) {
      return allMovieDisplayItems();
    }
    if (state.catalog.type === "movies" && isAllMoviesCategoryId(category.category_id)) {
      return allMovieDisplayItems();
    }
    if (state.catalog.type === "movies" && category.category_id === RECENT_MOVIES_CATEGORY_ID) {
      return filtrarAdultos(recentMovieItems(), "movies");
    }
    if (state.catalog.type === "series" && isAllSeriesCategoryId(category.category_id)) {
      return allMovieDisplayItems();
    }
    if (state.catalog.type === "series" && category.category_id === RECENT_SERIES_CATEGORY_ID) {
      return filtrarAdultos(recentSeriesItems(), "series");
    }
    return state.library[state.catalog.type].itemsByCategory[category.category_id] || [];
  }
  function currentSelectedItem() {
    var items = itemsForCategoryIndex(catalogDetailCategoryIndex());
    if (!items.length) {
      return null;
    }
    var index = catalogUsesSelectionModel() ? state.catalog.selectedItemIndex : state.catalog.itemIndex;
    return items[index] || null;
  }
  function itemsForCategoryIndex(categoryIndex) {
    var category = currentCategories()[categoryIndex];
    if (!category) {
      return [];
    }
    if (state.catalog.type === FAVORITES_CATALOG_TYPE || category.category_id === FAVORITES_CATEGORY_ID || category.category_id === FAVORITES_MOVIES_CATEGORY_ID || category.category_id === FAVORITES_SERIES_CATEGORY_ID) {
      var tipoFavorito = favoriteTypeForCategoryId(category.category_id);
      return filtrarAdultos(currentFavoriteItems(tipoFavorito), tipoFavorito);
    }
    if (state.catalog.type === "live" && isAllLiveCategoryId(category.category_id)) {
      return allMovieDisplayItems();
    }
    if (state.catalog.type === "movies" && isAllMoviesCategoryId(category.category_id)) {
      return allMovieDisplayItems();
    }
    if (state.catalog.type === "movies" && category.category_id === RECENT_MOVIES_CATEGORY_ID) {
      return filtrarAdultos(recentMovieItems(), "movies");
    }
    if (state.catalog.type === "series" && isAllSeriesCategoryId(category.category_id)) {
      return allMovieDisplayItems();
    }
    if (state.catalog.type === "series" && category.category_id === RECENT_SERIES_CATEGORY_ID) {
      return filtrarAdultos(recentSeriesItems(), "series");
    }
    return state.library[state.catalog.type].itemsByCategory[category.category_id] || [];
  }
  function catalogUsesSelectionModel() {
    if (state.catalog.type === FAVORITES_CATALOG_TYPE) {
      return false;
    }
    return isLiveLikeCatalogType(state.catalog.type);
  }
  function catalogUsesSelectedCategoryModel() {
    return catalogUsesSelectionModel() || isPosterCatalogType(state.catalog.type);
  }
  function catalogCategorySelectionIndex() {
    return catalogUsesSelectedCategoryModel() ? state.catalog.selectedCategoryIndex : state.catalog.categoryIndex;
  }
  function catalogItemsCategoryIndex() {
    return catalogUsesSelectedCategoryModel() ? state.catalog.selectedCategoryIndex : state.catalog.categoryIndex;
  }
  function catalogDisplayCategoryIndex() {
    return catalogUsesSelectedCategoryModel() ? state.catalog.selectedCategoryIndex : state.catalog.categoryIndex;
  }
  function catalogDetailCategoryIndex() {
    return catalogUsesSelectionModel() ? state.catalog.selectedItemCategoryIndex : catalogItemsCategoryIndex();
  }
  function catalogDetailItemIndex() {
    return catalogUsesSelectionModel() ? state.catalog.selectedItemIndex : state.catalog.itemIndex;
  }
  function clampIndex(index, length) {
    if (!length) {
      return 0;
    }
    if (index < 0) {
      return 0;
    }
    if (index >= length) {
      return length - 1;
    }
    return index;
  }
  function ensureNodeVisible(node) {
    if (!node || !node.parentElement) {
      return;
    }
    var container = node.parentElement;
    if (container.classList && (container.classList.contains("series-episode-list") || container.classList.contains("series-episode-grid"))) {
      if (!container.scrollHeight || !container.clientHeight) {
        return;
      }
      if (dom.seriesEpisodeNodes && dom.seriesEpisodeNodes[0] === node) {
        container.scrollTop = 0;
        return;
      }
      var maxScrollTop = Math.max(container.scrollHeight - container.clientHeight, 0);
      var _nodeTop = node.offsetTop;
      if (node.offsetParent !== container) {
        var escala = node.getBoundingClientRect().height / (node.offsetHeight || 1) || 1;
        _nodeTop = (node.getBoundingClientRect().top - container.getBoundingClientRect().top) / escala + container.scrollTop;
      }
      var _nodeBottom = _nodeTop + node.offsetHeight;
      var comfortTop = container.scrollTop + 18;
      var comfortBottom = container.scrollTop + container.clientHeight - 28;
      var nextScrollTop = container.scrollTop;
      if (_nodeTop < comfortTop) {
        nextScrollTop = Math.max(_nodeTop - 18, 0);
      } else if (_nodeBottom > comfortBottom) {
        nextScrollTop = Math.min(_nodeBottom - container.clientHeight + 28, maxScrollTop);
      }
      if (nextScrollTop !== container.scrollTop) {
        container.scrollTop = nextScrollTop;
      }
      return;
    }
    var computedStyle = window.getComputedStyle ? window.getComputedStyle(container) : null;
    var paddingTop = computedStyle ? parseFloat(computedStyle.paddingTop || "0") || 0 : 0;
    var paddingBottom = computedStyle ? parseFloat(computedStyle.paddingBottom || "0") || 0 : 0;
    var topMargin = 12 + paddingTop;
    var bottomMargin = 12 + paddingBottom;
    var nodeTop = node.offsetTop;
    var nodeBottom = nodeTop + node.offsetHeight;
    var visibleTop = container.scrollTop;
    var visibleBottom = visibleTop + container.clientHeight;
    if (nodeTop < visibleTop + topMargin) {
      container.scrollTop = Math.max(nodeTop - topMargin, 0);
      return;
    }
    if (nodeBottom > visibleBottom - bottomMargin) {
      container.scrollTop = Math.max(nodeBottom - container.clientHeight + bottomMargin, 0);
    }
  }
  function updateHomeCounts() {
    state.homeCounts.live = state.library.live.categories.length;
    state.homeCounts.movies = state.library.movies.categories.length + (state.library.movies.categories.length && !hasNativeAllMoviesCategory(state.library.movies.categories) ? 1 : 0) + (recentMovieEntries().length ? 1 : 0);
    state.homeCounts.series = state.library.series.categories.length + (state.library.series.categories.length && !hasNativeAllSeriesCategory(state.library.series.categories) ? 1 : 0) + (recentSeriesEntries().length ? 1 : 0);
  }
  function contentCountLabel(type) {
    var count = state.homeCounts[type] || 0;
    if (count === 1) return "1 Categoria";
    return count + " Categorias";
  }
  function resetLibraryState() {
    state.library = {
      live: {
        categories: [],
        itemsByCategory: {}
      },
      movies: {
        categories: [],
        itemsByCategory: {},
        detailsById: {}
      },
      series: {
        categories: [],
        itemsByCategory: {},
        detailsById: {}
      },
      favorites: {
        categories: [],
        itemsByCategory: {}
      }
    };
    clearMovieSearchQuery();
    state.catalog.movieSearchIndexKey = "";
    state.catalog.movieSearchIndexItems = [];
    state.catalog.movieSearchIndexTitles = [];
    state.catalog.seriesDetailPage = "overview";
    state.catalog.seriesDetailFocusZone = "actions";
    state.catalog.seriesDetailSeasonIndex = 0;
    state.catalog.seriesDetailEpisodeIndex = 0;
    state.catalog.seriesDetailSeriesId = "";
    updateHomeCounts();
  }
  function isMediaHubProfile(profile) {
    return Boolean(profile && profile.isPlayerMode);
  }
  function currentMediaGalleryItem() {
    if (!state.media.items.length) {
      return null;
    }
    return state.media.items[clampIndex(state.media.itemIndex, state.media.items.length)] || null;
  }
  function mediaBadgeLabel(item) {
    if (!item) {
      return "ITEM";
    }
    if (item.mediaType === "photo") {
      return "FOTO";
    }
    return item.isLive ? "LIVE" : "VIDEO";
  }
  function mediaGalleryCopy(item) {
    if (!item) {
      return "Conteudo pronto para abrir.";
    }
    var parts = [];
    if (item.groupTitle) {
      parts.push(item.groupTitle);
    }
    if (item.sourceLabel && item.sourceLabel !== item.groupTitle) {
      parts.push(item.sourceLabel);
    }
    parts.push(item.mediaType === "photo" ? "Imagem em tela cheia" : item.isLive ? "Reproducao ao vivo" : "Video sob demanda");
    return parts.join(" | ");
  }
  function mediaGalleryHost(item) {
    return safeHostname(item && item.url) || "URL direta";
  }
  function mediaPromptConfig(mode) {
    if (mode === "xtream") {
      return {
        title: "Acesso Xtream",
        subtitle: "Preencha os dados do servidor para transformar o acesso em uma galeria pronta para uso.",
        fields: [{
          id: "server",
          label: "Servidor",
          placeholder: "http://host:porta",
          secure: false
        }, {
          id: "username",
          label: "Usuario",
          placeholder: "Digite o usuario",
          secure: false
        }, {
          id: "password",
          label: "Senha",
          placeholder: "Digite a senha",
          secure: true
        }]
      };
    }
    if (mode === "m3u") {
      return {
        title: "Lista M3U",
        subtitle: "Cole a URL da playlist, incluindo formatos .m3u ou get.php.",
        fields: [{
          id: "url",
          label: "URL da Lista",
          placeholder: "https://servidor.com/lista.m3u",
          secure: false
        }]
      };
    }
    if (mode === "photo") {
      return {
        title: "Foto por URL",
        subtitle: "Informe um link direto para jpg, png, webp ou outra imagem compativel.",
        fields: [{
          id: "url",
          label: "URL da Foto",
          placeholder: "https://servidor.com/imagem.jpg",
          secure: false
        }]
      };
    }
    if (mode === "video") {
      return {
        title: "Video Direto",
        subtitle: "Use um link direto para .m3u8, .mp4, .ts ou outro stream reproduzivel.",
        fields: [{
          id: "url",
          label: "URL do Video",
          placeholder: "https://servidor.com/video.m3u8",
          secure: false
        }]
      };
    }
    return null;
  }
  function openMediaInputPrompt(mode) {
    var config = mediaPromptConfig(mode);
    if (!config) {
      mediaDebug("prompt.open.missing-config", mode);
      return;
    }
    mediaDebug("prompt.open.begin", {
      mode: mode,
      fieldCount: config.fields.length
    });
    state.media.inputPrompt.open = true;
    state.media.inputPrompt.mode = mode;
    state.media.inputPrompt.title = config.title;
    state.media.inputPrompt.subtitle = config.subtitle;
    state.media.inputPrompt.zone = "keyboard";
    state.media.inputPrompt.fieldIndex = 0;
    state.media.inputPrompt.keyIndex = 0;
    state.media.inputPrompt.shift = false;
    state.media.inputPrompt.fields = config.fields.map(function (field) {
      return {
        id: field.id,
        label: field.label,
        placeholder: field.placeholder,
        secure: Boolean(field.secure),
        value: ""
      };
    });
    mediaDebug("prompt.open.before-render", {
      mode: state.media.inputPrompt.mode,
      zone: state.media.inputPrompt.zone,
      fieldCount: state.media.inputPrompt.fields.length
    });
    render();
    mediaDebug("prompt.open.after-render", {
      mode: state.media.inputPrompt.mode,
      zone: state.media.inputPrompt.zone
    });
  }
  function resetMediaInputPromptState() {
    state.media.inputPrompt.open = false;
    state.media.inputPrompt.mode = "";
    state.media.inputPrompt.title = "";
    state.media.inputPrompt.subtitle = "";
    state.media.inputPrompt.zone = "fields";
    state.media.inputPrompt.fieldIndex = 0;
    state.media.inputPrompt.keyIndex = 0;
    state.media.inputPrompt.shift = false;
    state.media.inputPrompt.fields = [];
  }
  function closeMediaInputPrompt() {
    resetMediaInputPromptState();
    render();
  }
  function currentMediaInputField() {
    return state.media.inputPrompt.fields[state.media.inputPrompt.fieldIndex] || null;
  }
  function mediaInputFieldDisplayValue(field) {
    if (!field || !field.value) {
      return "";
    }
    if (field.secure) {
      return "*".repeat(Math.min(String(field.value).length, 24));
    }
    return String(field.value);
  }
  function appendMediaInputCharacter(value) {
    var field = currentMediaInputField();
    if (!field) {
      return;
    }
    field.value = (String(field.value || "") + String(value || "")).slice(0, MEDIA_INPUT_MAX_LENGTH);
  }
  function removeMediaInputCharacter() {
    var field = currentMediaInputField();
    if (!field) {
      return;
    }
    field.value = String(field.value || "").slice(0, -1);
  }
  function clearMediaInputField() {
    var field = currentMediaInputField();
    if (!field) {
      return;
    }
    field.value = "";
  }
  function activateMediaInputKey(key) {
    if (!key) {
      return;
    }
    if (key.type === "char") {
      appendMediaInputCharacter(key.value);
      renderMediaInputOverlay();
      return;
    }
    if (key.type === "space") {
      appendMediaInputCharacter(" ");
      renderMediaInputOverlay();
      return;
    }
    if (key.type === "backspace") {
      removeMediaInputCharacter();
      renderMediaInputOverlay();
      return;
    }
    if (key.type === "clear") {
      clearMediaInputField();
      renderMediaInputOverlay();
      return;
    }
    if (key.type === "shift") {
      state.media.inputPrompt.shift = !state.media.inputPrompt.shift;
      renderMediaInputOverlay();
      return;
    }
    if (key.type === "apply") {
      submitMediaInputPrompt();
    }
  }
  function submitMediaInputPrompt() {
    return _submitMediaInputPrompt.apply(this, arguments);
  }
  function _submitMediaInputPrompt() {
    _submitMediaInputPrompt = _asyncToGenerator(_regenerator().m(function _callee37() {
      var prompt, fields, xtreamResult, m3uResult, videoResult, photoResult, _t19;
      return _regenerator().w(function (_context37) {
        while (1) switch (_context37.p = _context37.n) {
          case 0:
            prompt = state.media.inputPrompt;
            fields = prompt.fields.reduce(function (accumulator, field) {
              accumulator[field.id] = String(field.value || "").trim();
              return accumulator;
            }, {});
            _context37.p = 1;
            if (!(prompt.mode === "xtream")) {
              _context37.n = 5;
              break;
            }
            if (!(!fields.server || !fields.username || !fields.password)) {
              _context37.n = 2;
              break;
            }
            throw new Error("Preencha servidor, usuario e senha para continuar.");
          case 2:
            showLoading("Importando acesso Xtream...");
            _context37.n = 3;
            return importXtreamToGallery(fields.server, fields.username, fields.password);
          case 3:
            xtreamResult = _context37.v;
            _context37.n = 4;
            return hideLoading();
          case 4:
            closeMediaInputPrompt();
            focusImportedMediaResult(xtreamResult);
            renderMediaHubScreen();
            showToast(mediaImportMessage(xtreamResult, "Acesso importado"), "success");
            return _context37.a(2);
          case 5:
            if (fields.url) {
              _context37.n = 6;
              break;
            }
            throw new Error("Informe a URL antes de salvar.");
          case 6:
            if (!(prompt.mode === "m3u")) {
              _context37.n = 9;
              break;
            }
            showLoading("Baixando lista M3U...");
            _context37.n = 7;
            return importM3uToGallery(fields.url, {
              sourceLabel: "Lista M3U",
              isLive: true
            });
          case 7:
            m3uResult = _context37.v;
            _context37.n = 8;
            return hideLoading();
          case 8:
            closeMediaInputPrompt();
            focusImportedMediaResult(m3uResult);
            renderMediaHubScreen();
            showToast(mediaImportMessage(m3uResult, "Lista importada"), "success");
            return _context37.a(2);
          case 9:
            if (!(prompt.mode === "video")) {
              _context37.n = 10;
              break;
            }
            videoResult = addDirectVideoToGallery(fields.url);
            closeMediaInputPrompt();
            renderMediaHubScreen();
            showToast(mediaImportMessage(videoResult, "Video adicionado"), "success");
            return _context37.a(2);
          case 10:
            if (prompt.mode === "photo") {
              photoResult = addDirectPhotoToGallery(fields.url);
              closeMediaInputPrompt();
              renderMediaHubScreen();
              showToast(mediaImportMessage(photoResult, "Foto adicionada"), "success");
            }
            _context37.n = 13;
            break;
          case 11:
            _context37.p = 11;
            _t19 = _context37.v;
            _context37.n = 12;
            return hideLoading();
          case 12:
            showToast(_t19.message || "Nao foi possivel concluir essa entrada.", "error");
          case 13:
            return _context37.a(2);
        }
      }, _callee37, null, [[1, 11]]);
    }));
    return _submitMediaInputPrompt.apply(this, arguments);
  }
  function mediaImportMessage(result, prefix) {
    var importedResult = result || {
      added: 0,
      limited: false
    };
    if (!importedResult.added) {
      return prefix + ". Nenhum item novo foi encontrado.";
    }
    return prefix + ": " + importedResult.added + (importedResult.added === 1 ? " item novo." : " itens novos.") + (importedResult.limited ? " Limitamos a importacao para manter a TV leve." : "");
  }
  function focusImportedMediaResult(result) {
    if (!result || !result.added || !state.media.items.length) {
      return;
    }
    state.media.focusZone = "gallery";
    state.media.itemIndex = clampIndex(Number.isFinite(result.firstAddedIndex) ? result.firstAddedIndex : state.media.items.length - result.added, state.media.items.length);
  }
  function restoreMediaGallery() {
    var savedItems = safeJsonParse(localStorage.getItem(STORAGE_KEYS.mediaGallery));
    if (!Array.isArray(savedItems)) {
      state.media.items = [];
      return;
    }
    state.media.items = savedItems.map(normalizeMediaGalleryItem).filter(function (item) {
      return Boolean(item && item.url);
    }).slice(0, MEDIA_GALLERY_MAX_ITEMS);
  }
  function saveMediaGallery() {
    localStorage.setItem(STORAGE_KEYS.mediaGallery, JSON.stringify(state.media.items.slice(0, MEDIA_GALLERY_MAX_ITEMS)));
  }
  function clearMediaGallery() {
    state.media.items = [];
    state.media.focusZone = "actions";
    state.media.itemIndex = 0;
    saveMediaGallery();
  }
  function normalizeMediaGalleryItem(item) {
    if (!item || _typeof(item) !== "object") {
      return null;
    }
    var url = String(item.url || "").trim();
    if (!url) {
      return null;
    }
    return {
      id: String(item.id || "media-" + Math.random().toString(36).slice(2, 10)),
      mediaType: item.mediaType === "photo" ? "photo" : "video",
      title: firstNonEmpty(item.title, mediaTitleFromUrl(url), "Sem titulo"),
      url: url,
      sourceLabel: firstNonEmpty(item.sourceLabel, safeHostname(url), "URL direta"),
      groupTitle: String(item.groupTitle || ""),
      isLive: Boolean(item.isLive),
      addedAt: item.addedAt || new Date().toISOString()
    };
  }
  function addMediaGalleryItems(items) {
    var nextItems = state.media.items.slice();
    var knownUrls = Object.create(null);
    nextItems.forEach(function (item) {
      knownUrls[item.url] = true;
    });
    var added = 0;
    var limited = false;
    (items || []).forEach(function (rawItem) {
      if (nextItems.length >= MEDIA_GALLERY_MAX_ITEMS) {
        limited = true;
        return;
      }
      var item = normalizeMediaGalleryItem(rawItem);
      if (!item || knownUrls[item.url]) {
        return;
      }
      knownUrls[item.url] = true;
      nextItems.push(item);
      added += 1;
    });
    state.media.items = nextItems;
    state.media.itemIndex = clampIndex(state.media.itemIndex, state.media.items.length);
    saveMediaGallery();
    return {
      added: added,
      firstAddedIndex: added ? nextItems.length - added : -1,
      limited: limited,
      total: state.media.items.length
    };
  }
  function addDirectVideoToGallery(url) {
    var normalizedUrl = String(url || "").trim();
    if (!normalizedUrl) {
      throw new Error("Informe a URL do video.");
    }
    var result = addMediaGalleryItems([{
      mediaType: "video",
      title: mediaTitleFromUrl(normalizedUrl),
      url: normalizedUrl,
      sourceLabel: "Video Direto",
      isLive: false
    }]);
    if (!result.added) {
      throw new Error("Esse video ja esta na galeria.");
    }
    return result;
  }
  function addDirectPhotoToGallery(url) {
    var normalizedUrl = String(url || "").trim();
    if (!normalizedUrl) {
      throw new Error("Informe a URL da foto.");
    }
    var result = addMediaGalleryItems([{
      mediaType: "photo",
      title: mediaTitleFromUrl(normalizedUrl),
      url: normalizedUrl,
      sourceLabel: "Foto por URL",
      isLive: false
    }]);
    if (!result.added) {
      throw new Error("Essa foto ja esta na galeria.");
    }
    return result;
  }
  function importM3uToGallery(_x25, _x26) {
    return _importM3uToGallery.apply(this, arguments);
  }
  function _importM3uToGallery() {
    _importM3uToGallery = _asyncToGenerator(_regenerator().m(function _callee38(url, options) {
      var playlistUrl, playlistText, parsedItems, result;
      return _regenerator().w(function (_context38) {
        while (1) switch (_context38.n) {
          case 0:
            playlistUrl = String(url || "").trim();
            if (playlistUrl) {
              _context38.n = 1;
              break;
            }
            throw new Error("Informe a URL da lista.");
          case 1:
            _context38.n = 2;
            return fetchText(playlistUrl);
          case 2:
            playlistText = _context38.v;
            parsedItems = parseM3uPlaylist(playlistText, playlistUrl, options || {});
            if (parsedItems.length) {
              _context38.n = 3;
              break;
            }
            throw new Error("Nao encontramos itens reproduziveis nessa lista.");
          case 3:
            result = addMediaGalleryItems(parsedItems);
            if (result.added) {
              _context38.n = 4;
              break;
            }
            throw new Error("Todos os itens dessa lista ja estavam na galeria.");
          case 4:
            return _context38.a(2, result);
        }
      }, _callee38);
    }));
    return _importM3uToGallery.apply(this, arguments);
  }
  function importXtreamToGallery(_x27, _x28, _x29) {
    return _importXtreamToGallery.apply(this, arguments);
  }
  function _importXtreamToGallery() {
    _importXtreamToGallery = _asyncToGenerator(_regenerator().m(function _callee39(serverUrl, username, password) {
      var baseUrl, authPayload, authFlag, categoriesUrl, liveStreamsUrl, categoriesPayload, liveStreamsPayload, categoryNameById, directItems, directResult;
      return _regenerator().w(function (_context39) {
        while (1) switch (_context39.n) {
          case 0:
            baseUrl = normalizeServerBaseUrl(serverUrl);
            if (baseUrl) {
              _context39.n = 1;
              break;
            }
            throw new Error("Informe um servidor Xtream valido.");
          case 1:
            _context39.n = 2;
            return fetchJson(baseUrl + "/player_api.php?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
          case 2:
            authPayload = _context39.v;
            authFlag = authPayload && authPayload.user_info && String(authPayload.user_info.auth) === "1";
            if (authFlag) {
              _context39.n = 3;
              break;
            }
            throw new Error("O servidor respondeu, mas nao autenticou esse acesso.");
          case 3:
            categoriesUrl = baseUrl + "/player_api.php?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&action=" + encodeURIComponent("get_live_categories");
            liveStreamsUrl = baseUrl + "/player_api.php?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&action=" + encodeURIComponent("get_live_streams");
            _context39.n = 4;
            return fetchJson(categoriesUrl).catch(function () {
              return [];
            });
          case 4:
            categoriesPayload = _context39.v;
            _context39.n = 5;
            return fetchJson(liveStreamsUrl);
          case 5:
            liveStreamsPayload = _context39.v;
            categoryNameById = Object.create(null);
            if (Array.isArray(categoriesPayload)) {
              categoriesPayload.forEach(function (category) {
                var categoryId = String(category && category.category_id || "");
                if (!categoryId) {
                  return;
                }
                categoryNameById[categoryId] = firstNonEmpty(category.category_name, category.name, "");
              });
            }
            if (!(Array.isArray(liveStreamsPayload) && liveStreamsPayload.length)) {
              _context39.n = 7;
              break;
            }
            directItems = liveStreamsPayload.filter(function (item) {
              return Boolean(item && item.stream_id);
            }).map(function (item) {
              var liveUrl = firstNonEmpty(item.direct_source, baseUrl + "/live/" + encodeURIComponent(username) + "/" + encodeURIComponent(password) + "/" + encodeURIComponent(item.stream_id) + ".m3u8");
              return {
                mediaType: "video",
                title: firstNonEmpty(item.name, "Canal " + item.stream_id),
                url: liveUrl,
                sourceLabel: safeHostname(baseUrl) || "Xtream",
                groupTitle: firstNonEmpty(categoryNameById[String(item.category_id || "")], item.category_name, ""),
                isLive: true
              };
            });
            directResult = addMediaGalleryItems(directItems);
            if (directResult.added) {
              _context39.n = 6;
              break;
            }
            throw new Error("Todos os canais desse acesso ja estavam na galeria.");
          case 6:
            return _context39.a(2, directResult);
          case 7:
            return _context39.a(2, importM3uToGallery(baseUrl + "/get.php?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&type=m3u_plus&output=ts", {
              sourceLabel: safeHostname(baseUrl) || "Xtream",
              isLive: true
            }));
        }
      }, _callee39);
    }));
    return _importXtreamToGallery.apply(this, arguments);
  }
  function parseM3uPlaylist(playlistText, sourceUrl, options) {
    var lines = String(playlistText || "").split(/\r?\n/);
    var items = [];
    var currentInfo = null;
    for (var index = 0; index < lines.length; index += 1) {
      var line = String(lines[index] || "").trim();
      if (!line) {
        continue;
      }
      if (line.indexOf("#EXTINF") === 0) {
        currentInfo = parseM3uExtInfLine(line);
        continue;
      }
      if (line.charAt(0) === "#") {
        continue;
      }
      var resolvedUrl = resolveMediaUrl(line, sourceUrl);
      if (!resolvedUrl) {
        currentInfo = null;
        continue;
      }
      var mediaType = inferMediaItemType(resolvedUrl);
      items.push({
        mediaType: mediaType,
        title: firstNonEmpty(currentInfo && currentInfo.title, mediaTitleFromUrl(resolvedUrl), "Item importado"),
        url: resolvedUrl,
        sourceLabel: firstNonEmpty(options && options.sourceLabel, currentInfo && currentInfo.groupTitle, safeHostname(sourceUrl), "Lista"),
        groupTitle: currentInfo && currentInfo.groupTitle ? currentInfo.groupTitle : "",
        isLive: mediaType === "photo" ? false : options && Object.prototype.hasOwnProperty.call(options, "isLive") ? Boolean(options.isLive) : true
      });
      currentInfo = null;
      if (items.length >= MEDIA_IMPORT_MAX_ITEMS) {
        break;
      }
    }
    return items;
  }
  function parseM3uExtInfLine(line) {
    var nextInfo = {
      title: "",
      groupTitle: ""
    };
    var match = /group-title="([^"]*)"/i.exec(line);
    if (match && match[1]) {
      nextInfo.groupTitle = match[1];
    }
    var parts = line.split(",");
    if (parts.length > 1) {
      nextInfo.title = parts.slice(1).join(",").trim();
    }
    return nextInfo;
  }
  function resolveMediaUrl(value, sourceUrl) {
    var trimmedValue = String(value || "").trim();
    if (!trimmedValue) {
      return "";
    }
    try {
      return new URL(trimmedValue, sourceUrl || undefined).href;
    } catch (error) {
      return trimmedValue;
    }
  }
  function inferMediaItemType(url) {
    return /\.(apng|avif|bmp|gif|jpe?g|png|svg|webp)(\?|$)/i.test(String(url || "")) ? "photo" : "video";
  }
  function mediaTitleFromUrl(urlValue) {
    try {
      var parsedUrl = new URL(urlValue);
      var path = parsedUrl.pathname.split("/").filter(Boolean).pop() || parsedUrl.hostname || "Midia";
      var decodedPath = decodeURIComponent(path);
      return decodedPath.replace(/\.[a-z0-9]{2,5}$/i, "") || decodedPath;
    } catch (error) {
      var fallback = String(urlValue || "").split("/").pop() || "Midia";
      return fallback.split("?")[0] || "Midia";
    }
  }
  function normalizeServerBaseUrl(urlValue) {
    var trimmedValue = String(urlValue || "").trim();
    if (!trimmedValue) {
      return "";
    }
    var withProtocol = /^https?:\/\//i.test(trimmedValue) ? trimmedValue : "http://" + trimmedValue;
    try {
      var parsedUrl = new URL(withProtocol);
      return parsedUrl.origin;
    } catch (error) {
      return "";
    }
  }
  function openMediaGalleryItem(item) {
    if (!item) {
      showToast("Nenhum item disponivel para abrir.", "error");
      return;
    }
    openPlayer({
      title: item.title,
      eyebrow: item.mediaType === "photo" ? "Foto" : item.isLive ? "Canal via Lista" : "Video Direto",
      url: item.url,
      type: item.mediaType === "photo" ? "gallery-photo" : item.isLive ? "live" : "gallery",
      mediaKind: item.mediaType === "photo" ? "image" : "video",
      item: null,
      seriesItem: null,
      resumeTime: 0
    });
  }
  function formatToday() {
    return new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });
  }
  function formatPlaybackTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "00:00";
    }
    var totalSeconds = Math.floor(seconds);
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor(totalSeconds % 3600 / 60);
    var secs = totalSeconds % 60;
    if (hours > 0) {
      return [hours, minutes, secs].map(function (value, index) {
        return index === 0 ? String(value) : String(value).padStart(2, "0");
      }).join(":");
    }
    return [minutes, secs].map(function (value) {
      return String(value).padStart(2, "0");
    }).join(":");
  }
  function metaCard(label, value) {
    return '<div class="meta-card">' + '<p class="meta-label">' + escapeHtml(label) + "</p>" + '<p class="meta-value">' + escapeHtml(value || "—") + "</p></div>";
  }
  function iconForType(type) {
    if (type === FAVORITES_CATALOG_TYPE) {
      return "assets/live-stream.png";
    }
    var card = HOME_CARDS.find(function (item) {
      return item.id === type;
    });
    return card ? card.icon : "assets/icon.png";
  }
  function catalogLabelForType(type) {
    if (type === FAVORITES_CATALOG_TYPE) {
      return "Favoritos";
    }
    var typeMeta = HOME_CARDS.find(function (card) {
      return card.id === type;
    });
    return typeMeta ? typeMeta.displayTitle || typeMeta.title : "";
  }
  function pedidoMisto(url) {
    return window.location.protocol === "https:" && /^http:/i.test(String(url || ""));
  }
  var PONTE_DAS_LISTAS = "https://tropicalplaymsx.web.app/msx/xapi";
  var servidoresPelaPonte = Object.create(null);
  function origemDe(url) {
    try {
      return new URL(url).origin.toLowerCase();
    } catch (error) {
      return "";
    }
  }
  function ehPedidoDeLista(url) {
    return /\/player_api\.php(\?|$)/.test(String(url || ""));
  }
  function usarPonteParaEsteServidor(url) {
    return ehPedidoDeLista(url) && Boolean(servidoresPelaPonte[origemDe(url)]);
  }
  function marcarServidorPelaPonte(url) {
    var origem = origemDe(url);
    if (origem) {
      servidoresPelaPonte[origem] = true;
    }
  }
  function painelRespondeSemCors(_x30) {
    return _painelRespondeSemCors.apply(this, arguments);
  }
  function _painelRespondeSemCors() {
    _painelRespondeSemCors = _asyncToGenerator(_regenerator().m(function _callee40(url) {
      var controle, corte, _t20;
      return _regenerator().w(function (_context40) {
        while (1) switch (_context40.p = _context40.n) {
          case 0:
            controle = typeof AbortController === "function" ? new AbortController() : null;
            corte = controle ? setTimeout(function () {
              controle.abort();
            }, 8000) : null;
            _context40.p = 1;
            _context40.n = 2;
            return fetch(url, {
              method: "GET",
              mode: "no-cors",
              signal: controle ? controle.signal : undefined
            });
          case 2:
            return _context40.a(2, true);
          case 3:
            _context40.p = 3;
            _t20 = _context40.v;
            return _context40.a(2, false);
          case 4:
            _context40.p = 4;
            if (corte) clearTimeout(corte);
            return _context40.f(4);
          case 5:
            return _context40.a(2);
        }
      }, _callee40, null, [[1, 3, 4, 5]]);
    }));
    return _painelRespondeSemCors.apply(this, arguments);
  }
  function urlPelaPonte(url) {
    var codigo = String(state.code || state.profile && state.profile.userNumber || "").trim();
    return PONTE_DAS_LISTAS + "?code=" + encodeURIComponent(codigo) + "&url=" + encodeURIComponent(url);
  }
  function fetchWithTimeout(_x31, _x32) {
    return _fetchWithTimeout.apply(this, arguments);
  }
  function _fetchWithTimeout() {
    _fetchWithTimeout = _asyncToGenerator(_regenerator().m(function _callee41(url, acceptHeader) {
      var controller, timeoutId, respondeSemCors, _t21;
      return _regenerator().w(function (_context41) {
        while (1) switch (_context41.p = _context41.n) {
          case 0:
            if (isNetworkConnected()) {
              _context41.n = 1;
              break;
            }
            showNetworkUnavailable("A TV esta sem conexao com a internet. Verifique a rede e tente novamente.");
            throw new Error("Sem conexao com a internet.");
          case 1:
            controller = typeof AbortController === "function" ? new AbortController() : null;
            timeoutId = null;
            if (controller) {
              timeoutId = setTimeout(function () {
                controller.abort();
              }, NETWORK_TIMEOUT_MS);
            }
            _context41.p = 2;
            if (!(pedidoMisto(url) || usarPonteParaEsteServidor(url))) {
              _context41.n = 4;
              break;
            }
            _context41.n = 3;
            return fetch(urlPelaPonte(url), {
              method: "GET",
              headers: {
                Accept: acceptHeader
              },
              signal: controller ? controller.signal : undefined
            });
          case 3:
            return _context41.a(2, _context41.v);
          case 4:
            _context41.n = 5;
            return fetch(url, {
              method: "GET",
              headers: {
                Accept: acceptHeader
              },
              signal: controller ? controller.signal : undefined
            });
          case 5:
            return _context41.a(2, _context41.v);
          case 6:
            _context41.p = 6;
            _t21 = _context41.v;
            if (!(_t21 && _t21.name === "AbortError")) {
              _context41.n = 7;
              break;
            }
            throw new Error("O servidor demorou demais para responder.");
          case 7:
            if (!(ehPedidoDeLista(url) && !pedidoMisto(url) && !usarPonteParaEsteServidor(url) && isNetworkConnected())) {
              _context41.n = 10;
              break;
            }
            _context41.n = 8;
            return painelRespondeSemCors(url);
          case 8:
            respondeSemCors = _context41.v;
            if (!respondeSemCors) {
              _context41.n = 10;
              break;
            }
            marcarServidorPelaPonte(url);
            _context41.n = 9;
            return fetch(urlPelaPonte(url), {
              method: "GET",
              headers: {
                Accept: acceptHeader
              }
            });
          case 9:
            return _context41.a(2, _context41.v);
          case 10:
            if (isNetworkError(_t21)) {
              showNetworkUnavailable("Nao foi possivel conectar. Verifique a internet da TV e tente novamente.");
            }
            throw _t21;
          case 11:
            _context41.p = 11;
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            return _context41.f(11);
          case 12:
            return _context41.a(2);
        }
      }, _callee41, null, [[2, 6, 11, 12]]);
    }));
    return _fetchWithTimeout.apply(this, arguments);
  }
  function fetchJson(_x33) {
    return _fetchJson.apply(this, arguments);
  }
  function _fetchJson() {
    _fetchJson = _asyncToGenerator(_regenerator().m(function _callee42(url) {
      var response;
      return _regenerator().w(function (_context42) {
        while (1) switch (_context42.n) {
          case 0:
            _context42.n = 1;
            return fetchWithTimeout(url, "application/json, text/plain, */*");
          case 1:
            response = _context42.v;
            if (response.ok) {
              _context42.n = 2;
              break;
            }
            throw new Error("Servidor respondeu com status " + response.status);
          case 2:
            return _context42.a(2, response.json());
        }
      }, _callee42);
    }));
    return _fetchJson.apply(this, arguments);
  }
  function fetchText(_x34) {
    return _fetchText.apply(this, arguments);
  }
  function _fetchText() {
    _fetchText = _asyncToGenerator(_regenerator().m(function _callee43(url) {
      var response;
      return _regenerator().w(function (_context43) {
        while (1) switch (_context43.n) {
          case 0:
            _context43.n = 1;
            return fetchWithTimeout(url, "text/plain, application/vnd.apple.mpegurl, application/x-mpegURL, */*");
          case 1:
            response = _context43.v;
            if (response.ok) {
              _context43.n = 2;
              break;
            }
            throw new Error("Servidor respondeu com status " + response.status);
          case 2:
            return _context43.a(2, response.text());
        }
      }, _callee43);
    }));
    return _fetchText.apply(this, arguments);
  }
  function formatDate(dateValue) {
    if (!dateValue) return "Sem data";
    var date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return "Sem data";
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  function normalizeDate(value) {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (value.toDate) return value.toDate().toISOString();
    if (value.seconds) return new Date(value.seconds * 1000).toISOString();
    return "";
  }
  function safeJsonParse(value) {
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }
  function safeHostname(urlValue) {
    try {
      return new URL(urlValue).host;
    } catch (error) {
      return urlValue;
    }
  }
  function trimText(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength - 1) + "…" : text;
  }
  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }
})();
