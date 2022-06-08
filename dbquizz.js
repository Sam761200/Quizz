//
// main.js
//

let questionsData = [
    {
      text: "Le/la meilleur(e) ami(e) de Goku :",
      answers: [
        {
          text: "Vegeta",
          isCorrect: false
        },
        {
          text: "Krillin",
          isCorrect: true
        },
        {
          text: "Bulma",
          isCorrect: false
        },
        {
          text: "Tortue Géniale",
          isCorrect: false
        }
      ]
    },
    {
      text: "Le 1er ennemi de Goku: ",
      answers: [
        {
          text: "Tao pai pai",
          isCorrect: false
        },
        {
          text: "Piccolo",
          isCorrect: false
        },
        {
          text: "Yajirobe",
          isCorrect: false
        },
        {
          text: "Pilaf",
          isCorrect: true
        }
      ]
    },
    {
      text: "L'unitée de puissance dans Dragon ball:  ",
      answers: [
        {
          text: "Les muscles",
          isCorrect: false
        },
        {
          text: "Le nen",
          isCorrect: false
        },
        {
          text: "Le ki",
          isCorrect: true
        },
        {
          text: "Le reiatsu",
          usCorrect: false
        }
      ]
    },
    {
      text: "La condition d'entrainement de Tortue géniale : ",
      answers: [
        {
          text: "Rammener une jolie fille",
          isCorrect: true
        },
        {
          text: "Rammener une pierre",
          isCorrect: false
        },
        {
          text: "Rammener du lait",
          isCorrect: false
        },
        {
          text: "Rammener la coupe a la maison",
          isCorrect: false
        }
      ]
    },
    {
      text: "Qui a coupé la queue de Goku pour la première fois : ",
      answers: [
        {
          text: "Bulma",
          isCorrect: false
        },
        {
          text: "Tortue géniale",
          isCorrect: false
        },
        {
          text: "Yamcha",
          isCorrect: true
        },
        {
          text: "Krillin",
          isCorrect: false
        }
      ]
    },
    {
        text: "Pourquoi Krillin n'a t'il pas de nez :",
        answers: [
          {
            text: "Toriyama trouvait ça drôle",
            isCorrect: true
          },
          {
            text: "On lui a volé",
            isCorrect: false
          },
          {
            text: "Il est invisible",
            isCorrect: true
          },
          {
            text: "Il est né comme ça",
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