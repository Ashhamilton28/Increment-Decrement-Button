const incrementButton = document.getElementById("increment")
const resetButton = document.getElementById("reset")
const decrementButton = document.getElementById("decrement")
const theNumber = document.getElementById("number")
let a = 0

incrementButton.addEventListener("click", () => {
    a++
    theNumber.textContent = a
})

decrementButton.addEventListener("click", () => {
    a--;
    theNumber.textContent = a
})

resetButton.addEventListener("click",()=>{
    a=0
    theNumber.textContent=a
})