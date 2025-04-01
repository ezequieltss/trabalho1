function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let operacao = document.getElementById("operacao").onvolumechange;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "erro! insira números validos."
    } else {
        switch (operacao) {
            case "+":
                resultado = num1 + num2;
                break;

            case "-":
                resultado = num1 - num2;
                break;

            case "*":
                resultado = num1 * num2;
                break;

            case "/":
                resultado = num2 !== 0 ? num1 / num2 : "erro! Divisão por zero"
                break;
        }

    }

    //atualiza o resultado
    document.getElementById("resultado").textContent = resultado;



}