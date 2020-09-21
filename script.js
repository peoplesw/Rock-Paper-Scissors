


play = (element) => {
    const myChoice = element.id.slice(0, element.id.indexOf('-')); // 'rock', 'paper', or 'scissors'
    const allChoices = ['rock', 'paper', 'scissors'];
    const cpuChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    
    let result = '';
    // See Who Won!
    if(myChoice == cpuChoice) {
        result = 'It\'s a tie!';
    } else if(myChoice == 'rock' && cpuChoice == 'scissors') {
        result = 'You win!';
    } else if(myChoice == 'rock' && cpuChoice == 'paper') {
        result = 'You lose!';
    } else if(myChoice == 'paper' && cpuChoice == 'rock') {
        result = 'You win!';
    } else if(myChoice == 'paper' && cpuChoice == 'scissors') {
        result = 'You lose!';
    } else if(myChoice == 'scissors' && cpuChoice == 'paper') {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }        

    displayWinner(myChoice, cpuChoice, result);
}





displayWinner = (myChoice, cpuChoice, result) => {
    // Get resultMessageColor
    let resultMessageColor = ''; 
    if(result == 'You lose!') {
        resultMessageColor = 'lose';
    } else if(result == 'You win!') {
        resultMessageColor = 'win';
    } else {
        resultMessageColor = 'tie';
    }
    

    // Change inner HTML
    document.getElementById('result').innerHTML = `
        <div class="game-container">
            <div class="${myChoice}-container">
                <div id='${myChoice}-image'></div>
            </div>
            
            <div class="display-result-container">
                <div id="result-text" class="${resultMessageColor}">${result}</div>
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

