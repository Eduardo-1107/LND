var imagenes = ["media/1.jpg","media/2.jpg","media/3.jpg"]
var imagen = document.body.firstElementChild.firstElementChild
var contador = 0


function Adelante() {
    contador++
    if (contador >= imagenes.length) {
        contador = 0;
    }
    imagen.src = imagenes[contador]
}
function Atras() {
    contador--
    if (contador < 0) {
        contador = imagenes.length - 1
    }
    imagen.src = imagenes[contador]
}
