function generateOTP(){
    let x = Math.floor(Math.random()*(10000-1000))+1000;
    
    return x;
}

console.log(generateOTP());
console.log(generateOTP());
console.log(generateOTP());
