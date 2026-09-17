// Carreras UCU Campus Salto: ver carreras.md para el detalle de cada perfil
const careers = {
    psicopedagogia: {
        nombre: 'Psicopedagogía',
        area: 'Área Bienestar',
        frase: 'Tenés vocación para ayudar a otros a aprender y desarrollarse. La psicopedagogía te va a dejar acompañar procesos de aprendizaje en contextos educativos, familiares y de salud.'
    },
    psicologia: {
        nombre: 'Psicología',
        area: 'Área Bienestar',
        frase: 'Te interesa entender cómo piensan y sienten las personas. La psicología te abre puertas en salud, educación, empresas y más.'
    },
    acompanamiento: {
        nombre: 'Acompañamiento Terapéutico',
        area: 'Área Bienestar',
        frase: 'Tenés vocación de estar presente y acompañar a otros en su día a día. El acompañamiento terapéutico te forma para sostener procesos junto a un equipo de salud.'
    },
    informatica: {
        nombre: 'Analista en Informática',
        area: 'Área Ingeniería',
        frase: 'Tenés pensamiento lógico y te gusta resolver problemas con tecnología. Analista en Informática te da las herramientas para diseñar soluciones y seguir creciendo hacia Ingeniería.'
    },
    contador: {
        nombre: 'Contador Público',
        area: 'Área Empresas',
        frase: 'Sos precisa/o, organizada/o y te gusta que los números cierren. Contador Público te forma para analizar y gestionar la información financiera de cualquier organización.'
    },
    direccion: {
        nombre: 'Dirección de Empresas',
        area: 'Área Empresas',
        frase: 'Tenés espíritu de líder y te gusta tomar decisiones y sacar proyectos adelante. Dirección de Empresas te prepara para liderar equipos y organizaciones.'
    },
    analytics: {
        nombre: 'Business Analytics',
        area: 'Área Empresas',
        frase: 'Te gusta cruzar datos para encontrar la respuesta que nadie vio. Business Analytics te forma para transformar información en decisiones que mueven una empresa.',
        empiezaEnSalto: true
    },
    negocios: {
        nombre: 'Negocios Internacionales',
        area: 'Área Empresas',
        frase: 'Te atrae el mundo, las culturas distintas y los negocios sin fronteras. Negocios Internacionales te prepara para el comercio exterior y las relaciones internacionales.',
        empiezaEnSalto: true
    },
    gestionhumana: {
        nombre: 'Gestión Humana',
        area: 'Área Empresas',
        frase: 'Te importan las personas con las que trabajás tanto como los resultados. Gestión Humana te forma para atraer, desarrollar y cuidar el talento de una organización.',
        empiezaEnSalto: true
    },
    economia: {
        nombre: 'Economía',
        area: 'Área Empresas',
        frase: 'Te interesa entender por qué pasan las cosas a gran escala: precios, mercados, políticas. Economía te da las herramientas para analizar y proyectar el futuro.',
        empiezaEnSalto: true
    },
    finanzas: {
        nombre: 'Finanzas',
        area: 'Área Empresas',
        frase: 'Te gusta que la plata rinda y entender el riesgo antes de tomar una decisión. Finanzas te prepara para invertir, evaluar proyectos y asesorar en el mundo financiero.',
        empiezaEnSalto: true
    },
    marketing: {
        nombre: 'Marketing y Estrategia Comercial',
        area: 'Área Empresas',
        frase: 'Tenés ojo para entender qué quiere el consumidor y cómo contarlo. Marketing y Estrategia Comercial te forma para liderar marcas, campañas y equipos comerciales.',
        empiezaEnSalto: true
    }
};

