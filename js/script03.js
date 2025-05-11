function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    let resultado = '';
    if (idade < 12) resultado = 'Criança';
    else if (idade < 18) resultado = 'Adolescente';
    else if (idade < 60) resultado = 'Adulto';
    else resultado = 'Idoso';
    document.getElementById('resultado').innerText = resultado;
}