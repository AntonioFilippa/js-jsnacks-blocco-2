function rimuoviDallaTesta(arrayA) {
    let arrayB = [];//ARRAY VUOTO PER CONTENERE ELEMENTI SENZA IL PRIMO
    for (let i = 1; i < arrayA.length; i++) { //ITERIAMO SU TUTTI GLI ELEMENTI TRANNE IL PRIMO
        arrayB.push(arrayA[i]);// AGGIUNGO OGNI ELEMENTO AD ARRAY-B
    }
    return arrayB;
}