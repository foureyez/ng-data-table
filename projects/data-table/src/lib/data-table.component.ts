import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { Table } from './model/table';
import { Column } from './model/column';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges {

  table: Table;

  @Input() columns: Column[];
  @Input() rows: Object[];

  constructor() {
    this.table = new Table();
  }

  ngOnInit() {

  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes['columns']) {
      this.table.setColumns(this.columns);
      console.log('Column Data Updated');
    }

    if (changes['rows']) {
      this.table.setRows(this.rows);
      console.log('Row Data Updated, New size : ' + this.table.rows.length);
    }
  }
}
