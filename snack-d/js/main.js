//CREIAMO UNA FUNZIONE CHE RIMUOVA L'ULTIMO ELEMENTO DELL'ARRAY
function rimuoviDallaCoda(arrayA) {


    // Crea un nuovo array vuoto per contenere gli elementi senza l'ultimo
     const arrayB = [];
  // Itera su tutti gli elementi dell'arrayA tranne l'ultimo
  for (let i = 0; i < arrayA.length - 1; i++) {
        arrayB.push(arrayA[i]); // Aggiungi ogni elemento all'arrayB
  }
// Restituisci il nuovo arrayB contenente tutti gli elementi tranne l'ultimo
  return arrayB;
}
