const gameData =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let editedPlayer=0;
let activeplayer=0;
let currentround=1;
let gameisover=false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerconfigOverlayElement =document.getElementById('config-overlay');
const backdropElement =document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelconfigButtonElement = document.getElementById('cancel-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
//const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click',openplayerconfig);
editPlayer2BtnElement.addEventListener('click',openplayerconfig);

cancelconfigButtonElement.addEventListener('click',closeplayerconfig);
backdropElement.addEventListener('click',closeplayerconfig);

formElement.addEventListener('submit',saveplayerconfig);

startNewGameBtnElement.addEventListener('click',startNewgame);

// for(const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click',selectGameFiled);
// }
gameBoardElement.addEventListener('click',selectGameFiled);