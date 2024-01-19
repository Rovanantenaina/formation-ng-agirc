import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ClientCallBack} from "./callback/ClientCallBack";
import {CallBackFunction} from "./callback/call-back-function";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'formation-v1';

    listClientObs: BehaviorSubject<number> = new BehaviorSubject<number>(1);

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.listClientObs.next(20);
        this.listClientObs.next(30);
    }


    protected readonly CallBackFunction = CallBackFunction;
}
