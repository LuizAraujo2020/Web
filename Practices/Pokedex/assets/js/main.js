const pokemonOl = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5;
let offset = 0;

function loadPokemonsItems(offset, limit) {

    pokeApi.getPokemons()
        .then((pokemons = []) => {
            pokemonOl.innerHTML += pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
            
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" 
                        alt="${pokemon.name}" srcset="">
                    </div>
                </li>
            `).join('');
        })
        .catch((error) => console.log(error))
}

loadPokemonsItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonsItems(offset, limit);
})