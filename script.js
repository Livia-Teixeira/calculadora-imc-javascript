const calcular = document.getElementById('calcular');

function imc() {
    const resultado = document.getElementById('resultado');
    const nome = document.getElementById('nome').value.trim();
    const altura = Number(document.getElementById('altura').value);
    const peso = Number(document.getElementById('peso').value);

    // 1. Validação inicial: verifica se os campos estão vazios, zerados ou negativos
    if (nome === '' || isNaN(altura) || altura <= 0 || isNaN(peso) || peso <= 0) {
        resultado.textContent = 'Por favor, preencha todos os campos com valores válidos e maiores que zero.';
        resultado.className = 'row align-items-center mt-4 alert alert-danger'; 
        return; // Para a execução aqui se houver erro
    }

    // 2. Cálculo do IMC
    const valorImc = peso / (altura * altura);
    let classificacao = '';

    // 3. Definição da classificação
    if (valorImc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (valorImc < 24.9) {
        classificacao = "Peso normal";
    } else if (valorImc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (valorImc < 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (valorImc < 39.9) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    // 4. Exibição do resultado (Corrigido para usar Crases `` para Template Strings)
    resultado.textContent = `Olá ${nome}, seu IMC é ${valorImc.toFixed(2)} | Classificação: ${classificacao}`;
    resultado.className = 'row align-items-center mt-4 alert alert-success';
}

calcular.addEventListener('click', imc);