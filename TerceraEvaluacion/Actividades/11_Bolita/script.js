let x = 0;
let y = 0;
let tamaño = 0;
let tabla;

function CrearTabla() {
    
    tamaño = parseInt(document.querySelector('#tamaño').value);
    tabla = document.createElement('table');
    x = 0;
    y = 0;

    
    for (let i = 0; i < tamaño; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < tamaño; j++) {
            const td = document.createElement('td');
            tr.append(td);
        }
        tabla.append(tr);
    }
    const contenedorTabla = document.querySelector('.tabla');
    contenedorTabla.innerHTML = ''; 
    contenedorTabla.append(tabla);

    
    const contenedorBotones = document.createElement('div');
    const botones = [
        
        {id: 'izquierda', val: '<', func: 'MoverIzquierda'},
        {id: 'arriba', val: '<', func: 'MoverArriba'},
        {id: 'derecha', val: '<', func: 'MoverDerecha'},
        {id: 'abajo', val: '<', func: 'MoverAbajo'},
        {id: 'centro', val: 'O', func: 'MoverInicio'}
    ];
    
    botones.forEach(b => {
        const btn = document.createElement('input');
        btn.type = 'button';
        btn.id = b.id;
        btn.value = b.val;
        btn.onclick = window[b.func];
        contenedorBotones.append(btn);
    });
    
    CrearBolita();

    const inputColor = document.createElement('input');
    inputColor.type = 'color';
    inputColor.id = 'color'
    inputColor.value = '#ff0000';
    contenedorBotones.append(inputColor);
    
    inputColor.addEventListener('input', ActualizarBolita);
    
    const inputRango = document.createElement('input');
    inputRango.type = 'range';
    inputRango.id = 'selectorTamaño';
    inputRango.min = 10; 
    inputRango.max = 40; 
    inputRango.value = 20; 
    inputRango.step = 5;
    contenedorBotones.append(inputRango);

    inputRango.addEventListener('input', ActualizarBolita);

    contenedorTabla.append(contenedorBotones);
}
function ActualizarBolita() {
    document.querySelector('#bolita').remove();
    CrearBolita();
}
function MoverInicio() {
    x = 0;  
    y = 0;
    ActualizarBolita();
}
function MoverIzquierda() {
    if (x > 0) 
        x--;
    ActualizarBolita();
}
function MoverArriba() {
    if (y > 0) 
        y--;
    ActualizarBolita();
}
function MoverDerecha() {
    if (x < tamaño - 1) 
        x++;
    ActualizarBolita();
}
function MoverAbajo() {
    if (y < tamaño - 1) 
        y++;
    ActualizarBolita();
}
function CrearBolita() {
    const bola = document.createElement('div');
    bola.id = 'bolita';
    const colorElegido = document.querySelector('#color')?.value;
    bola.style.backgroundColor = colorElegido;
    const tamañoBolita = document.querySelector('#selectorTamaño')?.value || 20;

    bola.style.width = `${tamañoBolita}px`;
    bola.style.height = `${tamañoBolita}px`;
    
    const celda = tabla.rows[y].cells[x];
    celda.append(bola);
}
