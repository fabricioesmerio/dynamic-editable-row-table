import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeEditableRowTableComponent } from './fe-editable-row-table.component';



@NgModule({
  declarations: [
    FeEditableRowTableComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    FeEditableRowTableComponent
  ]
})
export class FeEditableRowTableModule { }
