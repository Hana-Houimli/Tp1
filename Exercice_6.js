class Etudiant
{
    constructor(nom,note)
    {
        this.nom = nom;
        this.note = note;
    }
    getMention()
    {
        if (this.note >= 16) {
            return "Très bien";
        } else if (this.note >= 14) {
            return "Bien";
        } else if (this.note >= 10) {
            return "Passable";
        } else {
            return "Échec";
        }
    }
}

const Etudiant_1 = new Etudiant("Alice", 18);
const Etudiant_2 = new Etudiant("Jessica", 20);
const Etudiant_3 = new Etudiant("Jassmin", 9);
console.log(`${Etudiant_1.nom} : ${Etudiant_1.getMention()}`);
console.log(`${Etudiant_2.nom} : ${Etudiant_2.getMention()}`);
console.log(`${Etudiant_3.nom} : ${Etudiant_3.getMention()}`);