window.addEventListener('load', function() {
    Telegram.WebApp.ready();
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'flex';
    }, 3000);

    document.getElementById('tap-gif').addEventListener('click', function() {
        coinCount++;
        xpCount++;
        document.getElementById('coin-counter').innerText = `Coins: ${coinCount}`;
        document.getElementById('xp-counter').innerText = xpCount;
        showCoinAnimation();
        showXpAnimation();
    });

    const menuIcons = document.querySelectorAll('.menu-icon');
    menuIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            showScreen(this.getAttribute('data-target'));
        });
    });
});

function showScreen(screenId) {
    const screens = document.querySelectorAll('div[id$="-screen"]');
    screens.forEach(screen => screen.style.display = 'none');
    document.getElementById(screenId).style.display = 'flex';
}

function showCoinAnimation() {...}
function showXpAnimation() {...}
function subscribeChannel() {...}
