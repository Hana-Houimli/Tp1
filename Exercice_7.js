const notes = [12, 5, 17, 9, 20];
const moyenne = notes.reduce(function(a, b) { return a + b} , 0) / notes.length;
console.log("la moyenne de tableau: " + moyenne);

const notes_trier = notes.sort(function(a, b){return b - a});
console.log(notes_trier);

const notes_filtred = notes.filter(function(note){return note >= 10});
console.log(notes_filtred);