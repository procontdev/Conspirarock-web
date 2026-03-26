export type ConspiraFileSource = {
  label: string;
  url: string;
};

export type ConspiraFileItem = {
  id: string;
  type: "tema" | "caso" | "personaje" | "concepto" | "frase";
  title: string;
  summary: string;
  certainty?: "documentado" | "discutido" | "testimonial" | "hipótesis";
  sources?: ConspiraFileSource[];
};

export type EpisodeConspiraFiles = {
  episodeId: string;
  intro: string;
  keyTopics: string[];
  highlightedQuotes: string[];
  coreFiles: ConspiraFileItem[];
  mythReferences?: ConspiraFileItem[];
  editorialNote?: string;
};

export const conspiraFilesByEpisode: Record<string, EpisodeConspiraFiles> = {
  "ep-01": {
  episodeId: "ep-01",
  intro:
    "En el episodio inaugural, Salim Vera cruza industria musical, libertad creativa, repetición mediática y desgaste interno de las bandas. La conversación oscila entre experiencia personal, crítica cultural y una mirada incómoda sobre cómo el mercado condiciona lo que se escucha, lo que se premia y lo que termina desapareciendo.",

  keyTopics: [
    "Industria musical y poder cultural",
    "Payola y rotación radial",
    "Autenticidad artística",
    "Música y existencialismo",
    "Libertad creativa vs mercado",
    "Egos y fracturas en bandas",
    "Mito o verdad en la música",
  ],

  highlightedQuotes: [
    "Sin música ni arte sería mucho más gris el mundo.",
    "Por lo que veo... el rock no es un negocio.",
    "Ya cuestioné todo y ya me respondí: debo dejar de ser músico.",
    "Las bandas grandes esconden guerras nucleares internas.",
    "Ser auténtico es un lujo.",
    "Ahora la hipocresía gobierna.",
  ],

  coreFiles: [
    {
      id: "tema-industria-musical-poder",
      type: "tema",
      title: "Industria musical y estructuras de poder",
      summary:
        "El episodio se pregunta cuánto de lo que circula en la música responde a criterios artísticos y cuánto a estructuras de visibilidad, inversión, repetición y control cultural. Más que una teoría única, se plantea una sospecha persistente: que el mercado no solo distribuye música, también decide qué voces sobreviven y cuáles desaparecen.",
      certainty: "discutido",
    },
    {
      id: "concepto-payola",
      type: "concepto",
      title: "Payola y rotación radial",
      summary:
        "Uno de los puntos más concretos del episodio. La payola aparece como práctica asociada a la promoción artificial de canciones mediante incentivos, acuerdos o presión sobre los circuitos de difusión, influyendo en qué temas se vuelven inevitables y cuáles quedan fuera.",
      certainty: "documentado",
    },
    {
      id: "tema-libertad-creativa-mercado",
      type: "tema",
      title: "Libertad creativa vs maquinaria comercial",
      summary:
        "Salim contrapone la búsqueda artística con la lógica de repetición del mercado. La conversación sugiere que la industria premia lo reconocible, lo seguro y lo que no rompe el molde, mientras castiga la exploración y el riesgo.",
      certainty: "testimonial",
    },
    {
      id: "tema-existencialismo-musica",
      type: "tema",
      title: "Música y existencialismo",
      summary:
        "Más allá del tono conspirativo, el episodio también se vuelve íntimo. La música aparece ligada a preguntas sobre sentido, herencia, desgaste y vocación. El arte no se presenta como una misión romántica perfecta, sino como algo vivido, heredado y también puesto en crisis.",
      certainty: "testimonial",
    },
    {
      id: "tema-fracturas-bandas",
      type: "tema",
      title: "Heridas, egos y fracturas dentro de las bandas",
      summary:
        "Uno de los núcleos más fuertes del episodio. Se habla de bandas que por fuera parecen sólidas, pero por dentro arrastran conflictos, resentimientos y tensiones prolongadas. Aquí la gran teoría se aterriza en algo muy humano: convivencia, orgullo, poder y desgaste.",
      certainty: "testimonial",
    },
    {
      id: "caso-some-kind-of-monster",
      type: "caso",
      title: "Metallica y Some Kind of Monster",
      summary:
        "El documental aparece como ejemplo concreto de una banda enorme atravesando terapia, crisis creativa, resentimientos y fricción interna. Funciona como respaldo visible de la idea de que incluso los proyectos más exitosos esconden conflictos profundos detrás del escenario.",
      certainty: "documentado",
      sources: [
        {
          label: "Metallica – Some Kind of Monster",
          url: "https://www.metallica.com/releases/films/some-kind-of-monster-film.html",
        },
        {
          label: "Metallica – History",
          url: "https://www.metallica.com/history/",
        },
      ],
    },
    {
      id: "concepto-musica-muere-1996",
      type: "concepto",
      title: "“La música muere en 1996”",
      summary:
        "La frase aparece como provocación y no como dato literal. Condensa una nostalgia crítica: la sensación de que cierto punto de quiebre transformó la relación entre música, industria, repetición y autenticidad. En el episodio funciona como disparador de discusión, no como afirmación cerrada.",
      certainty: "discutido",
    },
    {
      id: "frase-ser-autentico",
      type: "frase",
      title: "“Ser auténtico es un lujo”",
      summary:
        "Probablemente la frase que mejor resume el episodio. No habla solo de música, sino de época: sugiere que la honestidad, la espontaneidad y la coherencia personal tienen un costo alto dentro de un entorno gobernado por cálculo, máscara e hipocresía.",
      certainty: "testimonial",
    },
  ],

  mythReferences: [
    {
      id: "personaje-michael-jackson-prince",
      type: "personaje",
      title: "Michael Jackson, Prince y el costo de hablar",
      summary:
        "Estas figuras aparecen dentro del imaginario conspirativo del episodio como artistas gigantes, expuestos a niveles extremos de presión y asociados culturalmente a la idea de que ciertas verdades, excesos o tensiones del sistema tienen consecuencias. Aquí interesan como símbolos de sospecha dentro de la cultura pop más que como casos cerrados.",
      certainty: "hipótesis",
    },
    {
      id: "concepto-mkultra",
      type: "concepto",
      title: "MK-Ultra",
      summary:
        "MK-Ultra fue un programa secreto real de la CIA vinculado a experimentación con control mental, interrogación y sustancias. En el episodio aparece como referencia para pensar cómo un hecho histórico documentado termina expandiéndose como marco interpretativo dentro de teorías culturales y musicales.",
      certainty: "documentado",
      sources: [
        {
          label: "CIA FOIA – Project MK-ULTRA",
          url: "https://www.cia.gov/readingroom/document/06760269",
        },
        {
          label: "CIA – Project MKULTRA hearing documents",
          url: "https://www.cia.gov/readingroom/document/00163357",
        },
      ],
    },
    {
      id: "personaje-robert-johnson",
      type: "personaje",
      title: "Robert Johnson y el pacto en la encrucijada",
      summary:
        "La historia de Robert Johnson vendiendo su alma al diablo para obtener talento musical es una de las leyendas más persistentes del blues y del rock. Más que un hecho documentado, funciona como mito fundacional: el cruce entre genio, oscuridad, talento repentino y precio espiritual.",
      certainty: "discutido",
      sources: [
        {
          label: "Britannica – Robert Johnson and the crossroads legend",
          url: "https://www.britannica.com/question/What-happened-to-blues-musician-Robert-Johnson-at-a-crossroads",
        },
        {
          label: "Britannica – Why Is Blues Called the Devil's Music?",
          url: "https://www.britannica.com/topic/Why-Is-Blues-Called-the-Devils-Music",
        },
      ],
    },
    {
      id: "concepto-paul-is-dead",
      type: "concepto",
      title: "“Paul McCartney murió” / Paul Is Dead",
      summary:
        "Una de las teorías más famosas de la cultura pop. Sostiene que Paul McCartney habría muerto en 1966 y que los Beatles dejaron pistas ocultas en canciones, portadas y mensajes invertidos. En Conspira-Files entra como mito cultural clásico: menos importante por su veracidad que por su capacidad de mostrar cómo la música también genera folklore conspirativo.",
      certainty: "hipótesis",
      sources: [
        {
          label: "Beatles Bible – The 'Paul is dead' myth",
          url: "https://www.beatlesbible.com/features/paul-is-dead/",
        },
        {
          label: "Beatles Bible – Paul McCartney denies reports of his death",
          url: "https://www.beatlesbible.com/1969/10/24/paul-mccartney-denies-reports-of-his-death/",
        },
        {
          label: "YouTube – Paul McCartney está realmente muerto desde 1966",
          url: "https://youtu.be/yg5kqrRJm_U",
        },
      ],
    },
  ],

  editorialNote:
    "Conspira-Files reúne ideas, referencias y líneas de discusión surgidas en el episodio. No todas las entradas tienen el mismo peso: algunas remiten a prácticas ampliamente conocidas dentro de la industria, otras a testimonios personales, frases provocadoras o hipótesis culturales abiertas a discusión. La intención de esta sección no es nivelarlo todo, sino ofrecer contexto para profundizar la conversación.",
},
};