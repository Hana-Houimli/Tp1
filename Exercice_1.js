var a = 10;
let b = 5;
const c = 9;
console.log("Avant le bloc")
console.log(a);
console.log(b);
console.log(c);
{
    var a = 200;
    let b = 44;
    const c = 16;
    console.log("A l'intérieur du bloc");
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log("Après le bloc:");
console.log(a);
console.log(b); 
console.log(c);
/* c = 60 la réaffecter provoque une erreur car  les variables déclarées avec const sont constantes
on ne peut pas leur assigner une nouvelle valeur */