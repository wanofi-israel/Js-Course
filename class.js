// // class Car{
// //     constructor(name,color,totalSpeed,speed){
// //         this.name=name
// //         this.color=color
// //         this.totalSpeed=totalSpeed
// //         this.speed=speed
// //     }

// //     drive(){
// //         this.speed+=10
// //     }

// //     speedUp(){
// //         this.speed+=60
// //     }

// //     brake(){
// //         this.speed-=10
// //     }

// //     stop(){
// //         this.speed=0
// //     }
// // }


// // const ferrari=new Car("Ferrari","red",250,0)
// // const porsche=new Car("Porche","yellow",280,0)


// // console.log(ferrari) 
// // console.log(porsche) 

// // ferrari.drive()
// // ferrari.drive()
// // console.log("the car speed have reached "+ferrari.speed+" mph")
// // ferrari.speedUp()
// // console.log("wow that is so fast it has reached",ferrari.speed,"mph we need to brake")

// // ferrari.brake()
// // ferrari.brake()
// // ferrari.brake()
// // console.log("much better we are at",ferrari.speed,"mph we can stop now")

// // ferrari.stop()

// // console.log("finally we have stoped we are at",ferrari.speed,"mph")

// Array.prototype.myPush=function (number){
//      this[this.length+1]=number
// }


// const newArray=[1,2,3,4,5,6]
// console.log(newArray)

// newArray.myPush(7)

// console.log(newArray)


const balanceInput=document.getElementById('balance-input')
const user=document.getElementById('user')
const message=document.getElementById('error-message')
const balance=document.getElementById('current-balance')
const btnWithdraw=document.getElementById('btn-withdraw')
const btnDeposit=document.getElementById('btn-deposit')
const btnClose=document.getElementById('close-account')


class Bank{
    
    constructor (balance,name){
        this.balance=balance
        this.name=name
    }
    
    withdraw(value){
        if(this.balance-value<100){
            return message.innerHTML= "Minimum of 100 $ must remain in Your account \n please Try again!!"
        }
        return this.balance-=value
    }

    log(){
        console.log("hellow")
    }
    deposit(value){
        this.balance+=value
    }
    
    closeAccount(value){
        if(this.balance-value>0){
            return message.innerHTML=`you have remaining of ${this.balance-value} $ in your account \n please withdraw all to close Your account!!`
        }
        this.balance-=value
    }
}

const wanofi=new Bank(20000,'wanofi israel')

user.innerHTML=wanofi.name
balance.innerHTML=`${wanofi.balance} $`


btnWithdraw.addEventListener("click",()=>{
    wanofi.withdraw(Number(balanceInput.value))
    balance.innerHTML=`${wanofi.balance} $`

})
btnDeposit.addEventListener("click",()=>{
    wanofi.deposit(Number(balanceInput.value))
    balance.innerHTML=`${wanofi.balance} $`

})
btnClose.addEventListener("click",()=>{
    wanofi.closeAccount(Number(balanceInput.value))
    balance.innerHTML=`${wanofi.balance} $`

})
// console.log()
document.addEventListener("keydown",(e)=>{
    console.log(e.key);
    
})


wanofi.log()