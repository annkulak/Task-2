import { gamePlatform } from './script.js';
import { buttonCatalog } from './button-catalog.js';
import { getGamePlay } from './game-play.js';

let sizePlatformX = 3;
let sizePlatformY = 3;
let move = 0;

let choiseValue;
let lastChoiceValue;
let choisePicture;
let choiseNamePicture;

class GameButton {

    constructor(value, picture, namePicture) {
        this.value = value;
        this.picture = picture;
        this.namePicture = namePicture;
        this.init();
    }

    init() {
        this.element = document.createElement('button');
        this.element.classList.add('game-button');
        this.element.value = this.value;
        this.initPictureElement();
    }

    initPictureElement() {
        this.pictureElement = document.createElement('img');
        this.pictureElement.classList.add('game-button-picture');
        this.pictureElement.src = this.picture;
        this.pictureElement.alt = this.namePicture;
        this.element.append(this.pictureElement);
    }

    gameChoice() {
        this.element.addEventListener('click', () => {
            if ((this.element.value !== 'undefined') && (this.value !== lastChoiceValue)) {
                new Audio('./sound/sound-click-3.mp3').play();
                choiseValue = this.value;
                choisePicture = this.picture;
                choiseNamePicture = this.namePicture;
            } else if (this.element.value === 'undefined') {
                new Audio('./sound/sound-clear.mp3').play();
                clearGamePlay();
            } else {
                return;
            };
        });
    }

    gamePlay() {
        this.element.addEventListener('click', () => {
            if ((choiseValue !== undefined) && (this.element.value === 'undefined')) {
                new Audio('./sound/sound-click-3.mp3').play();
                this.element.value = choiseValue;
                this.pictureElement.src = choisePicture;
                this.pictureElement.alt = choiseNamePicture;
                this.pictureElement.classList.add('active-picture');
                lastChoiceValue = choiseValue;
                move++;
                choiseValue = undefined;
                getGamePlay();
            } else {
                new Audio('./sound/sound-not.mp3').play();
                return;
            };
        });
    }

    clear() {
        this.element.value = this.value;
        this.pictureElement.src = this.picture;
        this.pictureElement.alt = this.namePicture;
    }
}

const buttonChoiceArray = [];

function getButtonChoiceArray() {
    const gameChoiceContainer = document.querySelector('.game-choice-container');

    for (let i = 1; i < buttonCatalog.length; i++) {
        buttonChoiceArray[i] = new GameButton(buttonCatalog[i].value, buttonCatalog[i].picture, buttonCatalog[i].namePicture);
        gameChoiceContainer.append(buttonChoiceArray[i].element);
        buttonChoiceArray[i].element.classList.remove('game-button');
        buttonChoiceArray[i].element.classList.add('game-button-choice');
        buttonChoiceArray[i].pictureElement.classList.add('active-picture');
        buttonChoiceArray[i].gameChoice();
    };
    return buttonChoiceArray;
}

const buttonArray = [];

function getButtonArray() {

    for (let i = 0; i < sizePlatformX; i++) {
        buttonArray[i] = [];
        for (let j = 0; j < sizePlatformY; j++) {
            buttonArray[i][j] = new GameButton(buttonCatalog[0].value, buttonCatalog[0].picture, buttonCatalog[0].namePicture);
            const gamePlatformContainer = document.querySelector('.game-platform-container');
            gamePlatformContainer.append(buttonArray[i][j].element);
            buttonArray[i][j].gamePlay();
        };
    };
    return buttonArray;
}

function clearButtonArray() {

    const gamePlatform = document.querySelector('.game-platform-container');
    while (gamePlatform.firstChild) {
        gamePlatform.firstChild.remove();
    }
    buttonArray.length = 0;
    console.log(gamePlatform);
    console.log(buttonArray);
}

function clearGamePlay() {

    const elementbuttonArray = document.querySelectorAll('.game-platform-container button');
    for (let i = 0; i < elementbuttonArray.length; i++) {
        elementbuttonArray[i].value = buttonCatalog[0].value;
    }

    const picturebuttonArray = document.querySelectorAll('.game-platform-container img');
    for (let i = 0; i < picturebuttonArray.length; i++) {
        picturebuttonArray[i].src = buttonCatalog[0].picture;
        picturebuttonArray[i].alt = buttonCatalog[0].namePicture;
        picturebuttonArray[i].classList.remove('active-picture');
    }

    for (let i = 0; i < sizePlatformX; i++) {
        for (let j = 0; j < sizePlatformY; j++) {
            buttonArray[i][j].clear();
        };
    };

    choiseValue = undefined;
    lastChoiceValue = undefined;
    choisePicture = undefined;
    choiseNamePicture = undefined;
    move = 0;
}

document.addEventListener('click', (event) => {

    switch (event.target.id) {
        case 'level-1':
            clearButtonArray();
            sizePlatformX = 3;
            sizePlatformY = 3;
            gamePlatform.classList.remove('four-block');
            gamePlatform.classList.remove('five-block');
            getButtonArray();
            clearGamePlay();
            break;

        case 'level-2':
            clearButtonArray();
            sizePlatformX = 4;
            sizePlatformY = 4;
            gamePlatform.classList.remove('five-block');
            gamePlatform.classList.add('four-block');
            getButtonArray();
            clearGamePlay();
            break;

        case 'level-3':
            clearButtonArray();
            sizePlatformX = 5;
            sizePlatformY = 5;
            gamePlatform.classList.remove('four-block');
            gamePlatform.classList.add('five-block');
            getButtonArray();
            clearGamePlay();
            break;
    };
});

export { buttonArray, sizePlatformX, sizePlatformY, move, getButtonArray, getButtonChoiceArray };