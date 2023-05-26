const gameBoard = document.getElementById('game-board');
const questionModal = document.getElementById('question-modal');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const revealAnswerBtn = document.getElementById('reveal-answer');
const correctBtn = document.getElementById('correct');
const incorrectBtn = document.getElementById('incorrect');
const closeQuestionBtn = document.getElementById('close-question');
const addTeamBtn = document.getElementById('add-team');
const teamsContainer = document.getElementById('teams-container');

const categories = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6', 'Unit 7'];

const questions = [{
    id: 1,
    question: 'This type of map would be the most useful for determining the elevation of a mountain.',
    answer: 'What is a topographic map?',
    value: 100
  },
  {
    id: 2,
    question: 'This term refers to the number of live births per 1,000 people in a population.',
    answer: 'What is crude birth rate?',
    value: 100
  },
  {
    id: 3,
    question: 'Question 3',
    answer: 'Answer 3',
    value: 100
  },
  {
    id: 4,
    question: 'Question 4',
    answer: 'Answer 4',
    value: 100
  },
  {
    id: 5,
    question: 'Question 5',
    answer: 'Answer 5',
    value: 100
  },
  {
    id: 6,
    question: 'Question 6',
    answer: 'Answer 6',
    value: 100
  },
  {
    id: 7,
    question: 'Question 7',
    answer: 'Answer 7',
    value: 100
  },
  {
    id: 8,
    question: 'This term describes the exact geographical location of something, often using latitude/longitutde lines or addresses.',
    answer: 'What is absolute location?',
    value: 200
  },
  {
    id: 9,
    question: 'This type of migration is when people voluntarily move within their own countries.',
    answer: 'What is internal migration?',
    value: 200
  },
  {
    id: 10,
    question: 'Question 3',
    answer: 'Answer 3',
    value: 200
  },
  {
    id: 11,
    question: 'Question 4',
    answer: 'Answer 4',
    value: 200
  },
  {
    id: 12,
    question: 'Question 5',
    answer: 'Answer 5',
    value: 200
  },
  {
    id: 13,
    question: 'Question 6',
    answer: 'Answer 6',
    value: 200
  },
  {
    id: 14,
    question: 'Question 7',
    answer: 'Answer 7',
    value: 200
  },
  {
    id: 15,
    question: 'This type of region is defined by a shared function or service, such as a transportation hub.',
    answer: 'What is a functional/nodal region?',
    value: 300
  },
  {
    id: 16,
    question: 'This economist and demographer suggested that population growth will outpace food supply.',
    answer: 'Who is Thomas Malthus?',
    value: 300
  },
  {
    id: 17,
    question: 'Question 3',
    answer: 'Answer 3',
    value: 300
  },
  {
    id: 18,
    question: 'Question 4',
    answer: 'Answer 4',
    value: 300
  },
  {
    id: 19,
    question: 'Question 5',
    answer: 'Answer 5',
    value: 300
  },
  {
    id: 20,
    question: 'Question 6',
    answer: 'Answer 6',
    value: 300
  },
  {
    id: 21,
    question: 'Question 7',
    answer: 'Answer 7',
    value: 300
  },
  {
    id: 22,
    question: 'This type of map projection keeps the latitude-longitude lines at 90 degree angles, but skews area.',
    answer: 'What is the Mercator projection?',
    value: 400
  },
  {
    id: 23,
    question: 'This type of population pyramid shows a declining/aging population.',
    answer: "What is a constricted/inverted population pyramid?",
    value: 400
  },
  {
    id: 24,
    question: 'Question 3',
    answer: 'Answer 3',
    value: 400
  },
  {
    id: 25,
    question: 'Question 4',
    answer: 'Answer 4',
    value: 400
  },
  {
    id: 26,
    question: 'Question 5',
    answer: 'Answer 5',
    value: 400
  },
  {
    id: 27,
    question: 'Question 6',
    answer: 'Answer 6',
    value: 400
  },
  {
    id: 28,
    question: 'Question 7',
    answer: 'Answer 7',
    value: 400
  },
  {
    id: 29,
    question: 'This area of study focuses on human activity and its relationship with the natural environment.',
    answer: 'What is Human Geography?',
    value: 500
  },
  {
    id: 30,
    question: 'This type of intraregional migration is characteristic of LDCs.',
    answer: 'What is rural-to-urban migration?',
    value: 500
  },
  {
    id: 31,
    question: 'Question 3',
    answer: 'Answer 3',
    value: 500
  },
  {
    id: 32,
    question: 'Question 4',
    answer: 'Answer 4',
    value: 500
  },
  {
    id: 33,
    question: 'Question 5',
    answer: 'Answer 5',
    value: 500
  },
  {
    id: 34,
    question: 'Question 6',
    answer: 'Answer 6',
    value: 500
  },
  {
    id: 35,
    question: 'Question 7',
    answer: 'Answer 7',
    value: 500
  }
];

