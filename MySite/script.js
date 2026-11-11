// --- НАВИГАЦИЯ ПО СТРАНИЦАМ ---
const buttons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Скрываем все страницы
        pages.forEach(page => page.classList.remove('active'));
        
        // Показываем нужную
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');

        // Если перешли на главную, очищаем поиск
        if (targetId === 'home') {
            document.getElementById('searchInput').value = '';
            filterRecipes('');
        }
    });
});

// --- ЛОГИКА ПОИСКА ---
const searchInput = document.getElementById('searchInput');
const recipeCards = document.querySelectorAll('.recipe-card');

searchInput.addEventListener('input', (e) => {
    filterRecipes(e.target.value);
});

function filterRecipes(query) {
    const lowerQuery = query.toLowerCase();

    recipeCards.forEach(card => {
        // Берем название рецепта из атрибута data-name
        const recipeName = card.getAttribute('data-name').toLowerCase();
        
        // Если введенный текст есть в названии, показываем карточку
        if (recipeName.includes(lowerQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}