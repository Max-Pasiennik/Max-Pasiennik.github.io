const prevEl = document.querySelector(".dec");
const nextEl = document.querySelector(".inc");
const resetEl = document.querySelector(".reset");
const countEl = document.querySelector(".count");

let counts = 0;

prevEl.addEventListener("click", decrease);
nextEl.addEventListener("click", increase);
resetEl.addEventListener("click", reset);

function increase() {
    counts += 0.1;
    countEl.innerHTML = counts.toFixed(1); // Limit the decimal to 1 place
    if (counts > 0) {
        countEl.style.color = "green";
    }
    if (counts == 0) {
        countEl.style.color = "black";
    }
}

function decrease() {
    counts -= 0.1;
    countEl.innerHTML = counts.toFixed(1); // Limit the decimal to 1 place
    if (counts < 0) {
        countEl.style.color = "red";
    }
    if (counts == 0) {
        countEl.style.color = "black";
    }
}

function reset() {
    counts = 0;
    countEl.innerHTML = counts.toFixed(1); // Limit the decimal to 1 place
    countEl.style.color = "black";
}