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
    this.questionElement = document.querySelector('[name="question"]');
    this.optionElements = document.querySelectorAll('[name="option"]');
    this.setupOptionsClickHandler();
  }

  setupOptionsClickHandler() {
    this.optionElements.forEach((optionElement, optionIndex) => {
      optionElement.addEventListener('click', () => {
        this.handleOptionClick(optionIndex);
      });
    });
  }

  displayQuestion() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.questionElement.textContent = currentQuestion.question;
    
    this.optionElements.forEach((optionElement, optionIndex) => {
      optionElement.textContent = currentQuestion.options[optionIndex];
    });

    // Ocultar los elementos de pregunta y respuestas si se han mostrado todas las preguntas
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
    this.questionElement.style.display = 'none';
    this.optionElements.forEach(optionElement => {
      optionElement.style.display = 'none';
    });
  }

  showFinalScore() {
    const finalScore = (this.score / this.questions.length) * 10;
    const resultElement = document.createElement('p');
    resultElement.textContent = `Tu puntuación final es: ${finalScore.toFixed(1)}`;
    document.body.appendChild(resultElement);
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
    "Pregunta 2: ¿Cuál es el lema del proyecto?",
    [
      "A. Innovación y calidad",
      "B. Creciendo juntos",
      "C. Conexión y colaboración",
      "D. Hacia un futuro sostenible",
      "E. Excelencia y compromiso"
    ],
    2
  ),
  new Question(
    "Pregunta 3: ¿Cuál es el lema del proyecto?",
    [
      "A. Innovación y calidad",
      "B. Creciendo juntos",
      "C. Conexión y colaboración",
      "D. Hacia un futuro sostenible",
      "E. Excelencia y compromiso"
    ],
    2
  ),
  new Question(
    "Pregunta 4: ¿Cuál es el lema del proyecto?",
    [
      "A. Innovación y calidad",
      "B. Creciendo juntos",
      "C. Conexión y colaboración",
      "D. Hacia un futuro sostenible",
      "E. Excelencia y compromiso"
    ],
    2
  ),
  new Question(
    "Pregunta 5: ¿Cuál es el lema del proyecto?",
    [
      "A. Innovación y calidad",
      "B. Creciendo juntos",
      "C. Conexión y colaboración",
      "D. Hacia un futuro sostenible",
      "E. Excelencia y compromiso"
    ],
    2
  ),
  new Question(
    "Pregunta 6: ¿Cuál es el lema del proyecto?",
    [
      "A. Innovación y calidad",
      "B. Creciendo juntos",
      "C. Conexión y colaboración",
      "D. Hacia un futuro sostenible",
      "E. Excelencia y compromiso"
    ],
    2
  ),
  new Question(
    "Pregunta 7: ¿Cuál es el lema del proyecto?",
    [
      "A. Innovación y calidad",
      "B. Creciendo juntos",
      "C. Conexión y colaboración",
      "D. Hacia un futuro sostenible",
      "E. Excelencia y compromiso"
    ],
    2
  ),
  new Question(
    "Pregunta 8: ¿Cuál es el lema del proyecto?",
    [
      "A. Innovación y calidad",
      "B. Creciendo juntos",
      "C. Conexión y colaboración",
      "D. Hacia un futuro sostenible",
      "E. Excelencia y compromiso"
    ],
    2
  ),
  new Question(
    "Pregunta 9: ¿Cuál es el lema del proyecto?",
    [
      "A. Innovación y calidad",
      "B. Creciendo juntos",
      "C. Conexión y colaboración",
      "D. Hacia un futuro sostenible",
      "E. Excelencia y compromiso"
    ],
    2
  ),
  new Question(
    "Pregunta 10: ¿Cuál es el lema del proyecto?",
    [
      "A. Innovación y calidad",
      "B. Creciendo juntos",
      "C. Conexión y colaboración",
      "D. Hacia un futuro sostenible",
      "E. Excelencia y compromiso"
    ],
    2
  )
];

// Crea una instancia del juego y comienza a jugar
const quizGame = new QuizGame(questions);
quizGame.startGame();
