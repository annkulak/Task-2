import { sizePlatformX, sizePlatformY, buttonArray, move } from './buttons.js';
import { openWindowResult } from './modal-window.js';

let winner;

function getGameWinner() {

    const imin = 0;
    const jmin = 0;
    const imax = sizePlatformX - 1;
    const jmax = sizePlatformY - 1;

    if (winner != undefined) {
        winner = undefined;
    }

    for (let i = 0; i < sizePlatformX; i++) {
        for (let j = 0; j < sizePlatformY; j++) {
            let winnerArray = [
                [((i - 1 >= imin) && (i + 1 <= imax)), [(i - 1), j], [i, j], [(i + 1), j]],
                [((j - 1 >= jmin) && (j + 1 <= jmax)), [i, (j - 1)], [i, j], [i, (j + 1)]],
                [((i - 1 >= imin) && (i + 1 <= imax) && (j - 1 >= jmin) && (j + 1 <= jmax)), [(i - 1), (j - 1)], [i, j], [(i + 1), (j + 1)]],
                [((i - 1 >= imin) && (i + 1 <= imax) && (j - 1 >= jmin) && (j + 1 <= jmax)), [(i - 1), (j + 1)], [i, j], [(i + 1), (j - 1)]],
                [((i - 2 >= imin)), [i - 2, j], [i - 1, j], [i, j]],
                [((i + 2 <= imax)), [i + 1, j], [i, j], [i + 2, j]],
                [((j - 2 >= jmin)), [i, j - 1], [i, j], [i, j - 2]],
                [((j + 2 <= jmax)), [i, j + 1], [i, j], [i, j + 2]],
                [((i - 2 >= imin) && (j - 2 >= jmin)), [i, j], [(i - 1), (j - 1)], [(i - 2), (j - 2)]],
                [((i - 2 >= imin) && (j + 2 <= jmax)), [i, j], [(i - 1), (j + 1)], [(i - 2), (j + 2)]],
                [((i + 2 <= imax) && (j - 2 >= jmin)), [i, j], [(i + 1), (j - 1)], [(i + 2), (j - 2)]],
                [((i + 2 <= imax) && (j + 2 <= jmax)), [i, j], [(i + 1), (j + 1)], [(i + 2), (j + 2)]]

            ];

            for (let z = 0; z < winnerArray.length; z++) {

                if (winnerArray[z][0] == true) {

                    if (
                        ((buttonArray[winnerArray[z][1][0]][winnerArray[z][1][1]].element.value === 'X') &&
                            (buttonArray[winnerArray[z][2][0]][winnerArray[z][2][1]].element.value === 'X') &&
                            (buttonArray[winnerArray[z][3][0]][winnerArray[z][3][1]].element.value === 'X'))
                    ) {
                        winner = 'Сrosses won!';
                        buttonArray[winnerArray[z][1][0]][winnerArray[z][1][1]].pictureElement.src = './picture/icon-cross-8r.png';
                        buttonArray[winnerArray[z][2][0]][winnerArray[z][2][1]].pictureElement.src = './picture/icon-cross-8r.png';
                        buttonArray[winnerArray[z][3][0]][winnerArray[z][3][1]].pictureElement.src = './picture/icon-cross-8r.png';
                    } else if (
                        ((buttonArray[winnerArray[z][1][0]][winnerArray[z][1][1]].element.value === 'O') &&
                            (buttonArray[winnerArray[z][2][0]][winnerArray[z][2][1]].element.value === 'O') &&
                            (buttonArray[winnerArray[z][3][0]][winnerArray[z][3][1]].element.value === 'O'))
                    ) {
                        winner = 'Zeros won!';
                        buttonArray[winnerArray[z][1][0]][winnerArray[z][1][1]].pictureElement.src = './picture/icon-zero-8r.png';
                        buttonArray[winnerArray[z][2][0]][winnerArray[z][2][1]].pictureElement.src = './picture/icon-zero-8r.png';
                        buttonArray[winnerArray[z][3][0]][winnerArray[z][3][1]].pictureElement.src = './picture/icon-zero-8r.png';

                    } else if (((winner !== 'Сrosses won!') && (winner !== 'Zeros won!')) && (move == (sizePlatformX * sizePlatformY))) {
                        winner = 'Draw!';

                    };
                };
            };
        };
    };
}

function getGamePlay() {
    getGameWinner();
    openWindowResult();
}

export { getGamePlay, winner };