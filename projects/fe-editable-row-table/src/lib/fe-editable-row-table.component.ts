import { Component, Input, OnInit } from '@angular/core';
import { ConfigFeEditableRowTable } from './interfaces/fe-editable-row-table-config.interface';
import { DataFeEditableRowTable } from './interfaces/fe-editable-row-table-data.interface';

@Component({
    selector: 'fe-editable-row-table',
    templateUrl: './fe-editable-row-table.component.html',
    styleUrls: ['./fe-editable-row-table.component.scss']
})
export class FeEditableRowTableComponent implements OnInit {

    @Input() data: any[] = [];
    @Input() config: ConfigFeEditableRowTable = {
        actions: [],
        tableConfig: [],
        primarykey: null
    };

    constructor() { }

    ngOnInit(): void {
    }

}
