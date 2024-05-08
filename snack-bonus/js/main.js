//FUNZIONE PER INSERIRE UN ELEMENTO IN TESTA DATI UN ARRAY ED UN ELEMENTO
function inserisciInTesta(arrayA, elementoE) {

    // CREA NUOVO ARRAY VUOTO PER CONTENERE ELEMENTO-E ED ARRAY-A

    const arrayB = [];

    //AGGIUNGO ELEMENTO E E SARA' IN PRIMA POSIZIONE
    arrayB.push(elementoE);
    //ITERA SU TUTTI GLI ELEMENTI DELL'ARRAY-A E AGGIUNGO ALL'ARRAY-B
    for (let i = 0; i < arrayA.length; i++) {
        arrayB.push(arrayA[i]);
    }
    //RITORNA ARRAY-B
    return arrayB;

}