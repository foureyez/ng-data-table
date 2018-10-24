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
  }, {
    id: '3',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '4',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '5',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '6',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '7',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '8',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '9',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '10',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '11',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '12',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '13',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '14',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '15',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '16',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '17',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '18',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '19',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '20',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '21',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '22',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '23',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '24',
    name: 'Anmol',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '25',
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
