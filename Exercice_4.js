// 1
const T1 = [1,2,3];
const T2 = [4,5,6];
const T = [...T1,...T2];
console.log(T);

// 2 
const voiture = {marque: "Toyota", annee: 2020, couleur: "bleue"};
const nouvelle_Voiture = { ...voiture, couleur: "rouge" };
console.log(nouvelle_Voiture);