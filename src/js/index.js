/*
OBJETIVO - quando clicarmos no botão temos que mostrar de fundo correspondente

- passo 1 - dar um jeito de pegar o elemento HTML dos botões
- passo 2 - dar um jeito de identificar o clique do usuario no botão
- passo 3 - desmarcar o botão selecionado anterior
- passo 4 - marcar o botão clicando como se estivesso selecionado
- passo 5 - esconder a imagem de fundo anterior
- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

OBS: jamais deixar comentarios em um codigo, a não ser queo o codigo seja de estudo
*/
//passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//passo 2 - dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () => {

        console.log(indice)

        //passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //passo 4 - marcar o botão clicando como se estivesso selecionado
        botao.classList.add('selecionado');

        //passo 5 - esconder a imagem de fundo anterior
        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove('ativa');

        //passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        console.log(imagens);
        imagens[indice].classList.add('ativa')

    })
})