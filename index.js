const display = document.querySelector('.display')
const key = document.querySelectorAll('.key')
document.querySelector('.clear-all').addEventListener('click',clearall)
document.querySelector('.clear-last').addEventListener('click',clearlast)
document.querySelector('.calculate').addEventListener('click',calculate)
key.forEach(item => {
    item.addEventListener('click',innerdisplay)
})


function innerdisplay(event){

    let showkey = event.target.innerText
    if(display.innerText == 0){
        display.innerText=showkey
    }else{
        display.innerHTML += showkey
    }

}
function clearall(){
    display.innerHTML="0"
}
function clearlast(){
    if(display.innerText.length == 1){
        display.innerText="0"
    }
    else{
        display.innerText =display.innerText.substring(0, display.innerText.length-1)
    }
}
function calculate(){
    display.innerText=eval(display.innerText)
}