/** 
 * @description Enter an integer number
 * @version 1.0
 * @param {*} value  
 * @returns 
 */
addEventListener('load', function() {
    startProgram();

    function startProgram() {
        let n = parseInt(prompt('Please, enter an integer number:'));
        //validate that the number entered is an integer
        if (Number.isInteger(n) && n > 0) {
            let arrayFibonacci = generateFibonacci(n);
            createCard(arrayFibonacci);
        } else {
            parseInt(prompt('The number entered is not an integer > 0'));
        }
    }

    /** 
     * @description Generate Fibonacci sequence 
     * @version 1.0
     * @param {*} value number
     * @returns 
     */
    function generateFibonacci(n) {
        let fn = [0, 1];
        if (n <= 1) {
            return fn;
        }
        for (let i = 2; i <= n; i++) {
            fn[i] = fn[i - 1] + fn[i - 2];
        }
        return fn;
    }

    /** 
     * @description Create the cards conditionally and paint those corresponding to the fibonacci sequence
     * @version 1.0
     * @param {*} value array
     * @returns 
     */

    function createCard(array) {
        let body = ''
        for (let i = 1; i < array.length; i++) {
            if (array.includes(i)) {
                body += `<div class="isfib">${i}</div>`
            } else {
                body += `<div class="notfib">${i}</div>`
            }
        }
        document.getElementById('fib').innerHTML = body;
    }
});