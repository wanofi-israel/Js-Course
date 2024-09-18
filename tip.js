const billTotal = document.getElementById("bill-total")
const tip = document.getElementById("tip")
const numberOfpeople = document.getElementById("number-of-people")
const totalPrice = document.getElementById("total-price")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

let defnop = 1

numberOfpeople.innerText = defnop

let totalResult

if (Number(tip.value) > 0) {
    totalResult = Number(billTotal.value) + (Number(billTotal.value) / Number(tip.value)) / Number(numberOfpeople.innerText)
}

const calculateBill = () => {
    let tipPercentage = (Number(tip.value) / 100)
    let totalamount = Number(billTotal.value) * tipPercentage
    



    totalResult = (((Number(billTotal.value) + totalamount) / defnop).toFixed(2))

    totalPrice.innerText = totalResult
}

plus.onclick = () => {
    defnop++
    numberOfpeople.innerText = defnop
    if (tip.value > 0) {
        calculateBill()
    }
}
minus.onclick = () => {


    if (defnop >= 2) {
        defnop--
        numberOfpeople.innerText = defnop
        calculateBill()
    }

}