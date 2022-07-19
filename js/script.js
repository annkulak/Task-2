import { getGameInterface } from './interface.js';
import { getButtonArray, getButtonChoiceArray } from './buttons.js';

function getGame() {
    getGameInterface();
    getButtonArray();
    getButtonChoiceArray();
}

getGame();

const gamePlatform = document.querySelector('.game-platform-container');

export { gamePlatform };