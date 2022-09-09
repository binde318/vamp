
let largecountries = ["Nigeria", "Tunisia", "Niger", "Ameria", "South Africa"]


let fighters = ["🦁","🦻","🧑‍⚖️","🤟"]

let stageEl = document.getElementById ("stage")
let fightbutton = document.getElementById("fightbutton")
fightbutton.addEventListener("click", function() {


    let randomIndexOne= Math.floor(math.random() * fighters.length)
    let randomIndexTwo= Math.floor(math.random() * fighters.length)
    stageEl.textContent = fighters[randomIndexOne] + " vs " fighters[randomIndexTwo]

})
 