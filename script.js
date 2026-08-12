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
            { career: 'direccion', label: 'Coordinar un proyecto grupal y repartir tareas al equipo' }
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
            { career: 'direccion', label: 'Me gusta tomar decisiones y hacerme cargo de que las cosas salgan' }
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
            { career: 'direccion', label: 'El/la que organiza al equipo y define quién hace qué' }
        ]
    },
    {
        text: '¿Qué materia del liceo te resultó más copada?',
        options: [
            { career: 'psicopedagogia', label: 'Pedagogía / Ciencias de la educación' },
            { career: 'psicologia', label: 'Psicología / Filosofía' },
            { career: 'acompanamiento', label: 'Biología / Educación para la salud' },
            { career: 'informatica', label: 'Informática / Matemática aplicada' },
            { career: 'contador', label: 'Matemática financiera / Economía' },
            { career: 'direccion', label: 'Formación para la ciudadanía, proyectos y liderazgo' }
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
            { career: 'direccion', label: 'Armar un plan de acción y ayudarlo a decidir qué hacer' }
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
            { career: 'direccion', label: 'Que lideraste algo grande y lo sacaste adelante' }
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
            { career: 'direccion', label: 'Organizar los planes y decidir qué hacer' }
        ]
    },
    {
        text: '¿Qué tipo de contenido mirás o escuchás más?',
        options: [
            { career: 'psicopedagogia', label: 'Documentales sobre educación o desarrollo humano' },
            { career: 'psicologia', label: 'Series o podcasts sobre la mente y el comportamiento' },
            { career: 'acompanamiento', label: 'Historias de superación o de salud' },
            { career: 'informatica', label: 'Contenido de tecnología, gaming o programación' },
            { career: 'contador', label: 'Finanzas personales, economía o negocios' },
            { career: 'direccion', label: 'Emprendimiento, liderazgo o historias de empresas' }
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
            { career: 'direccion', label: 'Convencer a cualquiera de seguir tu plan' }
        ]
    },
    {
        text: '¿Qué ambiente de trabajo te imaginás en el futuro?',
        options: [
            { career: 'psicopedagogia', label: 'Una escuela, liceo o centro educativo' },
            { career: 'psicologia', label: 'Un consultorio o centro de salud mental' },
            { career: 'acompanamiento', label: 'Distintos lugares según a quién acompañes: casas, hospitales, escuelas' },
            { career: 'informatica', label: 'Una oficina de tecnología o trabajando remoto' },
            { career: 'contador', label: 'Un estudio contable o el área de finanzas de una empresa' },
            { career: 'direccion', label: 'Liderando un equipo o tu propia empresa' }
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
            { career: 'direccion', label: 'Ver que un proyecto que armaste salió como lo planeaste' }
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
            { career: 'direccion', label: 'Liderar' }
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

    showScreen(resultScreen);
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', () => showScreen(introScreen));
