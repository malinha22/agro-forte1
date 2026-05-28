document.addEventListener('DOMContentLoaded', function () {

    // BOTÕES
    const botaoDeAcessibilidade =
        document.getElementById('botao-acessibilidade');

    const opcoesDeAcessibilidade =
        document.getElementById('opcoes-acessibilidade');

    const aumentaFonteBotao =
        document.getElementById('aumentar-fonte');

    const diminuiFonteBotao =
        document.getElementById('diminuir-fonte');

    const alternaContraste =
        document.getElementById('alterna-contraste');

    // TAMANHO DA FONTE
    let tamanhoAtualFonte = 1;

    // MOSTRAR / ESCONDER MENU
    botaoDeAcessibilidade.addEventListener('click', function () {

        botaoDeAcessibilidade.classList.toggle('rotacao-botao');

        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        // ACESSIBILIDADE
        const expandido =
            botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';

        botaoDeAcessibilidade.setAttribute(
            'aria-expanded',
            !expandido
        );

    });

    // AUMENTAR FONTE
    aumentaFonteBotao.addEventListener('click', function () {

        if (tamanhoAtualFonte < 2) {

            tamanhoAtualFonte += 0.1;

            document.body.style.fontSize =
                `${tamanhoAtualFonte}rem`;

        }

    });

    // DIMINUIR FONTE
    diminuiFonteBotao.addEventListener('click', function () {

        if (tamanhoAtualFonte > 0.8) {

            tamanhoAtualFonte -= 0.1;

            document.body.style.fontSize =
                `${tamanhoAtualFonte}rem`;

        }

    });

    // ALTO CONTRASTE
    alternaContraste.addEventListener('click', function () {

        document.body.classList.toggle('alto-contraste');

    });

});