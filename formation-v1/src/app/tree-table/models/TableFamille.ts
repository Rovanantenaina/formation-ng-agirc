import {Personne} from "./Personne";

export class TableFamille extends Personne{
    hierarchie: string[] = [];
    constructor(nom: string, prenom: string, pays: string, hierarchie: string[]) {
        super(nom, prenom, pays);
        this.hierarchie = hierarchie;
    }
}