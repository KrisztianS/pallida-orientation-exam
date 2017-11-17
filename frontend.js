'use strict'

var search_button = document.querySelector('.button')
var input = document.querySelector('.plate_input').value


function ajax(method, endpoint, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, endpoint);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            let resp = JSON.parse(xhr.responseText)
            callback(resp);
        }
    }
    xhr.send()
}

let type = "police"
let render = console.log()

search_button.addEventListener('click', function(){
    ajax("GET", "/search" + "?q=" + input + "&" + type + "=1", render)    

})

// ajax("GET", "/search/" + input , render)    

// function render(){

// }