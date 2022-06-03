//
// main.js
//

let questionsData = [
    {
      text: "L'arc de Usopp :",
      answers: [
        {
          text: "Alabasta",
          isCorrect: false
        },
        {
          text: "Village Sirop",
          isCorrect: true
        },
        {
          text: "Thriller Bark",
          isCorrect: false
        },
        {
          text: "Water Seven",
          isCorrect: false
        }
      ]
    },
    {
      text: "Plat préféré de Luffy : ",
      answers: [
        {
          text: "La viande",
          isCorrect: true
        },
        {
          text: "Les ramens",
          isCorrect: false
        },
        {
          text: "La pizzas",
          isCorrect: false
        },
        {
          text: "Le couscous",
          isCorrect: false
        }
      ]
    },
    {
      text: "Fruit du démon de Baggy :  ",
      answers: [
        {
          text: "Awa Awa no Mi",
          isCorrect: false
        },
        {
          text: 'Tori Tori no Mi"',
          isCorrect: false
        },
        {
          text: "Bara Bara no Mi",
          isCorrect: true
        }
      ]
    },
    {
      text: "Village ou luffy est née : ",
      answers: [
        {
          text: "Fuchsia",
          isCorrect: true
        },
        {
          text: "Gosa",
          isCorrect: false
        },
        {
          text: "Loguetown",
          isCorrect: false
        },
        {
          text: "1985",
          isCorrect: false
        }
      ]
    },
    {
      text: "Origine est Zoro selon Oda : ",
      answers: [
        {
          text: "Brésilien",
          isCorrect: false
        },
        {
          text: "Russe",
          isCorrect: false
        },
        {
          text: "Japonais",
          isCorrect: true
        },
        {
          text: "Juif",
          isCorrect: false
        }
      ]
    },
    {
        text: "Chopper adore :",
        answers: [
          {
            text: "Les bains",
            isCorrect: true
          },
          {
            text: "Le miel",
            isCorrect: false
          },
          {
            text: "La barbe à papa",
            isCorrect: true
          },
          {
            text: "Le poisson",
            isCorrect: false
          }
        ]
      }
  ];
  
  // variables initialization
  let questions = [];
  let score = 0,
    answeredQuestions = 0;
  let appContainer = document.getElementById("questions-container");
  let scoreContainer = document.getElementById("score-container");
  scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;
  
  /**
   * Shuffles array in place. ES6 version
   * @param {Array} arr items An array containing the items.
   */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  shuffle(questionsData);
  
  // creating questions
  for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
      text: questionsData[i].text,
      answers: questionsData[i].answers
    });
  
    appContainer.appendChild(question.create());
    questions.push(question);
  }
  
  document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
      score++;
    }
  
    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();
  
    if (answeredQuestions == questions.length) {
      setTimeout(function () {
        alert(`T'es vraiment un boss toi ! \nScore final: ${score}/${questions.length}`);
      }, 100);
    }
  });
  
  console.log(questions, questionsData);