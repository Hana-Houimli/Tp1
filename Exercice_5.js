const livre = {titre: "Le Petit Prince",auteur: "Antoine de Saint-Exupéry", année: 1943};
livre.getInfo = function(){ 
    return `${this.titre} est écrite par ${this.auteur} en ${this.année}`;
}
console.log(livre.getInfo());