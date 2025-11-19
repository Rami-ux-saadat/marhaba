document.addEventListener('DOMContentLoaded', () => {
    const quizData = {
        styles: {
            a: { name: "Natural", companion: "Tobi", image: "https://i.imgur.com/6a0i358.jpeg", tuGuia: "El amigo leal que nunca falla.", caracteristicas: ["Cercano", "confiable", "protector", "relajado"], comoTeGuia: "Tobi te recuerda que tu marca brilla siendo auténtica y cercana. Te conecta con lo humano, con lo simple y con lo verdadero.", personalidadEmpresarial: "Honesta, empática, transparente.", energiaComunica: "Calidez, seguridad, confianza.", idealParaMarcasQue: "valoran relaciones duraderas, servicio al cliente excepcional y una comunicación natural y sin pretensiones.", neurociencia: "Activa la empatía y sensación de seguridad.", companionMessage: "Confía en que TOBIRAMA es lo que necesitas para dar el siguiente salto en tu marca. ¡Te lo digo como tu más leal guía!", },
            b: { name: "Romántico", companion: "Sally", image: "https://i.imgur.com/F4hdc4r.png", tuGuia: "El que enamora con cada gesto.", caracteristicas: ["Dulce", "elegante", "sensible", "amoroso"], comoTeGuia: "Sally te ayuda a cuidar los detalles y crear vínculos emocionales con tu audiencia. Conecta desde el corazón.", personalidadEmpresarial: "Estética delicada, emocional, afectiva.", energiaComunica: "Belleza, ternura, cercanía.", idealParaMarcasQue: "buscan enamorar desde el diseño, la atención y la calidez emocional.", neurociencia: "Activa circuitos de apego y conexión emocional.", companionMessage: "Confía en que TOBIRAMA es lo que necesitas para dar el siguiente salto en tu marca. ¡Te lo digo como tu más leal guía!", },
            c: { name: "Tradicional", companion: "Max", image: "https://i.imgur.com/YdQAG0b.png", tuGuia: "El que siempre está, pase lo que pase.", caracteristicas: ["Paciencia", "leal", "estructurado", "estable"], comoTeGuia: "Max te recuerda que la confianza se construye con el tiempo. Te ayuda a ser constante, claro y firme.", personalidadEmpresarial: "Formal, seria, basada en valores.", energiaComunica: "Orden, seguridad, responsabilidad.", idealParaMarcasQue: "valoran la tradición, la ética profesional y la estabilidad a largo plazo.", neurociencia: "Genera sensación de orden y permanencia.", companionMessage: "Confía en que TOBIRAMA es lo que necesitas para dar el siguiente salto en tu marca. ¡Te lo digo como tu más leal guía!", },
            d: { name: "Seductor", companion: "Vesper", image: "https://i.imgur.com/rZqla8K.png", tuGuia: "El que brilla y todos siguen.", caracteristicas: ["Atractivo", "independiente", "magnético", "energético"], comoTeGuia: "Vesper te enseña a destacar con personalidad, carisma y una comunicación que atrapa.", personalidadEmpresarial: "Audaz, segura, encantadora.", energiaComunica: "Deseo, impulso, espontaneidad.", idealParaMarcasQue: "conectan desde el estilo, el deseo y la atracción.", neurociencia: "Estimula la atención y genera interés inmediato.", companionMessage: "Confía en que TOBIRAMA es lo que necesitas para dar el siguiente salto en tu marca. ¡Te lo digo como tu más leal guía!", },
            e: { name: "Elegante", companion: "Aurora", image: "https://i.imgur.com/NlbPbzi.png", tuGuia: "La que lo dice todo sin decir una sola palabra.", caracteristicas: ["Refinada", "sobria", "majestuosa", "reservada"], comoTeGuia: "Aurora te ayuda a construir una imagen impecable, cuidada y de alto nivel. Menos es más.", personalidadEmpresarial: "Estilizada, sofisticada, precisa.", energiaComunica: "Prestigio, distinción, confianza silenciosa.", idealParaMarcasQue: "se posicionan como *premium*, exclusivas o con enfoque de lujo.", neurociencia: "Activa la admiración y el respeto.", companionMessage: "Confía en que TOBIRAMA es lo que necesitas para dar el siguiente salto en tu marca. ¡Te lo digo como tu más leal guía!", },
            f: { name: "Dramático", companion: "Doña Perla", image: "https://i.imgur.com/b7ZOmGS.png", tuGuia: "El que llega y no se olvida.", caracteristicas: ["Intenso", "expresivo", "apasionado", "potente"], comoTeGuia: "Doña Perla te impulsa a conectar desde lo emocional y lo inolvidable. Eres puro impacto.", personalidadEmpresarial: "Audaz, carismática, teatral.", energiaComunica: "Presencia, emoción, transformación.", idealParaMarcasQue: "quieren dejar huella, liderar y emocionar a su audiencia.", neurociencia: "Estimula la atención y activa respuestas emocionales intensas.", companionMessage: "Confía en que TOBIRAMA es lo que necesitas para dar el siguiente salto en tu marca. ¡Te lo digo como tu más leal guía!", },
            g: { name: "Creativo", companion: "Dali", image: "https://i.imgur.com/DbGBRCV.png", tuGuia: "El que siempre tiene una idea nueva.", caracteristicas: ["Original", "curioso", "ingenioso", "juguetón"], comoTeGuia: "Dali te inspira a salirte de la caja, a probar cosas nuevas y comunicar de forma única.", personalidadEmpresarial: "Innovadora, abierta, versátil.", energiaComunica: "Movimiento, ingenio, sorpresa.", idealParaMarcasQue: "apuestan por lo diferente, lo disruptivo o lo cultural.", neurociencia: "Activa el pensamiento lateral y fomenta la creatividad.", companionMessage: "Confía en que TOBIRAMA es lo que necesitas para dar el siguiente salto en tu marca. ¡Te lo digo como tu más leal guía!", },
        },
        questions: [
            { text: "¿Cómo describirías la relación que tu empresa busca construir con sus clientes?", options: [{ value: "a", text: "Cercana, cálida y confiable." }, { value: "b", text: "Emotiva, delicada y afectuosa." }, { value: "c", text: "Formal, estable y respetuosa." }, { value: "d", text: "Energética, carismática y atractiva." }, { value: "e", text: "Sofisticada, exclusiva y majestuosa." }, { value: "f", text: "Apasionada, vibrante y expresiva." }, { value: "g", text: "Innovadora, curiosa y única." }] },
            { text: "Si tu empresa fuera un compañero como un perrito, ¿qué característica destacaría más?", options: [{ value: "a", text: "Lealtad y protección." }, { value: "b", text: "Dulzura y elegancia." }, { value: "c", text: "Paciencia y constancia." }, { value: "d", text: "Magnetismo y energía." }, { value: "e", text: "Nobleza y distinción." }, { value: "f", text: "Carisma y pasión." }, { value: "g", text: "Creatividad y originalidad." }] },
            { text: "Si cometieras un error con un cliente, ¿cómo lo manejarías?", options: [{ value: "a", text: "Agendo una visita y le comunico las cosas cara a cara." }, { value: "b", text: "Mando un comunicado por correo." }, { value: "c", text: "Envío un mensaje emotivo de disculpa, explicando a detalle la situación." }, { value: "d", text: "Reviso a detalle el contrato y presento un aviso con un plan de acción formal." }, { value: "e", text: "Aprovecho la gran relación que siempre tengo con mis clientes para aligerar el problema." }, { value: "f", text: "Realizo un contenido llamativo o un video para presentar con el cliente." }, { value: "g", text: "Hago que mi cliente venga a mis oficinas y le presento un monólogo de impacto para tranquilizarlo." }] },
            { text: "¿Cuál es el principal valor que quieres transmitir con tu imagen?", options: [{ value: "a", text: "Seguridad y confianza." }, { value: "b", text: "Amor y cuidado." }, { value: "c", text: "Tradición y estabilidad." }, { value: "d", text: "Atracción y misterio." }, { value: "e", text: "Exclusividad y respeto." }, { value: "f", text: "Energía y liderazgo." }, { value: "g", text: "Innovación y visión." }] },
            { text: "¿Cómo te gustaría que los clientes se sientan al interactuar con tu marca?", options: [{ value: "a", text: "Protegidos y valorados." }, { value: "b", text: "Enamorados y conectados emocionalmente." }, { value: "c", text: "Seguros y distinguidos." }, { value: "d", text: "Intrigados y fascinados." }, { value: "e", text: "Admirados y especiales." }, { value: "f", text: "Inspirados y motivados." }, { value: "g", text: "Sorprendidos y estimulados." }] },
            { text: "¿Cómo se siente estar en el espacio de tu empresa?", options: [{ value: "a", text: "Cómodo y relajado, como estar entre amigos." }, { value: "b", text: "Cálido y con buen gusto, todo bien cuidado." }, { value: "c", text: "Formal, serio y con estructura clara." }, { value: "d", text: "Con energía y buena onda, algo que llama la atención." }, { value: "e", text: "Pulcro, sobrio y con mucho estilo." }, { value: "f", text: "Intenso, con una presencia fuerte que no pasa desapercebida." }, { value: "g", text: "Diferente, original y lleno de ideas." }] },
            { text: "Si tu empresa fuera a un evento propio, ¿cómo sería su estilo y presencia?", options: [{ value: "a", text: "Sería como una reunión en casa, súper cálida y amigable, donde todos se sienten bienvenidos y en confianza." }, { value: "b", text: "Imagina un evento en un jardín precioso, con luces suaves y cada detalle cuidado para crear un ambiente romántico y encantador." }, { value: "c", text: "Sería una ceremonia clásica, con todo bien organizado, gente vestida formal y un ambiente serio pero muy respetuoso." }, { value: "d", text: "Una fiesta llena de energía, con música que engancha, gente carismática y un ambiente que no pasa desapercebido." }, { value: "e", text: "Un evento elegante en un salón exclusivo, con decoración sofisticada y un aire de lujo que hace que todos se sientan especiales." }, { value: "f", text: "Un *fashion show* que nadie puede dejar de ver y admirar, un mundo súper *fashionista* y vibrante." }, { value: "g", text: "Un encuentro creativo, con espacios originales, ideas frescas y dinámicas disruptivas." }] },
            { text: "Si tu empresa fuera un personaje en una película, ¿cómo sería su papel?", options: [{ value: "a", text: "El amigo fiel que siempre está ahí para apoyar a todos." }, { value: "b", text: "El romántico que conquista con detalles y gestos llenos de ternura." }, { value: "c", text: "El sabio que da consejos y mantiene el orden en la historia." }, { value: "d", text: "El misterioso y carismático que atrae todas las miradas sin esfuerzo." }, { value: "e", text: "El noble líder que inspira respeto y elegancia en cada escena." }, { value: "f", text: "El héroe apasionado que entra en escena con energía y hace vibrar a todos." }, { value: "g", text: "El genio creativo que siempre tiene ideas fuera de lo común y sorprende a todos." }] },
            {
                text: "Si tu empresa tuviera una canción que la representara, ¿cuál sería el estilo?",
                options: [
                    { value: "a", text: "Una canción agradable que habla de amistad y confianza." },
                    { value: "b", text: "Una melodía suave y romántica que toca el corazón con delicadeza." },
                    { value: "c", text: "Un clásico tranquilo y estructurado que transmite seguridad." },
                    { value: "d", text: "Un ritmo enérgico y seductor tipo techno que no puedes dejar de escuchar." },
                    { value: "e", text: "Una pieza elegante y sofisticada, como música de salón o jazz." },
                    { value: "f", text: "Una canción vibrante y poderosa que llena de energía a quien la escucha." },
                    { value: "g", text: "Un tema innovador y experimental que rompe con lo tradicional." }
                ]
            },
            { text: "Si la esencia de tu empresa fuera un aroma, ¿cómo lo describirías?", options: [{ value: "a", text: "Un aroma cálido y familiar, como el olor a pan recién horneado en casa." }, { value: "b", text: "Una fragancia suave y floral, como un ramo de rosas en un jardín tranquilo." }, { value: "c", text: "Un aroma clásico y limpio, como el de madera pulida en una biblioteca antigua." }, { value: "d", text: "Una mezcla fresca y vibrante, con un toque de menta y cítricos que despierta los sentidos." }, { value: "e", text: "Un perfume sofisticado y elegante, con notas de ámbar y sándalo que dejan huella." }, { value: "f", text: "Un aroma intenso y apasionado, como el de especias exóticas que llenan el ambiente." }, { value: "g", text: "Un olor inesperado y creativo, como una combinación única de hierbas y flores silvestres." }] },
        ]
    };

    const quizState = {
        currentQuestionIndex: 0,
        userAnswers: new Array(quizData.questions.length).fill(null),
    };

    const DOM = {
        screens: {
            welcome: document.getElementById('welcome-screen'),
            quiz: document.getElementById('quiz-screen'),
            completion: document.getElementById('completion-screen'),
            results: document.getElementById('results-screen'),
        },
        nextQuestionButton: document.getElementById('next-question-button'),
        showResultsButton: document.getElementById('show-results-button'),
        retakeQuizButton: document.getElementById('retake-quiz-button'),
        questionCounter: document.getElementById('question-counter'),
        questionText: document.querySelector('.question-text'),
        optionsContainer: document.querySelector('.options'),
        progressBarFill: document.getElementById('progress-bar-fill'),
        progressPercentage: document.getElementById('progress-percentage'),
        resultsContent: document.getElementById('results-content'),
    };

    function showScreen(screenName) {
        for (const key in DOM.screens) {
            DOM.screens[key].classList.toggle('active', key === screenName);
        }
        const activeScreenElement = DOM.screens[screenName];
        const firstHeading = activeScreenElement.querySelector('h1, h2');
        if (firstHeading) {
            firstHeading.focus({ preventScroll: true });
        }
        if (screenName === 'results' || screenName === 'completion') {
           activeScreenElement.scrollTop = 0;
        }
    }

    function updateProgressBar() {
        const progress = (quizState.currentQuestionIndex / quizData.questions.length);
        const percentage = Math.floor(progress * 100);
        DOM.progressBarFill.style.width = `${percentage}%`;
        DOM.progressPercentage.textContent = `${percentage}%`;
    }

    function displayQuestion() {
        const question = quizData.questions[quizState.currentQuestionIndex];
        DOM.questionCounter.textContent = `Pregunta ${quizState.currentQuestionIndex + 1} de ${quizData.questions.length}`;
        DOM.questionText.textContent = question.text;
        
        DOM.optionsContainer.innerHTML = '';
        question.options.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${quizState.currentQuestionIndex}`;
            input.value = option.value;
            label.innerHTML = ` ${option.text}`;
            label.prepend(input);
            DOM.optionsContainer.appendChild(label);
        });
        
        DOM.nextQuestionButton.disabled = true;
        updateProgressBar();
    }

    function createStyleBlockHTML(styleObject, type) {
        const title = type === 'predominant' ? 'Estilo Principal' : 'Subestilo';
        const containerClass = type === 'predominant' ? 'predominant-details' : 'sub-style-details';
        return `
            <div class="style-details ${containerClass}">
                <h3>${title}: <span>${styleObject.name}</span></h3>
                <p><strong>Tu guía:</strong> ${styleObject.tuGuia}</p>
                <ul>${styleObject.caracteristicas.map(c => `<li>${c}</li>`).join('')}</ul>
                <p><strong>Cómo te guía:</strong> ${styleObject.comoTeGuia}</p>
                <p><strong>Personalidad empresarial:</strong> ${styleObject.personalidadEmpresarial}</p>
                <p><strong>Tu energía comunica:</strong> ${styleObject.energiaComunica}</p>
                <p><strong>Ideal para marcas que…</strong> ${styleObject.idealParaMarcasQue}</p>
                <p><strong>Neurociencia:</strong> ${styleObject.neurociencia}</p>
                <p class="companion-message">🐶 ${styleObject.companion} tiene un mensaje para ti:<br> ${styleObject.companionMessage}</p>
            </div>
        `;
    }

    function displayResults(predominantKey, subKey) {
        let finalHTML = '';
        const predominantStyle = quizData.styles[predominantKey];
        if (!predominantStyle) {
            finalHTML = '<p>No pudimos determinar tu estilo. ¡Inténtalo de nuevo!</p>';
            DOM.resultsContent.innerHTML = finalHTML;
            showScreen('results');
            return;
        }
        finalHTML += `
            <div class="companion-display">
                <img id="companion-image" src="${predominantStyle.image}" alt="${predominantStyle.companion}" />
                <p class="companion-intro">Tu compañero fiel es:</p>
                <p class="companion-name">${predominantStyle.companion}</p>
            </div>
        `;
        finalHTML += createStyleBlockHTML(predominantStyle, 'predominant');
        if (subKey && subKey !== predominantKey) {
            const subStyle = quizData.styles[subKey];
            finalHTML += createStyleBlockHTML(subStyle, 'sub');
        }
        DOM.resultsContent.innerHTML = finalHTML;
        showScreen('results');
    }

    function calculateAndShowResults() {
        const counts = quizState.userAnswers.reduce((acc, answer) => {
            if (answer) acc[answer] = (acc[answer] || 0) + 1;
            return acc;
        }, {});
        const sortedStyles = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
        const predominantKey = sortedStyles[0] || null;
        const subKey = sortedStyles[1] || null;
        displayResults(predominantKey, subKey);
    }

    function handleNextQuestion() {
        const selectedOption = DOM.optionsContainer.querySelector(`input:checked`);
        if (!selectedOption) return;
        quizState.userAnswers[quizState.currentQuestionIndex] = selectedOption.value;
        quizState.currentQuestionIndex++;
        if (quizState.currentQuestionIndex < quizData.questions.length) {
            displayQuestion();
        } else {
            updateProgressBar();
            showScreen('completion');
        }
    }

    function resetQuiz() {
        quizState.currentQuestionIndex = 0;
        quizState.userAnswers.fill(null);
        DOM.resultsContent.innerHTML = '';
        showScreen('welcome');
        updateProgressBar();
    }

    // Event listener is now on the whole welcome screen
    DOM.screens.welcome.addEventListener('click', () => {
        showScreen('quiz');
        displayQuestion();
    });

    DOM.nextQuestionButton.addEventListener('click', handleNextQuestion);
    DOM.retakeQuizButton.addEventListener('click', resetQuiz);
    DOM.showResultsButton.addEventListener('click', calculateAndShowResults);
    DOM.optionsContainer.addEventListener('change', () => {
        DOM.nextQuestionButton.disabled = false;
    });

    // Initial setup
    showScreen('welcome');
    updateProgressBar();
});