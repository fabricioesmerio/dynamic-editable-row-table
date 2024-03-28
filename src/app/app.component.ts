import { Component, OnInit } from '@angular/core';
import { ConfigFeEditableRowTable } from 'fe-editable-row-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'editable-row-table';
  data: any[] = [];
  config: ConfigFeEditableRowTable = {
    primarykey: "id",
    tableConfig: [
      {
        header: 'Header 1',
        model: 'model1',
        editable: false,
        type: 'text'
      },
      {
        header: 'Header 2',
        model: 'model2',
        editable: false,
        type: 'text'
      },
      {
        header: 'Header 3',
        model: 'model3',
        editable: false,
        type: 'text'
      },
      {
        header: 'Header 4',
        model: 'model4',
        editable: false,
        type: 'text'
      },
      {
        header: 'Header 5',
        model: 'model5',
        editable: false,
        type: 'text'
      }
    ],
    tableTitle: 'Exemplo legal',
    bntActions: [
      {
        label: "Ação 1",
        event: "event",
        type: 'primary'
      },
      {
        label: "Ação 2",
        event: "event2",
        type: 'danger'
      },
      {
        label: "Ação 3",
        event: "event3",
        type: 'warning'
      }
    ]
  };

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.data.push({
        model1: Math.random(),
        model2: Math.random() * 10,
        model3: Math.random() * 100,
        model4: Math.random() * 1000,
        model5: Math.random() * 1200
      })
    }
  }
}
