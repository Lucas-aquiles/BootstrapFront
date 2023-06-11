//defino valor ticket
const valorTicket = 200;

//defino los porcentajes

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//tomo los valores

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoriaSelect')
const botonCalcular = document.querySelector('#calcular');
const botonReset = document.querySelector('#reset');
const parrafo = document.querySelector('#pText');

function totalPagar() {
    //calcular valor total
    let totalValor = parseInt(cantidad.value) * valorTicket;

    //condiciones por descuento
    if (categoria.value == 1) {
        totalValor = totalValor - (totalValor * descuentoEstudiante)
    }
    else if (categoria.value == 2) {
        totalValor = totalValor - (totalValor * descuentoTrainee)
    }
    else if (categoria.value == 3) {
        totalValor = totalValor - (totalValor * descuentoJunior)
    }
    //  else {
    //     totalValor = totalValor
    // }
    parrafo.innerHTML = "Total a pagar : $ " + totalValor;
}

//boton calcular
botonCalcular.addEventListener('click',totalPagar);
//boton reset

botonReset.addEventListener('click',()=> {
    parrafo.innerHTML = "Total a pagar :"
    cantidad.value = null;    
    
} )
