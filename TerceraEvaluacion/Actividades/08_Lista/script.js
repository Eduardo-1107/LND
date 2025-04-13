contenedorLista = document.querySelector('div.contenedor');
let lista = document.querySelector('.lista');
let elementosLista = document.querySelectorAll('.lista ul li');

function ExisteLista() {
    contenedorLista.style.display = lista.hasChildNodes() ? 'block' : 'none';
}
    

function AñadirFinal() {
    let valorLista = document.querySelector('#texto').value;
    if (valorLista.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = valorLista;
        lista.appendChild(li);
        document.querySelector('#texto').value = ""
        ExisteLista();
    }
}

function AñadirPrincipio() {
    let valorLista = document.querySelector('#texto').value;
    if (valorLista.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = valorLista;
        lista.insertBefore(li,lista.firstElementChild);
        document.querySelector('#texto').value = ""
        ExisteLista();
    }
}

function BorrarTodo() {
    if (lista.hasChildNodes())
        lista.innerHTML = "";
    ExisteLista();
}
function BorrarPrimero() {
    if (lista.hasChildNodes())
        lista.removeChild(lista.firstElementChild);
    ExisteLista();
}
function BorrarUltimo() {
    if (lista.hasChildNodes())
        lista.removeChild(lista.lastElementChild);
    ExisteLista();
}


