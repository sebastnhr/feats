const feats = [
    {
        "name": "Abrazo de la Tierra",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Fue 15, Presa mejorada o agarrón mejorado, Impacto sin arma mejorado",
        "benefit": "Daño adicional mientras sujetas a un oponente",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Abstención de materiales",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Lanzas conjuros sin componentes materiales",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Acelerar expulsión",
        "category": "General",
        "type": "Divino",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes",
        "benefit": "Puedes expulsar muertos vivientes como acción gratuita",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Acrobático",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de Piruetas y Saltar",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Afinidad con los animales",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de Montar y Trato con animales",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Agarre del mono",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Ataque base +1",
        "benefit": "Usas armas cuerpo a cuerpo más grandes con un penalizador -2",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ágil",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de Equilibrio y Escapismo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Aguante",
        "category": "General",
        "type": "Supervivencia",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +4 en las pruebas o salvaciones para resistir daño no letal",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Alabarda Giratoria",
        "category": "Estilo",
        "type": "Combate",
        "prerequisites": "Reflejos de combate, Combate con dos armas, Soltura con un arma (alabarda)",
        "benefit": "Bonificador de esquiva +1 a CA y ataque adicional con alabarda",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Alas de águila",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "Te crecen alas que te permiten volar a 60 pies durante 1 hora",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Alerta",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de Avistar y Escuchar",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Alma pía",
        "category": "Fe",
        "type": "Divino",
        "prerequisites": "Saber (religión) 2 rangos",
        "benefit": "Gastas 1 punto de fe para evitar daño mortal",
        "special": "Proporciona 4 puntos de fe iniciales",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Amado por los liches",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Marca del Mal",
        "benefit": "Beneficios al interactuar con liches",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Amigo animal",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Car 15, rasgo de clase empata animal",
        "benefit": "Bonificador +4 a las pruebas de empatía salvaje con animales y bestias mágicas buenas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Amigo de las sabandijas",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Carisma 15",
        "benefit": "Afinidad con criaturas vermin",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ampliar conjuro",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Dobla el alcance del conjuro",
        "special": "Ocupa espacio de conjuro +1 nivel",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Aplicado",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de Descifrar escritura y Tasación",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Apresurar aptitud sortílega",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Nivel 10 de lanzador",
        "benefit": "Usa aptitud sortílega como acción libre",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Apresurar conjuro",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Lanzas un conjuro como acción gratuita",
        "special": "Ocupa espacio de conjuro +4 niveles",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Armadura natural mejorada",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Armadura natural, Con 13",
        "benefit": "La armadura natural aumenta en 1",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Armas gloriosas",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes",
        "benefit": "Las armas de los aliados obtienen alineamiento para superar la RD",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Arrollar mejorado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque poderoso, Fue 13",
        "benefit": "Bonificador +4 a los ataques de arrollar; sin ataque de oportunidad",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque al galope",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Combatir desde una montura",
        "benefit": "Puedes moverte antes y después de cargar con una montura",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque del águila",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Sab 13, Romper arma mejorado, Impacto sin arma mejorado",
        "benefit": "Sumas el modificador de Sab al daño contra objetos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque elástico",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +4, Movilidad",
        "benefit": "Puedes moverte antes y después de un ataque cuerpo a cuerpo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque en vuelo",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Velocidad de vuelo",
        "benefit": "Puedes atacar mientras vuelas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque intuitivo",
        "category": "Elevada, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +1",
        "benefit": "Emplea el modificador de Sab en lugar del de Fue a las tiradas de ataque con armas sencillas y naturales",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque múltiple",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Tres armas naturales o más",
        "benefit": "Los ataques secundarios naturales solo sufren -2 de penalizador",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque natural mejorado",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Ataque natural, ataque base +4",
        "benefit": "El daño de un ataque natural se incrementa en un grado",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque natural vil",
        "category": "Vil",
        "type": "Combate",
        "prerequisites": "Ataque base +5, ataque natural que inflija al menos 1d8 puntos de daño",
        "benefit": "Ataques naturales mejorados con energía vil",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque poderoso",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Fue 13",
        "benefit": "Puedes cambiar bonificador de ataque por daño (máx. tu ataque base)",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque poderoso predilecto",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de enemigo predilecto, Ataque poderoso, ataque base +4",
        "benefit": "Cambias el bonificador de ataque por daño en mejor proporción contra enemigos predilectos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque de torbellino",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +4, Ataque elástico, Esquiva, Movilidad, Pericia en combate",
        "benefit": "Un ataque cuerpo a cuerpo contra cada oponente a no más de 5 pies",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataque tumbado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 15, Reflejos rápidos, ataque base +2",
        "benefit": "Atacas tumbado sin penalizador y te levantas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataques aturdidores adicionales",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Puñetazo aturdidor, ataque base +2",
        "benefit": "Tu número de ataques aturdidores al día aumenta en 2",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ataques aturdidores rápidos",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Reflejos de combate, Puñetazo aturdidor, ataque base +6",
        "benefit": "Usas un ataque aturdidor adicional por asalto",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Atlético",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de Nadar y Trepar",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Atrapar flechas",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 15, Desviar flechas, Impacto sin arma mejorado",
        "benefit": "Puedes atrapar un ataque a distancia desviado",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Aumentar convocación",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Soltura con una escuela de magia (conjuración)",
        "benefit": "Las criaturas convocadas obtienen +4 a Fue y +4 a Con",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Autosuficiente",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de Sanar y Supervivencia",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Azote de gigantes",
        "category": "Táctica, Guerrero",
        "type": "Combate",
        "prerequisites": "Tamaño Mediano o menor, Piruetas 5 rangos, ataque base +6",
        "benefit": "Maniobras tácticas contra enemigos grandes",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Azote de mortales",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Una aptitud sortílega causa daño adicional a criaturas vivas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Bastón rápido",
        "category": "Estilo",
        "type": "Combate",
        "prerequisites": "Pericia en combate, Esquiva, Combate con dos armas, Soltura con un arma (bastón)",
        "benefit": "Bonificador de esquiva mejorado al usar Pericia en combate con bastón",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Beso de ninfa",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas basadas en Car, bonificador +1 a los TS contra conjuros, 1 punto adicional de habilidad por nivel",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Blanco escurridizo",
        "category": "Táctica",
        "type": "Combate",
        "prerequisites": "Esquiva, Movilidad, ataque base +6",
        "benefit": "Maniobras tácticas defensivas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Caballero de las estrellas",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +1 de suerte a una tirada o prueba una vez al día",
        "special": "No se puede combinar con Sirviente de los cielos o Favorito de los compañeros",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Carga de caballería",
        "category": "Táctica, Guerrero",
        "type": "Combate",
        "prerequisites": "Combatir desde una montura, Carga impetuosa, ataque base +6",
        "benefit": "Maniobras tácticas montadas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Carga impetuosa",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque al galope, Combatir desde una montura",
        "benefit": "Doble daño cuando se carga con una montura",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Cargar con el escudo",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Golpe con el escudo mejorado, ataque base +3",
        "benefit": "Ataque de derribo con escudo gratuito después de una carga",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Carrera",
        "category": "General",
        "type": "Movimiento",
        "prerequisites": "Ninguno",
        "benefit": "Velocidad +5' con armadura ligera o sin armadura",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Castigar elemental",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar criaturas de subtipo elemental",
        "benefit": "Daño adicional contra criaturas elementales",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Castigar al mal a distancia",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud de clase castigar al mal",
        "benefit": "Castigar al mal con armas a distancia",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Castigo elevado",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud de clase castigar al mal",
        "benefit": "Arma de alineamiento bueno cuando se castiga al mal",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Castigo incrementado",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de castigar, ataque base +4",
        "benefit": "Número de intentos de castigar al día aumenta en 2",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Castigo mejorado",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Car 13, aptitud de castigar",
        "benefit": "Tu castigo obtiene un alineamiento para superar la RD y +1d6 al daño",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Colmillo de oso",
        "category": "Estilo",
        "type": "Combate",
        "prerequisites": "Fue 15, Ataque poderoso, Combate con dos armas, Soltura con un arma (daga), Soltura con un arma (hacha)",
        "benefit": "Intento de presa gratuito al golpear con hacha y daga",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Combate brutal",
        "category": "Táctica, Guerrero",
        "type": "Combate",
        "prerequisites": "Romper arma mejorado, Ataque poderoso, ataque base +6",
        "benefit": "Maniobras tácticas de fuerza",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Combate con dos armas",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 15",
        "benefit": "Reduce en 2 los penalizadores por combatir con dos armas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Combate con dos armas mayor",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +11, Combate con dos armas, Combate con dos armas mejorado, Des 19",
        "benefit": "Obtienes un tercer ataque con la mano torpe",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Combate con dos armas mejorado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +6, Combate con dos armas, Des 17",
        "benefit": "Obtienes un segundo ataque con la mano torpe",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Combate con múltiples armas",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 13, tres o más manos",
        "benefit": "Reduce penalizadores al combatir con múltiples armas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Combatir desde una montura",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Montar 1 rango",
        "benefit": "Niega los impactos causados a la montura con una prueba de Montar",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Compañero elevado",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud de adquirir un nuevo compañero animal, requisito de nivel mínimo",
        "benefit": "Elecciones adicionales de compañero animal (bestias mágicas buenas)",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Competencia con arma exótica",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +1",
        "benefit": "Sin penalizador de ataque con un arma exótica específica",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Competencia con arma marcial",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Ninguno",
        "benefit": "Sin penalizador de ataque con un arma marcial específica",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Competencia con arma sencilla",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Ninguno",
        "benefit": "Anula penalizador -4 en las tiradas de ataque con armas sencillas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Competencia con armadura (ligera)",
        "category": "General",
        "type": "Armadura",
        "prerequisites": "Ninguno",
        "benefit": "Anula el penalizador de armadura en las tiradas de ataque",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Competencia con armadura (intermedia)",
        "category": "General",
        "type": "Armadura",
        "prerequisites": "Competencia con armadura (ligera)",
        "benefit": "Anula el penalizador de armadura en las tiradas de ataque",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Competencia con armadura (pesada)",
        "category": "General",
        "type": "Armadura",
        "prerequisites": "Competencia con armadura (intermedia)",
        "benefit": "Anula el penalizador de armadura en las tiradas de ataque",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Competencia con escudo",
        "category": "General",
        "type": "Armadura",
        "prerequisites": "Ninguno",
        "benefit": "Anula el penalizador de armadura en las tiradas de ataque",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Competencia con escudo pavés",
        "category": "General",
        "type": "Armadura",
        "prerequisites": "Competencia con escudo",
        "benefit": "Anula el penalizador de armadura en las tiradas de ataque",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Conjurar en combate",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +4 en las pruebas de Concentración al lanzar conjuros a la defensiva",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Conjurar en silencio",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Lanzas conjuros sin el componente verbal",
        "special": "Ocupa espacio de conjuro +1 nivel",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Conjurar sin moverse",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Lanzas conjuros sin el componente somático",
        "special": "Ocupa espacio de conjuro +1 nivel",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Conjuro con alcance",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Los conjuros de toque se convierten en un rayo de 30' de alcance",
        "special": "Ocupa espacio de conjuro +2 niveles",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Conjuro rápido",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Disminuye el tiempo de lanzamiento de algunos conjuros",
        "special": "Ocupa espacio de conjuro +1 nivel",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Conjuro transdimensional",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Afectas a criaturas incorporales, etéreas o sombrías",
        "special": "Ocupa espacio de conjuro +1 nivel",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Conjuros naturales",
        "category": "Salvaje",
        "type": "Conjuros",
        "prerequisites": "Aptitud para usar forma salvaje, Sab 13",
        "benefit": "Puedes lanzar conjuros mientras usas forma salvaje",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Conjuros penetrantes",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de nivel de lanzador para superar la resistencia a conjuros",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Conjuros penetrantes mayores",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Conjuros penetrantes",
        "benefit": "Bonificador +4 a las pruebas de nivel de lanzador para superar la resistencia a conjuros",
        "special": "Se apila con Conjuros penetrantes",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Consagrar aptitud sortílega",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Cualquier alineamiento bueno",
        "benefit": "Añade el descriptor 'bien' a una aptitud sortílega",
        "special": "Hasta 3 veces/día por aptitud",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Consagrar conjuro",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Cualquier alineamiento bueno",
        "benefit": "El conjuro obtiene el descriptor bueno",
        "special": "Ocupa espacio de conjuro +1 nivel",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Consagrar desencadenante de conjuros",
        "category": "Elevada",
        "type": "Conjuros",
        "prerequisites": "Fabricar varita o Fabricar bastón, aptitud para expulsar muertos vivientes",
        "benefit": "Emplea la aptitud de expulsión para añadir el descriptor 'bien' a un conjuro activado",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Contraconjuro mejorado",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Contraconjurar con un escudo de la misma escuela",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Convocación espontánea",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Saber (religión) 4 rangos, alineamiento parcialmente neutral",
        "benefit": "Cambia tus conjuros por convocar aliado natural",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Correr",
        "category": "General",
        "type": "Movimiento",
        "prerequisites": "Ninguno",
        "benefit": "Corres a 5 veces la velocidad normal, bonificador +4 en las pruebas de Saltar después de una carrera inicial",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Corromper aptitud sortílega",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Cualquier alineamiento maligno",
        "benefit": "Añade el descriptor maligno a una aptitud sortílega",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Corromper conjuro",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Cualquier alineamiento maligno",
        "benefit": "El conjuro obtiene el descriptor maligno",
        "special": "Ocupa espacio de conjuro +1 nivel",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Creyente auténtico",
        "category": "General",
        "type": "Divino",
        "prerequisites": "Rendir culto a una deidad, alineamiento a un paso del de la deidad",
        "benefit": "Obtienes un bonificador +2 en una salvación cada día",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Crítico mejorado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +8, Competencia con arma",
        "benefit": "Duplica el rango de amenaza de un arma",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Crítico potenciado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Soltura con el arma, ataque base +4, base +5 a los TS Fort.",
        "benefit": "Bonificador +4 al confirmar el crítico de un arma",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Curación acelerada",
        "category": "General",
        "type": "Supervivencia",
        "prerequisites": "Base +5 a los TS de Fort.",
        "benefit": "Te curas puntos de golpe y característica más rápido de lo normal",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Curación aumentada",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Sanar 4 rangos",
        "benefit": "Los conjuros curativos hacen +2 por nivel de conjuro",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Curación elemental",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para reprender criaturas de subtipo elemental",
        "benefit": "Cura criaturas elementales",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Curación espontánea",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Saber (religión) 4 rangos, no maligno",
        "benefit": "Cambia tus conjuros por sortilegios de curar de tu lista",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Curación sagrada",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Sanar 8 rangos, aptitud para expulsar muertos vivientes",
        "benefit": "Proporciona curación rápida 3 a aliados cercanos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Daño atenuado sagrado",
        "category": "Elevada, Guerrero",
        "type": "Combate",
        "prerequisites": "Impacto atenuado",
        "benefit": "Transforma el daño adicional y el de castigo al mal en daño no letal",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Dedos ágiles",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de Abrir cerraduras e inutilizar mecanismo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Defensa con broquel mejorada",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Competencia con escudo",
        "benefit": "Aplicas el bonificador de escudo del broquel a la CA mientras usas el arma en la mano torpe",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Defensa con dos armas",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Combate con dos armas",
        "benefit": "En la mano torpe otorga un bonificador +1 de escudo a la CA",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Defensa con dos armas mayor",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 19, Defensa con dos armas mejorada, Defensa con dos armas, Combate con dos armas, ataque base +11",
        "benefit": "Obtienes un bonificador de escudo al luchar con dos armas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Defensa con dos armas mejorada",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 17, Defensa con dos armas, Combate con dos armas, ataque base +6",
        "benefit": "Obtienes un bonificador de escudo al luchar con dos armas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Defensa pía",
        "category": "Fe",
        "type": "Divino",
        "prerequisites": "Saber (religión) 2 rangos",
        "benefit": "Gastas 1 punto de fe para obtener +1d6 en un ataque, salvación o prueba",
        "special": "Proporciona 4 puntos de fe iniciales",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Deformidad (descarnado)",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Deformidad voluntaria",
        "benefit": "Cambios físicos viles",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Deformidad (manos con garras)",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Deformidad voluntaria",
        "benefit": "Cambios físicos viles",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Deformidad (obeso)",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Deformidad voluntaria",
        "benefit": "Cambios físicos viles",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Deformidad (ojos)",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Deformidad voluntaria",
        "benefit": "Cambios físicos viles",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Deformidad (rostro)",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Deformidad voluntaria",
        "benefit": "Cambios físicos viles",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Deformidad voluntaria",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Ninguno",
        "benefit": "Prerrequisito para otras deformidades",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Derribo mejorado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Int 13, Pericia en combate",
        "benefit": "Bonificador +4 a los intentos de derribo, sin ataque de oportunidad",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Desarmar a distancia",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 15, Disparo a bocajarro, Disparo preciso, ataque base +5",
        "benefit": "Usas un arma a distancia para desarmar a un enemigo a menos de 30 pies",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Desarme mejorado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Pericia en combate",
        "benefit": "Bonificador +4 a los intentos de desarmar, sin ataque de oportunidad",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Desenvainado rápido",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +1",
        "benefit": "Desenvainar armas como acción gratuita",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Desjarretar",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de ataque furtivo, ataque base +4",
        "benefit": "Usas 2d6 de daño de ataque furtivo para reducir a la mitad la velocidad del oponente",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Desviar flechas",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 13, Impacto sin arma mejorado",
        "benefit": "Desvías un ataque a distancia por asalto",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Discípulo arcano",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Saber (religión) 4 rangos, Conoc. De conjuros 4 rangos, alineamiento de la deidad",
        "benefit": "Añades conjuros de un dominio a tu lista de clase",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Discípulo de las tinieblas",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Ninguno",
        "benefit": "Conexión con fuerzas oscuras",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Discípulo del sol",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes, alineamiento bueno",
        "benefit": "Puedes destruir muertos vivientes en vez de simplemente expulsarlos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparar desde una montura",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Combatir desde una montura",
        "benefit": "Reduce a la mitad la penalización por realizar ataques a distancia desde una montura",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparar desde una montura mejorado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Montar 1 rango, Disparar desde una montura, Combatir desde una montura",
        "benefit": "Reduces o eliminas los penalizadores de ataque con armas a distancia sobre una montura",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparo a bocajarro",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +1 al ataque a distancia y daño a menos de 30 pies",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparo a la carrera",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +4, Des 13, Disparo a bocajarro, Esquiva, Movilidad",
        "benefit": "Puedes mover antes y después de un ataque a distancia",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparo a larga distancia",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Disparo a bocajarro",
        "benefit": "Aumenta el alcance en un 50% o un 100%",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparo certero",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Disparo a bocajarro, Disparo preciso, ataque base +3",
        "benefit": "Reduces a la mitad el bonificador por cobertura del oponente",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparo preciso",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Disparo a bocajarro",
        "benefit": "Anula el penalizador -4 por disparar a un combate cuerpo a cuerpo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparo preciso mejorado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +11, Des 19, Disparo a bocajarro, Disparo preciso",
        "benefit": "Ignora cualquier cobertura/ocultación inferior a total en los ataques a distancia",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparo rápido",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 13, Disparo a bocajarro",
        "benefit": "Un ataque a distancia adicional cada asalto",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparo rápido mejorado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Disparos múltiples, Disparo a bocajarro, Disparo rápido",
        "benefit": "Ignoras el penalizador -2 al usar Disparo rápido",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Disparos múltiples",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +6, Des 17, Disparo a bocajarro, Disparo rápido",
        "benefit": "Disparas dos o más flechas simultáneamente",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Doblegar al profano",
        "category": "Elevada",
        "type": "Combate",
        "prerequisites": "Fue 13, Ataque poderoso, Golpe resonante, ataque base +8",
        "benefit": "Posible daño de Fue a una criatura maligna con un impacto crítico",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Don de la fe",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Sab 13",
        "benefit": "Bonificador +2 a los TS para resistir efectos de miedo y desesperanza",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Don de la Gracia",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud de clase de Gracia divina",
        "benefit": "Compartir bonificador de Car en TS",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Dureza",
        "category": "General",
        "type": "Supervivencia",
        "prerequisites": "Ninguno",
        "benefit": "+3 puntos de golpe",
        "special": "Se puede elegir varias veces, efectos se apilan",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Dureza mejorada",
        "category": "General, Guerrero",
        "type": "Supervivencia",
        "prerequisites": "Salvación de Fortaleza base +2",
        "benefit": "Obtienes tantos PG como tus DG actuales",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Duro de pelar",
        "category": "General",
        "type": "Supervivencia",
        "prerequisites": "Aguante",
        "benefit": "Permaneces consciente entre -1 y -9 pg",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Elaborar poción",
        "category": "Creación de Objetos",
        "type": "Creación",
        "prerequisites": "Nivel de lanzador 3º",
        "benefit": "Crear pociones mágicas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Embestida mejorada",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque poderoso, Fue 13",
        "benefit": "Bonificador +4 a los ataques de embestida; sin ataque de oportunidad",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Enemigo predilecto mejorado",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de enemigo predilecto, ataque base +5",
        "benefit": "Causas 3 puntos de daño adicionales a tu enemigo predilecto",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Engañoso",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de Disfrazarse y Falsificar",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Engarro",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Tamaño Enorme o mayor",
        "benefit": "Hacer presa más fácilmente con garras o mordisco",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Escudo divino",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes, competencia con escudo",
        "benefit": "Sumas el bonificador de Car como bonificador sagrado a la defensa de tu escudo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Escuela de rapaz",
        "category": "Táctica",
        "type": "Combate",
        "prerequisites": "Sab 13, Saltar 5 rangos, ataque base +6",
        "benefit": "Maniobras tácticas inspiradas en aves de presa",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Escuela del sol",
        "category": "Táctica",
        "type": "Combate",
        "prerequisites": "Aptitud de ráfaga de golpes, ataque base +4",
        "benefit": "Maniobras tácticas de artes marciales esotéricas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Especialización con un arma",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Competencia con el arma, nivel 4º de guerrero, Soltura con el arma",
        "benefit": "Bonificador +2 a las tiradas de daño con el arma elegida",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Especialización mayor con un arma",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Competencia con el arma, Especialización con el arma, nivel 12º de guerrero, Soltura con el arma, Soltura mayor con el arma",
        "benefit": "Bonificador +4 en las tiradas de daño con el arma elegida",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Espada alta, hacha baja",
        "category": "Estilo",
        "type": "Combate",
        "prerequisites": "Derribo mejorado, Combate con dos armas, Soltura con un arma (espada), Soltura con un arma (hacha)",
        "benefit": "Intento de derribo gratuito al golpear con espada y hacha",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Espontaneidad con un dominio",
        "category": "Divina",
        "type": "Conjuros",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes",
        "benefit": "Convierte conjuros preparados en conjuros de dominio",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Esquiva",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 13",
        "benefit": "Bonificador +1 a la CA contra un objetivo determinado",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Estallido sortílego pío",
        "category": "Fe",
        "type": "Divino",
        "prerequisites": "Saber (religión) 2 rangos",
        "benefit": "Gastas puntos de fe para mejorar un conjuro que lances",
        "special": "Proporciona 4 puntos de fe iniciales",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Estigmas",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Halo de luz",
        "benefit": "Curas las heridas de los demás sufriendo daño de Con",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Experto en formación",
        "category": "Táctica, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +6",
        "benefit": "Maniobras tácticas en formación",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Expulsión elevada",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar muertos vivientes",
        "benefit": "3d6 puntos de daño adicionales al expulsar",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Expulsión incrementada",
        "category": "General",
        "type": "Divino",
        "prerequisites": "Aptitud para expulsar o reprender",
        "benefit": "Puedes expulsar o reprender 4 veces más por día",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Expulsión mejorada",
        "category": "General",
        "type": "Divino",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes",
        "benefit": "+1 nivel para las pruebas de expulsión",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Extender conjuro",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Dobla el área de un conjuro",
        "special": "Ocupa espacio de conjuro +3 niveles",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Fabricar armas y armaduras mágicas",
        "category": "Creación de Objetos",
        "type": "Creación",
        "prerequisites": "Nivel de lanzador 5º",
        "benefit": "Crear armas, armaduras y escudos mágicos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Fabricar bastón",
        "category": "Creación de Objetos",
        "type": "Creación",
        "prerequisites": "Nivel de lanzador 12º",
        "benefit": "Fabricar bastones",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Fabricar cetro",
        "category": "Creación de Objetos",
        "type": "Creación",
        "prerequisites": "Nivel de lanzador 9º",
        "benefit": "Fabricar cetros",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Fabricar constructo",
        "category": "Creación de Objetos",
        "type": "Creación",
        "prerequisites": "Fabricar armas y armaduras mágicas, Fabricar objeto maravilloso",
        "benefit": "Fabricar gólems y autómatas mágicos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Fabricar objeto maravilloso",
        "category": "Creación de Objetos",
        "type": "Creación",
        "prerequisites": "Nivel de lanzador 3º",
        "benefit": "Fabricar objetos maravillosos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Fabricar varita",
        "category": "Creación de Objetos",
        "type": "Creación",
        "prerequisites": "Nivel de lanzador 5º",
        "benefit": "Fabricar varitas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Facilidad para la magia",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +2 en las pruebas de Conocimiento de conjuros y Usar objeto mágico",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Familiar celestial",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para adquirir un nuevo familiar, requisito de nivel mínimo",
        "benefit": "Elecciones adicionales de familiar (celestiales)",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Familiar mejorado",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Aptitud para adquirir un nuevo familiar, alineamiento compatible, nivel de lanzador y ataque base apropiados",
        "benefit": "Obtienes un familiar más orientado al combate",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Familiaridad con armas mejorada",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Ataque base +1",
        "benefit": "Las armas raciales son marciales, no exóticas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Favorito de los Compañeros",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +1 de Suerte a una tirada o prueba una vez al día",
        "special": "No se puede combinar con Sirviente de los cielos o Caballero de las estrellas",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ferocidad del jabalí",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "Luchas mientras tienes puntos de golpe negativos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Filo del martillo",
        "category": "Estilo",
        "type": "Combate",
        "prerequisites": "Fue 15, Embestida mejorada, Combate con dos armas, Soltura con un arma (espada), Soltura con un arma (martillo)",
        "benefit": "El enemigo debe superar TS de Fort o caer tumbado",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Finta mejorada",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Int 13, Pericia en combate",
        "benefit": "Fintar en combate como acción de movimiento",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Flotar",
        "category": "General",
        "type": "Movimiento",
        "prerequisites": "Velocidad de vuelo",
        "benefit": "Puedes detener tu movimiento mientras vuelas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Forjar anillo",
        "category": "Creación de Objetos",
        "type": "Creación",
        "prerequisites": "Nivel de lanzador 12º",
        "benefit": "Crear anillos mágicos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Forma salvaje adicional",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "Obtienes dos usos adicionales de forma salvaje al día",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Forma salvaje elevada",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud de clase forma salvaje, nivel 8 en la clase con forma salvaje",
        "benefit": "Opciones adicionales de forma salvaje (bestias mágicas buenas)",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Forma salvaje rápida",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "La forma salvaje es una acción de movimiento",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Furia adicional",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de frenesí o furia",
        "benefit": "Número de rabias al día aumenta en 2",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Furia del glotón",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "Entras en furia durante 5 asaltos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Furia destructiva",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de frenesí o furia",
        "benefit": "Bonificador +8 en las pruebas de Fue para romper objetos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Furia instantánea",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de frenesí o furia",
        "benefit": "Entras en furia incluso cuando no es tu turno",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Furia intimidatoria",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de frenesí o furia",
        "benefit": "Haces que un enemigo a menos de 30' quede estremecido",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Garras de oso pardo",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "Obtienes garras durante 1 hora",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Giro de muñeca",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Des 17, Juego de manos 5 rangos, Desenvainado rápido",
        "benefit": "Hace que el oponente esté desprevenido durante un ataque",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Golpe a la arteria",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de ataque furtivo, ataque base +4",
        "benefit": "Cambias 1d6 de daño furtivo por 1 punto de daño por asalto",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Golpe arcano",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Aptitud para lanzar conjuros arcanos de 3er nivel, ataque base +4",
        "benefit": "Sacrificas un conjuro por un +1 en los ataques y +1d6 de daño por nivel de conjuro",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Golpe axiomático",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Impacto ki (legal), Puñetazo aturdidor",
        "benefit": "+2d6 de daño sin arma contra oponentes caóticos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Golpe con el escudo mejorado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Competencia con escudo",
        "benefit": "Conservas el bonificador a la CA cuando golpeas con el escudo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Golpe demoledor",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Fue 25, Ataque poderoso, Embestida mejorada, tamaño Grande o mayor",
        "benefit": "Golpe que hace que oponentes pequeños salgan volando",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Golpe resonante",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Fue 13, Ataque poderoso, Intimidar 7 rangos",
        "benefit": "Posible efecto intimidador con un ataque crítico",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Golpetazo con el escudo",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Golpe con el escudo mejorado, Cargar con el escudo, ataque base +6",
        "benefit": "Usas el escudo para atontar al oponente",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Gran fortaleza",
        "category": "General",
        "type": "Salvaciones",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +2 a las salvaciones de Fortaleza",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Gran grito de kiai",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Car 13, Grito de kiai, ataque base +9",
        "benefit": "Los enemigos que oigan tu grito pueden ser presas del pánico",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Gran hendedura",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +4, Ataque poderoso, Hendedura",
        "benefit": "Sin límite a los ataques de Hendedura por asalto",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Grito de kiai",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Car 13, ataque base +1",
        "benefit": "Los oponentes afectados quedan estremecidos durante 1d6 asaltos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Habla oscura",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Bonificador base de TS de Vol +5, Int 15, Car 15",
        "benefit": "Conocimiento del lenguaje oscuro",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Halo de luz",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las pruebas de Diplomacia y Averiguar intenciones con criaturas buenas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Hendedura",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque poderoso",
        "benefit": "Ataque c/c adicional después de acabar con un objetivo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Heridas espontáneas",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Saber (naturaleza) 4 rangos, no bueno",
        "benefit": "Cambia tus conjuros por conjuros de infligir de tu lista",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impacto atenuado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ninguno",
        "benefit": "Ninguna penalización al causar daño no letal; el ataque furtivo del pícaro causa daño no letal",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impacto con armas vil",
        "category": "Vil",
        "type": "Combate",
        "prerequisites": "Carisma 15, Soltura con un arma",
        "benefit": "Mejora ataques con armas mediante energía vil",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impacto defensivo",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 13, Int 13, Pericia en combate, esquiva",
        "benefit": "Bonificador +4 en la tirada de ataque después de una defensa total con éxito",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impacto kármico",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Des 13, Pericia en combate, Esquiva",
        "benefit": "Sufres un penalizador -4 a la CA al realizar un ataque de oportunidad contra oponentes cuerpo a cuerpo que te golpeen",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impacto ki sagrado",
        "category": "Elevada",
        "type": "Combate",
        "prerequisites": "Car 15, Impacto sin armas mejorado, Impacto ki (sagrado), Santificar impacto ki",
        "benefit": "Bonificador +2d6 a las tiradas de daño contra criaturas malignas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impacto ki vil",
        "category": "Vil",
        "type": "Combate",
        "prerequisites": "Carisma 15, Impacto sin armas mejorado",
        "benefit": "Impactos sin arma mejorados con energía vil",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impacto sagrado",
        "category": "Elevada",
        "type": "Combate",
        "prerequisites": "Aptitud de ataque furtivo",
        "benefit": "Los ataques furtivos causan d8 contra los oponentes malignos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impacto sin arma mejorado",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ninguno",
        "benefit": "Se te considera armado aunque estés desarmado",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impulsar aptitud sortílega",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "La CD de una aptitud sortílega aumenta en +2",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impulsar resistencia a conjuros",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Cualquier alineamiento maligno",
        "benefit": "La RC aumenta en +2",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impulso profano",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para reprender muertos vivientes",
        "benefit": "Maximiza conjuros de infligir cercanos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Impulso sagrado",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar muertos vivientes",
        "benefit": "Maximiza conjuros de curar cercanos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Iniciativa mejorada",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +4 a las pruebas de iniciativa",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Inmunidad al veneno",
        "category": "General",
        "type": "Supervivencia",
        "prerequisites": "Ninguno",
        "benefit": "Te vuelves inmune a un tipo de veneno y resistente a otros",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Inscribir rollo de pergamino",
        "category": "Creación de Objetos",
        "type": "Creación",
        "prerequisites": "Nivel de lanzador 1º",
        "benefit": "Crear rollos de pergamino",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Intensificar conjuro",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Lanzas un conjuro a mayor nivel",
        "special": "Aumenta el nivel efectivo del conjuro",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Investigador",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +2 a las pruebas de Buscar y reunir información",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ira de los justos",
        "category": "Elevada",
        "type": "Combate",
        "prerequisites": "Aptitud de clase furia",
        "benefit": "Posible efecto estremecedor contra criaturas malignas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Lanzador de conjuros experto",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Conocimiento de conjuros 4 rangos",
        "benefit": "Tu NL es +4 pero no supera tus DG",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Lanzar cualquier cosa",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Des 15, competencia con el arma, ataque base +2",
        "benefit": "Lanzas un arma cuerpo a cuerpo sin penalizador",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Liderazgo",
        "category": "General",
        "type": "Social",
        "prerequisites": "Nivel 6º de personaje",
        "benefit": "Atraes allegados y seguidores",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Limpieza divina",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes",
        "benefit": "Obtienes un bonificador sagrado +2 en TS de Fort.",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Lucha a ciegas",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ninguno",
        "benefit": "Vuelve a tirar la posibilidad de fallo por ocultación",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Lucha astuta",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Tamaño Pequeño o Mediano, Impacto sin arma mejorado",
        "benefit": "Obtienes bonificadores de circunstancia para escapar de una presa o sujeción",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Lucha cerrada",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Ataque base +3",
        "benefit": "Usas contraataque para resistirte a una presa",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Lucha en falange",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Competencia con escudo pesado, ataque base +1",
        "benefit": "Bonificador a la CA y TS de Ref. al luchar en una pared de escudo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Luchar apiñados",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Tamaño Pequeño, Des 13, ataque base +1",
        "benefit": "Ocupas la misma casilla que otro aliado con la dote, ganas un bonificador de moral +1 por aliado (hasta el bonificador de Destreza)",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Luna creciente",
        "category": "Estilo",
        "type": "Combate",
        "prerequisites": "Desarme mejorado, Combate con dos armas mejorado, Combate con dos armas, Soltura con un arma (daga), Soltura con un arma (espada)",
        "benefit": "Intento de desarme gratuito al golpear con espada y daga",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Maestría con los sacrificios",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Sabiduría 15",
        "benefit": "Mejora sacrificios rituales",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Maestría en conjuros",
        "category": "Especial",
        "type": "Conjuros",
        "prerequisites": "Mago de nivel 1",
        "benefit": "Puedes preparar algunos conjuros sin un libro de conjuros",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Mancillar aptitud sortílega",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Añade el descriptor maligno a una aptitud sortílega",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Mancillar conjuro",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Cualquier alineamiento maligno",
        "benefit": "Transforma un conjuro en conjuro maligno",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Manos de curandero",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Car 13, aptitud de clase imposición de manos",
        "benefit": "Bonificador +2 al Car para la imposición de manos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Manos hábiles",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +2 a las pruebas de Juegos de manos y Uso de cuerdas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Mantener la formación",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Reflejos de combate, ataque base +2",
        "benefit": "Realizas un ataque de oportunidad contra un enemigo que carga",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Marca del Mal",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Ninguno",
        "benefit": "Marca física de maldad",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Maximizar conjuro",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Maximiza los efectos numéricos variables de un conjuro",
        "special": "Ocupa espacio de conjuro +3 niveles",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Maza relampagueante",
        "category": "Estilo",
        "type": "Combate",
        "prerequisites": "Reflejos de combate, Combate con dos armas, Soltura con un arma (maza ligera)",
        "benefit": "Ataque adicional al amenazar crítico con mazas ligeras",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Metamagia divina",
        "category": "Divina",
        "type": "Conjuros",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes",
        "benefit": "Usa energía de expulsión para aplicar dote metamágica",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Montura celestial",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Paladín de nivel 4",
        "benefit": "La montura obtiene la plantilla de Celestial",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Movilidad",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 13, Esquiva",
        "benefit": "Bonificador +4 a la CA contra algunos ataques de oportunidad",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Nadar como un pez",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "Nadas bajo el agua durante 1 hora",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Negociador",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +2 a las pruebas de Averiguar intenciones y Diplomacia",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Némesis",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud de clase Enemigo predilecto",
        "benefit": "Detecta la presencia de enemigos predilectos",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Ojos en la nuca",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Sab 13, ataque base +1",
        "benefit": "Los oponentes no obtienen el beneficio del flanqueo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Palabras de la creación",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Int 15, Car 15, salvación base de Vol. +5",
        "benefit": "Aptitud para emplear las palabras de la creación",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Paralizar la vida",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Sab 17, Impacto sin arma mejorado, Puñetazo aturdidor, ataque base +10",
        "benefit": "Paraliza al oponente con un impacto sin arma",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Patada giratoria",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Fue 15, Impacto sin arma mejorado, Ataque poderoso",
        "benefit": "Ataque sin arma adicional contra un oponente al que acabes de hacer un crítico",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Patada voladora",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Fue 13, Saltar 4 rangos, Impacto sin arma mejorado, Ataque poderoso",
        "benefit": "+1d12 de daño en ataques sin arma al cargar",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Pericia en combate",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Int 13",
        "benefit": "Cambia bonificador de ataque por CA (máx. 5 puntos)",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Pericia en combate mejorada",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Int 13, Pericia en combate, ataque base +6",
        "benefit": "Reduces tu bonificador de ataque para mejorar tu CA",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Persuasivo",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +2 a las pruebas de Engañar e Intimidar",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Piel de elefante",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje para volverse criatura Grande",
        "benefit": "Obtienes armadura natural +7 durante 10 minutos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Pies ligeros",
        "category": "General",
        "type": "Movimiento",
        "prerequisites": "Des 15, Correr",
        "benefit": "Cambias de dirección una vez mientras corres o cargas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Pisotear",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Combatir desde una montura",
        "benefit": "El objetivo no puede evitar el ataque de arrollar desde una montura",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Poder de conjuro divino",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes, capaz de lanzar conjuros divinos de 1er nivel",
        "benefit": "Usa energía de expulsión para mejorar nivel de lanzador",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Poder divino",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Fue 13, Aptitud para expulsar o reprender muertos vivientes, Ataque poderoso",
        "benefit": "Sumas el bonificador de Car al daño del arma",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Potenciar aptitud sortílega",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Aptitud sortílega a 6º nivel de lanzador o mayor",
        "benefit": "Una aptitud sortílega incrementa su potencia en un 50%",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Potenciar conjuro",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Aumenta los efectos numéricos de un conjuro en un 50%",
        "special": "Ocupa espacio de conjuro +2 niveles",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Potenciar expulsión",
        "category": "General",
        "type": "Divino",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes",
        "benefit": "Puedes expulsar más muertos vivientes",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Presa mejorada",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 13, Impacto sin arma mejorado",
        "benefit": "Bonif. +4 a las pruebas de presa, sin ataque de oportunidad",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Prolongar conjuro",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Dobla la duración de un conjuro",
        "special": "Ocupa espacio de conjuro +1 nivel",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Prolongar furia",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de frenesí o furia",
        "benefit": "La furia dura +5 asaltos",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Proyección defensiva",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Des 13, Reflejos de combate, Esquiva, Derribo mejorado, Impacto sin arma mejorado",
        "benefit": "Intento de derribo después de que el ataque del enemigo falle",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Puñetazo aturdidor",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +8, Des 13, Impacto sin arma mejorado, Sab 13",
        "benefit": "Aturde a un oponente con un impacto sin arma",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Puño de los cielos",
        "category": "Elevada, Guerrero",
        "type": "Combate",
        "prerequisites": "Sab 15, Santificar impacto ki, Puñetazo aturdidor",
        "benefit": "+2 a la CD del puñetazo aturdidor",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Puños de hierro",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Impacto sin arma mejorado, Puñetazo aturdidor, ataque base +2",
        "benefit": "+1d6 en ataques sin arma",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Purificar aptitud sortílega",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Cualquier alineamiento bueno",
        "benefit": "Añade el descriptor 'bien' a una aptitud sortílega; las criaturas neutrales sufren mitad de daño, las buenas no sufren daño",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Purificar conjuro",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Cualquier alineamiento bueno",
        "benefit": "Añade el descriptor 'bien' al conjuro; las criaturas neutrales sufren mitad de daño, las buenas no sufren ningún daño",
        "special": "Ocupa espacio de conjuro +1 nivel",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Purificar desencadenante de conjuros",
        "category": "Elevada",
        "type": "Conjuros",
        "prerequisites": "Fabricar varita o Fabricar bastón, aptitud para expulsar muertos vivientes",
        "benefit": "Emplea la aptitud de expulsión para añadir el descriptor 'bueno' a un conjuro; las criaturas neutrales sufren mitad de daño, las buenas no sufren ningún daño",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Rastrear",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Usas la habilidad de Supervivencia para rastrear",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Recarga rápida",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Competencia con ballesta",
        "benefit": "Recargas ballestas más rápido",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Red y tridente",
        "category": "Estilo",
        "type": "Combate",
        "prerequisites": "Des 15, Competencia en arma exótica (red), Combate con dos armas, Soltura con un arma (tridente)",
        "benefit": "Ataque combinado con red y tridente",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Reflejos de combate",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ninguno",
        "benefit": "Ataques de oportunidad adicionales",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Reflejos rápidos",
        "category": "General",
        "type": "Salvaciones",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +2 a las salvaciones de Reflejos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Reliquia ancestral",
        "category": "General",
        "type": "Creación",
        "prerequisites": "Cualquier alineamiento bueno, nivel de personaje 3",
        "benefit": "Crea un objeto mágico personal",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Resistencia a conjuros elevada",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Car 15, resistencia a conjuros",
        "benefit": "Resistencia a conjuros +4 contra conjuros malignos y aptitudes sortílegas de ajenos malignos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Resistencia de roble",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "Te vuelves como un árbol y obtienes inmunidades de vegetal",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Resistencia divina",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes",
        "benefit": "Obtienes resistencia al frío 5, electricidad 5 y fuego 5",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Resistencia mayor",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Aptitud de RD",
        "benefit": "Aumenta +1 la RD",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Resplandor sagrado",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Car 15, Halo de luz",
        "benefit": "Brillas con una luz dañina para los muertos vivientes",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Romper arma a distancia",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Fue 13, Disparo a bocajarro, Disparo preciso, Sujetar a distancia, ataque base +5",
        "benefit": "Usas un arma a distancia para desarmar a un enemigo con penalizador de daño reducido",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Romper arma mejorado",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Ataque poderoso",
        "benefit": "Bonificador +4 a los intentos de romper armas; sin ataque de oportunidad",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Salto del león",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "Realizas un ataque completo durante una carga",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Santificar arma",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para lanzar alinear arma",
        "benefit": "El arma alineada queda santificada",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Santificar ataque natural",
        "category": "Elevada",
        "type": "Combate",
        "prerequisites": "Uno o más ataques naturales, ataque base +5",
        "benefit": "Bonificador +1 o +1d4 a las tiradas de daño con armas naturales contra criaturas malignas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Santificar impacto ki",
        "category": "Elevada",
        "type": "Combate",
        "prerequisites": "Car 15, Impacto sin armas mejorado, impacto ki (legal)",
        "benefit": "Bonificador +1 o +1d4 a las tiradas de daño sin armas contra criaturas malignas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Santificar impacto marcial",
        "category": "Elevada",
        "type": "Combate",
        "prerequisites": "Car 15, Soltura con el arma concreta",
        "benefit": "Bonificador +1 o +1d4 a las tiradas de daño con el arma contra criaturas malignas",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Santificar reliquia",
        "category": "Creación de Objetos",
        "type": "Creación",
        "prerequisites": "Cualquier otra dote de creación de objetos, NL7",
        "benefit": "Realizas objetos mágicos con una conexión divina",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Siervo de un demonio",
        "category": "Vil",
        "type": "Sobrenatural",
        "prerequisites": "Ninguno",
        "benefit": "Conexión con fuerzas demoníacas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Sigiloso",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +2 a las pruebas de Esconderse y Moverse sigilosamente",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Sirviente de los cielos",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Ninguno",
        "benefit": "Bonificador +1 de suerte a una tirada o prueba una vez al día",
        "special": "No se puede combinar con Favorito de los Compañeros o Caballero de las estrellas",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Soldado de asalto",
        "category": "Táctica, Guerrero",
        "type": "Combate",
        "prerequisites": "Embestida mejorada, Ataque poderoso, ataque base +6",
        "benefit": "Maniobras tácticas de asalto",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Soltura con la magia (caótica, maligna, benigna o legal)",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Alineamiento relevante",
        "benefit": "Bonificador +2 en CDs de salvación para conjuros con descriptor de alineamiento",
        "special": "Se puede elegir dos veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Soltura con un arma",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +1, Competencia con el arma",
        "benefit": "Bonif. +1 a las tiradas de ataque con el arma elegida",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Soltura con un dominio",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Acceso al dominio relevante",
        "benefit": "+1 nivel de lanzador para un dominio",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Soltura con una aptitud",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ataque especial",
        "benefit": "+2 a la CD de todos los TS contra el ataque especial",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Soltura con una escuela de magia",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +1 a la CD de las salvaciones contra una escuela de magia determinada",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Soltura con una habilidad",
        "category": "General",
        "type": "Habilidad",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +3 a las pruebas con la habilidad elegida",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Soltura mayor con un arma",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Competencia con el arma, nivel 8º de guerrero, Soltura con el arma",
        "benefit": "Bonificador +2 a las tiradas de ataque con el arma elegida",
        "special": "Se puede elegir varias veces",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Soltura mayor con una escuela de magia",
        "category": "General",
        "type": "Conjuros",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +1 a la CD de las salvaciones contra una escuela de magia determinada",
        "special": "Se apila con Soltura con una escuela de magia",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Sujetar a distancia",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Des 15, Disparo a bocajarro, Disparo preciso, ataque base +5",
        "benefit": "Usas un arma a distancia para desarmar a un enemigo con penalizador de daño reducido",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Sujetar escudo",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Combate con dos armas, ataque base +4",
        "benefit": "Dejas temporalmente inútil el escudo de un oponente",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Sustitución no letal",
        "category": "Metamágica",
        "type": "Conjuros",
        "prerequisites": "Cualquier dote metamágica, Saber (arcano) 5 rangos",
        "benefit": "Transforma la energía del conjuro en daño no letal",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Sutileza con las armas",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Ataque base +1, Competencia con el arma",
        "benefit": "Utiliza el bonificador de Des en lugar del de Fue en las tiradas de ataque con armas ligeras cuerpo a cuerpo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Tiro con arco zen",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Sab 13, ataque base +1",
        "benefit": "Usas Sab en vez de Des para los ataques a distancia",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Toque debilitante",
        "category": "General, Guerrero",
        "type": "Combate",
        "prerequisites": "Sab 17, Impacto sin arma mejorado, Puñetazo aturdidor, ataque base +2",
        "benefit": "Hace que la Fuerza del enemigo baje 6 durante 1 minuto",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Toque de hielo áureo",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Con 13",
        "benefit": "Las criaturas malignas tocadas quedan afligidas por el trastorno hielo áureo",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Toque doloroso",
        "category": "General",
        "type": "Combate",
        "prerequisites": "Sab 15, Puñetazo aturdidor, ataque base +2",
        "benefit": "Los oponentes aturdidos quedan mareados 1 asalto",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Tres montañas",
        "category": "Estilo",
        "type": "Combate",
        "prerequisites": "Fue 13, Hendedura, Embestida mejorada, Ataque poderoso, Soltura con un arma (maza pesada, maza de armas o gran clava)",
        "benefit": "El objetivo debe superar TS de Fort o quedar mareado",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Velocidad del guepardo",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "La velocidad se convierte en 50' durante 1 hora",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Veneno de serpiente",
        "category": "Salvaje",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para usar forma salvaje",
        "benefit": "Obtienes un ataque de mordisco venenoso durante 1 minuto",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Venganza divina",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes",
        "benefit": "+2d6 puntos de daño en ataques cuerpo a cuerpo contra muertos vivientes",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Vigor divino",
        "category": "Divina",
        "type": "Sobrenatural",
        "prerequisites": "Aptitud para expulsar o reprender muertos vivientes",
        "benefit": "Aumenta la velocidad base en 10 pies, obtienes +2 pg/nivel",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Viraje brusco",
        "category": "General",
        "type": "Movimiento",
        "prerequisites": "Velocidad de vuelo",
        "benefit": "Puedes girar hasta 180º mientras vuelas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Voluntad de hierro",
        "category": "General",
        "type": "Salvaciones",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +2 a las salvaciones de Voluntad",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Voto de abstinencia",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Voto sagrado",
        "benefit": "Bonificador +4 de perfección a los TS de Fort contra venenos y drogas",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Voto de castidad",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Voto sagrado",
        "benefit": "Bonificador +4 de perfección a los TS de Vol. contra hechizos y fantasmagorías",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Voto de no violencia",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Voto sagrado",
        "benefit": "Bonificador +4 a la CD de salvación de los conjuros no dañinos",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Voto de obediencia",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Voto sagrado",
        "benefit": "Bonif +4 de perfección a la TS de Vol. contra compulsiones",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Voto de paz",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Voto sagrado, Voto de no violencia",
        "benefit": "Aura tranquilizadora; bonificador +6 variado a la CA",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Voto de pobreza",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Voto sagrado",
        "benefit": "Bonificadores a la CA, puntuaciones de característica y salvaciones; dotes adicionales",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Voto de pureza",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Voto sagrado",
        "benefit": "Bonificador +4 de perfección a los TS de Fort contra enfermedades y efectos de muerte",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Voto sagrado",
        "category": "Elevada",
        "type": "Sobrenatural",
        "prerequisites": "Ninguno",
        "benefit": "Bonif. +2 de perfección a las pruebas de Diplomacia",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    },
    {
        "name": "Yunque de trueno",
        "category": "Estilo",
        "type": "Combate",
        "prerequisites": "Fue 13, Romper arma mejorado, Ataque poderoso, Combate con dos armas, Soltura con un arma (martillo), Soltura con un arma (hacha)",
        "benefit": "El objetivo debe superar TS de Fort o quedar atontado",
        "special": "",
        "source": "Manual del Jugador y Suplementos (3.5)"
    }
]