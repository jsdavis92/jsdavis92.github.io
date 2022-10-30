let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')


// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')

const squares = document.querySelectorAll('.colorSquare')
// console.log(square[0].value)
// console.log(square[1].value)
// console.log(square[2].value)
const timesClicked = { "red": 0, "yellow": 0, "green": 0 }
squares.forEach(square => {
  square.onclick = () => {

    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
    console.log(square.value)
  }
})