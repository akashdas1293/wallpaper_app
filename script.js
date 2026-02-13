function showHug() {
    const hugMessage = document.getElementById('hug-message');
    hugMessage.classList.remove('hidden');
    // Add a simple animation effect
    hugMessage.style.animation = 'fadeIn 1s ease-in-out';
    
    // Trigger confetti
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#e57373', '#f48fb1', '#f06292']
    });
}

function startQuiz() {
    document.getElementById('quiz').classList.remove('hidden');
    this.style.display = 'none'; // Hide start button
}

function submitQuiz() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : null,
        q2: document.querySelector('input[name="q2"]:checked') ? document.querySelector('input[name="q2"]:checked').value : null,
        q3: document.querySelector('input[name="q3"]:checked') ? document.querySelector('input[name="q3"]:checked').value : null,
        q4: document.querySelector('input[name="q4"]:checked') ? document.querySelector('input[name="q4"]:checked').value : null,
        q5: document.querySelector('input[name="q5"]:checked') ? document.querySelector('input[name="q5"]:checked').value : null
    };

    let score = 0;
    // Assuming correct answers are b, a, c - customize as needed
    if (answers.q1 === 'b') score++;
    if (answers.q2 === 'a') score++;
    if (answers.q3 === 'a') score++;
    if (answers.q4 === 'c') score++;
    if (answers.q5 === 'c') score++;

    const result = document.getElementById('quiz-result');
    let message;
    if (score === 5) {
        message = 'Perfect score! You know our love story inside out! 💖';
    } else if (score === 3) {
        message = 'Great job! Almost perfect – our love is strong! 😍';
    } else if (score === 1) {
        message = 'Nice try! Let\'s make more memories together. ❤️';
    } else {
        message = 'Oh no! Time to reminisce over our favorite moments. 🥰';
    }

    result.innerHTML = `<p>Your score: ${score}/5</p><p>${message}</p>`;
    result.classList.remove('hidden');

    // Trigger confetti on submit
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#e57373', '#f48fb1']
    });
}

function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.classList.remove('hidden');
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

// Add fade-in animation via JS (since it's dynamic)
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style);