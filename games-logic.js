const database = {
    kids: [
        { q: "Color of the sky 🟦", a: "blue", cat: "Colors" },
        { q: "Color of a banana 🍌", a: "yellow", cat: "Colors" },
        { q: "A pet that says 'Woof!' 🐶", a: "dog", cat: "Animals" },
        { q: "A pet that says 'Meow' 🐱", a: "cat", cat: "Animals" },
        { q: "How do you say 'Hola'?", a: "hello", cat: "Greetings" },
        { q: "How do you say 'Adiós'?", a: "bye", cat: "Greetings" },
        { q: "1, 2, ... ?", a: "three", cat: "Numbers" },
        { q: "Number of fingers in one hand", a: "five", cat: "Numbers" },
        { q: "The color of an apple 🍎", a: "red", cat: "Colors" },
        { q: "You use this to write ✏️", a: "pencil", cat: "School" },
        { q: "The king of the jungle 🦁", a: "lion", cat: "Animals" },
        { q: "Color of the grass 🌿", a: "green", cat: "Colors" }
    ],
    teens: [
        { q: "Past of BUY", a: "bought", cat: "Irregular Verbs" },
        { q: "Most important meal", a: "breakfast", cat: "Vocabulary" },
        { q: "Past of GO", a: "went", cat: "Irregular Verbs" },
        { q: "Person who cooks", a: "chef", cat: "Jobs" },
        { q: "Opposite of WIN", a: "lose", cat: "Verbs" }
    ],
    adv: [
        { q: "I wish I ___ (be) taller", a: "were", cat: "Grammar" },
        { q: "32.08 km (Write the number)", a: "32.08", cat: "Numbers" },
        { q: "I wish I ___ (study) more yesterday", a: "had studied", cat: "Past Wish" },
        { q: "700 + 50 = ?", a: "750", cat: "Logic" },
        { q: "If humans ___ wings, they would fly", a: "had", cat: "Conditionals" }
    ]
};

let currentLevel = 'kids';
let currentRound = 0;
let points = 0;

function startGame(level, btn) {
    document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    currentLevel = level;
    currentRound = 0;
    points = 0;
    updateUI();
    loadQuestion();
}

function loadQuestion() {
    const data = database[currentLevel][currentRound % database[currentLevel].length];
    document.getElementById('question').innerText = data.q;
    document.getElementById('category-label').innerText = data.cat;
    document.getElementById('user-answer').value = "";
    document.getElementById('user-answer').disabled = false;
    document.getElementById('feedback').innerText = "";
    document.getElementById('check-btn').style.display = "block";
    document.getElementById('next-btn').style.display = "none";
}

function checkAnswer() {
    const userAns = document.getElementById('user-answer').value.toLowerCase().trim();
    const correctAns = database[currentLevel][currentRound % database[currentLevel].length].a.toLowerCase();
    const feed = document.getElementById('feedback');

    if (userAns === correctAns) {
        feed.innerText = "⭐ EXCELLENT! ⭐";
        feed.style.color = "#2ecc71";
        points += 10;
        document.getElementById('check-btn').style.display = "none";
        document.getElementById('next-btn').style.display = "block";
        document.getElementById('user-answer').disabled = true;
    } else {
        feed.innerText = "Try again! You can do it.";
        feed.style.color = "#e74c3c";
    }
    updateUI();
}

function nextRound() {
    currentRound++;
    loadQuestion();
    updateUI();
}

function updateUI() {
    document.getElementById('points').innerText = points;
    document.getElementById('round').innerText = currentRound + 1;
}

// Iniciar al cargar
window.onload = () => startGame('kids', document.querySelector('.level-btn'));