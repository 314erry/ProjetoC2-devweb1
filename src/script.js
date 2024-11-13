function gerarNumerosAleatorios() {
    console.time()
    const numerosSet = new Set();
    
    while (numerosSet.size < 6) {
        numerosSet.add(Math.floor(Math.random() * 60) + 1);
    }

    console.timeEnd()
    return Array.from(numerosSet).sort((a, b) => a - b);
}

gerarNumerosAleatorios()