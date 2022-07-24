alert("JS Connected")

var bomb = Math.floor(Math.random()*8)
var randomTreasure = Math.floor(Math.random()*8)
if(randomTreasure===bomb){
    randomTreasure=Math.floor(Math.random()*8)
}
console.log(bomb, randomTreasure)

const treasure = (location) => {
    if (bomb === location){
        document.getElementById(location  ).innerHTML = "💣"
    }else if (randomTreasure === location){
        document.getElementById(location).innerHTML = "🪙"
    }else {
        document.getElementById(location).innerHTML = "🌈"
    }

}
