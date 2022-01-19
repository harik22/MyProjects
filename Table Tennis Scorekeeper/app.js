var p1score = 0;
var p2score = 0;
var fscore = 5;
var isGameOver = false;
const p1 = {
    score: 0,
    button: document.querySelector("#p1b"),
    display: document.querySelector("#p1d"),
};
const p2 = {
    score: 0,
    button: document.querySelector("#p2b"),
    display: document.querySelector("#p2d"),
};

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === fscore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

playTo.addEventListener("change", function () {
    fscore = parseInt(this.value);
    r();
});
p1.button.addEventListener("click", function () {
    updateScores(p1, p2);
});
p2.button.addEventListener("click", function () {
    updateScores(p2, p1);
});
reset.addEventListener("click", r);

function r() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p2.display.textContent = p2score;
    p1.display.textContent = p1score;
    p2.display.classList.remove("has-text-success", "has-text-danger");
    p1.display.classList.remove("has-text-danger", "has-text-success");
    p1.button.disabled = false;
    p2.button.disabled = false;
}
