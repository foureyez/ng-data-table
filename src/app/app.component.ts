import { Component } from '@angular/core';
import { Column } from '@foureyez/ng-data-table';

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
    name: 'Nischayy',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '4',
    name: 'Chitvan',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '5',
    name: 'Piyush',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '6',
    name: 'Vipin',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '7',
    name: 'Abhhay',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '8',
    name: 'Anusha',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '9',
    name: 'Aayush',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '10',
    name: 'Shivang',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '11',
    name: 'Seepee',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '12',
    name: 'Rakesh',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '13',
    name: 'Raadha',
    age: '43',
    address: 'Hyderabad'
  }, {
    id: '14',
    name: 'Chaman',
    age: '43',
    address: 'Charminar'
  }, {
    id: '15',
    name: 'Charlie',
    age: '43',
    address: 'London'
  }, {
    id: '16',
    name: 'Gayatri',
    age: '43',
    address: 'Haridwar'
  }, {
    id: '17',
    name: 'Ruuh',
    age: '43',
    address: 'Kashmir'
  }, {
    id: '18',
    name: 'Rasam',
    age: '43',
    address: 'Jammu'
  }, {
    id: '19',
    name: 'Ankit',
    age: '43',
    address: 'Mussorie'
  }, {
    id: '20',
    name: 'Anurag',
    age: '43',
    address: 'Dehradun'
  }, {
    id: '21',
    name: 'Himanshu',
    age: '43',
    address: 'Dehradun'
  }, {
    id: '22',
    name: 'Sooraj',
    age: '43',
    address: 'Uttar Pradesh'
  }, {
    id: '23',
    name: 'Rustam',
    age: '43',
    address: 'Lahore'
  }, {
    id: '24',
    name: 'Roman',
    age: '60',
    address: 'Rme'
  }, {
    id: '25',
    name: 'Nagraj',
    age: '43',
    address: 'Jaipur'
  },
  {
    id: '2',
    name: 'Raghav',
    age: '22',
    address: 'Dehradun'
  }];

  constructor() {
    this.prepareColumn();
  }

  prepareColumn() {
    this.columns = new Array<Column>();
    this.columns.push(new Column('id', 'ID', false, false));
    this.columns.push(new Column('name', 'Name', true, true));
    this.columns.push(new Column('age', 'Age', true, true));
    this.columns.push(new Column('address', 'Address', true, true));
  }
}
