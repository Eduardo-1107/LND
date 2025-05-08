/**** 
Para obtener colores aleatorios se puede usar:
    red=Math.floor(Math.random() * 256);
	green=Math.floor(Math.random() * 256)
	blue=Math.floor(Math.random() * 256)
	color= "rgb("+ red  + "," + green  + "," + blue +")"
***/
/****
   elemento.childElementCount
***/

document.addEventListener('DOMContentLoaded', () => {

	let contenedores = document.querySelectorAll('div');
	let contenedorNumeros = contenedores[1];
	let contenedorCuadrados = contenedores[0];
	let contenedorBorrar = contenedores[2];
	for (let i = -10; i < 0; i++) {
		let p = document.createElement('p');
		p.textContent = [i];
		p.className = 'numero';
		p.onclick = Borrar;
		contenedorNumeros.append(p);
	}
	for (let i = 1; i <= 10; i++) {
		let p = document.createElement('p');
		p.textContent = [i];
		p.className = 'numero';
		p.onclick = Añadir;
		contenedorNumeros.append(p);
	}
	
	let bBorrar = document.createElement('p');
	bBorrar.textContent = 'B';
	bBorrar.addEventListener('click', () => {
		contenedorCuadrados.innerHTML = "";
	});
	bBorrar.className = 'numero';
	contenedorBorrar.append(bBorrar);


	function Añadir() {
		let numero = parseInt(this.textContent);
		let red=Math.floor(Math.random() * 256);
		let green=Math.floor(Math.random() * 256)
		let blue=Math.floor(Math.random() * 256)
		let color= "rgb("+ red  + "," + green  + "," + blue +")";
		for (let i = 0; i < numero; i++) {
			if (contenedorCuadrados.childElementCount < 207) {
				let span = document.createElement('span');
				span.style.backgroundColor = color;
				span.onclick = () => {
					span.remove();
				}
				contenedorCuadrados.append(span);
			}
		}
	}

	function Borrar() {
		let numero = Math.abs(parseInt(this.textContent));
		if (contenedorCuadrados.childElementCount >= numero) {
		for (let i = 0; i < numero; i++) {
				let cuadrado = document.querySelector('#cuadrados span');
				cuadrado.remove();
			}
		}
	}
});

