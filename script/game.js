//Iniciar minhas variaveis

let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols =['o','x'];
let gameOver = false;

//vamos criar um função para o movimento de cada jogador 
function handleMove(position){
    
    //validar se o jogo acabou 
    if(gameOver){
        return;
    }

    //preciso verificar se aposição ja está preenchida
    if(board[position] == ''){

        //vou colocar o simbolo dentro da posição
        board[position] = symbols[playerTime];

        gameOver = isWin();

        //mudar de jogador
        if(gameOver == false){
            if(playerTime == 0){
                playerTime = 1;
            }else{
                playerTime = 0 ;
            }
    }
}
    return gameOver;
}



//função para saber se tem um vencedor
function isWin(){

    let winStates =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    //chamar um for para percorrer na sequencia de vitoria
    for(let i = 0 ; i < winStates.length ; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        //validar se são iguais
        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1]!=''){
            return true;
        }
    }

    
    return false;
}