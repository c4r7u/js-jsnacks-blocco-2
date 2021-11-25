let somma = 0;

numbersList = [];

while (somma < 50) {
    const userNumber = parseInt (prompt ('Inserisci un numero'));
    console.log(userNumber);


    if (!isNaN(userNumber)) {

        numbersList.push(userNumber);
        console.log(numbersList);

        somma += userNumber;
        console.log(somma);
    }
}

console.log(`${somma}`);