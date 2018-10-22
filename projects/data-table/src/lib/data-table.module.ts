import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableHeadComponent } from './table-head/table-head.component';

@NgModule({
  imports: [
  ],
  declarations: [DataTableComponent, TableBodyComponent, TableHeadComponent],
  exports: [DataTableComponent]
})
export class DataTableModule { }
