let coinCount = 0;
let xpCount = 0;
let tokenBalance = 0;

window.addEventListener('load', function() {
    // Initialize Telegram Web App
    Telegram.WebApp.ready();

    // Simulate loading time
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'flex';
    }, 3000); // Set the timeout duration to 3000 milliseconds (3 seconds)

    document.getElementById('tap-gif').addEventListener('click', function() {
        coinCount++;
        xpCount++;
        document.getElementById('coin-counter').innerText = `Coins: ${coinCount}`;
        document.getElementById('xp-counter').innerText = xpCount;
        showCoinAnimation();
        showXpAnimation();
    });

    // Add event listeners to menu icons
    const menuIcons = document.querySelectorAll('.menu-icon');
    menuIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const targetScreen = this.getAttribute('data-target');
            showScreen(targetScreen);
        });
    });
});

function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('body > div');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });

    // Show the target screen
    document.getElementById(screenId).style.display = 'flex';
}

function showCoinAnimation() {
    const animation = document.createElement('div');
    animation.classList.add('coin-animation');
    animation.innerText = '+1';
    document.body.appendChild(animation);

    setTimeout(() => {
        animation.remove();
    }, 1000);
}

function showXpAnimation() {
    const animation = document.createElement('div');
    animation.classList.add('xp-animation');
    animation.innerText = '+1 XP';
    document.body.appendChild(animation);

    setTimeout(() => {
        animation.remove();
    }, 1000);
}

function subscribeChannel() {
    tokenBalance += 1000;
    document.getElementById('token-balance').innerText = tokenBalance;
}
