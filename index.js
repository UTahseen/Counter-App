//Counter App
function increment(){
    document.getElementById("count-el").innerText = parseInt(document.getElementById("count-el").innerText) + 1
}
function save(){
    document.getElementById("save-txt").innerText += document.getElementById("count-el").innerText + " - "
}