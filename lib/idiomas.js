/*
 * Idiomas do app (1.7.0): portugues (padrao), espanhol e ingles.
 *
 * O app foi escrito em portugues, com os textos espalhados pelo main.js e pelo
 * index.html. Em vez de trocar centenas de pontos do codigo, esta camada traduz o que
 * aparece na TELA: cada texto em portugues que entra na pagina e trocado pela versao do
 * idioma escolhido (dicionario exato e, para frases com numeros, padroes). O app
 * continua escrevendo em portugues; nada muda para quem usa portugues - nesse caso a
 * camada nem liga.
 *
 * Nomes de canais, filmes, series e categorias vem do painel e ficam como estao (so
 * casam com o dicionario se forem exatamente um texto do app, ex.: "Filmes").
 *
 * Escolha guardada no aparelho (localStorage "tropical.idioma"); trocada em
 * Configuracoes > Idioma (main.js chama TPIdioma.proximo()).
 *
 * ES5 puro, sem dependencias: roda tambem nas TVs antigas (Samsung 2016, LG webOS 3).
 * Texto novo no app? Acrescente aqui: "texto em portugues": ["espanhol", "ingles"].
 */
(function () {
    "use strict";

    var CHAVE = "tropical.idioma";
    var IDIOMAS = ["pt", "es", "en"];
    var NOMES = { pt: "Portugues", es: "Espanol", en: "English" };
    var NOMES_BONITOS = { pt: "Português", es: "Español", en: "English" };
    var ATRIBUTOS = ["placeholder", "aria-label", "title", "data-heading", "alt"];

    // ---- Dicionario: "portugues": ["espanol", "english"] --------------------------------
    var D = {
        // Plataformas e marcas
        "Celular Android": ["Celular Android", "Android phone"],
        "Navegador": ["Navegador", "Browser"],

        // Abertura e carregamento
        "Abrindo...": ["Abriendo...", "Opening..."],
        "Carregando...": ["Cargando...", "Loading..."],
        "Restaurando acesso...": ["Restaurando acceso...", "Restoring access..."],
        "Conectando ao servidor...": ["Conectando al servidor...", "Connecting to server..."],
        "Validando acesso...": ["Validando acceso...", "Validating access..."],
        "Carregando canais e filmes...": ["Cargando canales y películas...", "Loading channels and movies..."],
        "Quase pronto...": ["Casi listo...", "Almost ready..."],
        "Pronto!": ["¡Listo!", "Ready!"],
        "Carregando conteudo...": ["Cargando contenido...", "Loading content..."],
        "Carregando todos os canais. Preparando a lista completa para voce.": ["Cargando todos los canales. Preparando la lista completa para ti.", "Loading all channels. Preparing the full list for you."],
        "Carregando todos os filmes...": ["Cargando todas las películas...", "Loading all movies..."],
        "Carregando todas as series...": ["Cargando todas las series...", "Loading all series..."],
        "Atualizando dados...": ["Actualizando datos...", "Updating data..."],
        "Atualizando a tela inicial...": ["Actualizando la pantalla de inicio...", "Updating the home screen..."],
        "Atualizando configuracoes e servidor...": ["Actualizando configuración y servidor...", "Updating settings and server..."],
        "Finalizando a preparacao. Aguarde mais um instante.": ["Terminando la preparación. Espera un momento más.", "Finishing setup. Please wait a moment longer."],

        // Tela do codigo
        "Bem-vindo ao TP Media": ["Bienvenido a TP Media", "Welcome to TP Media"],
        "Use o teclado numerico fixo do controle para inserir seu codigo.": ["Usa el teclado numérico del control remoto para ingresar tu código.", "Use the number keys on your remote to enter your code."],
        "Codigo de acesso": ["Código de acceso", "Access code"],
        "Navegue com as setas do controle e pressione OK para digitar.": ["Navega con las flechas del control y presiona OK para escribir.", "Use the arrow keys on your remote and press OK to type."],
        "Apagar": ["Borrar", "Delete"],
        "Espaco": ["Espacio", "Space"],
        "Limpar": ["Limpiar", "Clear"],
        "Aplicar": ["Aplicar", "Apply"],
        "Salvar": ["Guardar", "Save"],
        "Pronto para validar seu codigo na TV.": ["Listo para validar tu código en la TV.", "Ready to validate your code on the TV."],
        "Pronto para validar outro acesso.": ["Listo para validar otro acceso.", "Ready to validate another access."],
        "Digite um codigo antes de continuar.": ["Ingresa un código antes de continuar.", "Enter a code before continuing."],
        "Validando codigo...": ["Validando código...", "Validating code..."],
        "Nao foi possivel validar o acesso agora. Tente novamente.": ["No fue posible validar el acceso ahora. Inténtalo de nuevo.", "Could not validate access right now. Please try again."],
        "Codigo nao encontrado. Verifique e tente novamente.": ["Código no encontrado. Verifica e inténtalo de nuevo.", "Code not found. Please check it and try again."],
        "Nao foi possivel validar o acesso agora.": ["No fue posible validar el acceso ahora.", "Could not validate access right now."],
        "Acesso validado com sucesso.": ["Acceso validado con éxito.", "Access validated successfully."],
        "Codigo validado com sucesso.": ["Código validado con éxito.", "Code validated successfully."],
        "Falha ao consultar o codigo no Firebase.": ["Error al consultar el código.", "Failed to look up the code."],
        "Firebase indisponivel no momento. Tente novamente em instantes.": ["Servicio no disponible en este momento. Inténtalo de nuevo en unos instantes.", "Service unavailable right now. Please try again shortly."],
        "Tempo esgotado ao consultar o codigo.": ["Se agotó el tiempo al consultar el código.", "Timed out while looking up the code."],
        "O codigo inserido nao foi encontrado.": ["No se encontró el código ingresado.", "The code you entered was not found."],
        "Seu acesso foi pausado ate que o pagamento seja confirmado.": ["Tu acceso está pausado hasta que se confirme el pago.", "Your access is paused until payment is confirmed."],
        "Nao foi possivel restaurar o acesso. Valide seu codigo novamente.": ["No fue posible restaurar el acceso. Valida tu código de nuevo.", "Could not restore access. Please validate your code again."],
        "Nao encontramos um acesso valido salvo nesta TV.": ["No encontramos un acceso válido guardado en esta TV.", "No valid access is saved on this TV."],
        "Acesso restaurado.": ["Acceso restaurado.", "Access restored."],
        "Sessao restaurada.": ["Sesión restaurada.", "Session restored."],
        "Valide um codigo para continuar.": ["Valida un código para continuar.", "Validate a code to continue."],
        "Voltamos para a tela de codigo.": ["Volvimos a la pantalla del código.", "Back to the code screen."],
        "Sessao removida desta TV.": ["Sesión eliminada de esta TV.", "Session removed from this TV."],
        "Voce foi deslogado desta TV porque este mesmo codigo entrou em outro dispositivo.": ["Se cerró tu sesión en esta TV porque este mismo código entró en otro dispositivo.", "You were signed out of this TV because this code was used on another device."],

        // Servidores
        "Perfil": ["Perfil", "Profile"],
        "Escolha um servidor": ["Elige un servidor", "Choose a server"],
        "Servidor": ["Servidor", "Server"],
        "Trocar servidor": ["Cambiar servidor", "Change server"],
        "Nenhum servidor disponivel para este perfil.": ["No hay servidores disponibles para este perfil.", "No servers available for this profile."],
        "Servidor conectado com sucesso.": ["Servidor conectado con éxito.", "Server connected successfully."],
        "Falha ao conectar ao servidor selecionado.": ["Error al conectar al servidor seleccionado.", "Failed to connect to the selected server."],
        "O servidor respondeu, mas nao autenticou esse acesso.": ["El servidor respondió, pero no autenticó este acceso.", "The server responded but did not authenticate this access."],
        "Nenhum servidor selecionado.": ["Ningún servidor seleccionado.", "No server selected."],
        "Nenhum servidor conectado para atualizar.": ["Ningún servidor conectado para actualizar.", "No connected server to update."],
        "Dados do servidor atualizados com sucesso.": ["Datos del servidor actualizados con éxito.", "Server data updated successfully."],
        "Nao foi possivel atualizar os dados do servidor.": ["No fue posible actualizar los datos del servidor.", "Could not update the server data."],
        "Esse codigo nao trouxe servidores. Verifique o cadastro no Firebase.": ["Este código no tiene servidores. Habla con soporte.", "This code has no servers. Please contact support."],
        "Nenhum perfil carregado ainda.": ["Ningún perfil cargado todavía.", "No profile loaded yet."],
        "Operacao demorou demais para responder.": ["La operación tardó demasiado en responder.", "The operation took too long to respond."],
        "A operacao demorou demais. Tente novamente.": ["La operación tardó demasiado. Inténtalo de nuevo.", "The operation took too long. Please try again."],
        "Escolha outra lista vinculada ao seu acesso.": ["Elige otra lista vinculada a tu acceso.", "Choose another list linked to your access."],
        "Servidor conectado": ["Servidor conectado", "Connected server"],
        "Expira em": ["Expira el", "Expires on"],
        "Nao definido": ["No definido", "Not set"],
        "Sem data": ["Sin fecha", "No date"],
        "Sem vencimento": ["Sin vencimiento", "No expiry"],

        // Pagamento e renovacao
        "Pagamento pendente": ["Pago pendiente", "Payment pending"],
        "Renove seu acesso": ["Renueva tu acceso", "Renew your access"],
        "Escaneie o QR Code com o celular para abrir a página de pagamento.": ["Escanea el código QR con el celular para abrir la página de pago.", "Scan the QR code with your phone to open the payment page."],
        "Seu acesso está pausado até a confirmação do pagamento.": ["Tu acceso está pausado hasta la confirmación del pago.", "Your access is paused until payment is confirmed."],
        "Pagando pelo QR Code, a liberação do acesso é instantânea.": ["Pagando con el código QR, el acceso se libera al instante.", "Paying with the QR code unlocks access instantly."],
        "Você também pode falar com o suporte para enviar o comprovante de pagamento.": ["También puedes hablar con soporte para enviar el comprobante de pago.", "You can also contact support to send your payment receipt."],
        "Depois de enviar o comprovante pelo celular, pressione OK em": ["Después de enviar el comprobante por el celular, presiona OK en", "After sending the receipt from your phone, press OK on"],
        "para voltar e validar novamente.": ["para volver y validar de nuevo.", "to go back and validate again."],
        "Já paguei": ["Ya pagué", "I've paid"],
        "Valide novamente após enviar o comprovante.": ["Valida de nuevo después de enviar el comprobante.", "Validate again after sending the receipt."],
        "Aponte a câmera do celular para renovar.": ["Apunta la cámara del celular para renovar.", "Point your phone camera to renew."],
        "Link de pagamento não encontrado. Entre em contato com o suporte.": ["No se encontró el enlace de pago. Comunícate con soporte.", "Payment link not found. Please contact support."],
        "Pressione OK para voltar e validar novamente.": ["Presiona OK para volver y validar de nuevo.", "Press OK to go back and validate again."],
        "Escaneie o QR Code. Pressione OK em Ja paguei para validar novamente.": ["Escanea el código QR. Presiona OK en Ya pagué para validar de nuevo.", "Scan the QR code. Press OK on I've paid to validate again."],
        "Renovar acesso": ["Renovar acceso", "Renew access"],
        "Renove seu acesso pelo QR Code.": ["Renueva tu acceso con el código QR.", "Renew your access with the QR code."],
        "Seu acesso venceu.": ["Tu acceso venció.", "Your access has expired."],
        "Seu acesso vence hoje.": ["Tu acceso vence hoy.", "Your access expires today."],
        "Seu acesso vence amanha.": ["Tu acceso vence mañana.", "Your access expires tomorrow."],
        "Link de renovacao nao encontrado. Fale com o suporte pelo contato das configuracoes.": ["No se encontró el enlace de renovación. Habla con soporte por el contacto de la configuración.", "Renewal link not found. Contact support using the details in Settings."],
        "Aponte a camera do celular para o QR Code. Pagando por ele, a liberacao e na hora e seus dias restantes sao mantidos.": ["Apunta la cámara del celular al código QR. Pagando por él, se libera al instante y se mantienen tus días restantes.", "Point your phone camera at the QR code. Paying through it unlocks instantly and keeps your remaining days."],
        "Vence hoje": ["Vence hoy", "Expires today"],
        "Vence amanha": ["Vence mañana", "Expires tomorrow"],
        "Seu plano vence em": ["Tu plan vence el", "Your plan expires on"],
        "Plano vencido": ["Plan vencido", "Plan expired"],
        "Seu plano Tropical Play venceu. Renove para voltar a assistir.": ["Tu plan Tropical Play venció. Renueva para volver a ver.", "Your Tropical Play plan has expired. Renew to keep watching."],

        // Inicio
        "TV ao Vivo": ["TV en Vivo", "Live TV"],
        "Assista canais ao vivo": ["Mira canales en vivo", "Watch live channels"],
        "Filmes": ["Películas", "Movies"],
        "Explore filmes": ["Explora películas", "Explore movies"],
        "Series": ["Series", "Series"],
        "Descubra series": ["Descubre series", "Discover series"],
        "Favoritos": ["Favoritos", "Favorites"],
        "Configuracoes": ["Configuración", "Settings"],
        "Atualizar": ["Actualizar", "Refresh"],
        "Navegar: ESQUERDA/DIREITA | Selecionar: OK | Voltar: BACK": ["Navegar: IZQUIERDA/DERECHA | Seleccionar: OK | Volver: BACK", "Navigate: LEFT/RIGHT | Select: OK | Back: BACK"],
        "Tela inicial atualizada com os dados mais recentes.": ["Pantalla de inicio actualizada con los datos más recientes.", "Home screen updated with the latest data."],
        "Continue do ponto que voce salvou.": ["Continúa desde donde lo dejaste.", "Pick up where you left off."],
        "Sessao, atualizacao e saida desta TV.": ["Sesión, actualización y salida de esta TV.", "Session, updates and sign-out for this TV."],
        "Refaz a conexao e recarrega os dados do servidor.": ["Rehace la conexión y recarga los datos del servidor.", "Reconnects and reloads the server data."],
        "Setas navegam entre cards e acoes. Enter abre ou executa.": ["Las flechas navegan entre tarjetas y acciones. Enter abre o ejecuta.", "Arrows move between cards and actions. Enter opens or runs."],
        "Voltar para a home": ["Volver al inicio", "Back to home"],
        "← Voltar": ["← Volver", "← Back"],
        "Voltar": ["Volver", "Back"],
        "Categorias": ["Categorías", "Categories"],
        "1 Categoria": ["1 Categoría", "1 Category"],
        "Nenhuma categoria disponivel": ["Ninguna categoría disponible", "No categories available"],
        "1 categoria disponivel": ["1 categoría disponible", "1 category available"],

        // Configuracoes
        "Seu plano, a senha do controle parental e o contato do suporte.": ["Tu plan, la contraseña del control parental y el contacto de soporte.", "Your plan, the parental control PIN and support contact."],
        "Codigo": ["Código", "Code"],
        "Sem codigo": ["Sin código", "No code"],
        "ID do aparelho": ["ID del dispositivo", "Device ID"],
        "Atualizar dados": ["Actualizar datos", "Refresh data"],
        "Recarrega categorias e valida novamente a conexao com o servidor.": ["Recarga las categorías y valida de nuevo la conexión con el servidor.", "Reloads categories and revalidates the server connection."],
        "Mostra o QR Code para renovar seu plano pelo celular.": ["Muestra el código QR para renovar tu plan desde el celular.", "Shows the QR code to renew your plan from your phone."],
        "Controle parental": ["Control parental", "Parental control"],
        "Senha para abrir canais, filmes e series adultos (+18). Senha padrao: 0000. OK para trocar.": ["Contraseña para abrir canales, películas y series para adultos (+18). Contraseña por defecto: 0000. OK para cambiar.", "PIN to open adult channels, movies and series (+18). Default PIN: 0000. OK to change."],
        "Limpar assistidos": ["Borrar vistos", "Clear watched"],
        "Apaga a lista de filmes e series assistidos recentemente.": ["Borra la lista de películas y series vistas recientemente.", "Clears the list of recently watched movies and series."],
        "Sair da conta": ["Cerrar sesión", "Sign out"],
        "Remove este acesso deste aparelho e retorna para a tela de codigo.": ["Quita este acceso de este dispositivo y vuelve a la pantalla del código.", "Removes this access from this device and returns to the code screen."],
        "Idioma": ["Idioma", "Language"],
        "Português, Español ou English. OK para trocar.": ["Português, Español o English. OK para cambiar.", "Português, Español or English. OK to change."],
        "Configuracoes sincronizadas com sucesso.": ["Configuración sincronizada con éxito.", "Settings synced successfully."],
        "Pressione OK de novo para apagar a lista de assistidos.": ["Presiona OK de nuevo para borrar la lista de vistos.", "Press OK again to clear the watched list."],
        "Lista de assistidos apagada.": ["Lista de vistos borrada.", "Watched list cleared."],
        "Use cima/baixo para escolher a opcao. Enter confirma e Back retorna.": ["Usa arriba/abajo para elegir la opción. Enter confirma y Back vuelve.", "Use up/down to choose an option. Enter confirms and Back returns."],
        "Suporte Tropical Play": ["Soporte Tropical Play", "Tropical Play Support"],
        "Fale com a gente": ["Habla con nosotros", "Talk to us"],
        "Carregando contato...": ["Cargando contacto...", "Loading contact..."],
        "Contato indisponivel no momento.": ["Contacto no disponible en este momento.", "Contact unavailable right now."],
        "Informacoes de suporte indisponiveis.": ["Información de soporte no disponible.", "Support information unavailable."],
        "Contato": ["Contacto", "Contact"],
        "E-mail": ["Correo", "Email"],
        "Aponte a camera do celular para falar com o suporte.": ["Apunta la cámara del celular para hablar con soporte.", "Point your phone camera to contact support."],
        "Escaneie para falar com o suporte.": ["Escanea para hablar con soporte.", "Scan to contact support."],

        // Controle parental
        "Conteudo adulto (+18)": ["Contenido para adultos (+18)", "Adult content (+18)"],
        "Digite a senha do controle parental para abrir esta categoria.": ["Ingresa la contraseña del control parental para abrir esta categoría.", "Enter the parental control PIN to open this category."],
        "Digite a senha atual. (A senha padrao e 0000)": ["Ingresa la contraseña actual. (La contraseña por defecto es 0000)", "Enter the current PIN. (The default PIN is 0000)"],
        "Nova senha": ["Nueva contraseña", "New PIN"],
        "Digite a nova senha de 4 numeros.": ["Ingresa la nueva contraseña de 4 números.", "Enter the new 4-digit PIN."],
        "Confirme a nova senha": ["Confirma la nueva contraseña", "Confirm the new PIN"],
        "Digite a nova senha mais uma vez.": ["Ingresa la nueva contraseña una vez más.", "Enter the new PIN once more."],
        "A senha tem 4 numeros.": ["La contraseña tiene 4 números.", "The PIN has 4 digits."],
        "Senha incorreta. Tente de novo.": ["Contraseña incorrecta. Inténtalo de nuevo.", "Wrong PIN. Please try again."],
        "Conteudo adulto liberado ate fechar o app.": ["Contenido para adultos liberado hasta cerrar la app.", "Adult content unlocked until you close the app."],
        "As senhas nao conferem. Digite a nova senha de novo.": ["Las contraseñas no coinciden. Ingresa la nueva contraseña de nuevo.", "The PINs don't match. Enter the new PIN again."],
        "Senha do controle parental alterada.": ["Contraseña del control parental cambiada.", "Parental control PIN changed."],
        "Protegida por senha (+18)": ["Protegida con contraseña (+18)", "PIN protected (+18)"],
        "Senha": ["Contraseña", "Password"],
        "Digite a senha": ["Ingresa la contraseña", "Enter the password"],

        // Catalogo
        "Pesquisar": ["Buscar", "Search"],
        "Busca em todas as categorias": ["Búsqueda en todas las categorías", "Search all categories"],
        "Busca de filmes": ["Búsqueda de películas", "Movie search"],
        "Pesquisar em Todos": ["Buscar en Todos", "Search in All"],
        "Pesquisar em Todos os canais": ["Buscar en Todos los canales", "Search in All channels"],
        "Use o teclado abaixo para filtrar os filmes pelo nome.": ["Usa el teclado de abajo para filtrar las películas por nombre.", "Use the keyboard below to filter movies by name."],
        "Pesquisar series": ["Buscar series", "Search series"],
        "Pesquisar filmes": ["Buscar películas", "Search movies"],
        "Pesquisar canais": ["Buscar canales", "Search channels"],
        "Digite o nome e pressione Voltar para ver os resultados de todas as categorias.": ["Escribe el nombre y presiona Volver para ver los resultados de todas las categorías.", "Type the name and press Back to see results from all categories."],
        "Filtro atual:": ["Filtro actual:", "Current filter:"],
        "Sem filtro ativo": ["Sin filtro activo", "No active filter"],
        "OK reabre o teclado. Voltar fecha a busca e mostra a lista filtrada.": ["OK vuelve a abrir el teclado. Volver cierra la búsqueda y muestra la lista filtrada.", "OK reopens the keyboard. Back closes search and shows the filtered list."],
        "A busca nao esta disponivel neste servidor.": ["La búsqueda no está disponible en este servidor.", "Search is not available on this server."],
        "Nome da serie": ["Nombre de la serie", "Series name"],
        "Digite o nome da serie": ["Escribe el nombre de la serie", "Type the series name"],
        "Nome do canal": ["Nombre del canal", "Channel name"],
        "Digite o nome do canal": ["Escribe el nombre del canal", "Type the channel name"],
        "Nome do filme": ["Nombre de la película", "Movie name"],
        "Digite o nome do filme": ["Escribe el nombre de la película", "Type the movie name"],
        "Digite usando o teclado abaixo": ["Escribe con el teclado de abajo", "Type using the keyboard below"],
        "Nenhum resultado no filtro atual": ["Ningún resultado con el filtro actual", "No results for the current filter"],
        "Clique aqui para abrir o teclado e pesquisar um canal.": ["Haz clic aquí para abrir el teclado y buscar un canal.", "Click here to open the keyboard and search for a channel."],
        "Todos": ["Todos", "All"],
        "Assistidos recentemente": ["Vistos recientemente", "Recently watched"],
        "Assistido recentemente": ["Visto recientemente", "Recently watched"],
        "Assistido recentemente nesta TV.": ["Visto recientemente en esta TV.", "Recently watched on this TV."],
        "Favoritos | Ao vivo": ["Favoritos | En vivo", "Favorites | Live"],
        "Favoritos | Filmes": ["Favoritos | Películas", "Favorites | Movies"],
        "Favoritos | Series": ["Favoritos | Series", "Favorites | Series"],
        "Filme": ["Película", "Movie"],
        "Canal": ["Canal", "Channel"],
        "Serie": ["Serie", "Series"],
        "Episodio": ["Episodio", "Episode"],
        "Temporada": ["Temporada", "Season"],
        "Temporadas": ["Temporadas", "Seasons"],
        "Episodios": ["Episodios", "Episodes"],
        "Temporadas e episodios": ["Temporadas y episodios", "Seasons and episodes"],
        "Sem titulo": ["Sin título", "Untitled"],
        "Canal ao vivo": ["Canal en vivo", "Live channel"],
        "Video sob demanda": ["Video a la carta", "Video on demand"],
        "Ao vivo": ["En vivo", "Live"],
        "AO VIVO": ["EN VIVO", "LIVE"],
        "Favorito": ["Favorito", "Favorite"],
        "Favorita": ["Favorita", "Favorite"],
        "Preview ao vivo": ["Vista previa en vivo", "Live preview"],
        "Agora": ["Ahora", "Now"],
        "Carregando a programacao...": ["Cargando la programación...", "Loading the schedule..."],
        "Programacao nao informada para este canal.": ["Programación no disponible para este canal.", "No schedule available for this channel."],
        "Carregando temporadas...": ["Cargando temporadas...", "Loading seasons..."],
        "Ainda nao encontramos temporadas para esta serie.": ["Todavía no encontramos temporadas para esta serie.", "No seasons found for this series yet."],
        "Carregando episodios...": ["Cargando episodios...", "Loading episodes..."],
        "Carregando episodios desta serie...": ["Cargando episodios de esta serie...", "Loading episodes for this series..."],
        "Nenhum episodio disponivel nesta temporada.": ["Ningún episodio disponible en esta temporada.", "No episodes available in this season."],
        "Nenhum episodio disponivel nesta serie.": ["Ningún episodio disponible en esta serie.", "No episodes available in this series."],
        "OK para assistir | Esquerda volta para as temporadas": ["OK para ver | Izquierda vuelve a las temporadas", "OK to watch | Left goes back to seasons"],
        "Direita ou OK para escolher o episodio": ["Derecha u OK para elegir el episodio", "Right or OK to choose the episode"],
        "Abra os detalhes da serie para ver temporadas e episodios.": ["Abre los detalles de la serie para ver temporadas y episodios.", "Open the series details to see seasons and episodes."],
        "Carregando sinopse...": ["Cargando sinopsis...", "Loading synopsis..."],
        "Sinopse nao disponivel.": ["Sinopsis no disponible.", "Synopsis not available."],
        "Selecione um item para ver detalhes.": ["Selecciona un elemento para ver los detalles.", "Select an item to see details."],
        "Nenhum favorito ainda. Adicione canais ou filmes nesta TV.": ["Todavía no hay favoritos. Agrega canales o películas en esta TV.", "No favorites yet. Add channels or movies on this TV."],
        "Nenhuma categoria encontrada para esse tipo de conteudo.": ["No se encontró ninguna categoría para este tipo de contenido.", "No categories found for this type of content."],
        "Nenhum favorito salvo nesta TV para este servidor.": ["Ningún favorito guardado en esta TV para este servidor.", "No favorites saved on this TV for this server."],
        "Ainda nao carregamos itens desta categoria. Pressione Enter para buscar o conteudo.": ["Todavía no cargamos elementos de esta categoría. Presiona Enter para buscar el contenido.", "Items in this category aren't loaded yet. Press Enter to load them."],
        "Use os favoritos em canais, filmes e series para montar sua lista nesta TV.": ["Usa los favoritos en canales, películas y series para armar tu lista en esta TV.", "Use favorites on channels, movies and series to build your list on this TV."],
        "Use Atualizar na home ou valide o servidor novamente.": ["Usa Actualizar en el inicio o valida el servidor de nuevo.", "Use Refresh on the home screen or validate the server again."],
        "Canais ao vivo adicionados aos favoritos": ["Canales en vivo agregados a favoritos", "Live channels added to favorites"],
        "Filmes adicionados aos favoritos": ["Películas agregadas a favoritos", "Movies added to favorites"],
        "Series adicionadas aos favoritos": ["Series agregadas a favoritos", "Series added to favorites"],
        "Todos os canais reunidos em uma unica lista com busca": ["Todos los canales reunidos en una sola lista con búsqueda", "All channels in a single searchable list"],
        "Todos os filmes reunidos em uma unica grade": ["Todas las películas reunidas en una sola cuadrícula", "All movies in a single grid"],
        "Filmes vistos ou em andamento nesta TV": ["Películas vistas o en curso en esta TV", "Movies watched or in progress on this TV"],
        "Todas as series reunidas em uma unica grade": ["Todas las series reunidas en una sola cuadrícula", "All series in a single grid"],
        "Series vistas ou em andamento nesta TV": ["Series vistas o en curso en esta TV", "Series watched or in progress on this TV"],
        "Catalogo completo": ["Catálogo completo", "Full catalog"],
        "Colecao em destaque": ["Colección destacada", "Featured collection"],
        "Explore esta selecao": ["Explora esta selección", "Explore this selection"],
        "Catalogo de filmes": ["Catálogo de películas", "Movie catalog"],
        "Catalogo de series": ["Catálogo de series", "Series catalog"],
        "Selecione para abrir o filme desta colecao.": ["Selecciona para abrir la película de esta colección.", "Select to open this movie."],
        "Selecione para explorar esta serie.": ["Selecciona para explorar esta serie.", "Select to explore this series."],
        "Canal salvo nos favoritos desta TV.": ["Canal guardado en los favoritos de esta TV.", "Channel saved to this TV's favorites."],
        "Selecione para abrir detalhes ou player.": ["Selecciona para abrir los detalles o el reproductor.", "Select to open details or the player."],
        "Selecionar categoria": ["Seleccionar categoría", "Select category"],
        "Abrir detalhes": ["Abrir detalles", "Open details"],
        "Ver detalhes": ["Ver detalles", "View details"],
        "Abrir filme": ["Abrir película", "Open movie"],
        "Selecionar serie": ["Seleccionar serie", "Select series"],
        "Abrir serie": ["Abrir serie", "Open series"],
        "Abrir canal": ["Abrir canal", "Open channel"],
        "Continuar assistindo": ["Seguir viendo", "Continue watching"],
        "Continuar assistindo?": ["¿Seguir viendo?", "Continue watching?"],
        "Continuar de onde parou": ["Continuar donde lo dejaste", "Continue where you left off"],
        "Abre o ultimo ponto salvo.": ["Abre el último punto guardado.", "Opens the last saved point."],
        "Retoma do ponto salvo nesta TV.": ["Retoma desde el punto guardado en esta TV.", "Resumes from the point saved on this TV."],
        "Assistir do inicio": ["Ver desde el inicio", "Watch from the beginning"],
        "Reinicia este filme desde o comeco.": ["Reinicia esta película desde el principio.", "Restarts this movie from the beginning."],
        "Assistir novamente": ["Ver de nuevo", "Watch again"],
        "Inicia novamente este filme.": ["Inicia de nuevo esta película.", "Starts this movie again."],
        "Inicia o video selecionado.": ["Inicia el video seleccionado.", "Starts the selected video."],
        "Remove este filme da sua lista de favoritos nesta TV.": ["Quita esta película de tu lista de favoritos en esta TV.", "Removes this movie from your favorites on this TV."],
        "Guarda este filme na sua lista de favoritos nesta TV.": ["Guarda esta película en tu lista de favoritos en esta TV.", "Saves this movie to your favorites on this TV."],
        "Remove esta serie da sua lista de favoritos nesta TV.": ["Quita esta serie de tu lista de favoritos en esta TV.", "Removes this series from your favorites on this TV."],
        "Guarda esta serie na sua lista de favoritos nesta TV.": ["Guarda esta serie en tu lista de favoritos en esta TV.", "Saves this series to your favorites on this TV."],
        "Ir para temporadas": ["Ir a temporadas", "Go to seasons"],
        "Abre a lista de temporadas e episodios desta serie.": ["Abre la lista de temporadas y episodios de esta serie.", "Opens the list of seasons and episodes for this series."],
        "Retorna para a grade de capas.": ["Vuelve a la cuadrícula de portadas.", "Returns to the cover grid."],
        "Remover dos favoritos": ["Quitar de favoritos", "Remove from favorites"],
        "Adicionar aos favoritos": ["Agregar a favoritos", "Add to favorites"],
        "Remover favorito": ["Quitar favorito", "Remove favorite"],
        "Favoritar": ["Favorito", "Favorite"],
        "Segure para remover dos favoritos": ["Mantén presionado para quitar de favoritos", "Hold to remove from favorites"],
        "Segure para adicionar aos favoritos": ["Mantén presionado para agregar a favoritos", "Hold to add to favorites"],
        "segure": ["mantén", "hold"],
        "Navegar": ["Navegar", "Navigate"],
        "Conecte um servidor para salvar favoritos nesta TV.": ["Conecta un servidor para guardar favoritos en esta TV.", "Connect a server to save favorites on this TV."],
        "Canal adicionado aos favoritos.": ["Canal agregado a favoritos.", "Channel added to favorites."],
        "Canal removido dos favoritos.": ["Canal quitado de favoritos.", "Channel removed from favorites."],
        "Retomar filme": ["Retomar película", "Resume movie"],
        "Encontramos um ponto salvo nesta TV para este filme. Escolha como deseja continuar.": ["Encontramos un punto guardado en esta TV para esta película. Elige cómo deseas continuar.", "We found a saved point on this TV for this movie. Choose how to continue."],
        "Esse filme ja foi aberto nesta TV. Escolha como deseja continuar.": ["Esta película ya se abrió en esta TV. Elige cómo deseas continuar.", "This movie was already opened on this TV. Choose how to continue."],
        "de onde parou.": ["desde donde lo dejaste.", "from where you left off."],
        "na serie": ["en la serie", "in the series"],
        "na serie selecionada.": ["en la serie seleccionada.", "in the selected series."],
        "Estrutura de episodios": ["Estructura de episodios", "Episode structure"],

        // Player
        "Reproducao": ["Reproducción", "Playback"],
        "Abrindo video": ["Abriendo video", "Opening video"],
        "Abrindo foto": ["Abriendo foto", "Opening photo"],
        "Visualizando foto": ["Viendo foto", "Viewing photo"],
        "Linha do tempo": ["Línea de tiempo", "Timeline"],
        "Pausado": ["Pausado", "Paused"],
        "Reproduzindo": ["Reproduciendo", "Playing"],
        "Ao vivo pausado": ["En vivo pausado", "Live paused"],
        "Pausar": ["Pausar", "Pause"],
        "Continuar": ["Continuar", "Continue"],
        "Adiantar": ["Adelantar", "Skip ahead"],
        "Fechar": ["Cerrar", "Close"],
        "Proximo ▶▶": ["Siguiente ▶▶", "Next ▶▶"],
        "Proximo episodio": ["Siguiente episodio", "Next episode"],
        "Comeca em": ["Empieza en", "Starts in"],
        "segundos": ["segundos", "seconds"],
        "Assistir agora": ["Ver ahora", "Watch now"],
        "Cancelar": ["Cancelar", "Cancel"],
        "Este e o ultimo episodio disponivel.": ["Este es el último episodio disponible.", "This is the last episode available."],
        "Nao foi possivel reproduzir este video.": ["No fue posible reproducir este video.", "Could not play this video."],
        "Nao foi possivel iniciar o video.": ["No fue posible iniciar el video.", "Could not start the video."],
        "Nao foi possivel montar a URL de reproducao.": ["No fue posible armar la URL de reproducción.", "Could not build the playback URL."],
        "Nao foi possivel montar a URL deste episodio.": ["No fue posible armar la URL de este episodio.", "Could not build the URL for this episode."],
        "Nao foi possivel continuar a reproducao.": ["No fue posible continuar la reproducción.", "Could not continue playback."],
        "Esse video ainda nao permite adiantar ou voltar.": ["Este video todavía no permite adelantar o retroceder.", "This video can't be skipped forward or back yet."],
        "Nao foi possivel retomar o video apos adiantar.": ["No fue posible retomar el video después de adelantar.", "Could not resume the video after skipping."],
        "Nao foi possivel adiantar ou voltar este video.": ["No fue posible adelantar o retroceder este video.", "Could not skip forward or back in this video."],
        "Falha ao carregar o stream HLS.": ["Error al cargar la transmisión.", "Failed to load the stream."],
        "Video carregado. Pressione Enter para tentar reproduzir.": ["Video cargado. Presiona Enter para intentar reproducir.", "Video loaded. Press Enter to try playing."],
        "Nao foi possivel controlar este video.": ["No fue posible controlar este video.", "Could not control this video."],
        "Controle de avancar indisponivel nesta TV.": ["Control de adelantar no disponible en esta TV.", "Skip control is not available on this TV."],
        "Este video nao permite adiantar ou voltar neste servidor.": ["Este video no permite adelantar o retroceder en este servidor.", "This video can't be skipped on this server."],
        "Escolha outro servidor para melhorar a estabilidade.": ["Elige otro servidor para mejorar la estabilidad.", "Choose another server to improve stability."],
        "Escolha outro canal. Se continuar travando, troque de servidor.": ["Elige otro canal. Si sigue trabándose, cambia de servidor.", "Choose another channel. If it keeps freezing, change servers."],
        "Tentar novamente": ["Intentar de nuevo", "Try again"],
        "Escolher outro canal": ["Elegir otro canal", "Choose another channel"],
        "Sinal instavel": ["Señal inestable", "Unstable signal"],
        "O canal parou de responder.": ["El canal dejó de responder.", "The channel stopped responding."],
        "Tentamos reconectar automaticamente. Se continuar travando, escolha outro canal ou troque de servidor.": ["Intentamos reconectar automáticamente. Si sigue trabándose, elige otro canal o cambia de servidor.", "We tried to reconnect automatically. If it keeps freezing, choose another channel or change servers."],
        "Tentamos reconectar automaticamente, mas o canal continuou travando. Voce pode tentar novamente, escolher outro canal ou trocar de servidor.": ["Intentamos reconectar automáticamente, pero el canal siguió trabándose. Puedes intentar de nuevo, elegir otro canal o cambiar de servidor.", "We tried to reconnect automatically, but the channel kept freezing. You can try again, choose another channel or change servers."],
        "Retomando de onde parou...": ["Retomando desde donde lo dejaste...", "Resuming where you left off..."],
        "Foto": ["Foto", "Photo"],
        "Return": ["Return", "Return"],

        // Rede
        "Sem conexao": ["Sin conexión", "No connection"],
        "Verifique sua internet": ["Verifica tu internet", "Check your internet"],
        "Nao foi possivel conectar. Verifique a rede da TV e tente novamente.": ["No fue posible conectar. Verifica la red de la TV e inténtalo de nuevo.", "Could not connect. Check the TV's network and try again."],
        "OK: tentar novamente": ["OK: intentar de nuevo", "OK: try again"],
        "Return: sair": ["Return: salir", "Return: exit"],
        "A TV esta sem conexao com a internet. Conecte a rede para continuar.": ["La TV no tiene conexión a internet. Conecta la red para continuar.", "The TV has no internet connection. Connect to a network to continue."],
        "Sem conexao. Continuamos tentando reconectar.": ["Sin conexión. Seguimos intentando reconectar.", "No connection. We keep trying to reconnect."],
        "Sem conexao. Tentando reconectar em segundo plano.": ["Sin conexión. Intentando reconectar en segundo plano.", "No connection. Trying to reconnect in the background."],
        "A TV esta sem conexao com a internet. Verifique o Wi-Fi ou cabo de rede.": ["La TV no tiene conexión a internet. Verifica el Wi-Fi o el cable de red.", "The TV has no internet connection. Check the Wi-Fi or network cable."],
        "A TV esta sem conexao com a internet. Verifique a rede e tente novamente.": ["La TV no tiene conexión a internet. Verifica la red e inténtalo de nuevo.", "The TV has no internet connection. Check the network and try again."],
        "Conexao restaurada.": ["Conexión restaurada.", "Connection restored."],
        "Sem conexao com a internet.": ["Sin conexión a internet.", "No internet connection."],
        "O servidor demorou demais para responder.": ["El servidor tardó demasiado en responder.", "The server took too long to respond."],
        "Nao foi possivel conectar. Verifique a internet da TV e tente novamente.": ["No fue posible conectar. Verifica el internet de la TV e inténtalo de nuevo.", "Could not connect. Check the TV's internet and try again."],

        // Sessao (um ponto por vez)
        "Acesso em uso": ["Acceso en uso", "Access in use"],
        "Usar neste dispositivo?": ["¿Usar en este dispositivo?", "Use on this device?"],
        "Usar este ponto aqui?": ["¿Usar este acceso aquí?", "Use this access here?"],
        "Este codigo esta em outro dispositivo": ["Este código está en otro dispositivo", "This code is on another device"],
        "Este ponto ja esta sendo usado em outro dispositivo.": ["Este acceso ya se está usando en otro dispositivo.", "This access is already in use on another device."],
        "Pressione OK para usar aqui nesta TV ou escolha continuar no outro aparelho.": ["Presiona OK para usarlo aquí en esta TV o elige continuar en el otro dispositivo.", "Press OK to use it here on this TV or choose to continue on the other device."],
        "Um ponto pode ser usado em varios aparelhos, mas nao em dois ao mesmo tempo.": ["Un acceso puede usarse en varios dispositivos, pero no en dos al mismo tiempo.", "One access can be used on several devices, but not on two at the same time."],
        "Seu acesso foi transferido para outro dispositivo.": ["Tu acceso fue transferido a otro dispositivo.", "Your access was moved to another device."],
        "Deseja continuar la ou usar aqui?": ["¿Deseas continuar allá o usarlo aquí?", "Continue there or use it here?"],
        "Sessao transferida": ["Sesión transferida", "Session moved"],
        "Usar aqui": ["Usar aquí", "Use here"],
        "Continuar no outro": ["Continuar en el otro", "Continue on the other"],
        "OK: usar aqui nesta TV": ["OK: usar aquí en esta TV", "OK: use here on this TV"],
        "Sessao transferida para outro dispositivo.": ["Sesión transferida a otro dispositivo.", "Session moved to another device."],
        "Acesso mantido no outro dispositivo.": ["Acceso mantenido en el otro dispositivo.", "Access kept on the other device."],
        "Assumindo acesso nesta TV...": ["Tomando el acceso en esta TV...", "Taking over access on this TV..."],
        "Nao foi possivel assumir este ponto agora.": ["No fue posible tomar este acceso ahora.", "Could not take over this access right now."],
        "Este dispositivo voltou a usar o ponto.": ["Este dispositivo volvió a usar el acceso.", "This device is using the access again."],

        // Sair
        "Sair do app": ["Salir de la app", "Exit the app"],
        "Deseja fechar o TP Media?": ["¿Deseas cerrar TP Media?", "Close TP Media?"],
        "Pressione OK em Sim para sair ou escolha Nao para continuar no aplicativo.": ["Presiona OK en Sí para salir o elige No para seguir en la aplicación.", "Press OK on Yes to exit or choose No to stay in the app."],
        "Sim": ["Sí", "Yes"],
        "Nao": ["No", "No"],
        "Para sair, use o botao de inicio do aparelho ou feche esta aba.": ["Para salir, usa el botón de inicio del dispositivo o cierra esta pestaña.", "To exit, use the device's home button or close this tab."],
        "O formulario desta tela foi reiniciado. Tente abrir novamente.": ["El formulario de esta pantalla se reinició. Intenta abrirlo de nuevo.", "This screen's form was reset. Please try opening it again."],

        // Situacao do servidor (painel)
        "Servidor sem resposta": ["Servidor sin respuesta", "Server not responding"],
        "O servidor respondeu de um jeito inesperado. Tente de novo em alguns minutos.": ["El servidor respondió de forma inesperada. Inténtalo de nuevo en unos minutos.", "The server responded unexpectedly. Try again in a few minutes."],
        "Usuario nao reconhecido": ["Usuario no reconocido", "User not recognized"],
        "O servidor nao aceitou este usuario. Fale com o suporte para conferir.": ["El servidor no aceptó este usuario. Habla con soporte para verificarlo.", "The server did not accept this user. Contact support to check."],
        "Vencido": ["Vencido", "Expired"],
        "O acesso deste servidor venceu.": ["El acceso de este servidor venció.", "This server's access has expired."],
        "Bloqueado pelo servidor": ["Bloqueado por el servidor", "Blocked by the server"],
        "O proprio servidor bloqueou este acesso. Fale com o suporte.": ["El propio servidor bloqueó este acceso. Habla con soporte.", "The server itself blocked this access. Contact support."],
        "Desativado pelo servidor": ["Desactivado por el servidor", "Disabled by the server"],
        "O proprio servidor desativou este acesso. Fale com o suporte.": ["El propio servidor desactivó este acceso. Habla con soporte.", "The server itself disabled this access. Contact support."],
        "O servidor informou este status para o acesso.": ["El servidor informó este estado para el acceso.", "The server reported this status for the access."],
        "Todas as telas deste acesso estao sendo usadas. Feche em outro aparelho se nao abrir.": ["Todas las pantallas de este acceso están en uso. Ciérralo en otro dispositivo si no abre.", "All screens for this access are in use. Close it on another device if it won't open."],
        "Online": ["En línea", "Online"],
        "Cadastro incompleto": ["Registro incompleto", "Incomplete registration"],
        "O endereco deste servidor esta incorreto. Fale com o suporte.": ["La dirección de este servidor es incorrecta. Habla con soporte.", "This server's address is incorrect. Contact support."],
        "Possivel bloqueio na internet": ["Posible bloqueo en internet", "Possible internet block"],
        "O servidor esta no ar, mas esta rede nao deixa conectar. Teste outro Wi-Fi ou os dados do celular.": ["El servidor está en línea, pero esta red no deja conectar. Prueba otro Wi-Fi o los datos del celular.", "The server is up, but this network won't connect. Try another Wi-Fi or your phone's data."],
        "O servidor nao respondeu agora. Pode ser instabilidade dele: tente de novo em alguns minutos.": ["El servidor no respondió ahora. Puede ser inestabilidad: inténtalo de nuevo en unos minutos.", "The server didn't respond. It may be unstable: try again in a few minutes."],
        "Verificando...": ["Verificando...", "Checking..."],

        // Galeria (modo de midia)
        "Acoes": ["Acciones", "Actions"],
        "Galeria": ["Galería", "Gallery"],
        "Conteudo pronto para abrir": ["Contenido listo para abrir", "Content ready to open"],
        "Conteudo pronto para abrir.": ["Contenido listo para abrir.", "Content ready to open."],
        "Adicione uma lista M3U, um video, uma foto ou um acesso Xtream.": ["Agrega una lista M3U, un video, una foto o un acceso Xtream.", "Add an M3U list, a video, a photo or an Xtream login."],
        "Acesso Xtream": ["Acceso Xtream", "Xtream login"],
        "Informe servidor, usuario e senha para importar sua propria lista.": ["Ingresa servidor, usuario y contraseña para importar tu propia lista.", "Enter server, username and password to import your own list."],
        "Lista M3U": ["Lista M3U", "M3U list"],
        "Adicione uma URL .m3u ou get.php e abra seus canais pela galeria.": ["Agrega una URL .m3u o get.php y abre tus canales desde la galería.", "Add a .m3u or get.php URL and open your channels from the gallery."],
        "Video Direto": ["Video directo", "Direct video"],
        "Use links .m3u8, .mp4, .ts e outras URLs de reproducao.": ["Usa enlaces .m3u8, .mp4, .ts y otras URLs de reproducción.", "Use .m3u8, .mp4, .ts and other playback URLs."],
        "Foto por URL": ["Foto por URL", "Photo by URL"],
        "Abra imagens em tela cheia sem sair do aplicativo.": ["Abre imágenes en pantalla completa sin salir de la aplicación.", "Open images full screen without leaving the app."],
        "Limpar Galeria": ["Limpiar galería", "Clear gallery"],
        "Remove os itens adicionados nesta TV e deixa a area pronta para novo uso.": ["Quita los elementos agregados en esta TV y deja el área lista para usar de nuevo.", "Removes the items added on this TV and leaves the area ready to use again."],
        "Voltar ao Codigo": ["Volver al código", "Back to code"],
        "Sai deste modo e retorna para a tela de acesso.": ["Sale de este modo y vuelve a la pantalla de acceso.", "Leaves this mode and returns to the access screen."],
        "Adicionar conteudo": ["Agregar contenido", "Add content"],
        "Nova entrada": ["Nueva entrada", "New entry"],
        "Preencha os campos abaixo e use o teclado para concluir.": ["Completa los campos de abajo y usa el teclado para terminar.", "Fill in the fields below and use the keyboard to finish."],
        "Use as acoes ao lado para montar sua propria galeria nesta TV.": ["Usa las acciones de al lado para armar tu propia galería en esta TV.", "Use the actions alongside to build your own gallery on this TV."],
        "Sua galeria aparece aqui": ["Tu galería aparece aquí", "Your gallery appears here"],
        "Adicione uma lista M3U, um acesso Xtream, um video direto ou uma foto por URL. O aplicativo apenas reproduz o que voce informar.": ["Agrega una lista M3U, un acceso Xtream, un video directo o una foto por URL. La aplicación solo reproduce lo que ingreses.", "Add an M3U list, an Xtream login, a direct video or a photo by URL. The app only plays what you provide."],
        "Foto pronta para visualizacao.": ["Foto lista para ver.", "Photo ready to view."],
        "Item pronto para reproducao.": ["Elemento listo para reproducir.", "Item ready to play."],
        "Escolha um item para abrir em tela cheia.": ["Elige un elemento para abrir en pantalla completa.", "Choose an item to open full screen."],
        "Use OK para abrir a entrada desejada ou reproduzir um item da galeria.": ["Usa OK para abrir la entrada deseada o reproducir un elemento de la galería.", "Use OK to open the entry or play a gallery item."],
        "A galeria ja esta vazia nesta TV.": ["La galería ya está vacía en esta TV.", "The gallery is already empty on this TV."],
        "Galeria limpa com sucesso.": ["Galería limpiada con éxito.", "Gallery cleared successfully."],
        "Imagem em tela cheia": ["Imagen en pantalla completa", "Full-screen image"],
        "Reproducao ao vivo": ["Reproducción en vivo", "Live playback"],
        "URL direta": ["URL directa", "Direct URL"],
        "Preencha os dados do servidor para transformar o acesso em uma galeria pronta para uso.": ["Completa los datos del servidor para convertir el acceso en una galería lista para usar.", "Fill in the server details to turn the login into a ready-to-use gallery."],
        "Usuario": ["Usuario", "Username"],
        "Digite o usuario": ["Ingresa el usuario", "Enter the username"],
        "Cole a URL da playlist, incluindo formatos .m3u ou get.php.": ["Pega la URL de la playlist, incluidos los formatos .m3u o get.php.", "Paste the playlist URL, including .m3u or get.php formats."],
        "URL da Lista": ["URL de la lista", "List URL"],
        "Informe um link direto para jpg, png, webp ou outra imagem compativel.": ["Ingresa un enlace directo a jpg, png, webp u otra imagen compatible.", "Enter a direct link to a jpg, png, webp or other supported image."],
        "URL da Foto": ["URL de la foto", "Photo URL"],
        "Use um link direto para .m3u8, .mp4, .ts ou outro stream reproduzivel.": ["Usa un enlace directo a .m3u8, .mp4, .ts u otra transmisión reproducible.", "Use a direct link to a .m3u8, .mp4, .ts or other playable stream."],
        "URL do Video": ["URL del video", "Video URL"],
        "Preencha servidor, usuario e senha para continuar.": ["Completa servidor, usuario y contraseña para continuar.", "Fill in server, username and password to continue."],
        "Importando acesso Xtream...": ["Importando acceso Xtream...", "Importing Xtream login..."],
        "Acesso importado": ["Acceso importado", "Login imported"],
        "Informe a URL antes de salvar.": ["Ingresa la URL antes de guardar.", "Enter the URL before saving."],
        "Baixando lista M3U...": ["Descargando lista M3U...", "Downloading M3U list..."],
        "Lista importada": ["Lista importada", "List imported"],
        "Video adicionado": ["Video agregado", "Video added"],
        "Foto adicionada": ["Foto agregada", "Photo added"],
        "Nao foi possivel concluir essa entrada.": ["No fue posible completar esta entrada.", "Could not complete this entry."],
        "Limitamos a importacao para manter a TV leve.": ["Limitamos la importación para mantener la TV ligera.", "We limited the import to keep the TV running smoothly."],
        "Informe a URL do video.": ["Ingresa la URL del video.", "Enter the video URL."],
        "Esse video ja esta na galeria.": ["Este video ya está en la galería.", "This video is already in the gallery."],
        "Informe a URL da foto.": ["Ingresa la URL de la foto.", "Enter the photo URL."],
        "Essa foto ja esta na galeria.": ["Esta foto ya está en la galería.", "This photo is already in the gallery."],
        "Informe a URL da lista.": ["Ingresa la URL de la lista.", "Enter the list URL."],
        "Nao encontramos itens reproduziveis nessa lista.": ["No encontramos elementos reproducibles en esta lista.", "No playable items found in this list."],
        "Todos os itens dessa lista ja estavam na galeria.": ["Todos los elementos de esta lista ya estaban en la galería.", "All items in this list were already in the gallery."],
        "Informe um servidor Xtream valido.": ["Ingresa un servidor Xtream válido.", "Enter a valid Xtream server."],
        "Todos os canais desse acesso ja estavam na galeria.": ["Todos los canales de este acceso ya estaban en la galería.", "All channels from this login were already in the gallery."],
        "Item importado": ["Elemento importado", "Item imported"],
        "Lista": ["Lista", "List"],
        "Midia": ["Medios", "Media"],
        "Nenhum item disponivel para abrir.": ["Ningún elemento disponible para abrir.", "No items available to open."],
        "Canal via Lista": ["Canal por lista", "Channel from list"],
        "item novo.": ["elemento nuevo.", "new item."],
        "itens novos.": ["elementos nuevos.", "new items."],

        // Dicas de navegacao (rodape) e retomada
        "Nao foi possivel abrir esta imagem.": ["No fue posible abrir esta imagen.", "Could not open this image."],
        "Escolher": ["Elegir", "Choose"],
        "Confirmar": ["Confirmar", "Confirm"],
        "Abrir teclado": ["Abrir teclado", "Open keyboard"],
        "Fechar busca": ["Cerrar búsqueda", "Close search"],
        "Escolher campo ou tecla": ["Elegir campo o tecla", "Choose field or key"],
        "Digitar ou salvar": ["Escribir o guardar", "Type or save"],
        "Cima/baixo escolhem o episodio, esquerda volta as temporadas": ["Arriba/abajo eligen el episodio, izquierda vuelve a las temporadas", "Up/down choose the episode, left goes back to seasons"],
        "Assistir": ["Ver", "Watch"],
        "Voltar para as temporadas": ["Volver a las temporadas", "Back to seasons"],
        "Cima/baixo escolhem a temporada, direita vai aos episodios": ["Arriba/abajo eligen la temporada, derecha va a los episodios", "Up/down choose the season, right goes to episodes"],
        "Ver episodios": ["Ver episodios", "View episodes"],
        "Voltar para a serie": ["Volver a la serie", "Back to the series"],
        "Esq/dir escolhem, cima/baixo rolam": ["Izq/der eligen, arriba/abajo desplazan", "Left/right choose, up/down scroll"],
        "Confirmar acao": ["Confirmar acción", "Confirm action"],
        "Voltar para as series": ["Volver a las series", "Back to series"],
        "Voltar para os filmes": ["Volver a las películas", "Back to movies"],
        "Selecione este campo para preencher": ["Selecciona este campo para completarlo", "Select this field to fill it in"],
        "Sem nome": ["Sin nombre", "No name"],
        "Sem episodios": ["Sin episodios", "No episodes"],
        "Retomar": ["Retomar", "Resume"],
        "Sem sinopse para este episodio.": ["Sin sinopsis para este episodio.", "No synopsis for this episode."],
        "Comecar do inicio": ["Empezar desde el inicio", "Start from the beginning"],
        "Limpa o ponto salvo para este filme e reinicia do zero.": ["Borra el punto guardado de esta película y empieza de cero.", "Clears the saved point for this movie and starts over."],
        "Busca de series": ["Búsqueda de series", "Series search"],
        "Busca de canais ao vivo": ["Búsqueda de canales en vivo", "Live channel search"],
        "Servidor Atual": ["Servidor actual", "Current server"],

        // Dicas de navegacao
        "Enter avanca se a splash ainda estiver visivel.": ["Enter avanza si la pantalla de inicio sigue visible.", "Enter continues if the splash screen is still showing."],
        "Setas movem o foco, numeros digitam direto, Enter confirma.": ["Las flechas mueven el foco, los números escriben directo, Enter confirma.", "Arrows move the focus, numbers type directly, Enter confirms."],
        "Use cima/baixo para escolher o servidor e Enter para conectar.": ["Usa arriba/abajo para elegir el servidor y Enter para conectar.", "Use up/down to choose the server and Enter to connect."],

        // Tela antiga (splash) e outros
        "Nova base nativa para TV": ["Nueva base nativa para TV", "New native TV app"],
        "Entre com seu codigo e navegue com o controle remoto.": ["Entra con tu código y navega con el control remoto.", "Sign in with your code and navigate with the remote."],
        "O mesmo Tropical Play da Fire TV e do Roku, agora para Smart TV, Android TV, Fire TV, celular e tablet.": ["El mismo Tropical Play de Fire TV y Roku, ahora para Smart TV, Android TV, Fire TV, celular y tablet.", "The same Tropical Play from Fire TV and Roku, now for Smart TV, Android TV, Fire TV, phone and tablet."],
        "Foco pronto para o controle remoto. Essa base ja separa categorias e lista de conteudo sem depender do Flutter.": ["Listo para el control remoto.", "Ready for the remote."],
        "Detalhes prontos para crescer daqui: sinopse, episodios, favoritos e recomendacoes.": ["Detalles: sinopsis, episodios, favoritos y recomendaciones.", "Details: synopsis, episodes, favorites and recommendations."],
        "Canais ao vivo com resposta rapida e foco total em TV.": ["Canales en vivo con respuesta rápida.", "Live channels with fast response."],
        "Catalogo de filmes com visual cinematografico para a sala.": ["Catálogo de películas con aspecto de cine para la sala.", "Movie catalog with a cinema look for your living room."],
        "Estrutura pronta para temporadas, episodios e continuidade.": ["Temporadas, episodios y continuidad.", "Seasons, episodes and continuity."],
        "Vire o celular para assistir.": ["Gira el celular para ver.", "Turn your phone sideways to watch."],
        "O Tropical Play funciona com a tela deitada.": ["Tropical Play funciona con la pantalla horizontal.", "Tropical Play works in landscape."]
    };

    // Palavras que entram no meio das frases montadas pelo app.
    var PALAVRAS = {
        "filme": ["película", "movie"], "filmes": ["películas", "movies"],
        "canal": ["canal", "channel"], "canais": ["canales", "channels"],
        "serie": ["serie", "series"], "series": ["series", "series"],
        "canais ao vivo": ["canales en vivo", "live channels"],
        "Filme": ["Película", "Movie"], "Canal": ["Canal", "Channel"], "Serie": ["Serie", "Series"]
    };

    // ---- Padroes: frases com numeros ou partes variaveis --------------------------------
    // Cada um: [expressao, funcao(m, i) -> texto]; i = 0 espanhol, 1 ingles.
    function p(i, es, en) { return i === 0 ? es : en; }
    function w(palavra, i) { var t = PALAVRAS[palavra]; return t ? t[i] : palavra; }

    var MESES = {
        jan: ["ene.", "Jan"], fev: ["feb.", "Feb"], mar: ["mar.", "Mar"], abr: ["abr.", "Apr"],
        mai: ["may.", "May"], jun: ["jun.", "Jun"], jul: ["jul.", "Jul"], ago: ["ago.", "Aug"],
        set: ["sept.", "Sep"], out: ["oct.", "Oct"], nov: ["nov.", "Nov"], dez: ["dic.", "Dec"]
    };

    var P = [
        // Data do vencimento ("03 de jan. de 2027", toLocaleDateString pt-BR do main.js)
        [/^(\d{1,2}) de (jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\.? de (\d{4})$/, function (m, i) { return p(i, m[1] + " " + MESES[m[2]][0] + " " + m[3], MESES[m[2]][1] + " " + m[1] + ", " + m[3]); }],
        [/^Parado em (.+)$/, function (m, i) { return p(i, "Detenido en ", "Stopped at ") + m[1]; }],
        [/^Duracao (.+)$/, function (m, i) { return p(i, "Duración ", "Duration ") + m[1]; }],
        [/^Versao (.+)$/i, function (m, i) { return p(i, "Versión ", "Version ") + m[1]; }],
        [/^Faltam (\d+) dias$/, function (m, i) { return p(i, "Faltan " + m[1] + " días", m[1] + " days left"); }],
        [/^Seu acesso vence em (\d+) dias\.$/, function (m, i) { return p(i, "Tu acceso vence en " + m[1] + " días.", "Your access expires in " + m[1] + " days."); }],
        [/^O codigo tem no maximo (\d+) digitos\.$/, function (m, i) { return p(i, "El código tiene como máximo " + m[1] + " dígitos.", "The code has at most " + m[1] + " digits."); }],
        [/^(Canal|Filme|Serie) adicionad[oa] aos favoritos\.$/, function (m, i) { return p(i, w(m[1], 0) + (m[1] === "Canal" ? " agregado" : " agregada") + " a favoritos.", w(m[1], 1) + " added to favorites."); }],
        [/^(Canal|Filme|Serie) removid[oa] dos favoritos\.$/, function (m, i) { return p(i, w(m[1], 0) + (m[1] === "Canal" ? " quitado" : " quitada") + " de favoritos.", w(m[1], 1) + " removed from favorites."); }],
        [/^Serie \| (.+)$/, function (m, i) { return p(i, "Serie | ", "Series | ") + m[1]; }],
        [/^Sinal instavel\. Tentando reconectar (\d+)\/(\d+)\.\.\.$/, function (m, i) { return p(i, "Señal inestable. Intentando reconectar ", "Unstable signal. Reconnecting ") + m[1] + "/" + m[2] + "..."; }],
        [/^(\d+) servidor\(es\) disponivel\(is\) para voce escolher\.$/, function (m, i) { return p(i, m[1] + " servidor(es) disponible(s) para elegir.", m[1] + " server(s) available to choose from."); }],
        [/^Nota (.+)$/, function (m, i) { return p(i, "Nota ", "Rating ") + m[1]; }],
        [/^Retomar em (\d[\d:]*)$/, function (m, i) { return p(i, "Retomar en ", "Resume at ") + m[1]; }],
        [/^Retomar (.*?) ?na serie$/, function (m, i) { return p(i, "Retomar " + (m[1] ? m[1] + " " : "") + "en la serie", "Resume " + (m[1] ? m[1] + " " : "") + "in the series"); }],
        [/^Retomar (.*?) ?em (.+)$/, function (m, i) { return p(i, "Retomar " + (m[1] ? m[1] + " " : "") + "en " + m[2], "Resume " + (m[1] ? m[1] + " " : "") + "at " + m[2]); }],
        [/^Tempo para decidir: (\d+)s$/, function (m, i) { return p(i, "Tiempo para decidir: ", "Time to decide: ") + m[1] + "s"; }],
        [/^Aguarde (\d+)s e nao aperte outros botoes do controle\.$/, function (m, i) { return p(i, "Espera " + m[1] + "s y no presiones otros botones del control.", "Wait " + m[1] + "s and don't press other buttons on the remote."); }],
        [/^Use o teclado abaixo para filtrar (filmes|series|canais) pelo nome\.$/, function (m, i) { return p(i, "Usa el teclado de abajo para filtrar " + w(m[1], 0) + " por nombre.", "Use the keyboard below to filter " + w(m[1], 1) + " by name."); }],
        [/^Abra o teclado para buscar (filmes|series|canais) pelo nome\.$/, function (m, i) { return p(i, "Abre el teclado para buscar " + w(m[1], 0) + " por nombre.", "Open the keyboard to search " + w(m[1], 1) + " by name."); }],
        [/^Nenhum[a]? (filme|serie|canal) encontrad[oa]\. Abra para ajustar a busca\.$/, function (m, i) { return p(i, "Ningún resultado de " + w(m[1] + (m[1] === "canal" ? "es" : "s"), 0) + ". Abre para ajustar la búsqueda.", "No " + w(m[1] + (m[1] === "canal" ? "es" : "s"), 1) + " found. Open to adjust the search."); }],
        [/^(\d+) (filme|serie|canal|filmes|series|canais) encontrad[oa]s? para esse filtro\.$/, function (m, i) { return p(i, m[1] + " " + w(m[2], 0) + " para este filtro.", m[1] + " " + w(m[2], 1) + " for this filter."); }],
        [/^Retome em (.+)\.$/, function (m, i) { return p(i, "Retoma en ", "Resume at ") + m[1] + "."; }],
        [/^Retoma em (.+)\.$/, function (m, i) { return p(i, "Retoma en ", "Resumes at ") + m[1] + "."; }],
        [/^Continue (.*?) ?de onde parou\.$/, function (m, i) { return p(i, "Continúa " + (m[1] ? m[1] + " " : "") + "desde donde lo dejaste.", "Continue " + (m[1] ? m[1] + " " : "") + "from where you left off."); }],
        [/^Continue (.*?) ?em (.+)\.$/, function (m, i) { return p(i, "Continúa " + (m[1] ? m[1] + " " : "") + "en " + m[2] + ".", "Continue " + (m[1] ? m[1] + " " : "") + "at " + m[2] + "."); }],
        [/^Retoma (.*?) ?na serie selecionada\.$/, function (m, i) { return p(i, "Retoma " + (m[1] ? m[1] + " " : "") + "en la serie seleccionada.", "Resumes " + (m[1] ? m[1] + " " : "") + "in the selected series."); }],
        [/^Retoma (.*?) ?em (.+)\.$/, function (m, i) { return p(i, "Retoma " + (m[1] ? m[1] + " " : "") + "en " + m[2] + ".", "Resumes " + (m[1] ? m[1] + " " : "") + "at " + m[2] + "."); }],
        [/^Ultimo episodio: (.+)$/, function (m, i) { return p(i, "Último episodio: ", "Last episode: ") + m[1]; }],
        [/^O acesso deste servidor venceu em (.+)\.$/, function (m, i) { return p(i, "El acceso de este servidor venció el ", "This server's access expired on ") + m[1] + "."; }],
        [/^Status: (.+)$/, function (m, i) { return p(i, "Estado: ", "Status: ") + m[1]; }],
        [/^Online - telas em uso \((\d+)\/(\d+)\)$/, function (m, i) { return p(i, "En línea - pantallas en uso (", "Online - screens in use (") + m[1] + "/" + m[2] + ")"; }],
        [/^Busca: "(.*)"$/, function (m, i) { return p(i, "Búsqueda: \"", "Search: \"") + m[1] + "\""; }],
        [/^Pesquisar (filme|serie|canal)$/, function (m, i) { return p(i, "Buscar " + w(m[1], 0), "Search " + w(m[1], 1)); }],
        [/^Servidor respondeu com status (\d+)$/, function (m, i) { return p(i, "El servidor respondió con estado ", "Server responded with status ") + m[1]; }],
        [/^(\d+) categorias disponiveis$/, function (m, i) { return p(i, m[1] + " categorías disponibles", m[1] + " categories available"); }],
        [/^(\d+) Categorias$/, function (m, i) { return p(i, m[1] + " Categorías", m[1] + " Categories"); }],
        [/^Temporada (\S+)$/, function (m, i) { return p(i, "Temporada ", "Season ") + m[1]; }],
        [/^Episodio (\S+)$/, function (m, i) { return p(i, "Episodio ", "Episode ") + m[1]; }],
        [/^(\d+) episodios?$/, function (m, i) { return m[1] + p(i, m[1] === "1" ? " episodio" : " episodios", m[1] === "1" ? " episode" : " episodes"); }],
        [/^(\d+) (item novo|itens novos)\.$/, function (m, i) { return m[1] + p(i, m[1] === "1" ? " elemento nuevo." : " elementos nuevos.", m[1] === "1" ? " new item." : " new items."); }],
        [/^Idioma: (.+)$/, function (m, i) { return p(i, "Idioma: ", "Language: ") + m[1]; }],
        // Por ultimo (generico): "Servidor <nome>" das etiquetas da retomada.
        [/^Servidor (.+)$/, function (m, i) { return p(i, "Servidor ", "Server ") + m[1]; }]
    ];

    // ---- Escolha do idioma ---------------------------------------------------------------
    function lerIdioma() {
        try {
            var v = localStorage.getItem(CHAVE);
            return v === "es" || v === "en" ? v : "pt";
        } catch (e) {
            return "pt";
        }
    }

    var idioma = lerIdioma();

    function normalizar(texto) {
        return String(texto).replace(/\s+/g, " ").replace(/^ | $/g, "");
    }

    function traduzirLinha(linha, i) {
        var chave = normalizar(linha);
        if (!chave) return null;
        if (D.hasOwnProperty(chave)) return D[chave][i];
        for (var k = 0; k < P.length; k += 1) {
            var m = P[k][0].exec(chave);
            if (m) return P[k][1](m, i);
        }
        return null;
    }

    // Texto em portugues -> texto no idioma atual (null = nao ha traducao). Mantem os
    // espacos das pontas e as quebras de linha: cada linha e traduzida por conta.
    function traduzir(texto, lang) {
        lang = lang || idioma;
        if (lang === "pt" || texto == null) return null;
        var i = lang === "es" ? 0 : 1;
        var s = String(texto);
        if (!/[A-Za-z]/.test(s)) return null;
        // Primeiro o texto inteiro (no index.html um paragrafo pode vir quebrado em varias
        // linhas); se nao casar, linha por linha (mensagens do app com "\n").
        var inteiro = traduzirLinha(s, i);
        if (inteiro != null) {
            return /^\s*/.exec(s)[0] + inteiro + /\s*$/.exec(s)[0];
        }
        var mudou = false;
        var partes = s.split(/(\n+)/);
        for (var k = 0; k < partes.length; k += 2) {
            var parte = partes[k];
            var ini = /^\s*/.exec(parte)[0];
            var fim = /\s*$/.exec(parte)[0];
            var t = traduzirLinha(parte, i);
            if (t != null) {
                partes[k] = ini + t + fim;
                mudou = true;
            }
        }
        return mudou ? partes.join("") : null;
    }

    // ---- Na pagina -----------------------------------------------------------------------
    function ignorar(el) {
        while (el && el.nodeType === 1) {
            var tag = el.nodeName;
            if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT" || tag === "TEXTAREA") return true;
            if (el.getAttribute && el.getAttribute("data-sem-traducao") != null) return true;
            el = el.parentNode;
        }
        return false;
    }

    function noDeTexto(no) {
        var atual = no.nodeValue;
        if (no.__tpFeito != null && atual === no.__tpFeito) {
            // Ja traduzido por nos. Mesmo idioma: nada. Outro: refaz a partir do portugues.
            if (no.__tpLang === idioma) return;
            if (idioma === "pt") { no.nodeValue = no.__tpPt; no.__tpFeito = null; return; }
            var outra = traduzir(no.__tpPt);
            if (outra != null) { no.__tpFeito = outra; no.__tpLang = idioma; no.nodeValue = outra; }
            return;
        }
        // Texto novo, escrito pelo app (em portugues).
        no.__tpPt = atual;
        no.__tpFeito = null;
        if (idioma === "pt") return;
        if (ignorar(no.parentNode)) return;
        var t = traduzir(atual);
        if (t != null && t !== atual) {
            no.__tpFeito = t;
            no.__tpLang = idioma;
            no.nodeValue = t;
        }
    }

    function atributos(el) {
        if (!el.getAttribute) return;
        var guardados = el.__tpAttr || (el.__tpAttr = {});
        for (var k = 0; k < ATRIBUTOS.length; k += 1) {
            var nome = ATRIBUTOS[k];
            var atual = el.getAttribute(nome);
            if (atual == null) continue;
            var g = guardados[nome];
            if (g && atual === g.feito) {
                if (g.lang === idioma) continue;
                if (idioma === "pt") { el.setAttribute(nome, g.pt); guardados[nome] = null; continue; }
                var outra = traduzir(g.pt);
                if (outra != null) { g.feito = outra; g.lang = idioma; el.setAttribute(nome, outra); }
                continue;
            }
            if (idioma === "pt") { guardados[nome] = null; continue; }
            var t = traduzir(atual);
            if (t != null && t !== atual) {
                guardados[nome] = { pt: atual, feito: t, lang: idioma };
                el.setAttribute(nome, t);
            }
        }
    }

    function percorrer(raiz) {
        if (!raiz) return;
        if (raiz.nodeType === 3) { noDeTexto(raiz); return; }
        if (raiz.nodeType !== 1 && raiz.nodeType !== 9 && raiz.nodeType !== 11) return;
        if (raiz.nodeType === 1) {
            if (ignorar(raiz)) return;
            atributos(raiz);
        }
        var filho = raiz.firstChild;
        while (filho) {
            percorrer(filho);
            filho = filho.nextSibling;
        }
    }

    var observador = null;
    var observando = false;

    function aoMudar(registros) {
        for (var k = 0; k < registros.length; k += 1) {
            var r = registros[k];
            if (r.type === "characterData") {
                noDeTexto(r.target);
            } else if (r.type === "attributes") {
                atributos(r.target);
            } else {
                for (var j = 0; j < r.addedNodes.length; j += 1) percorrer(r.addedNodes[j]);
            }
        }
    }

    function ligar() {
        if (observando || typeof MutationObserver === "undefined") return;
        if (!observador) observador = new MutationObserver(aoMudar);
        observador.observe(document.documentElement, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
            attributeFilter: ATRIBUTOS
        });
        observando = true;
    }

    function desligar() {
        if (observador && observando) observador.disconnect();
        observando = false;
    }

    function aplicar() {
        document.documentElement.setAttribute("lang", idioma === "pt" ? "pt-BR" : idioma);
        if (idioma === "pt") {
            desligar();
            percorrer(document.documentElement); // devolve o portugues
        } else {
            percorrer(document.documentElement);
            ligar();
        }
    }

    function definir(novo) {
        novo = novo === "es" || novo === "en" ? novo : "pt";
        try { localStorage.setItem(CHAVE, novo); } catch (e) { /* sem localStorage: vale ate fechar */ }
        if (novo === idioma) return idioma;
        idioma = novo;
        aplicar();
        return idioma;
    }

    window.TPIdioma = {
        atual: function () { return idioma; },
        nome: function (lang) { return NOMES[lang || idioma]; },
        nomeBonito: function (lang) { return NOMES_BONITOS[lang || idioma]; },
        idiomas: function () { return IDIOMAS.slice(); },
        definir: definir,
        proximo: function () {
            var k = IDIOMAS.indexOf(idioma);
            return definir(IDIOMAS[(k + 1) % IDIOMAS.length]);
        },
        traduzir: function (texto, lang) {
            var t = traduzir(texto, lang);
            return t == null ? String(texto) : t;
        },
        // Para conferir no computador: textos na tela que ficaram sem traducao.
        faltando: function () {
            var achados = [];
            var lista = document.body ? document.body.getElementsByTagName("*") : [];
            for (var k = 0; k < lista.length; k += 1) {
                var no = lista[k].firstChild;
                while (no) {
                    if (no.nodeType === 3 && /[a-z]{3}/i.test(no.nodeValue) && no.__tpFeito == null && !ignorar(lista[k])) {
                        var v = normalizar(no.nodeValue);
                        if (v && achados.indexOf(v) < 0) achados.push(v);
                    }
                    no = no.nextSibling;
                }
            }
            return achados;
        }
    };

    // Ja comeca no idioma escolhido: liga antes do corpo da pagina chegar, e o que o
    // navegador for montando ja entra traduzido.
    if (idioma !== "pt") {
        document.documentElement.setAttribute("lang", idioma);
        ligar();
        document.addEventListener("DOMContentLoaded", function () { percorrer(document.documentElement); });
    }
})();
