document.addEventListener('DOMContentLoaded',()=>{

    // todo o tabuleiro dentro da variavel 
    let squares = document.querySelectorAll(".square");

    // aqui vou saber quando algum square(div) for clicado
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    });

});


function handleClick(event){
    
    let squareClicado = event.target;
    let position = squareClicado.id;

    //passo a posição do id clicado para função 
    if(handleMove(position)){
        
        setTimeout(()=>{
            alert("O Jogo Acabou, o ganhador é: " + playerTime);
        },20);
        
    };

    // vou chamar a função para atualizar o tabuleiro 
    updateSquare();

}

function updateSquare(){
    
    // todo o tabuleiro dentro da variavel 
    let squares = document.querySelectorAll(".square");

    // aqui vou saber quando algum square(div) for clicado
    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>` ;
        }
    });

}