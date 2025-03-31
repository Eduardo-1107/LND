var valor = 0;

function Sumar() {
    var valorInput = document.body.firstElementChild.firstElementChild
    valor++
    valorInput.value = valor
}
function Reset() {
    var valorInput = document.body.firstElementChild.firstElementChild
    valor = 0
    valorInput.value = valor
}
function Restar() {
    var valorInput = document.body.firstElementChild.firstElementChild
    valor--
    valorInput.value = valor
}