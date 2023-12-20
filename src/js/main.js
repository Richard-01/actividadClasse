const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const boton = document.getElementById('boton');


let cont = 0;

boton.addEventListener("click",() =>{
    cont++;
    if (cont % 2 != 0) {
        parrafo1.classList.remove('elementoPrincipal');
        parrafo1.classList.remove('elementoSecundario');
        parrafo1.classList.add('elementoPrincipal2');
        parrafo1.classList.add('elementoSecundario2');
        parrafo2.classList.remove('elementoPrincipal2');
        parrafo2.classList.remove('elementoSecundario2');
        parrafo2.classList.add('elementoPrincipal');
        parrafo2.classList.add('elementoSecundario');
    }else{
        parrafo1.classList.add('elementoPrincipal');
        parrafo1.classList.add('elementoSecundario');
        parrafo1.classList.remove('elementoPrincipal2');
        parrafo1.classList.remove('elementoSecundario2');
        parrafo2.classList.add('elementoPrincipal2');
        parrafo2.classList.add('elementoSecundario2');
        parrafo2.classList.remove('elementoPrincipal');
        parrafo2.classList.remove('elementoSecundario');
    }
})