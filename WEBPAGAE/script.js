document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    const logoutBtn = document.getElementById('logoutBtn');
    const usernameDisplay = document.getElementById('username-display');
    const factDisplay = document.getElementById('fact-display');
    const newFactBtn = document.getElementById('newFactBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple authentication logic (username: admin, password: password)
            if (username === 'admin' && password === 'password') {
                localStorage.setItem('username', username);
                window.location.href = 'home.html';
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        });
    }

    if (logoutBtn) {
        const username = localStorage.getItem('username');
        if (username) {
            usernameDisplay.textContent = username;
            displayRandomFact();
        } else {
            window.location.href = 'index.html';
        }

        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('username');
            window.location.href = 'index.html';
        });

        newFactBtn.addEventListener('click', displayRandomFact);
    }

    function displayRandomFact() {
        const facts = [
            "Honey never spoils.",
            "Bananas are berries, but strawberries aren't.",
            "Wombat poop is cube-shaped.",
            "Octopuses have three hearts.",
            "The Eiffel Tower can be 15 cm taller during the summer."
        ];
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    }
});
