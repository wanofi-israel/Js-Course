



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

const choice=["Rock","Paper","Scissors"]
const rps=document.querySelectorAll(".btn-rps")
let bot
rps.forEach(btn => {

    btn.onclick=()=>{
        console.log(btn.value)
    }
});