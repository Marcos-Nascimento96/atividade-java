function converter() {
    const horas = parseFloat(document.getElementById('horas').value);
    const minutos = horas * 60;
    const segundos = horas * 3600;
    document.getElementById('resultado').innerText = `${horas} hora(s) = ${minutos} minutos ou ${segundos} segundos`;
}