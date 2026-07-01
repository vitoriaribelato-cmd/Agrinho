// Rolagem suave ao clicar no botão da Home
document.getElementById('btn-acao').addEventListener('click', () => {
    document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
});

// Lógica do Quiz Interativo
const opcoes = document.querySelectorAll('.opcao');
const resultado = document.getElementById('resultado-quiz');

opcoes.forEach(botao => {
    botao.addEventListener('click', (e) => {
        // Desabilita todos os botões após a resposta
        opcoes.forEach(btn => btn.disabled = true);

        const ehCorreta = e.target.getAttribute('data-correta') === 'true';

        if (ehCorreta) {
            resultado.textContent = "✅ Resposta correta! Parabéns!";
            resultado.style.color = "#27ae60";
            e.target.style.backgroundColor = "#27ae60";
            e.target.style.color = "white";
        } else {
            resultado.textContent = "❌ Resposta errada. Tente novamente!";
            resultado.style.color = "#c0392b";
            e.target.style.backgroundColor = "#c0392b";
            e.target.style.borderColor = "#c0392b";
            e.target.style.color = "white";
            
            // Destaca a alternativa correta
            document.querySelector('[data-correta="true"]').style.backgroundColor = "#27ae60";
            document.querySelector('[data-correta="true"]').style.color = "white";
        }
    });
});

