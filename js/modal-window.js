import { winner } from './game-play.js';

function getWindowResult() {
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('window-result-blackout');
    modalWindow.classList.add('active');
    document.querySelector('.game-container').insertAdjacentElement('afterBegin', modalWindow);

    const windowResult = document.createElement('div');
    windowResult.classList.add('window-result');
    modalWindow.append(windowResult);

    const containerTextResult = document.createElement('div');
    containerTextResult.classList.add('container-text-result');
    windowResult.append(containerTextResult);
    containerTextResult.textContent = `${winner}`;

    const containerButtonResult = document.createElement('div');
    containerButtonResult.classList.add('container-button-result');
    windowResult.append(containerButtonResult);

    const buttonResultNextGame = document.createElement('button');
    buttonResultNextGame.classList.add('button-result');
    containerButtonResult.insertAdjacentElement('afterBegin', buttonResultNextGame);
    buttonResultNextGame.textContent = 'New game';
    buttonResultNextGame.addEventListener('click', () => {
        location.reload();
    });

    const buttonResultOk = document.createElement('button');
    buttonResultOk.classList.add('button-result');
    containerButtonResult.appendChild(buttonResultOk);
    buttonResultOk.textContent = 'Ok';
    buttonResultOk.addEventListener('click', () => {
        document.querySelector('.window-result-blackout.active').remove();
    });
};

function openWindowResult() {
    if ((winner == 'Сrosses won!') || (winner == 'Zeros won!')) {
        setTimeout(() => {
            getWindowResult();
            new Audio('./sound/sound-win.mp3').play();
        }, 150);
    } else if (winner == 'Draw!') {
        setTimeout(() => {
            getWindowResult();
            new Audio('./sound/sound-win-win.mp3').play();
        }, 150);
    } else {
        return;
    };
}

export { openWindowResult };

