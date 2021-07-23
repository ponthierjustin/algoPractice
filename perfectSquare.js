// Write a function that takes in number and returns whether the number is a perfect square or not
// Perfect squares are numbers like 4, 49, 81, 100, 144, etc.

function perfectSquare(number){
    for (i = 1; i < number/i+1; i++){
        console.log(i);
        if(i * i === number){
            return true;
        }
    }
    return false;
}
console.log(perfectSquare(49));