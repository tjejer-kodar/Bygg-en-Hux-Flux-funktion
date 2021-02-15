// Här är filen du ska ändra i! Huxflux-funktionen ska returnera
// en lista med 7 unika slumpmässiga heltal mellan 1 och 35. När
// du öppnat projektet i browsern, kan du trycka på "Prova funktionen"
// för att köra den och "Kör tester på funktionen" för att se om alla
// krav uppfylls.
const huxflux = () => {
  const numberArray = [];
  for (let i = 0; i < 7; i++) {
    let number = Math.floor(Math.random() * 35) + 1;
    if (numberArray.includes(number) === false) {
      numberArray.push(number);
    } else {
      i = i - 1;
    }
  }

  // Denna funktion behöver fyllas på med logik så att den returnerar
  // en lista med 7 unika slumpmässiga heltal mellan 1 och 35!
  return numberArray;
};

export { huxflux };