const questions = [
    {
        text: 'Si tuvieras una tarde libre en el liceo, ¿qué elegirías hacer?',
        options: [
            { career: 'psicopedagogia', label: 'Ayudar a un compañero a entender mejor cómo estudiar para el próximo parcial' },
            { career: 'psicologia', label: 'Escuchar y aconsejar a un amigo que está pasando un mal momento' },
            { career: 'acompanamiento', label: 'Visitar a alguien que la está pasando mal y quedarte acompañándolo un rato' },
            { career: 'informatica', label: 'Armar o arreglar algo en la compu, un juego o una app' },
            { career: 'contador', label: 'Organizar las cuentas de un evento o rifa del grupo' },
            { career: 'direccion', label: 'Coordinar un proyecto grupal y repartir tareas al equipo' },
            { career: 'analytics', label: 'Armar una planilla para entender qué datos importan de un tema que te interesa' },
            { career: 'negocios', label: 'Investigar cómo funciona un negocio de otro país que te llama la atención' },
            { career: 'gestionhumana', label: 'Mediar en un conflicto entre compañeros de tu grupo' },
            { career: 'economia', label: 'Leer sobre por qué suben los precios de las cosas' },
            { career: 'finanzas', label: 'Pensar cómo invertir la plata que juntaste ahorrando' },
            { career: 'marketing', label: 'Armar una campaña o flyer para promocionar algo del liceo' }
        ]
    },
    {
        text: '¿Con cuál de estas frases te identificás más?',
        options: [
            { career: 'psicopedagogia', label: 'Me interesa entender por qué a algunas personas les cuesta más aprender' },
            { career: 'psicologia', label: 'Me llama la atención por qué las personas actúan como actúan' },
            { career: 'acompanamiento', label: 'Me nace estar al lado de alguien en los momentos difíciles, en el día a día' },
            { career: 'informatica', label: 'Disfruto resolver problemas lógicos paso a paso' },
            { career: 'contador', label: 'Me gusta que todo cierre, que los números den exacto' },
            { career: 'direccion', label: 'Me gusta tomar decisiones y hacerme cargo de que las cosas salgan' },
            { career: 'analytics', label: 'Prefiero decidir en base a datos, no a corazonadas' },
            { career: 'negocios', label: 'Me interesa lo que pasa fuera de Uruguay y cómo se hacen negocios afuera' },
            { career: 'gestionhumana', label: 'Me importa que el equipo esté bien, no solo que se cumpla el objetivo' },
            { career: 'economia', label: 'Me pregunto todo el tiempo por qué la economía va como va' },
            { career: 'finanzas', label: 'Me gusta calcular riesgos antes de gastar o invertir' },
            { career: 'marketing', label: 'Me gusta convencer y comunicar ideas de forma atractiva' }
        ]
    },
    {
        text: 'En un trabajo en grupo, ¿qué rol tomás naturalmente?',
        options: [
            { career: 'psicopedagogia', label: 'El/la que explica de nuevo lo que no se entendió' },
            { career: 'psicologia', label: 'El/la que nota cuando alguien del grupo está incómodo o desmotivado' },
            { career: 'acompanamiento', label: 'El/la que se queda ayudando a quien va más atrasado' },
            { career: 'informatica', label: 'El/la que arma la planilla, la presentación o resuelve el tema técnico' },
            { career: 'contador', label: 'El/la que controla que las cuentas y los plazos cierren' },
            { career: 'direccion', label: 'El/la que organiza al equipo y define quién hace qué' },
            { career: 'analytics', label: 'El/la que junta la información y saca conclusiones antes de decidir' },
            { career: 'negocios', label: 'El/la que busca cómo se hace en otros países o referencias afuera' },
            { career: 'gestionhumana', label: 'El/la que resuelve los roces entre compañeros del grupo' },
            { career: 'economia', label: 'El/la que piensa el panorama completo antes de actuar' },
            { career: 'finanzas', label: 'El/la que calcula cuánto va a costar y si conviene' },
            { career: 'marketing', label: 'El/la que piensa cómo presentar mejor el trabajo al resto' }
        ]
    },
    {
        text: '¿Qué materia del liceo te resultó más copada?',
        options: [
            { career: 'psicopedagogia', label: 'Pedagogía / Ciencias de la educación' },
            { career: 'psicologia', label: 'Psicología / Filosofía' },
            { career: 'acompanamiento', label: 'Biología / Educación para la salud' },
            { career: 'informatica', label: 'Informática / Matemática aplicada' },
            { career: 'contador', label: 'Contabilidad' },
            { career: 'direccion', label: 'Formación para la ciudadanía, proyectos y liderazgo' },
            { career: 'analytics', label: 'Estadística' },
            { career: 'negocios', label: 'Idiomas / Geografía' },
            { career: 'gestionhumana', label: 'Ciencias sociales / Formación ciudadana' },
            { career: 'economia', label: 'Economía' },
            { career: 'finanzas', label: 'Matemática financiera' },
            { career: 'marketing', label: 'Comunicación visual / Diseño' }
        ]
    },
    {
        text: 'Un familiar te cuenta un problema. ¿Qué te sale hacer?',
        options: [
            { career: 'psicopedagogia', label: 'Pensar qué estrategia lo ayudaría a resolverlo o aprender de eso' },
            { career: 'psicologia', label: 'Escucharlo y tratar de entender qué siente realmente' },
            { career: 'acompanamiento', label: 'Ofrecerte a acompañarlo mientras lo resuelve, estar presente' },
            { career: 'informatica', label: 'Buscar una solución práctica, paso a paso, como si fuera un problema a resolver' },
            { career: 'contador', label: 'Ayudarlo a ordenar el tema, sobre todo si es de plata' },
            { career: 'direccion', label: 'Armar un plan de acción y ayudarlo a decidir qué hacer' },
            { career: 'analytics', label: 'Pedirle todos los datos del problema antes de opinar' },
            { career: 'negocios', label: 'Preguntarle si esto pasa distinto en otros países o mercados' },
            { career: 'gestionhumana', label: 'Ayudarlo a manejar el conflicto con las personas involucradas' },
            { career: 'economia', label: 'Analizar el contexto general que generó el problema' },
            { career: 'finanzas', label: 'Ayudarlo a evaluar el riesgo y las opciones financieras' },
            { career: 'marketing', label: 'Ayudarlo a comunicar mejor lo que necesita a los demás' }
        ]
    },
    {
        text: '¿Qué te gustaría que digan de vos en el futuro?',
        options: [
            { career: 'psicopedagogia', label: 'Que ayudaste a otros a aprender y desarrollarse' },
            { career: 'psicologia', label: 'Que ayudaste a otros a entenderse mejor a sí mismos' },
            { career: 'acompanamiento', label: 'Que estuviste ahí para quien te necesitaba' },
            { career: 'informatica', label: 'Que creaste algo útil con tecnología' },
            { career: 'contador', label: 'Que sos de confianza para manejar algo importante' },
            { career: 'direccion', label: 'Que lideraste algo grande y lo sacaste adelante' },
            { career: 'analytics', label: 'Que tus análisis ayudaron a tomar mejores decisiones' },
            { career: 'negocios', label: 'Que hiciste negocios en el mundo entero' },
            { career: 'gestionhumana', label: 'Que hiciste que la gente quisiera trabajar donde trabajaba' },
            { career: 'economia', label: 'Que entendiste el país mejor que nadie' },
            { career: 'finanzas', label: 'Que la gente confió en vos para cuidar su plata' },
            { career: 'marketing', label: 'Que creaste una marca o campaña que todos recuerdan' }
        ]
    },
    {
        text: 'En tu grupo de amigos, ¿qué es lo que más hacés?',
        options: [
            { career: 'psicopedagogia', label: 'Explicarle un tema a alguien de mil formas hasta que le cierre' },
            { career: 'psicologia', label: 'Ser el/la que escucha los problemas de todos' },
            { career: 'acompanamiento', label: 'Estar siempre presente para el que te necesita, sin importar la hora' },
            { career: 'informatica', label: 'Resolver el problema técnico de turno (compu, celular, wifi)' },
            { career: 'contador', label: 'Llevar la cuenta de los gastos cuando salen todos juntos' },
            { career: 'direccion', label: 'Organizar los planes y decidir qué hacer' },
            { career: 'analytics', label: 'Comparar precios y opciones con datos antes de elegir algo entre todos' },
            { career: 'negocios', label: 'Proponer viajar o conocer lugares nuevos' },
            { career: 'gestionhumana', label: 'Estar pendiente de que nadie se sienta afuera del grupo' },
            { career: 'economia', label: 'Opinar sobre la actualidad y lo que está pasando en el país' },
            { career: 'finanzas', label: 'Aconsejar cómo ahorrar o en qué gastar mejor la plata' },
            { career: 'marketing', label: 'Armar las historias, el grupo o la difusión de los planes' }
        ]
    },
    {
        text: '¿Qué tipo de contenido mirás o escuchás más?',
        options: [
            { career: 'psicopedagogia', label: 'Documentales sobre educación o desarrollo humano' },
            { career: 'psicologia', label: 'Series o podcasts sobre la mente y el comportamiento' },
            { career: 'acompanamiento', label: 'Historias de superación o de salud' },
            { career: 'informatica', label: 'Contenido de tecnología, gaming o programación' },
            { career: 'contador', label: 'Contenido sobre cómo se llevan las cuentas y la normativa de una empresa' },
            { career: 'direccion', label: 'Emprendimiento, liderazgo o historias de empresas' },
            { career: 'analytics', label: 'Contenido sobre datos, estadísticas o inteligencia artificial' },
            { career: 'negocios', label: 'Noticias internacionales o de comercio global' },
            { career: 'gestionhumana', label: 'Contenido sobre cultura organizacional o recursos humanos' },
            { career: 'economia', label: 'Noticias de economía y mercados' },
            { career: 'finanzas', label: 'Contenido sobre inversiones y mercado de valores' },
            { career: 'marketing', label: 'Publicidades, redes sociales o tendencias de consumo' }
        ]
    },
    {
        text: 'Si tuvieras que elegir un superpoder, ¿cuál sería?',
        options: [
            { career: 'psicopedagogia', label: 'Poder enseñar cualquier cosa a cualquiera al instante' },
            { career: 'psicologia', label: 'Leer las emociones de las personas' },
            { career: 'acompanamiento', label: 'Estar en el lugar exacto donde alguien te necesita' },
            { career: 'informatica', label: 'Crear cualquier programa o app con la mente' },
            { career: 'contador', label: 'Nunca equivocarte con un número' },
            { career: 'direccion', label: 'Convencer a cualquiera de seguir tu plan' },
            { career: 'analytics', label: 'Ver patrones ocultos en cualquier cantidad de información' },
            { career: 'negocios', label: 'Hablar todos los idiomas del mundo' },
            { career: 'gestionhumana', label: 'Saber exactamente qué necesita cada persona para estar mejor' },
            { career: 'economia', label: 'Predecir hacia dónde va la economía' },
            { career: 'finanzas', label: 'Multiplicar cualquier inversión sin errores' },
            { career: 'marketing', label: 'Hacer que cualquier producto se vuelva viral' }
        ]
    },
    {
        text: '¿Qué ambiente de trabajo te imaginás en el futuro?',
        options: [
            { career: 'psicopedagogia', label: 'Una escuela, liceo o centro educativo' },
            { career: 'psicologia', label: 'Un consultorio o centro de salud mental' },
            { career: 'acompanamiento', label: 'Distintos lugares según a quién acompañes: casas, hospitales, escuelas' },
            { career: 'informatica', label: 'Una oficina de tecnología o trabajando remoto' },
            { career: 'contador', label: 'Un estudio contable o el área de contabilidad de una empresa' },
            { career: 'direccion', label: 'Liderando un equipo o tu propia empresa' },
            { career: 'analytics', label: 'Un equipo de datos o analítica dentro de una empresa' },
            { career: 'negocios', label: 'Una empresa con oficinas u operaciones en distintos países' },
            { career: 'gestionhumana', label: 'El área de Recursos Humanos de una organización' },
            { career: 'economia', label: 'Un banco central, consultora económica u organismo público' },
            { career: 'finanzas', label: 'Una fintech, banco o área de inversiones' },
            { career: 'marketing', label: 'Una agencia de publicidad o el área de marketing de una marca' }
        ]
    },
    {
        text: '¿Qué te resulta más gratificante?',
        options: [
            { career: 'psicopedagogia', label: 'Ver que alguien finalmente entendió algo gracias a vos' },
            { career: 'psicologia', label: 'Ver que alguien se siente mejor después de hablar con vos' },
            { career: 'acompanamiento', label: 'Ver que alguien no estuvo solo en un momento difícil' },
            { career: 'informatica', label: 'Ver que algo que armaste funciona' },
            { career: 'contador', label: 'Ver que todo cierra perfecto, sin errores' },
            { career: 'direccion', label: 'Ver que un proyecto que armaste salió como lo planeaste' },
            { career: 'analytics', label: 'Ver que un dato que encontraste cambió una decisión importante' },
            { career: 'negocios', label: 'Cerrar un acuerdo o negocio con alguien de otro país' },
            { career: 'gestionhumana', label: 'Ver a alguien crecer dentro de un equipo gracias a vos' },
            { career: 'economia', label: 'Entender un fenómeno que a otros les parece imposible de explicar' },
            { career: 'finanzas', label: 'Ver que una inversión que armaste dio resultado' },
            { career: 'marketing', label: 'Ver que una campaña que armaste realmente conectó con la gente' }
        ]
    },
    {
        text: 'Si tuvieras que armar un proyecto para el liceo, ¿qué parte elegirías hacer?',
        options: [
            { career: 'psicopedagogia', label: 'Explicarle el tema a los compañeros que no entendieron' },
            { career: 'psicologia', label: 'Entender qué le interesa a cada uno del grupo para motivarlos' },
            { career: 'acompanamiento', label: 'Acompañar al compañero que está más perdido con el tema' },
            { career: 'informatica', label: 'Programar o armar la parte técnica del proyecto' },
            { career: 'contador', label: 'Armar el presupuesto y controlar los gastos del proyecto' },
            { career: 'direccion', label: 'Coordinar los tiempos y liderar al equipo' },
            { career: 'analytics', label: 'Armar los gráficos y analizar los resultados del proyecto' },
            { career: 'negocios', label: 'Pensar cómo se haría este proyecto en otro país' },
            { career: 'gestionhumana', label: 'Definir quién hace qué según lo que cada uno hace mejor' },
            { career: 'economia', label: 'Investigar el contexto y las cifras detrás del tema' },
            { career: 'finanzas', label: 'Calcular si el proyecto es viable económicamente' },
            { career: 'marketing', label: 'Armar la presentación y venderle la idea al resto de la clase' }
        ]
    },
    {
        text: '¿Qué noticia te llama más la atención cuando mirás el diario o redes?',
        options: [
            { career: 'psicopedagogia', label: 'Una sobre educación o cambios en el liceo o la universidad' },
            { career: 'psicologia', label: 'Una sobre salud mental o bienestar emocional' },
            { career: 'acompanamiento', label: 'Una sobre alguien que ayudó a otra persona en un momento difícil' },
            { career: 'informatica', label: 'Una sobre un nuevo avance tecnológico o una app' },
            { career: 'contador', label: 'Una sobre cambios en impuestos o normativa' },
            { career: 'direccion', label: 'Una sobre una empresa que creció mucho o un nuevo emprendimiento' },
            { career: 'analytics', label: 'Una con muchos datos o estadísticas para analizar' },
            { career: 'negocios', label: 'Una sobre comercio internacional o una empresa que se expandió al exterior' },
            { career: 'gestionhumana', label: 'Una sobre el clima laboral o los derechos de los trabajadores' },
            { career: 'economia', label: 'Una sobre inflación, el dólar o la economía del país' },
            { career: 'finanzas', label: 'Una sobre el mercado de valores o inversiones' },
            { career: 'marketing', label: 'Una sobre una campaña publicitaria que se volvió viral' }
        ]
    },
    {
        text: 'Te ofrecen una experiencia de intercambio de un semestre. ¿Qué harías con esa oportunidad?',
        options: [
            { career: 'psicopedagogia', label: 'Conocer cómo enseñan en otro país' },
            { career: 'psicologia', label: 'Investigar cómo se vive la salud mental en otras culturas' },
            { career: 'acompanamiento', label: 'Ver cómo acompañan a las personas en otros sistemas de salud' },
            { career: 'informatica', label: 'Aprender de tecnología en algún polo tech del mundo' },
            { career: 'contador', label: 'Ver cómo funciona la normativa contable en otro país' },
            { career: 'direccion', label: 'Armar contactos para un futuro proyecto propio' },
            { career: 'analytics', label: 'Formarte con datos en una empresa referente afuera' },
            { career: 'negocios', label: 'Aprovecharlo al máximo: es justo lo que buscás para tu carrera' },
            { career: 'gestionhumana', label: 'Entender cómo gestionan equipos en otras culturas' },
            { career: 'economia', label: 'Estudiar cómo funciona la economía de otro país' },
            { career: 'finanzas', label: 'Conocer mercados financieros distintos al local' },
            { career: 'marketing', label: 'Ver tendencias de consumo y marketing en otro mercado' }
        ]
    },
    {
        text: 'Para cerrar: si tuvieras que elegir una sola palabra que te representa, ¿cuál sería?',
        options: [
            { career: 'psicopedagogia', label: 'Enseñar' },
            { career: 'psicologia', label: 'Comprender' },
            { career: 'acompanamiento', label: 'Acompañar' },
            { career: 'informatica', label: 'Crear' },
            { career: 'contador', label: 'Precisión' },
            { career: 'direccion', label: 'Liderar' },
            { career: 'analytics', label: 'Analizar' },
            { career: 'negocios', label: 'Explorar' },
            { career: 'gestionhumana', label: 'Cuidar' },
            { career: 'economia', label: 'Entender' },
            { career: 'finanzas', label: 'Invertir' },
            { career: 'marketing', label: 'Comunicar' }
        ]
    }
];

