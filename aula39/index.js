function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);


while(rand !== 10){
    console.log(rand);
    rand = random(min, max);
}

console.log("##################################################");

do {
    console.log(rand);
    rand = random(min, max);
} while(rand !== 10);