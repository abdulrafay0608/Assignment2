
// var plus = document.getElementById("plus")
// var number = document.getElementById("num")
// var minus = document.getElementById("minus")

// var counter = 0;

// function increment() {
//     counter++
//     number.innerHTML = counter;
// }

// function decrement() {
//     if (counter > 0) {
//         counter--
//         number.innerHTML = counter;

//     }
// }



function changeColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("square").style.backgroundColor = color;
}

