import { Component, OnInit, Input } from '@angular/core';
import { Row } from '../../model/row';
import { Column } from '../../model/column';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: '[table-body]',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  @Input() rows: Row[];
  @Input() columns: Column[];

  constructor(private data: DataTableService) { }

  ngOnInit() {
    this.handleEvent();
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
}
