import { Component } from '@angular/core';
import { Column } from 'data-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'data-table-app';
  columns: Column[];

  rows = [{
    id: '1',
    name: 'Abhijeet',
    age: '23',
    address: 'Hyderabad'
  }, {
    id: '2',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }];

  constructor() {
    this.prepareColumn();
  }

  prepareColumn() {
    this.columns = new Array<Column>();
    this.columns.push(new Column('id', 'ID', false));
    this.columns.push(new Column('name', 'Name', true));
    this.columns.push(new Column('age', 'Age', true));
    this.columns.push(new Column('address', 'Address', true));
  }

}
