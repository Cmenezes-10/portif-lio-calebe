// 1. Criamos uma variável 'contador' p/ controlar qual omagem deve aparecer//
let contador = 1;

// 2. Criamos uma função 'setInterval' é um temporizador do navegador de 5000 milissegundos (5 segundos)//
setInterval(function() {
    proxImg();
}, 5000);

// 3. Esta é a função responsável por trocar as imagens//
function proxImg() {
    //toda vez que a função roda, somamos + 1 ao contador para ir p/ próxima imagem//
    contador++;
    //Lógica de repetição, como agora usamosb4 imagens, reiniciamos p/ 1 e o carrossel voltará p/ o início (loop)//
    if (contador > 4) {
        contador = 1;
    }

    //manipulação do html (dom), aqui o JS procura no html, o elemento que tem o id 'radio' + o número do contador, o '.checked = true ' 
    //marca aqueles inputs de radio automaticamente, quando o rádio e marcado, o css que configuramos irá mudar a imagem automaticamente//
    document.getElementById('radio' + contador) = true; 
    

}

