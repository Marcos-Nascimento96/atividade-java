function validarCPF() {
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    let valido = cpf.length === 11;
    document.getElementById('resultado').innerText = valido ? 'CPF válido (formato)' : 'CPF inválido';
}