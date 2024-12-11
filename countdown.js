function updateCountdown() {
    const christmasDate = new Date('December 25, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = christmasDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText =
            `Do Świąt Bożego Narodzenia pozostało: ${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund.`;
    } else {
        document.getElementById('countdown').innerText = "Wesołych Świąt!";
    }
}

// Aktualizuj licznik co sekundę
setInterval(updateCountdown, 1000);
updateCountdown();