let currentQuestion;
let currentQuestionId;
let teams = [];

function createBoard() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < categories.length; j++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      if (i === 0) {
        gridItem.textContent = categories[j];
      } else {
        const questionId = (i - 1) * categories.length + j;
        gridItem.textContent = (i) * 100;

        gridItem.addEventListener('click', () => {
          openQuestion(questionId);
        });
      }

      gameBoard.appendChild(gridItem);
    }
  }
}

function openQuestion(questionId) {
  currentQuestion = questions[questionId];
  currentQuestionId = questions[questionId].id;
  questionText.textContent = currentQuestion.question;
  answerText.textContent = currentQuestion.answer;
  questionModal.classList.remove('hidden');
}

function closeQuestion() {
  questionModal.classList.add('hidden');
  answerText.classList.add('hidden');
  revealAnswerBtn.classList.remove('hidden');
  correctBtn.classList.add('hidden');
  incorrectBtn.classList.add('hidden');
}

function revealAnswer() {
  answerText.classList.remove('hidden');
  revealAnswerBtn.classList.add('hidden');
  correctBtn.classList.remove('hidden');
  incorrectBtn.classList.remove('hidden');
}

function createTeam() {
  const team = {
    name: `Team ${teams.length + 1}`,
    points: 0
  };
  teams.push(team);

  const teamElement = document.createElement('div');
  teamElement.textContent = `${team.name}: ${team.points} points`;
  teamElement.id = `team-${teams.length - 1}`;
  teamsContainer.appendChild(teamElement);
}

function updateTeamPoints(teamIndex, points) {
  teams[teamIndex].points += points;
  const teamElement = document.getElementById(`team-${teamIndex}`);
  teamElement.textContent = `${teams[teamIndex].name}: ${teams[teamIndex].points} points`;
}

function handleCorrect() {
  closeQuestion();

  const teamIndex = prompt('Enter the team number that answered correctly:');
  if (teamIndex && teamIndex >= 1 && teamIndex <= teams.length) {
    updateTeamPoints(teamIndex - 1, currentQuestion.value);
  }

  const gridItem = gameBoard.querySelector(`.grid-item:nth-child(${currentQuestionId + 7})`);
  gridItem.classList.add('disabled');
  gridItem.removeEventListener('click', openQuestion);
}

function handleIncorrect() {
  closeQuestion();

  const gridItem = gameBoard.querySelector(`.grid-item:nth-child(${currentQuestionId + 7})`);
  gridItem.classList.add('disabled');
  gridItem.removeEventListener('click', openQuestion);
}

createBoard();

addTeamBtn.addEventListener('click', createTeam);
closeQuestionBtn.addEventListener('click', closeQuestion);
revealAnswerBtn.addEventListener('click', revealAnswer);
correctBtn.addEventListener('click', handleCorrect);
incorrectBtn.addEventListener('click', handleIncorrect);