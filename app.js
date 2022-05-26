const input = document.querySelector('input');
const button = document.querySelector('button');
const contenedor = document.querySelector('#contenedor');

button.addEventListener('click', e => {
    e.preventDefault();
    cargarPokemon(input.value)
})

const cargarPokemon = async(pokemon) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            crearPokemon(datos);
        }else if(respuesta.status === 404){
            console.log(`Lo siento, no está el pokemon: ${input.value}`)
        }
    }catch (error){
        console.log(error)
    }
}

const crearPokemon = pokemon => {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(h3);
    div.appendChild(img);
    contenedor.appendChild(div);
}