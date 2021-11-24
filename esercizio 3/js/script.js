
const numeri = [10, 20, 30, 3, 8, 22, 18];
const somma = 0;


i = 0 
while(i< numeri.length){

    if ((i % 2) == 1){
        somma += numeri[i];
    }
    i++
}
console.log(somma);