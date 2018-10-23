import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  declarations: [DataTableComponent, TableBodyComponent, TableHeadComponent],
  exports: [DataTableComponent]
})
export class DataTableModule { }
