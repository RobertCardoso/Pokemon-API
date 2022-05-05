

let butao = document.getElementById("butao")
let atk = document.getElementById("attack")

butao.addEventListener('click', function(){
    let promise = fetch("https://pokeapi.co/api/v2/pokemon/1").then(function(resp){
        return resp.json()
    }).then(function(json){
        // do something with the json payload
       
        let pokemon = json
        let attack = pokemon.stats[1].base_stat
        console.log(attack)

        atk.innerText = attack
        
    })
})