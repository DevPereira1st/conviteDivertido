const btnSim = document.getElementById('sim');
const btnNao = document.getElementById('nao');

// Ação do Botão SIM (Redirecionamento)
btnSim.addEventListener('click', () => {
    // Coloque aqui o link do seu redirecionamento
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
});

// Função para fazer o botão fugir
function moverBotao(evento) {
    // Se for um evento de toque (celular), previne o clique real
    if (evento.type === 'touchstart') {
        evento.preventDefault(); 
    }

    // Muda a posição para absoluta para o botão se mover livremente na tela
    btnNao.style.position = 'absolute';

    // Pega o tamanho exato da tela do celular naquele momento
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    // Pega o tamanho do botão para ele não sumir da tela
    const larguraBotao = btnNao.offsetWidth;
    const alturaBotao = btnNao.offsetHeight;

    // Calcula uma posição aleatória X e Y (mantendo o botão 100% visível na tela)
    const novaPosicaoX = Math.floor(Math.random() * (larguraTela - larguraBotao));
    const novaPosicaoY = Math.floor(Math.random() * (alturaTela - alturaBotao));

    // Aplica a nova posição com transição suave
    btnNao.style.left = `${novaPosicaoX}px`;
    btnNao.style.top = `${novaPosicaoY}px`;
}

// Escuta o toque na tela (para o seu CSS mobile)
btnNao.addEventListener('touchstart', moverBotao);

// Escuta o mouse (caso o usuário abra no PC)
btnNao.addEventListener('mouseover', moverBotao);