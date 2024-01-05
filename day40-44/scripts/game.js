function resetGame(){
    activeplayer =0;
    currentround=1;
    gameisover=false;
    gameOverElement.firstElementChild.innerHTML='You won, <span></span>!';
    gameOverElement.style.display = 'none';
    let gameboardIndex=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j]=0;
            const gameBoardItemElement = gameBoardElement.children[gameboardIndex];
            gameBoardItemElement.textContent='';
            gameBoardItemElement.classList.remove('disabled');
            gameboardIndex++;
        }
    }
}

function startNewgame(){
  if(players[0].name ==='' || players[1].name===''){
    alert('please set custom player names for both players!');
    return;
  }
    resetGame();
    activePlayerNameElement.textContent = players[activeplayer].name;
    gameAreaElement.style.display = 'block';
}
function checkforgameover(){
    //checking the rows for equality
    for(let i =0;i<3;i++){
        if(
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2])
            {
            return gameData[i][0];
        }
    }
    // cheking the colums for equality
    for(let i =0;i<3;i++){
        if(
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i])
            {
            return gameData[0][i];
        }
    }
    // Diagonal: top left to bottom right
    if(
        gameData[0][0] > 0 &&
         gameData [0][0] === gameData[1][1] && 
         gameData[1][1] === gameData[2][2]
         ){
            return gameData[0][0];
         }
    // Diagonal: top right to bottom left
         if(
            gameData[2][0] > 0 &&
             gameData [2][0] === gameData[1][1] && 
             gameData[1][1] === gameData[0][2]
             ){
                return gameData[2][0];
             }
        if(currentround===9){
            return -1;
        }
        return 0; 
    
}

function switchPlayer(){
    if(activeplayer===0){
        activeplayer=1;
    }else{
        activeplayer=0;
    }
    activePlayerNameElement.textContent = players[activeplayer].name;
}

function selectGameFiled(event){
    if(event.target.tagName !== 'LI' || gameisover){
        return;
    }
    const selectedFiled = event.target;
    const selectedColumn = selectedFiled.dataset.col-1;
    const selectedRow = selectedFiled.dataset.row-1;
    if(gameData[selectedRow][selectedColumn]>0){
        alert('please select an empty filed!');
        return;
    }
    selectedFiled.textContent =players[activeplayer].symbol;
    selectedFiled.classList.add('disabled');


    gameData[selectedRow][selectedColumn]=activeplayer+1;
    console.log(gameData);
    const winnerId = checkforgameover();
    if (winnerId!==0){
        endGame(winnerId);
    }
    console.log(winnerId);
    currentround++;
    switchPlayer();
}

function endGame(winnerId){
    gameisover=true;
    gameOverElement.style.display ='block';
    if(winnerId>0){
        const winnername = players[winnerId-1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnername;
    } else{
        gameOverElement.firstElementChild.textContent ="It's a draw!";
    }
}