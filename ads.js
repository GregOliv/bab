function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateWelcomeMessage() {
    const now = new Date();
    const hour = now.getHours();
    let message = '';

    if (hour < 12) {
        message = 'Good morning!';
    } else if (hour < 18) {
        message = 'Good afternoon!';
    } else {
        message = 'Good evening!';
    }

    const welcomeMessageElement = document.getElementById('welcome-message');
    welcomeMessageElement.textContent = message;
}

function startClock() {
    updateClock();
    updateWelcomeMessage();

    setInterval(() => {
        updateClock();
        updateWelcomeMessage();
    }, 1000);
}

startClock();
