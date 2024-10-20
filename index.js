//Counter App

let clicks = document.getElementById("count-el")
let saves = document.getElementById("save-txt")

function increment(){
    clicks.innerText++
}

function save(){
    if (saves.innerText == "Previous Entries:") saves.innerText += ` ${clicks.innerText}`
    else saves.innerText += ` - ${clicks.innerText}`
}