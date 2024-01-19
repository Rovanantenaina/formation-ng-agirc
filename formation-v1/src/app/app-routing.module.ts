import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicTableComponent} from "./basic-table/basic-table.component";
import {TreeTableComponent} from "./tree-table/tree-table.component";

const routes: Routes = [
  {
    path: "basic-table",
    component: BasicTableComponent
  },
  {
    path: "tree-table",
    component: TreeTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
