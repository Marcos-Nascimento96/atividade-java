function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function mostrarPrimos() {
    let inicio = parseInt(document.getElementById('inicio').value);
    let fim = parseInt(document.getElementById('fim').value);
    let resultado = '';
    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) resultado += i + ' ';
    }
    document.getElementById('resultado').innerText = resultado.trim();
}