let menos = document.getElementById("menos");
let mais = document.getElementById("mais");
let va = document.getElementById("valor");

menos.addEventListener('click', diminuir);
function diminuir(){
    if(parseInt(va.innerHTML) > 1){
        va.innerHTML = parseInt(va.innerHTML)-1;
        console.log(va.innerHTML)
    }

}

mais.addEventListener('click', aumentar);
function aumentar(){
   
    va.innerHTML = parseInt(va.innerHTML)+1;
    console.log(va.innerHTML)

}