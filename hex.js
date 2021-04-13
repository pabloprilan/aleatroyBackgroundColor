
const myArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += myArray[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;  
})

// function getRandomColor(){
//     return Math.floor(Math.random()*16777215).toString(16);
    
// }

function getRandomNumber(){
    return Math.floor(Math.random()* myArray.length);
}