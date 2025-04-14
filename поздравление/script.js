document.addEventListener('click', function(event) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    document.body.appendChild(heart);

    const compliments = [
        "Ты моя самая лучшая",
        "Ты у меня самая красивая",
        "Ты такая один на миллион",
        "При виде тебя я сияю",
        "Ты мое солнце",
        "Ты моя самая умная",
        "Ты невероятна",
        "Ты сногшебательная",
        "Ты восхитительна",
        "Я тебя люблю"
    ];

    const complimentText = document.createElement('div');
    complimentText.classList.add('heart');
    complimentText.innerHTML = compliments[Math.floor(Math.random() * compliments.length)];
    complimentText.style.left = `${event.clientX + 20}px`;
    complimentText.style.top = `${event.clientY + 20}px`;
    document.body.appendChild(complimentText);

    setTimeout(() => {
        heart.remove();
        complimentText.remove();
    }, 4000);
});