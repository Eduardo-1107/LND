/*Math.floor(Math.random() * (max - min + 1) + min) 
ejemplo: valor aleatorio entre 5 y 25 ambos incluidos:
Math.floor(Math.random() * (25 - 5 + 1) + 5) 
*/

// Eduardo Armas Dorta
document.addEventListener('DOMContentLoaded', () => {

    let botonCrear = document.querySelector('#inicial input[type = "button"]');
    let botonNumero = document.querySelector('#inicial input[type = "number"]');
    let contenedorDados = document.querySelector('#dados');
    let contenedorFinal = document.querySelector('#final');
    let inputsFinal = document.querySelectorAll('#final input');
    let valorObjetivo = inputsFinal[0];
    let valorConseguido = inputsFinal[1];

    
    contenedorFinal.style.display = 'none';
    
    
    function Crear() {
        
        let numero = parseInt(botonNumero.value);
        for (let i = 0; i < numero; i++) {
            let dado = document.createElement('img');
            contenedorDados.append(dado);
            dado.src = 'imagenes/vacio.png';
            dado.onclick = MostrarDado;
        }
        botonNumero.style.display = 'none';
        botonCrear.style.display = 'none';
        contenedorFinal.style.display = 'block';

    }
    botonCrear.onclick = Crear;
    
    valorObjetivo.value = Math.floor(Math.random() * ((botonNumero.value * 6) - botonNumero.value + 1)) + (botonNumero.value * 6);
    
    function MostrarDado() {
        let dado = this;
        let indice = Math.floor(Math.random() * 6)
        let valor = indice + 1 ;
        dados = [
            'imagenes/uno.png',
            'imagenes/dos.png',
            'imagenes/tres.png',
            'imagenes/cuatro.png',
            'imagenes/cinco.png',
            'imagenes/seis.png'
        ]
        
       dado.src = dados[indice];
       let actual = parseInt(valorConseguido.value)
       valorConseguido.value = actual + valor;

       dado.onclick = null;
       
       const p = document.querySelector('#final p');
       if (valorConseguido.value === valorObjetivo.value) {
           p.textContent = "Has ganado";
           DesactivarDados();
           botonReiniciar.style.display = 'inline';
       } else if (valorConseguido.value > valorObjetivo.value ) {
           p.textContent = "Has perdido";
           DesactivarDados();
           botonReiniciar.style.display = 'inline';
       }
    }

    function DesactivarDados() {
        let dados = document.querySelectorAll('#dados img');
        dados.forEach(d => d.onclick = null);
    }

    let botonReiniciar = document.createElement('input');
    botonReiniciar.type = 'button';
    botonReiniciar.value = 'Reiniciar';
    botonReiniciar.style.display = 'none';
    botonReiniciar.id = 'reiniciar';

    // Insertarlo al final del div #final
    contenedorFinal.append(botonReiniciar);


    botonReiniciar.onclick = () => {
        // Vaciar el contenedor de dados
        contenedorDados.innerHTML = '';

        // Restaurar estado inicial
        botonNumero.style.display = 'inline';
        botonCrear.style.display = 'inline';
        contenedorFinal.style.display = 'none';
        valorObjetivo.value = 0;
        valorConseguido.value = 0;
        p.textContent = '';
        botonReiniciar.style.display = 'none';
    };
})





