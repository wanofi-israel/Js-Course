// const array=[1,6,9,82,7,4,567,54,12,76,2,6]

// const findMax=()=>{
//     let max=array[0]
//     for (number of array){
//         if(max<number){
//             max=number
//         }
//     }
//     return max
// }

// console.log(findMax())

// const letterFrequency=()=>{
//     const phrase="heeello"
//     let letters={}
//     for(letter of phrase){
//         if(letter in letters){
//             letters={...letters,[letter]:letters+1}
//             console.log("double");
            
//         }
//         letters={...letters,[letter]:1}
//     }
//     return letters
// }

// console.log(letterFrequency())

let squares=document.querySelectorAll(".div")
let timesClicked={'RED':0,'YELLOW':0,'GREEN':0}

for(const square of squares){
    square.style.width="100px"
    square.style.height="100px"
    square.style.display="grid"
    square.style.placeItems="center"
    square.style.borderRadius="12px"

    square.onclick=()=>{
            timesClicked[square.value] +=1
console.log(timesClicked);

        square.innerText=timesClicked[square.value]
    }
    
}

const clearSquare=()=>{
    timesClicked={'RED':0,'YELLOW':0,'GREEN':0}
    squares.forEach(square=>square.innerHTML="")
    console.log(timesClicked);
}

const btnreset=document.getElementById("reset")

btnreset.onclick=()=>{clearSquare()}

console.log(timesClicked);
