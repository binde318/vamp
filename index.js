
let largecountries = ["Nigeria", "Tunisia", "Niger", "Ameria", "South Africa"]


let fighters = ["đĻ","đĻģ","đ§ââī¸","đ¤"]

let stageEl = document.getElementById ("stage")
let fightbutton = document.getElementById("fightbutton")
fightbutton.addEventListener("click", function() {


    let randomIndexOne= Math.floor(math.random() * fighters.length)
    let randomIndexTwo= Math.floor(math.random() * fighters.length)
    stageEl.textContent = fighters[randomIndexOne] + " vs " fighters[randomIndexTwo]

})
 