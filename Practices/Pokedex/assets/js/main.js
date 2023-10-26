const pokemonOl = document.getElementById('pokemonList')

function convertPokemonTypesToLi(pokemonType) {
    return pokemonType.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" 
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