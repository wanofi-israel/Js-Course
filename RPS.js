const choice = ["Rock", "Paper", "Scissors"];
const rps = document.querySelectorAll(".btn-rps");
let bot;
let score;
let playercho;
let scoreContainer = document.getElementById("score-container");
let resultContainer = document.getElementById("result-container");
let choiceContainer = document.getElementById("choice-container");
const totalScore={"playerScore":0}
//getting Bot choice function

const getBotChoice = () => {
    bot = choice[Math.floor(Math.random() * choice.length)];

    return bot;
};

const getResult = (botChoice, playerChoice) => {
    console.log(botChoice, "bot");
    console.log(playerChoice, "btn");
    if (botChoice === playerChoice) {
        score = 0;
        return score;
    } else if (playerChoice === "Rock" && botChoice === "Scissors") {
        score = 1;
    } else if (playerChoice === "Paper" && botChoice === "Rock") {
        score = 1;
    } else if (playerChoice === "Scissors" && botChoice === "Paper") {
        score = 1;
    } else {
        score = -1;
    }
    return score;
};

const showResult = (score, playerChoice, botChoice) => {
    if (score === -1) {
        totalScore['playerScore']+=score
        resultContainer.innerHTML = `You Lose`;
    } else if (score === 0) {
        totalScore['playerScore']+=score
        resultContainer.innerHTML = `You Draw`;
    } else {
        totalScore['playerScore']+=score
        resultContainer.innerHTML = `You Won`;
    }
    choiceContainer.innerHTML = `👧 ${playerChoice} vs 🤖 ${botChoice}`;
    scoreContainer.innerHTML = `${totalScore["playerScore"]}`;
};

const endGame = () => {
    scoreContainer.innerHTML = "";
    choiceContainer.innerHTML = "";
    resultContainer.innerHTML = "";
    totalScore["playerScore"]=0
};
rps.forEach((btn) => {
    btn.onclick = () => {
        playercho = btn.value;
        // calling bot choice function
        getBotChoice();
        //calling result checker function
        getResult(bot, playercho);
        // check condition if it is a tie
        showResult(score, playercho, bot);
        console.log(score, "score");
    };
});



















// const randomSelectorFromArray=()=>{
//     let fruits=["🍎","🍑","🥕","🌶️","🍐"]
//     console.log(Math.floor(Math.random()*5));

//     console.log(fruits[Math.floor(Math.random()*4)])
// }

// randomSelectorFromArray()

// let score=0
// let weather="sunny"
// const weatherScorer=()=>{
//     if(weather==="rainy"){
//         score=1
//     }else if(weather==="sunny"){
//         score =-1
//     }else{
//         score=0
//     }

//     return score
// }

// console.log(weatherScorer())
