const prevEl = document.querySelector(".dec");
const nextEl = document.querySelector(".inc");
const resetEl = document.querySelector(".reset");
const countEl = document.querySelector(".count");
const submitEl = document.querySelector(".submit");

submitEl.addEventListener("click", submitVolume);
resetEl.addEventListener("click", reset);

let counts = 50; // Start the counter at 50 initially

prevEl.addEventListener("click", decrease);
nextEl.addEventListener("click", increase);
resetEl.addEventListener("click", reset);

// Array of trivia questions and answers
const trivia = [
   { question: "What is the capital of France?", answer: "Paris" },
   { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
   { question: "What color does red and yellow make?", answer: "Orange" },
   { question: "What American football team plays in New England?", answer: "Patriots" },
   { question: "What fruit do kids traditionally give to teachers?", answer: "Apple" },
   { question: "What do caterpillars turn into?", answer: "Butterflies" },
   { question: "According to Greek mythology, who was the first woman on earth?", answer: "Pandora" },
   { question: "What do bees make?", answer: "Honey" },
   { question: "How many days are in a year?", answer: "365" },
   { question: "Which is the fastest land animal?", answer: "Cheetah" },
   { question: "What color are Smurfs?", answer: "Blue" },
   { question: "Name Batman’s crime-fighting partner?", answer: "Robin" },
   { question: "Which country is home to the kangaroo?", answer: "Australia" },
   { question: "What is the coldest place on Earth?", answer: "Antarctica" },
   { question: "How many signs are there in the Zodiac?", answer: "12" },
   { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
   { question: "How many miles are in a marathon?", answer: "26.2" },
   { question: "How many holes are played in a typical round of golf?", answer: "18" },
   { question: "What was Michael Jordan's number?", answer: "23" },
   { question: "How many periods are in a hockey game?", answer: "3" },
   { question: "What country has the largest population?", answer: "China" },
   { question: "Which superhero is known as the “Man of Steel”?", answer: "Superman" },
   { question: "Bruce Wayne is the name of which superhero?", answer: "Batman" },
   { question: "What does Na stand for on the periodic table?", answer: "Sodium" },
   { question: "Which U.S. state is known for peaches?", answer: "Georgia" },
   { question: "Steve Harvey is a game show host. What’s that show called?", answer: "Family Feud" },
   { question: "Which U.S. state is known as “America’s Dairyland”?", answer: "Wisconsin" },
   { question: "In the movie Good Will Hunting, what college does Skylar attend?", answer: "Harvard" },
   { question: "What food does Popeye like to eat?", answer: "Spinach" },
   { question: "Quebec is a province in Canada. What language do they speak there?", answer: "French" },
   { question: "Michael Phelps is an Olympic athlete known for this sport?", answer: "Swimming" },
   { question: "What was the basketball team that Kobe Bryant played on?", answer: "Lakers" },
   { question: "In which U.S. state is Area 51 located?", answer: "Nevada" },
   { question: "What is the name of the largest ocean in the world?", answer: "Pacific" },
   { question: "Which country produces the most coffee in the world?", answer: "Brazil" },
   { question: "Arnold Schwarzenegger was once the governor of which U.S. State?", answer: "California" },
   { question: "What is the smallest unit of matter?", answer: "Atom" },
   { question: "Who was the lead vocalist of the band Queen?", answer: "Freddie Mercury" },
   { question: "Who was the sixteenth President of the United States?", answer: "Abraham Lincoln" },
   { question: "Which ancient city was destroyed by the eruption of Mount Vesuvius in 79 AD?", answer: "Pompeii" },
   { question: "What is the largest organ in the human body?", answer: "Skin" },
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
    counts = 50; // Reset the counter to 50
    countEl.innerHTML = counts.toFixed(1); // Limit the decimal to 1 place
    countEl.style.color = "black";
}


function reset() {
    counts = 50; // Reset the counter to 50
    countEl.innerHTML = counts.toFixed(1); // Limit the decimal to 1 place
    countEl.style.color = "black";
    
    // Enable increase and decrease buttons
    prevEl.disabled = false;
    nextEl.disabled = false;
    // Enable the submit button
    submitEl.disabled = false;
}

function submitVolume() {
    // Disable increase and decrease buttons
    prevEl.disabled = true;
    nextEl.disabled = true;
    // Disable the submit button after clicking
    submitEl.disabled = true;

    // Play submit sound effect
    document.getElementById('submitSound').play();

    // Show "Submitted" popup
    alert("Submitted!");

    // Enable increase and decrease buttons
    prevEl.disabled = false;
    nextEl.disabled = false;
    // Enable the submit button
    submitEl.disabled = false;
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
            counts += 0.5;
            // Play increase sound effect
            document.getElementById('increaseSound').play();
        } else if (action === "decrease") {
            counts -= 0.5;
            // Play decrease sound effect
            document.getElementById('decreaseSound').play();
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
        // Incorrect answer: Play wrong answer sound effect
        document.getElementById('wrongAnswerSound').play();
        // Notify the user about the incorrect answer
        alert("Incorrect answer. The counter has been reset to 50.");
        // Reset the counter to 50
        reset();
    }
}