let currentQuestion = 0;
let scores = {};

const introScreen = document.getElementById('introScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');

const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');

const resultArea = document.getElementById('resultArea');
const resultCareer = document.getElementById('resultCareer');
const resultDesc = document.getElementById('resultDesc');
const resultSaltoNote = document.getElementById('resultSaltoNote');
const whatsappBtn = document.getElementById('whatsappBtn');

const WHATSAPP_NUMBER = '59897098923';

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function showScreen(screen) {
    [introScreen, quizScreen, resultScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

function startQuiz() {
    currentQuestion = 0;
    scores = {};
    Object.keys(careers).forEach(id => { scores[id] = 0; });
    showScreen(quizScreen);
    renderQuestion();
}

function renderQuestion() {
    const question = questions[currentQuestion];

    progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
    progressText.textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
    questionText.textContent = question.text;

    optionsContainer.innerHTML = '';
    shuffle(question.options).forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.label;
        btn.addEventListener('click', () => selectOption(option.career));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(careerId) {
    scores[careerId] += 1;
    currentQuestion += 1;

    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        progressFill.style.width = '100%';
        showResult();
    }
}

function getResultCareer() {
    const maxPoints = Math.max(...Object.values(scores));
    const topCareers = Object.keys(scores).filter(id => scores[id] === maxPoints);

    if (topCareers.length === 1) {
        return topCareers[0];
    }

    // Desempate: suma de puntos de todas las carreras de la misma área
    const areaTotals = {};
    topCareers.forEach(id => {
        const area = careers[id].area;
        const total = Object.keys(scores)
            .filter(otherId => careers[otherId].area === area)
            .reduce((sum, otherId) => sum + scores[otherId], 0);
        areaTotals[id] = total;
    });

    return topCareers.reduce((best, id) =>
        areaTotals[id] > areaTotals[best] ? id : best
    , topCareers[0]);
}

function showResult() {
    const winnerId = getResultCareer();
    const winner = careers[winnerId];

    resultArea.textContent = winner.area;
    resultCareer.textContent = winner.nombre;
    resultDesc.textContent = winner.frase;

    if (winner.empiezaEnSalto) {
        resultSaltoNote.textContent = '📍 Podés empezar esta carrera en UCU Campus Salto y continuarla en Montevideo.';
        resultSaltoNote.classList.remove('hidden');
    } else {
        resultSaltoNote.classList.add('hidden');
    }

    const mensaje = `Hola! Quiero saber más información acerca de ${winner.nombre} y empezar en 2027!`;
    whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

    showScreen(resultScreen);
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', () => showScreen(introScreen));
