let butao = document.getElementById("butao")
let atk = document.getElementById("attack")
let hp = document.getElementById("hp")
let def = document.getElementById("defense")
let spAtk = document.getElementById("special-attack")
let speed = document.getElementById("speed")
let aby = document.getElementById("aby")
let namep = document.getElementById("ab")

let box = document.getElementById("box")


butao.addEventListener('click', function(){
    let sound = new Audio("pling.mp3"); 
      sound.currentTime = 0;
      sound.play();
    fetch("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 150)).then(function(resp){
        return resp.json()
    }).then(function(json){
        // do something with the json payload
       
        let pokemon = json
        let Pname = pokemon.forms[0].name
        let attack = pokemon.stats[1].base_stat
        let healthp = pokemon.stats[0].base_stat
        let defense = pokemon.stats[2].base_stat
        let speAtk = pokemon.stats[3].base_stat
        let sp = pokemon.stats[5].base_stat


        

        let img = document.getElementById("img")
        img.src = pokemon.sprites.front_default
         
        namep.textContent = Pname.toUpperCase()
        atk.textContent = attack
        hp.textContent = healthp
        def.textContent = defense
        spAtk.textContent = speAtk
        speed.textContent = sp
        
       fetch(pokemon.abilities[0].ability.url).then(function(resp){
           return resp.json()
       }).then(function(json){
           let abilities = json
           let aName = abilities.name
           aby.textContent = aName.toUpperCase()
           
        })
    
      
       
    })
})




//  img https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// 
//