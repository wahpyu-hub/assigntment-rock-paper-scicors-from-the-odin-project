const arr = ["rock", "paper", "scissors"];
const userChoice = document.getElementById("userchoice");
const buttons = document.getElementById("play");
const input = document.getElementById("input");
const comInput = document.getElementById("com-input");
const winner = document.getElementById("winner");


buttons.addEventListener("click", function () {
    const computerChoice = arr[Math.floor(Math.random() * arr.length)];
    const userChoiceValue = userChoice.value;
    input.value = userChoiceValue;
    comInput.value = computerChoice;

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;

    winner.style.color = rgb;
    input.style.border = `${rgb} solid 1.5px`
    comInput.style.border = `${rgb} solid 1.5px`
    
    if (userChoiceValue === computerChoice){
        winner.textContent = 'it is a draw';
    } else if (userChoiceValue === arr[0] && computerChoice === arr[2] ||
        userChoiceValue === arr[1] && computerChoice === arr[0] ||
        userChoiceValue === arr[2] && computerChoice === arr[1]
    ){ winner.textContent = 'you win';}
    else {winner.textContent = 'computer wins';}
})

// ini tes branch
