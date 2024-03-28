import { Component, Input, OnInit } from '@angular/core';
import { ConfigFeEditableRowTable } from './interfaces/fe-editable-row-table-config.interface';

@Component({
    selector: 'fe-editable-row-table',
    templateUrl: './fe-editable-row-table.component.html',
    styleUrls: ['./fe-editable-row-table.component.scss']
})
export class FeEditableRowTableComponent implements OnInit {

    @Input() data: any[] = [];
    @Input() config: ConfigFeEditableRowTable = {
        bntActions: [],
        tableConfig: [],
        primarykey: null
    };

    constructor() { }

    ngOnInit(): void {
        setTimeout(() => {
            console.log(`DATA :: ${JSON.stringify(this.data)}`)
            console.log(`CONFIG :: ${JSON.stringify(this.config)}`)
        }, 2500);
    }

}
