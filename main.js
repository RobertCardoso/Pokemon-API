let butao = document.getElementById("butao")
let atk = document.getElementById("attack")
let hp = document.getElementById("hp")
let def = document.getElementById("defense")
let spAtk = document.getElementById("special-attack")
let speed = document.getElementById("speed")
let ab = document.getElementById("ab")
let name = document.getElementById("name")

let box = document.getElementById("box")


butao.addEventListener('click', function(){
    let sound = new Audio("test.mp3"); 
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
         
        name.innerText = Pname.toUpperCase()
        atk.innerText = attack
        hp.innerText = healthp
        def.innerText = defense
        spAtk.innerText = speAtk
        speed.innerText = sp
        
        display.append(img)
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