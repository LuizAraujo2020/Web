const pokemonOl = document.getElementById('pokemonList')

function convertPokemonToLi(pokemon) {
    console.log(pokemon)
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" 
            alt="${pokemon.name}" srcset="">
        </div>
    </li>
    `
}

pokeApi.getPokemons()
    .then((pokemons = []) => {
        pokemonOl.innerHTML = pokemons.map(convertPokemonToLi).join('');
    })
    .catch((error) => console.log(error))