const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Add Event Listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

class Project {
  constructor(title, image, code, site, about, tools = []) {
      this.title = title;
      this.image = image;
      this.code = code;
      this.site = site;
      this.about = about;
      this.tools = tools;
  }
}
const bankBudget = new Project(
  'Bank & Budget App',
  '../src/images/bank.png',
  'https://github.com/yvettetan/batch8-frontend-activities/tree/main/BankApp',
  'https://yvettetan.github.io/batch8-frontend-activities/BankApp/login.html',
  'An application designed for bank tellers to track customer accounts and handle common transactions.'
)
const scout = new Project(
  'Scout: Food Expiry Tracker',
  '../src/images/scout.png',
  'https://github.com/yvettetan/batch8-frontend-activities/tree/main/Scout',
  'https://yvettetan.github.io/batch8-frontend-activities/Scout/index.html#',
  'A multi-featured food tracking application that helps users to reduce food waste at home.'
)
const epilogue = new Project(
  'EPILOGUE',
  '../src/images/epilogue.png',
  'https://github.com/yvettetan/blog-app',
  'http://theblog16.herokuapp.com/',
  'A book review blog that allows users to view and comment on articles.'
)
const takenote = new Project(
  'TakeNote.',
  '../src/images/takenote.png',
  'https://github.com/yvettetan/journal-app',
  'https://take-note36.herokuapp.com/',
  'A task management app that allows users to track their own tasks.'
)

const featureProjectsArr = [takenote, epilogue, scout, bankBudget];


const featureProjects = document.getElementById('feature-projects');

featureProjectsArr.forEach(project => {
  let projectContainer = document.createElement('div');
  projectContainer.className = 'project-container';
  projectContainer.innerHTML = 
  `<div class="project-info card-body p-4">
    <div class="card-title"><h1 class='text-2xl'>${project.title}</h1></div> 
    <p>${project.about}</p> 
    <div class="project-actions">
      <a href="${project.site}" target="_blank"><button class="btn btn-primary">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      &nbsp;Preview Site</button></a>
      <a href="${project.code}" target="_blank"><button class="btn btn-code">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        &nbsp;View code
      </button></a>
    </div>
  </div>
  <figure class='project-image'>
    <img src="${project.image}">
  </figure>`;
  featureProjects.appendChild(projectContainer);
});

const safariChessboard = new Project(
  'Safari Chessboard',
  '../src/images/chessboard-grid.png',
  'https://github.com/yvettetan/batch8-frontend-frontend-activities/tree/main/Chessboard-grid',
  'https://yvettetan.github.io/batch8-frontend-frontend-activities/Chessboard-grid/index.html',
  'Themed chessboard built with animations.'
)
const landingPage = new Project(
  'Fix & Fogg',
  '../src/images/landingpage.png',
  'https://github.com/yvettetan/batch8-frontend-frontend-activities/tree/main/LandingPage',
  'https://yvettetan.github.io/batch8-frontend-frontend-activities/LandingPage/index.html',
  'Unofficial product landing page for Fix & Fogg.'
)
const momentum = new Project(
  'Momentum',
  '../src/images/momentum.png',
  'https://github.com/yvettetan/batch8-frontend-activities/tree/main/MomentumApp',
  'https://yvettetan.github.io/batch8-frontend-activities/MomentumApp/index.html',
  'Create a to-do list and find inspiration through quotes.'
)
const quizGame = new Project(
  'Quiz Game',
  '../src/images/quizgame.png',
  'https://github.com/yvettetan/batch8-frontend-activities/tree/main/QuizGame',
  'https://yvettetan.github.io/batch8-frontend-activities/QuizGame/index.html',
  'Test your film knowledge. Try to achieve 5 correct answers in a row!'
)
const tictactoe = new Project(
  'Tic Tac Toe',
  '../src/images/tictactoe.png',
  'https://github.com/yvettetan/batch8-frontend-activities/tree/main/TicTacToe',
  'https://yvettetan.github.io/batch8-frontend-activities/TicTacToe/index.html',
  'Challenge a friend to a classic game of Tic Tac Toe.'
)
const otherProjectsArr = [safariChessboard, landingPage, momentum, quizGame, tictactoe];

const otherProjects = document.getElementById('other-projects');

otherProjectsArr.forEach(project=>{
  let otherProjectContainer = document.createElement('div');
  otherProjectContainer.className = 'other-project-container';
  otherProjectContainer.innerHTML = `
  <figure class="other-project-img">
    <img src="${project.image}">
  </figure>
  <div class="other-project-info">
    <h1 class="other-project-title">${project.title}</h1>
    <p class='text-center'>${project.about}</p>
    <div class="project-actions">
      <a href="${project.site}" target="_blank"><button class="other-project-btn">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </button></a>
      <a href="${project.code}" target="_blank">
      <button class="other-project-btn btn-code">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    </button>
      </a>
    </div>
  </div>`;
  otherProjects.appendChild(otherProjectContainer);
})