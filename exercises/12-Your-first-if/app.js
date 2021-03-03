var total = prompt('How many km are left to go?');

// Your code below:
if (total>100){
    console.log("Are we there yet?");
}
else if (50>total<=100) {
    console.log("We'll be there in 5 minutes");
} // Se tiene que espesificar mas para que el else if sea reconocido por la consola, esto agregando total>50 && total<=100
else {
    console.log("I'm parking, I see you right now");
}