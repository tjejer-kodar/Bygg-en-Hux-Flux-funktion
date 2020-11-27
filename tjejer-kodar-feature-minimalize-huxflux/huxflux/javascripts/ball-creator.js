import { huxflux } from '../huxflux.js';
let called = 0;
/**
 * @param Number number the number contained in the ball
 */
const createBall = (number) => {
    const ball = document.createElement('span');
    ball.classList.add('ball');
    ball.innerHTML = number;
    return ball;
}
/**
 * @param Number[] balls an array of numbers
 */
const appendBalls = (balls) => {
    called++;
    const ballRow = document.querySelector('.ball-row');
    ballRow.innerHTML = '';
    if (balls && balls.length) {
        for (let i = 0; i < balls.length; i++) {
            const ball = createBall(balls[i]);
            gsap.from(ball, { duration: 1.2, y: -100 + (i * 3), ease: Bounce.easeOut, delay: 0.1 * i });
            ballRow.append(ball);
        }
    } else {
        'Det kom inga nummer från huxflux-funktionen'
            .split(' ').forEach((word, i) => {
                const fallingWord = document.createElement('span');
                fallingWord.innerHTML = word;
                gsap.from(fallingWord, { duration: 1.2, y: -100 + (i * 3), ease: Bounce.easeOut, delay: 0.1 * i });
                ballRow.append(fallingWord);
            });
    }
}


document.querySelector('#huxflux-button').addEventListener('click', function() {
    appendBalls(huxflux());
});

//Just for style
document.querySelectorAll('button').forEach((btn) => btn.addEventListener('mousedown', function(e) {
    gsap.to(btn, { duration: 0.1, scale: 0.9 });
}));

document.querySelectorAll('button').forEach((btn) => btn.addEventListener('mouseup', function(e) {
    gsap.to(btn, { duration: 0.5, scale: 1, ease: Elastic.easeOut.config(1, 0.2) });
}));

