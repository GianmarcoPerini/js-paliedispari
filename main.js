// let palindromo = prompt('Inserisci una parola e ti dirò se è un palindromo')

// function check(y){
//     if (y == y.split('').reverse().join('')){
//         console.log(y);
//         return true
//     }else{
//         console.log(y.split('').reverse().join(''));
//         return false
//     }
    
// }

// console.log(check(palindromo));



let capitalizzazione = prompt('Pari o Dispari ?')                                           // PARI O DISPARI
let pariDispari = capitalizzazione.charAt(0).toUpperCase() + capitalizzazione.slice(1);

if(pariDispari != 'Pari' && pariDispari != 'Dispari'){                                      // CONTROLLO PARI O DISPARI
    alert('ERRORE NELLA COMPILAZIONE, ora sei pari');
    pariDispari = 'pari'
}

let numeroRandomComputer = getRndInteger(1,5)                                               // NUMERO COMPUTER
console.log(numeroRandomComputer);
let numeroRandomPersona = parseInt(prompt('Sclegli un numero da 1 a 5'))                    // NUMERO PERSONA

if(numeroRandomPersona > 5){                                                                // CONTROLLO PARAMETRI CORRETTI
    alert('ERRORE NELLA COMPILAZIONE, ora il numero verrà scelto randomicamente')
    numeroRandomPersona = getRndInteger(1,5)
}

let somma = numeroRandomPersona + numeroRandomComputer                                      // SOMMA DEI VALORI

if(somma %2 == 0 && pariDispari == 'Pari'){                                                 // DEFINIZIONE VINCITORE E PERDENTE
    console.log('VITTORIA');
} else if (somma %2 != 0 && pariDispari == 'Dispari'){
    console.log('VITTORIA');
}else{
    console.log('SCONFITTA');
}
















function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}