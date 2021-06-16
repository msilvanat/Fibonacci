// Ingresar número
addEventListener('load', function () {
    iniciarPrograma();
    function iniciarPrograma() {
        let n = parseInt(prompt('Por favor, ingrese un número:'));
        //validar que el número ingresado sea un entero
        if (Number.isInteger(n) && n > 0) {
            let arrayFibonacci = generarFibonacci(n);
            crearCuadrado(arrayFibonacci);
        } else {
            parseInt(prompt('El número ingresado no es un entero > 0'));
        }
    }

    // Generar Fibonacci
    function generarFibonacci(n) {
        let fn = [0, 1];
        if (n <= 1) {
            return fn;
        }
        for (let i = 2; i <= n; i++) {
            fn[i] = fn[i - 1] + fn[i - 2];
        }
        return fn;
    }

    // Crear los cuadrados + pintar de amarillo los correspondientes a la secuencia fibonacci15
    function crearCuadrado(array) {
        let body = ''
        for (let i = 1; i < array.length; i++) {
            if (array.includes(i)) {
                body += `<div class="isfib">${i}</div>`
            } else {
                body += `<div>${i}</div>`
            }
           // console.log(array[i]);
        }
        document.getElementById('fib').innerHTML = body;
    }
});