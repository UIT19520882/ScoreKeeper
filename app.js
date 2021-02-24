// Refactoring Code
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector("#p1Display"),
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector("#p2Display"),
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = 3;
let isGameOver = false;

// Refactoring Code
function updateScores(player, opponent){
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) { 
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            // prevent user from continue clicking
            player.button.disabled = true;
            opponent.button.disabled = true;
        }    
        player.display.textContent = player.score;
    }
}

// add score to player 1
p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
})

// add score to player 2
p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
})

// reset game when choose another winning score
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

// click reset button
resetButton.addEventListener('click', reset);


function reset() {
    isGameOver = false;
    // reset score
    for (let p of [p1, p2]) {
        p.score = 0;
        // resert display score
        p.display.textContent = 0;
        // reset display color 
        p.display.classList.remove('has-text-success', 'has-text-danger');
        // reset button 
        p.button.disabled = false;
    }
}