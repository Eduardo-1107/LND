var num;
num = parseInt(prompt("Ingresa un día de la semana (un número)."))

if(typeof(num) === Number || num >= 1 && num <= 7) {
    if(num === 1)
        alert("Lunes");
    else if(num === 2)
        alert("Martes")
    else if(num === 3)
        alert("Miercoles")
    else if(num === 4)
        alert("Jueves")
    else if(num === 5)
        alert("Viernes")
    else if(num === 6)
        alert("Sábado")
    else if(num === 7)  
        alert("Domingo")    
} else
    alert("Inválido")
