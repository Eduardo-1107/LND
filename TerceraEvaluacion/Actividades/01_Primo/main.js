var num;
var esPrimo = true;
num = parseInt(prompt("Inserte número para saber si es primo o no."));


if (typeof(num) === Number && num > 0) {
    if (num <= 1 )
        esPrimo = false;
    else if (num > 3)
        if (num%2 === 0 || num%3 === 0) 
            esPrimo = false;
        else for (var i = 5; i * i <= num && esPrimo; i += 2) 
                if (num % i === 0)
                    esPrimo = false;
    if (esPrimo) 
        alert("El número es Primo");
    else 
        alert("El número No es Primo");
} else 
    alert("Inválido");
    


