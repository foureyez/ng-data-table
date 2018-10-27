# ng-data-table
This angular library provides sorting, filtering..(adding more) capabilities to normal table.
Built using Angular 7 and Bootstrap 4.

[![Build Status](https://travis-ci.org/foureyez/ng-data-table.svg?branch=master)](https://travis-ci.org/foureyez/ng-data-table)

* The demo files are located in /src/app folder. 
* Data-Table library source is located in projects/data-table.

## Usage
To use this library in your project just install the dependency by running `npm i @foureyez/ng-data-table`.

### Basic Table
```html
<data-table [columns]="columns" [rows]="rows"></data-table>
```

### Defining rows and columns in component
* `rows` can be any valid JSON array.
* `columns` can be defined inside the component. 
* `data-table` takes `columns` as a array of [Column](https://github.com/foureyez/data-table/blob/master/projects/ng-data-table/src/lib/model/column.ts) type. 
*  E.g. 
    ```javascript
    import { Column } from '@foureyez/ng-data-table';
    ...
    ...
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
    },
    ...
    ...
    ...];

    constructor() {
        this.columns = new Array<Column>();
                            //id, title, sortable, filterable;
        this.columns.push(new Column('id', 'ID', false, false));
        this.columns.push(new Column('name', 'Name', true, true));
        this.columns.push(new Column('age', 'Age', true, true));
        this.columns.push(new Column('address', 'Address', true, true));
    }
     ```
#### Column Attributes
| Attribute | Description |
| --------- | ----------- |
| id        | This represents attribute in one row |
| title     | What needs to be displayed on column header |
| sortable  | If the current column need to be sortable or not (`true` : `false`) |
| filterable |  If the current column need to be filterable or not (`true` : `false`) | 

* Will be adding more attributes to `Column`.



### Table Attributes
| Attribute | Description                    | Values      | Default | Example |
| --------- | ------------------------------ | ----------- | ------- |------- |
| columns   | Defines the columns in the datatable | `columnData` |  `null` | `<data-table [columns]="columnData"></data-table>` |
| rows      | Defines the rows in the datatable | `rowData` | `null` | `<data-table [rows]="rowData"></data-table>` |
| filterEnabled | Defines weather rows can be filtered (For all rows) | `true` or `false` | `false` | `<data-table [filterable]=true></data-table>` |
| shareLinksEnabled | Defines weather to show links for all rows | `true` or `false` | `false` | `<data-table [shareLinksEnabled]=true></data-table>` |


`rows` and `columns` objects can be defined in the angular component. E.g. [here](https://github.com/foureyez/data-table/blob/master/src/app/app.component.ts) 

## Contribute
### Development server
To run this project locally :
* Go to root of the project.
* Install angular-cli globally `npm install -g @angular/cli`
* Run `npm install` to install all dependencies.
* Run `ng build @foureyez/ng-data-table` to build the library locally in your machine. `dist` folder will be generated at the root of the project.
* Run `ng serve` to build the demo app and launch it in a dev server. Navigate to `http://localhost:4200/` to access the demo.