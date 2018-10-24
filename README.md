# DataTableApp
This is a project for Data Table library.
The demo files are located in /src/app folder. Data-Table library source is located in projects/data-table.

## Usage

To use this library in your project just install the dependency by running `npm install --save data-table`.

### Basic Table
<data-table [columns]="columns" [rows]="rows"></data-table>

`rows` and `columns` objects can be defined in the angular component. E.g. [here](https://github.com/foureyez/data-table/blob/master/src/app/app.component.ts) 

## Development server
To run this project locally :
* Install angular-cli globally and run `npm install` to install all dependencies.
* Run `ng build data-table` to build the library locally in your machine. `dist` folder will be generated at the root of the project.
* Run `ng serve` to build the demo app and launch it in a dev server. Navigate to `http://localhost:4200/` to access the demo.