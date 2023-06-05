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
    question: 'This term refers to the spread of cultural traits from one place to another.',
    answer: 'What is cultural diffusion?',
    value: 100
  },
  {
    id: 4,
    question: 'This term refers to a political entity that has a clearly defined territory and a single government.',
    answer: 'What is a state?',
    value: 100
  },
  {
    id: 5,
    question: "This term refers to the pratice of growing only enough crops to feed one's crops and one's family.",
    answer: 'What is subsistence agriculture?',
    value: 100
  },
  {
    id: 6,
    question: 'This term refers to a large urban area that consists of several metropolitan areas that have grown together.',
    answer: 'What is a megalopolis?',
    value: 100
  },
  {
    id: 7,
    question: 'This term refers to an industry whose inputs weigh more than the final products.',
    answer: 'What is a bulk-reducing industry?',
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
    question: 'This term describes the origin of a cultural trait or idea, before it spread.',
    answer: 'What is a hearth?',
    value: 200
  },
  {
    id: 11,
    question: 'This type of boundary not established out of practical purposes, and are essentially arbitrary in nature.',
    answer: 'What are geometric boundaries?',
    value: 200
  },
  {
    id: 12,
    question: 'What is the term for the process of converting forested land into agricultural land?',
    answer: 'What is deforestation?',
    value: 200
  },
  {
    id: 13,
    question: "This geographer's model of urban land use divides cities into concentric zones based on their function.",
    answer: 'Who is Ernest Burgess?',
    value: 200
  },
  {
    id: 14,
    question: 'This economic sector involves the extraction of raw materials, such as mining and agriculture.',
    answer: 'What is the primary sector?',
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
    question: 'This subgroup of culture is very slow to adapt and often spreads through relocation diffusion.',
    answer: 'What is folk culture?',
    value: 300
  },
  {
    id: 18,
    question: 'This type of political organization involves multiple countries working together for a common goal, such as the European Union.',
    answer: 'What is a supranational organization?',
    value: 300
  },
  {
    id: 19,
    question: 'What is the name of the revolution that greatly increased agricultural productivity in the 20th century, allowing for the production of more food per acre of land?',
    answer: 'What is the Green Revolution?',
    value: 300
  },
  {
    id: 20,
    question: 'This term refers to the process of renovating and improving a house or district to attract wealthier residents.',
    answer: 'What is gentrification?',
    value: 300
  },
  {
    id: 21,
    question: 'This revolution marked the transition from agrarian societies to industrialized, urban societies.',
    answer: 'What is the Industrial Revolution?',
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
    question: 'This term describes the process of a cultural trait or idea being passed on from those of status.',
    answer: 'What is hierarchical diffusion?',
    value: 400
  },
  {
    id: 25,
    question: 'This term describes the practice of adjusting voting district boundaries in order to benefit the interest of one political party or group.',
    answer: 'What is gerrymandering?',
    value: 400
  },
  {
    id: 26,
    question: ' This agricultural revolution began around 10,000 years ago with the development of crop cultivation and animal domestication.',
    answer: 'What is the Neolithic Revolution?',
    value: 400
  },
  {
    id: 27,
    question: 'This term refers to the outward growth of urban areas, often leading to the development of suburbs and the loss of rural land.',
    answer: 'What is urban sprawl?',
    value: 400
  },
  {
    id: 28,
    question: "This economic concept measures the total value of goods and services produced within a country's borders in a given year.",
    answer: 'What is Gross Domestic Product?',
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
    question: 'This term refers to the modification of a culture as it adopts traits from another culture while still retaining some of its original characteristics.',
    answer: 'What is acculturation?',
    value: 500
  },
  {
    id: 32,
    question: 'This term describes the fragmentation of a larger region or state into smaller regions or states, which may be hostile or uncooperative with one another.',
    answer: 'What is balkanization?',
    value: 500
  },
  {
    id: 33,
    question: 'This term refers to a type of subsistence agriculture in which people move their livestock from place to place in search of food and water.',
    answer: 'What is pastoral nomadism?',
    value: 500
  },
  {
    id: 34,
    question: 'This term refers to a hierachical settlement ordering principle that dictates the expected population of smaller cities given the biggest city in a country.',
    answer: 'What is the rank-size rule?',
    value: 500
  },
  {
    id: 35,
    question: "This term refers to how the clustering of an industry affects costs associated with a manufacturing plant, and is one of the three factors in Weber's Least Cost Theory of Industrial Location",
    answer: 'What are agglomeration costs?',
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
