const two = 2;
const three = 3;
const four = 4;

let prize = 100;
let max = 8;
let prizeWon = 0;
let roulette = Math.floor(Math.random() * max);
console.log(roulette);

if (!confirm('Do you want to play a game?')) {
    alert('You did not become a billionaire, but can.');
} else {
    let attempts;
    for (attempts = three; attempts > 0; attempts--) {
        let guess = +prompt(`
        Choose a roulette pocket nubmer from 0 to ${max}
        Attempts left: ${attempts} 
        Total prize: ${prizeWon}$
        Possible prize on current attempt: ${prize}
        `);
        if (guess === roulette) {
            roulette = Math.floor(Math.random() * max);
            console.log(roulette);

            prizeWon += prize;
            if (confirm(`Congratulation, you won! Your prize is:$ ${prizeWon} Do you want to continue?`)) {
                attempts = four;
                max = max + four;
                prize = prize * two;
            } else {
                alert(`Thank you for your participation. Your prize is: ${prizeWon} $`)
            }
        } else if (guess !== roulette) {
            prize = prize / two;
        }
    }
    if (attempts === 0) {
        alert(`Thank you for your participation. Your prize is: ${prizeWon} $`);
    }
}