//Busqueda de País por nombre
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});