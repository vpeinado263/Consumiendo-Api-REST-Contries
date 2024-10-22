// Obtener todos los países 
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    const section = document.getElementById('countries-section');
    const countryInfo = document.getElementById('country-info');
    
    const displayCountries = (countries) => {
        section.innerHTML = '';  
        countries.forEach(country => {
            const article = document.createElement('article');
            const title = document.createElement('h2');
            const body = document.createElement('p'); 
            const img = document.createElement('img');
            
            title.textContent = country.name.common;
            body.textContent = `Capital: ${country.capital ? country.capital[0] : 'N/A'}`;
            img.src = country.flags.svg;
            img.alt = `Bandera de ${country.name.common}`;
            img.width = 100;

            article.appendChild(title);
            article.appendChild(body);
            section.appendChild(article);  
            article.appendChild(img)
        });
    };

    displayCountries(data);

    // Búsqueda de País por nombre
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        
        const filteredCountries = data.filter(country => country.name.common.toLowerCase().includes(query));

        displayCountries(filteredCountries);

        if (filteredCountries.length === 1) {
            const country = filteredCountries[0];
            countryInfo.innerHTML = `
                <h2>${country.name.common}</h2>
                <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
                <p>Población: ${country.population}</p>
                <p>Área: ${country.area} km²</p>
                <img src="${country.flags.svg}" alt="Bandera de ${country.name.common}" width="100">
            `;
        } else {
            countryInfo.innerHTML = ''; 
        }
    });
})
.catch(error => console.error('Error fetching data:', error));

