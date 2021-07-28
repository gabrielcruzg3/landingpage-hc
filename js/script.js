


function cadastraUser(){
     var email = document.getElementById('email').value;
    var nome = document.getElementById('nome').value;
       
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('nome', JSON.stringify(nome))
}


window.onload=function(){

document.getElementById("form-bf").addEventListener("submit", function () {
    document.getElementById('form-bf').submit(cadastraUser());
    cadastraUser();
    
  });
}


/*
function saveName(){
    var nome = document.getElementById('nome').value;
    localStorage.setItem('name', nome) 
    sayMyName();
}
*/

