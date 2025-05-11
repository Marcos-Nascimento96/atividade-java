function calcularFatorial() {
    let n = parseInt(document.getElementById('numero').value);
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    document.getElementById('resultado').innerText = 'Fatorial: ' + f;
}