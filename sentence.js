// Importez le module 'readline' pour lire l'entrée de l'utilisateur depuis le terminal
const readline = require('readline');

// Créez une interface de lecture
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let mot=0;
let voy=0;
// Demandez à l'utilisateur d'entrer une valeur
rl.question('Veuillez entrer une valeur :\n ', (userInput) => {
    // Stockez la valeur dans une variable
    const sentence = userInput;
    let n = sentence.length-1;
    if (sentence[n] === ".") {
        console.log("c'est une phrase\n");

        for (let index = 0; index < sentence.length; index++) {
            if (sentence[index] ===" " || sentence[index] ==="  ") {
                mot +=1;
            }
            if (sentence[index] === "a" || sentence[index] ==="e" || sentence[index] ==="i" || sentence[index] ==="o" || sentence[index] ==="u" || sentence[index] ==="y" ) {
                voy +=1;
            }
        }
    }
    // Affichez la variable dans le terminal
    console.log('La phrase  :\n', sentence,"\nle nombre mot :",mot+1,"\nle nombre de voyelle: ",voy);

    // Fermez l'interface de lecture
    rl.close();
});
