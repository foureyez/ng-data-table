import { Component, OnInit, Input } from '@angular/core';
import { Row } from '../../model/row';
import { Column } from '../../model/column';
import { DataTableService } from '../../data-table.service';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: '[table-body]',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  @Input() rows: Row[];
  @Input() columns: Column[];
  @Input() shareLinksEnabled: boolean;
  @Input() filterEnabled: boolean;

  faLink = faLink;
  filterData = {};
  filteredRows = [];

  constructor(private data: DataTableService, private router: Router) {
  }

  ngOnInit() {
    this.handleEvent();
    this.initializeFilterData();
    this.attachUrlChangeEvent();
  }

  attachUrlChangeEvent() {

    if (!this.shareLinksEnabled) {
      return;
    }

    // Subscribing to url change event.
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {

          // Getting the last part of the url (To read the #id and highlight the correct row.)
          const urlArray = event.url.split('/');
          const highlightId = urlArray[urlArray.length - 1];

          if (highlightId.indexOf('#') !== -1) {
            this.rows.forEach(row => {
              if (row.data['id'] === highlightId.substring(1)) {
                row.isHighlighted = true;
              } else {
                row.isHighlighted = false;
              }
            });
          }
        }
      });
  }

  // Handles all the different types of events raised from Other Componenets.
  handleEvent() {
    this.data.currentMessage.subscribe(event => {
      switch (event.message) {
        case 'sort':
          this.sortRows(event.column);
          break;
        default:
          console.log('Unknown Event Raised: ' + event.message);
      }
    });
  }

  // Initialize the filteredRows and the search text for all the filterable columns.
  initializeFilterData() {
    this.filteredRows = this.rows;
    this.columns.forEach(column => {
      if (column.filterable) {
        this.filterData[column.id] = '';
      }
    });
  }

  // Reads the sort type of the given column(up/down) and sorts accorodingly
  sortRows(column: Column) {
    const direction = column.sortType === 'up' ? 1 : -1;

    this.filteredRows.sort((a: Row, b: Row) => {
      if (a.data[column.id] < b.data[column.id]) {
        return -1 * direction;
      } else if (a.data[column.id] > b.data[column.id]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

  // Filters the rows by checking if the each row cell matches the filterData.
  filterRows() {
    this.filteredRows =
      this.rows.filter(row => {
        let result = true;

        this.columns
          .filter(column => {
            return column.filterable;
          })
          .forEach(column => {
            console.log(column.id);
            result = result && row.data[column.id].includes(this.filterData[column.id]);
          });

        return result;
      });
  }
}
