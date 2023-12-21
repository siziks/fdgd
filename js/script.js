document.addEventListener("DOMContentLoaded", function () {
    // Подождем, чтобы убедиться, что DOM полностью загружен
    setTimeout(function () {
        // Удаление псевдоэлемента через 2 секунды (по завершению анимации)
        setTimeout(function () {
            document.querySelector('.confetti-explosion::before').remove();
        }, 2000);
    }, 1000); // Пауза перед удалением, чтобы пользователь успел увидеть основной контент
});
