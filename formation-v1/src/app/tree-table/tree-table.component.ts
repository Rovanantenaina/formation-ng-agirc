import {Component, OnInit} from '@angular/core';
import {ColDef, GridOptions} from "ag-grid-community";
import {TableFamille} from "./models/TableFamille";
import {Personne} from "./models/Personne";

@Component({
    selector: 'app-tree-table',
    templateUrl: './tree-table.component.html',
})
export class TreeTableComponent implements OnInit {

    protected listClients: TableFamille[] = [
        {
            hierarchie: ['France', 'Paris'],
            ...new Personne("Carole", "Matchu", "Paris")
        },
        {
            hierarchie: ['France', 'Toulouse'],
            ...new Personne("Arlys", "Marc", "Toulouse")
        },
        {
            hierarchie: ['Amerique', 'Hawaii'],
            ...new Personne("Toky", "Daka", "Hawaii")
        },
        {
            hierarchie: ['Allemagne', 'Berlin'],
            ...new Personne("Nombana", "Fy", "Berlin")
        },
        {
            hierarchie: ['Madagascar', 'Antananarivo'],
            ...new Personne("Iob", "Florian", "Antananarivo")
        }
    ];

    protected gridOptions: GridOptions<TableFamille> = {};

    protected colDefs: ColDef[] = [
        {field: "nom"},
        {field: "prenom"},
    ];

    ngOnInit(): void {
        this.gridOptions = {
            treeData: true,
            getDataPath: (data: TableFamille) => data.hierarchie,
            rowData: this.listClients,
            domLayout: "autoHeight"
        }
    }
}
