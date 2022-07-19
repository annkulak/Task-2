let sizePlatformX = 3;
let sizePlatformY = 3;

function getHomeWorkPage() {
    const page = document.createElement('div');
    document.querySelector('body').insertAdjacentElement('afterBegin', page);
    page.classList.add('wrapper');

    const chapterPageContainer = document.createElement('div');
    chapterPageContainer.classList.add('home-work-number');
    page.appendChild(chapterPageContainer);

    const homeWorkNumber = document.createElement('h1');
    chapterPageContainer.appendChild(homeWorkNumber);
    homeWorkNumber.textContent = `домашнее задание №2: игра "крестики-нолики"`;
}

function getGameContainer() {

    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');
    document.querySelector('.wrapper').appendChild(gameContainer);

    const gameSizeContainer = document.createElement('div');
    gameSizeContainer.classList.add('game-size-container');
    gameContainer.append(gameSizeContainer);

    const gamePlatformContainer = document.createElement('div');
    gamePlatformContainer.classList.add('game-platform-container');
    gameContainer.append(gamePlatformContainer);

    const gameChoiceContainer = document.createElement('div');
    gameChoiceContainer.classList.add('game-choice-container');
    gameContainer.append(gameChoiceContainer);
}

function getSizeContainer() {
    const gamePlatform = document.querySelector('.game-platform-container');

    const threeSizeButton = document.createElement('button');
    threeSizeButton.classList.add('size-button');
    threeSizeButton.id = 'level-1';
    document.querySelector('.game-size-container').appendChild(threeSizeButton);
    threeSizeButton.addEventListener('click', () => {
        gamePlatform.classList.remove('four-block');
        gamePlatform.classList.remove('five-block');
        // getSize();
    });

    const fourSizeButton = document.createElement('button');
    fourSizeButton.classList.add('size-button');
    fourSizeButton.id = 'level-2';
    document.querySelector('.game-size-container').appendChild(fourSizeButton);
    fourSizeButton.addEventListener('click', () => {
        gamePlatform.classList.remove('five-block');
        gamePlatform.classList.add('four-block');
        // getSize();    
    });

    const fiveSizeButton = document.createElement('button');
    fiveSizeButton.classList.add('size-button');
    fiveSizeButton.id = 'level-3';
    document.querySelector('.game-size-container').appendChild(fiveSizeButton);
    fiveSizeButton.addEventListener('click', () => {
        gamePlatform.classList.remove('four-block');
        gamePlatform.classList.add('five-block');
        // getSize();
    });    
}

const setSize = (size) => {
    const gamePlatform = document.querySelector('.game-platform-container');
    if (gamePlatform.classList.contains('four-block')) {                
        return size = 4;
    } else if (gamePlatform.classList.contains('five-block')) {
        return size = 5;
    } else {
        return size = 3;
    }
};

// document.getElementById('level-1').addEventListener('click', getSize()) {
//     sizePlatformX = setSize();
//     sizePlatformY = setSize();
//     console.log(sizePlatformX, sizePlatformY); 
// }

function getGameInterface() {
    getHomeWorkPage();
    getGameContainer();
    getSizeContainer();
}

export { getGameInterface, sizePlatformX, sizePlatformY };





let sizePlatformX2 = 3;
let sizePlatformY2 = 3;

function getHomeWorkPage() {
    const page = document.createElement('div');
    document.querySelector('body').insertAdjacentElement('afterBegin', page);
    page.classList.add('wrapper');

    const chapterPageContainer = document.createElement('div');
    chapterPageContainer.classList.add('home-work-number');
    page.appendChild(chapterPageContainer);

    const homeWorkNumber = document.createElement('h1');
    chapterPageContainer.appendChild(homeWorkNumber);
    homeWorkNumber.textContent = `домашнее задание №2: игра "крестики-нолики"`;
}

function getGameContainer() {
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');
    document.querySelector('.wrapper').appendChild(gameContainer);

    const gameSizeContainer = document.createElement('div');
    gameSizeContainer.classList.add('game-size-container');
    gameContainer.append(gameSizeContainer);

    const gamePlatformContainer = document.createElement('div');
    gamePlatformContainer.classList.add('game-platform-container');
    gameContainer.append(gamePlatformContainer);

    const gameChoiceContainer = document.createElement('div');
    gameChoiceContainer.classList.add('game-choice-container');
    gameContainer.append(gameChoiceContainer);
}

function getSizeContainer() {
    const threeSizeButton = document.createElement('button');
    threeSizeButton.classList.add('size-button');
    threeSizeButton.id = 'level-1';
    document.querySelector('.game-size-container').appendChild(threeSizeButton);

    const fourSizeButton = document.createElement('button');
    fourSizeButton.classList.add('size-button');
    fourSizeButton.id = 'level-2';
    document.querySelector('.game-size-container').appendChild(fourSizeButton);

    const fiveSizeButton = document.createElement('button');
    fiveSizeButton.classList.add('size-button');
    fiveSizeButton.id = 'level-3';
    document.querySelector('.game-size-container').appendChild(fiveSizeButton);

    const gamePlatform = document.querySelector('.game-platform-container');
    const buttonsSize = document.getElementsByClassName('.game-size-container');

    buttonsSize.addEventListener('click', (event) => {

        switch (event.target.id) {
            case 'level-1':
                gamePlatform.classList.remove('four-block');
                gamePlatform.classList.remove('five-block');
                sizePlatformX = 3;
                sizePlatformY = 3;
            case 'level-2':
                gamePlatform.classList.remove('five-block');
                gamePlatform.classList.add('four-block');
                sizePlatformX = 4;
                sizePlatformY = 4;
                break;

            case 'level-3':
                gamePlatform.classList.remove('four-block');
                gamePlatform.classList.add('five-block');
                sizePlatformX = 5;
                sizePlatformY = 5;
                break;
        };
    });
};

function getGameInterface() {
    getHomeWorkPage();
    getGameContainer();
    getSizeContainer();
};