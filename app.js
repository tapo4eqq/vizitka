// Создание частиц для футуристического эффекта
function createParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Случайная позиция и задержка анимации
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        // Случайный размер
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Случайный цвет (оттенки оранжевого и фиолетового)
        const colors = ['#ff7518', '#ff8a3d', '#6a1b9a', '#8e24aa'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(particle);
    }
}

// Создание тыкв на фоне
function createPumpkins() {
    const container = document.querySelector('.background-pumpkins');
    for (let i = 0; i < 5; i++) {
        const pumpkin = document.createElement('div');
        pumpkin.classList.add('pumpkin');
        
        // Случайная позиция
        pumpkin.style.left = Math.random() * 100 + 'vw';
        pumpkin.style.top = Math.random() * 100 + 'vh';
        
        // Случайный размер
        const size = Math.random() * 0.5 + 0.7;
        pumpkin.style.transform = `scale(${size})`;
        
        // Случайная задержка анимации
        pumpkin.style.animationDelay = Math.random() * 20 + 's';
        
        container.appendChild(pumpkin);
    }
}

// Создание пауков на фоне
function createSpiders() {
    const container = document.querySelector('.background-spiders');
    for (let i = 0; i < 5; i++) {
        const spider = document.createElement('div');
        spider.classList.add('spider');
        
        // Случайная позиция
        spider.style.left = Math.random() * 100 + 'vw';
        spider.style.top = Math.random() * 100 + 'vh';
        
        // Случайный размер
        const size = Math.random() * 0.5 + 0.7;
        spider.style.transform = `scale(${size})`;
        
        // Случайная задержка анимации
        spider.style.animationDelay = Math.random() * 25 + 's';
        
        container.appendChild(spider);
    }
}

// Функции для мобильной версии
function initMobileBehavior() {
    const mainCard = document.querySelector('.main-card');
    const extendedCard = document.querySelector('.extended-card');
    const closeBtn = document.querySelector('.close-btn');
    
    // Проверяем, мобильное ли устройство
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // На мобильных устройствах используем клик вместо ховера
        mainCard.addEventListener('click', function() {
            extendedCard.classList.add('active');
            document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
        });
        
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            extendedCard.classList.remove('active');
            document.body.style.overflow = ''; // Разблокируем скролл страницы
        });
        
        // Закрытие по клику вне карточки
        extendedCard.addEventListener('click', function(e) {
            if (e.target === extendedCard) {
                extendedCard.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createParticles(document.getElementById('particles-front'), 20);
    createParticles(document.getElementById('particles-back'), 20);
    createPumpkins();
    createSpiders();
    initMobileBehavior();
});

// Обновление поведения при изменении размера окна
window.addEventListener('resize', function() {
    // Переинициализируем мобильное поведение при изменении размера
    initMobileBehavior();
});