//Busqueda de País por nombre
const searchInput = document.getElementById('buscar');
searchInput.addEventListener('input', () => {
    const query = searchInput.ariaValueMax.toLocaleLowerCase();
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLocaleLowerCase();
        if (title.includes(query)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});