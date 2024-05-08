



function stampa(array) {
    let stringa = ""; //CREIAMO UNA VARIABILE CHE CONTERRA' GLI ELEMENTI SEPARATI DA VIRGOLA
    for (let i = 0; i < array.length; i++) {//CICLO FOR PER ITERARE
      if (i === array.length - 1) {//IF PER VERIFICARE SE E' L'ULTIMO ELEMENTO DELL'ARRAY E QUINDI NON AGGIUNGERE VIRGOLA
        stringa += array[i];
      } else {// SE NON E' ULTIMO ELEMENTO ALLORA CONCATENIAMO CON VIRGOLA ALL INTERNO DI STRINGA
        stringa += array[i] + ", ";
      }
    }
    return stringa;
  }