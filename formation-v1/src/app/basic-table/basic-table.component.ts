import {Component, OnInit} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {Client} from "./models/Client";

@Component({
    selector: 'app-basic-table',
    templateUrl: './basic-table.component.html'
})
export class BasicTableComponent implements OnInit {

    listClient: Client[] = [];

    colDefs: ColDef[] = [
        {field: "nom"},
        {field: "prenom"},
    ];

    ngOnInit(): void {
        this.listClient = this.getListClients();
    }

    private getListClients(): Client[] {
        return [new Client(), new Client(), new Client()];
    }
}
