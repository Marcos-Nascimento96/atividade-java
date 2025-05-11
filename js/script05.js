const numeroSecreto = Math.floor(Math.random() * 10) + 1;
function adivinhar() {
    const palpite = parseInt(document.getElementById('palpite').value);
    let msg = '';
    if (palpite === numeroSecreto) msg = 'Parabéns! Você acertou!';
    else if (palpite < numeroSecreto) msg = 'Tente um número maior';
    else msg = 'Tente um número menor';
    document.getElementById('resultado').innerText = msg;
}