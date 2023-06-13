class Question {
  constructor(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}

class QuizGame {
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.questionElement = $('section').first();
    this.optionElements = $('button');
    this.setupOptionsClickHandler();
  }

  setupOptionsClickHandler() {
    this.optionElements.each((optionIndex, optionElement) => {
      $(optionElement).on('click', () => {
        this.handleOptionClick(optionIndex);
      });
    });
  }

  displayQuestion() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.questionElement.html("<h3>" + currentQuestion.question + "</h3>");

    this.optionElements.each((optionIndex, optionElement) => {
      $(optionElement).text(currentQuestion.options[optionIndex]);
    });

    if (this.currentQuestionIndex === this.questions.length) {
      this.hideQuestionAndOptions();
    }
  }

  handleOptionClick(optionIndex) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (optionIndex === currentQuestion.answer) {
      this.score++;
    }

    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.displayQuestion();
    } else {
      this.showFinalScore();
    }
  }

  hideQuestionAndOptions() {
    this.questionElement.hide();
    this.optionElements.hide();
    $('h3').hide(); // Oculta el título del quiz
    $('ul').hide(); // Oculta los puntos de la lista de respuestas posibles
  }

  showFinalScore() {
    const finalScore = (this.score / this.questions.length) * 10;
    const resultElement = $('<p>').text(`Tu puntuación final es: ${finalScore.toFixed(1)}`);
    $('body').append(resultElement);
    this.hideQuestionAndOptions();
  }

  startGame() {
    this.displayQuestion();
  }
}

// Array de preguntas y respuestas
const questions = [
  new Question(
    "Pregunta 1: ¿Cuál es la dificultad de la ruta a las Capillas de Monsacro?",
    [
      "A. Dificultad Extrema",
      "B. Dificultad Fácil",
      "C. Dificultad Media",
      "D. Sólo para Profesionales",
      "E. No recomendada para público de a pie"
    ],
    2
  ),
  new Question(
    "Pregunta 2: ¿Cuál de estos postres destaca en Morcín?",
    [
      "A. La tarda de Afuega'l pitu",
      "B. Chocolate",
      "C. Magdalenas de calabaza",
      "D. Frixuelos",
      "E. Donuts con zanahoria"
    ],
    0
  ),
  new Question(
    "Pregunta 3: ¿Con qué festividad coincide el Certamen del Queso de Afuega'l Pitu?",
    [
      "A. Dia de Todos los Santos",
      "B. San Mateo",
      "C. Dia de la Almudena",
      "D. San Antón",
      "E. Excelencia y compromiso"
    ],
    3
  ),
  new Question(
    "Pregunta 4: ¿Cual de estas parroquias se encuentra en Morcín?",
    [
      "A. Santa María de Llas",
      "B. Bres",
      "C. Arciprestazgo de El Fresno",
      "D. Santianes del Rey Silo",
      "E. Peñerudes"
    ],
    4
  ),
  new Question(
    "Pregunta 5: ¿En que edad se puso en venta la jurisdicción del coto de Morcín?",
    [
      "A. Edad de Hierro",
      "B. Edad Media",
      "C. Edad Moderna",
      "D. Edad Contemporánea",
      "E. Todas las anteriores son falsas"
    ],
    2
  ),
  new Question(
    "Pregunta 6: ¿Qué limita al norte del concejo?",
    [
      "A. Concejo de Quirós",
      "B. Concejo de Ribera de Arriba",
      "C. Concejo de Riosa",
      "D. Concejo de Mieres",
      "E. Ninguna respuesta es correcta"
    ],
    1
  ),
  new Question(
    "Pregunta 7: ¿Cuantos molinos se pueden visitar en la Ruta de los Molinos?",
    [
      "A. 15 molinos",
      "B. 3 molinos",
      "C. 10 molinos",
      "D. 9 molinos",
      "E. 6 molinos"
    ],
    3
  ),
  new Question(
    "Pregunta 8: ¿Cuanta altitud (en metros) tiene el Pico Gamoniteiro?",
    [
      "A. 1792 metros",
      "B. 1891 metros",
      "C. 1175 metros",
      "D. 2486 metros",
      "E. 1791 metros"
    ],
    4
  ),
  new Question(
    "Pregunta 9: ¿Cuanta distancia existe entre el Pico Xistras y el Pico Gamoniteiro?",
    [
      "A. 4567 metros",
      "B. 2500 metros",
      "C. 1643 metros",
      "D. 3625 metros",
      "E. 1600 metros"
    ],
    1
  ),
  new Question(
    "Pregunta 10: ¿En que año fue la primera edición del Certamen del Queso de Afuega'l Pitu?",
    [
      "A. 1946",
      "B. 1994",
      "C. 2003",
      "D. 1981",
      "E. 1975"
    ],
    3
  )
];

// Crea una instancia del juego y comienza a jugar
const quizGame = new QuizGame(questions);
quizGame.startGame();
