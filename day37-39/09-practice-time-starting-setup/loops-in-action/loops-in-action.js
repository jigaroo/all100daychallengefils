// first example: sum numbers
const calculateSumbuttonElement = document.querySelector('#calculator button');
function calculatorSum(){
    const userNumberInputElement =document.getElementById('user-number');
    const enterNumber = userNumberInputElement.value;
    let sumtoNumber =0;
    for(let i=0;i<=enterNumber;i++){
        sumtoNumber = sumtoNumber + i;
    }
    const outputresultElement = document.getElementById('calculated-sum');
    outputresultElement.textContent =sumtoNumber;
    outputresultElement.style.display ='block';
}
calculateSumbuttonElement.addEventListener('click',calculatorSum);
// highlight links
const highlightLinksButtonElement = document.querySelector('#highlight-links button');
function highlightLinks(){
    const anchorElements = document.querySelectorAll('#highlight-links a');
    for(const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }
}
highlightLinksButtonElement.addEventListener('click',highlightLinks);
// display user data
const dummyUserData = {
    firstName :'farzin',
    lastName:'talebi',
    age:25

};

const displayUserDataButtonElement = document.querySelector('#user-data button');
function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data');
    outputDataElement.innerHTML ='';
    for(const key in dummyUserData){
        const newUserDataListElement = document.createElement('li');
        const outputText = key.toUpperCase() + ':' + dummyUserData[key];
        newUserDataListElement.textContent = outputText;
        outputDataElement.append(newUserDataListElement);
    }
}
displayUserDataButtonElement.addEventListener('click',displayUserData)
// statistics / roll the dice
const rollDiceButtonElement = document.querySelector('#statistics button');
function rollDice(){
    return Math.floor(Math.random() * 6)+1;
}
function deriveNumberOfDicerolls(){
    const targetNumberInputElement = document.getElementById('user-target-number');
    const enteredNumber = targetNumberInputElement.value;
    const diceRollsListElement = document.getElementById('dice-rolls');
    diceRollsListElement.innerHTML = '';
    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;
    while (!hasRolledTargetNumber){
        const rolledNumber =rollDice();
        // == for strings === for numbers
        // if(rolledNumber == enteredNumber){
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls ++;
        const newRollListElement = document.createElement('li');
        const outputText = 'Roll' + numberOfRolls + ':'+ rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }
    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');
    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}
rollDiceButtonElement.addEventListener('click',deriveNumberOfDicerolls)