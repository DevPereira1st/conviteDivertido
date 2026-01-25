const btnSim = document.getElementById('sim');
const btnNao = document.getElementById('nao');

btnSim.addEventListener('click', () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
});

// FUNÇÃO CORRIGIDA DEFINITIVAMENTE
function moverBotao(evento) {
    if (evento.type === 'touchstart') {
        evento.preventDefault(); 
    }

    // 1. Encontra a tela onde o botão está (Página 6)
    const secao = btnNao.closest('section');

    // 2. O PULO DO GATO: Força a seção a ser o "limite" do botão
    secao.style.position = 'relative';

    // O botão agora vai se mover livremente, MAS preso dentro da seção
    btnNao.style.position = 'absolute';
    btnNao.style.zIndex = "9999";
    btnNao.style.transition = "all 0.1s ease"; // Deixa o movimento rápido e fluido

    // Medidas do Botão
    const larguraBotao = btnNao.offsetWidth;
    const alturaBotao = btnNao.offsetHeight;

    // 3. LIMITE DA TELA DE 390px:
    // Pega a largura da tela, mas trava o máximo em 390px para garantir a segurança no mobile.
    const larguraTela = Math.min(secao.clientWidth, 390); 
    const alturaTela = secao.clientHeight;

    // 4. Margem de segurança de 15 pixels para não raspar na borda
    const maxLeft = larguraTela - larguraBotao - 15;
    const maxTop = alturaTela - alturaBotao - 15;

    // Gera posições X e Y aleatórias entre 15px e o limite máximo
    const novaPosicaoX = Math.floor(Math.random() * (maxLeft - 15)) + 15;
    const novaPosicaoY = Math.floor(Math.random() * (maxTop - 15)) + 15;

    // Aplica a posição final
    btnNao.style.left = `${novaPosicaoX}px`;
    btnNao.style.top = `${novaPosicaoY}px`;
}

// Eventos de Toque (Mobile) e Mouse (PC)
btnNao.addEventListener('touchstart', moverBotao);
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