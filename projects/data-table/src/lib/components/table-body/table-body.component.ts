import { Component, OnInit, Input } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
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
  faLink = faLink;

  constructor(private data: DataTableService, private router: Router) {
    this.attachUrlChangeEvent(router);
  }

  ngOnInit() {
    this.handleEvent();
  }

  attachUrlChangeEvent(router: Router) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
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
            console.log(highlightId.substring(1));
          }
        }
      });
  }

  handleEvent() {
    this.data.currentMessage.subscribe(event => {
      console.log('Event Received ' + event);

      if (event.message === 'sort') {
        this.sortTable(event.column);
      }
    });
  }

  sortTable(column: Column) {
    const direction = column.sortType === 'up' ? 1 : -1;

    this.rows.sort((a: Row, b: Row) => {
      if (a.data[column.id] < b.data[column.id]) {
        return -1 * direction;
      } else if (a.data[column.id] > b.data[column.id]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

  updateLink(row: Row) {

  }
}
