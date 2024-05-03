const prevEl = document.querySelector(".dec");
const nextEl = document.querySelector(".inc");
const resetEl = document.querySelector(".reset");
const countEl = document.querySelector(".count");

let counts = 0;

prevEl.addEventListener("click", decrease);
nextEl.addEventListener("click", increase);
resetEl.addEventListener("click", reset);

// Array of trivia questions and answers
const trivia = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "What color does red and yellow make?", answer: "Orange" },
    { question: "If you freeze water, what do you get?", answer: "Ice" },
    { question: "What fruit do kids traditionally give to teachers", answer: "Apple" },
    { question: "What do caterpillars turn into?", answer: "Butterflies" },
    { question: "What is the color of a school bus?", answer: "Yellow" },
    { question: "What do bees make?", answer: "Honey" },
    { question: "How many days are in a year?", answer: "365" },
    { question: "Which is the fastest land animal?", answer: "Cheetah" },
    { question: "What color are Smurfs?", answer: "Blue" },
    { question: "Name Batman’s crime-fighting partner?", answer: "Robin" },
    { question: "Which country is home to the kangaroo?", answer: "Australia" },
    { question: "What food do pandas eat?", answer: "Bamboo" },
    // Add more trivia questions here
];

function increase() {
    // Show random trivia question popup
    showRandomTriviaPopup("increase");
}

function decrease() {
    // Show random trivia question popup
    showRandomTriviaPopup("decrease");
}

function reset() {
    counts = 0;
    countEl.innerHTML = counts.toFixed(1); // Limit the decimal to 1 place
    countEl.style.color = "black";
}

function showRandomTriviaPopup(action) {
    // Get a random trivia question
    const randomIndex = Math.floor(Math.random() * trivia.length);
    const randomQuestion = trivia[randomIndex].question;
    const correctAnswer = trivia[randomIndex].answer;

    // Show prompt for the random trivia question
    const userAnswer = prompt(randomQuestion);
    
    // Check if the answer is correct
    if (userAnswer && userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        // Correct answer: Perform action (increase or decrease)
        if (action === "increase") {
            counts += 0.1;
        } else if (action === "decrease") {
            counts -= 0.1;
        }
        countEl.innerHTML = counts.toFixed(1); // Limit the decimal to 1 place
        if (counts > 0) {
            countEl.style.color = "green";
        } else if (counts < 0) {
            countEl.style.color = "red";
        } else {
            countEl.style.color = "black";
        }
    } else {
        // Incorrect answer: Notify the user
        alert("Incorrect answer. Please try again to unlock the button.");
    }
}