const offset = 0;
const limit = 10;

const pokemonOl = document.getElementById('pokemonList')

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
            alt="${pokemon.name}" srcset="">
        </div>
    </li>
    `
}

pokeApi.getPokemons()
    .then((pokemons) => {
        let listItems = []
        for (let index = 0; index < pokemons.length; index++) {
            const element = pokemons[index];
            listItems.push(convertPokemonToLi(element));
            
        }
        pokemonOl.innerHTML += listItems;
    })
    .catch((error) => console.log(error))