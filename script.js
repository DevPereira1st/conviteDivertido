const btnSim = document.getElementById('sim');
const btnNao = document.getElementById('nao');

btnSim.addEventListener('click', () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
});

// FUNÇÃO CORRIGIDA DEFINITIVAMENTE PARA MOBILE
function moverBotao(evento) {
    if (evento.type === 'touchstart') {
        evento.preventDefault(); 
    }

    // O PULO DO GATO PARA MOBILE: Mudar para 'fixed'
    // 'fixed' faz o botão se mover na TELA VISÍVEL, ignorando o tamanho da seção ou scroll.
    btnNao.style.position = 'fixed';
    btnNao.style.zIndex = "9999";
    btnNao.style.transition = "all 0.15s ease-out"; // Deixa o movimento rápido e fluido

    // Medidas do Botão
    const larguraBotao = btnNao.offsetWidth;
    const alturaBotao = btnNao.offsetHeight;

    // LIMITE DA TELA VISÍVEL:
    // Pega exatamente a largura e altura da tela do dispositivo no momento
    const larguraTela = window.innerWidth; 
    const alturaTela = window.innerHeight;

    // Margem de segurança (distância da borda da tela)
    const margem = 20;

    // Calcula o máximo que o botão pode ir sem sair da tela
    const maxLeft = larguraTela - larguraBotao - margem;
    const maxTop = alturaTela - alturaBotao - margem;

    // Gera posições X e Y aleatórias dentro do limite visível
    const novaPosicaoX = Math.floor(Math.random() * (maxLeft - margem)) + margem;
    const novaPosicaoY = Math.floor(Math.random() * (maxTop - margem)) + margem;

    // Aplica a posição final
    btnNao.style.left = `${novaPosicaoX}px`;
    btnNao.style.top = `${novaPosicaoY}px`;
}

// Eventos de Toque (Mobile) e Mouse (PC)
btnNao.addEventListener('touchstart', moverBotao, {passive: false});
btnNao.addEventListener('mouseover', moverBotao);

// EFEITO REVELAR
window.revel = ScrollReveal({ 
    reset: true,
    container: '.interface' // Fundamental para o Snap Scroll funcionar
});

revel.reveal('.efeito', {
    duration: 2000,
    distance: '30px',
    origin: 'bottom', // Mudei para 'bottom' (fica mais natural no scroll vertical)
    easing: 'ease-in-out'
});

// Email send
document.getElementById('sim').addEventListener('click', function() {
    const botaoSim = this;
    
    // 1. Muda o texto do botão para mostrar que está carregando
    botaoSim.innerHTML = '<i class="bi bi-hourglass-split"></i> ENVIANDO...';
    botaoSim.disabled = true; // Desativa o botão para evitar cliques duplos

    // 2. Define a mensagem que vai no e-mail
    const parametros = {
        mensagem: "A pessoa clicou em SIM e aceitou o convite!",
        para_email: "@gmail.com" // O e-mail que vai receber a notificação
    };

    // 3. Envia o e-mail (Substitua pelos seus IDs do EmailJS)
    emailjs.send('...', '...', parametros)
        .then(function(response) {
            // Se der certo:
            botaoSim.innerHTML = '<i class="bi bi-check-square-fill"></i> CONFIRMADO!';
            botaoSim.style.backgroundColor = "#28a745"; // Fica verde
            alert("Sua resposta foi enviada com sucesso! Te vejo lá! 🎉");
        }, function(error) {
            // Se der erro:
            alert("Ops! Ocorreu um erro ao enviar. Tente novamente.");
            botaoSim.innerHTML = '<i class="bi bi-check-square-fill"></i> ACEITAR';
            botaoSim.disabled = false;
        });
});
