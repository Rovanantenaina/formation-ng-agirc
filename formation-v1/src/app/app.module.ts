import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormationHttpMockInterceptor} from "./interceptors/formation-http-mock-interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AgGridModule} from "ag-grid-angular";
import {BasicTableComponent} from './basic-table/basic-table.component';
import {LicenseManager} from "ag-grid-enterprise";
import { TreeTableComponent } from './tree-table/tree-table.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicTableComponent,
        TreeTableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, HttpClientModule, AgGridModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FormationHttpMockInterceptor,
            multi: true,
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        LicenseManager.setLicenseKey(
            'CompanyName=FEDERATION AGIRC-ARRCO,LicensedGroup=SOLAR.,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=48,LicensedProductionInstancesCount=8,AssetReference=AG-032705,SupportServicesEnd=28_October_2023_[v2]_MTY5ODQ0NzYwMDAwMA==2b9ddd9d9d8d625a198adea76065552f'
        );
    }
}
