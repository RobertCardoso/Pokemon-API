let butao = document.getElementById("butao")
let atk = document.getElementById("attack")
let hp = document.getElementById("hp")
let def = document.getElementById("defense")
let spAtk = document.getElementById("special-attack")
let speed = document.getElementById("speed")
let ab = document.getElementById("ab")

let box = document.getElementById("box")


butao.addEventListener('click', function(){
    fetch("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 150)).then(function(resp){
        return resp.json()
    }).then(function(json){
        // do something with the json payload
       
        let pokemon = json
        let attack = pokemon.stats[1].base_stat
        let healthp = pokemon.stats[0].base_stat
        let defense = pokemon.stats[2].base_stat
        let speAtk = pokemon.stats[3].base_stat
        let sp = pokemon.stats[5].base_stat


        

        let img = document.getElementById("img")
        img.src = pokemon.sprites.front_default
         
        atk.innerText = attack
        hp.innerText = healthp
        def.innerText = defense
        spAtk.innerText = speAtk
        speed.innerText = sp
        
        box.append(img)
       fetch(pokemon.abilities[0].ability.url).then(function(resp){
           return resp.json()
       }).then(function(json){
           let abilities = json
           let aName = abilities.name
           ab.innerText = aName.toUpperCase()
           
        })
    
      
       
       
    })
})




//  img https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// 
// 