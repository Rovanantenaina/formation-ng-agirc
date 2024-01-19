export class Client {
    nom: string;
    prenom: string;
    
    constructor() {
        this.nom = (Math.random() + 1).toString(36).substring(6)
        this.prenom = (Math.random() + 1).toString(36).substring(4)
    }
}