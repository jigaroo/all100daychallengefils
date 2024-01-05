function openplayerconfig(event){ 
    editedPlayer = +event.target.dataset.playerid;
    playerconfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}
function closeplayerconfig(){
    playerconfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value='';
}

function saveplayerconfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    //const enterPlayername = formData.get('playername').trim();
    const playerName = formData.get('username').trim();
    if(!playerName){
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'please enter a valid name!';
        return;
    }
    const updatedPalyerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPalyerDataElement.children[1].textContent = playerName;
    
    players[editedPlayer-1].name=playerName;

    closeplayerconfig();
}