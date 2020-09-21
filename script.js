


play = (element) => {
    const myChoice = element.id.slice(0, element.id.indexOf('-')); // 'rock', 'paper', or 'scissors'
    const allChoices = ['rock', 'paper', 'scissors'];
    const cpuChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    
    let result = '';
    // See Who Won!
    if(myChoice == cpuChoice) {
        console.log('It\'s a tie!')
        result = 'It\'s a tie!';
    } else if(myChoice == 'rock' && cpuChoice == 'scissors') {
        console.log('You win!')
        result = 'You win!';
    } else if(myChoice == 'rock' && cpuChoice == 'paper') {
        console.log('You lose!')
        result = 'You lose!';
    } else if(myChoice == 'paper' && cpuChoice == 'rock') {
        console.log('You win!')
        result = 'You win!';
    } else if(myChoice == 'paper' && cpuChoice == 'scissors') {
        console.log('You lose!')
        result = 'You lose!';
    } else if(myChoice == 'scissors' && cpuChoice == 'paper') {
        console.log('You win!')
        result = 'You win!';
    } else {
        console.log('You lose!')
        result = 'You lose!';
    }        

    console.log(`You picked ${myChoice} and the computer picked ${cpuChoice}.`)
    displayWinner(myChoice, cpuChoice, result);
}





displayWinner = (myChoice, cpuChoice, result) => {
    // Change inner HTML
    document.getElementById('result').innerHTML = `
        <div class="game-container">
            <div class="${myChoice}-container">
                <div id='${myChoice}-image'></div>
            </div>
            
            <div class="display-result-container">
                <div id="result-text" class="none">${result}</div>
            </div>

            <div class="${cpuChoice}-container">
                <div id="${cpuChoice}-image-cpu"></div>
            </div>
        </div>
        <div class="label-container">
            <h6>${myChoice.charAt(0).toUpperCase() + myChoice.slice(1)}</h6><button class="btn btn-success" onclick="reset()">Play Again</button><h6>${cpuChoice.charAt(0).toUpperCase() + cpuChoice.slice(1)}</h6>
        </div>
        `
    // Make Header Disappear
    document.getElementById('header').innerText = '';
}





reset = () => {
    document.getElementsByClassName('main')[0].innerHTML = `
    <div class="main-container">
    <div class="title-container">
        <h1>Rock Paper Scissors Game</h1>
    </div>
    <h2 id="header">Choose!</h2>
    <div id="result">
        <div class="game-container">
            <div class="rock-container">
                <div id='rock-image' onclick="play(this)"></div>
            </div>
            <div class="paper-container">
                <div id="paper-image" onclick="play(this)"></div>
            </div>
            <div class="scissors-container">
                <div id="scissors-image" onclick="play(this)"></div>
            </div>
        </div>
        <div class="label-container">
            <h6>Rock</h6><h6>Paper</h6><h6>Scissors</h6>
        </div>
    </div>    
</div>
    `
}

