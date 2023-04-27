/*UMA VARIAVEL PARA CONTROLAR O PERSONAGE E OUTRA P/ O QUADRADO*/
let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')


/* ao clicar ele add a classe, realiza a acao e depois remove para que a acao possa ser feita novamente  */
function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)

}

/* mas ainda precisa fazer que o boneco pare depois que encostar no quadrado */

var  testarColisao = setInterval(function() {

    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var esquerdaQuadrado = parseInt (
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )
    if(esquerdaQuadrado < 20 && esquerdaQuadrado > 0 && topoPersonagem >= 130){

        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        window.alert('Você perdeu :(')
    }
    
}, 5)



