import { Component, OnInit, Input } from '@angular/core';
import { DataTableService } from '../../data-table.service';
import { Column } from '../../model/column';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[table-head]',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.css']
})
export class TableHeadComponent implements OnInit {

  @Input() columns: Column[];
  @Input() shareLinksEnabled: boolean;

  constructor(private data: DataTableService) {
  }

  ngOnInit() {
  }

  sort(column: Column) {

    // If the column is not sortable return.
    if (!column.sortable) {
      return;
    }

    this.resetSort(column);

    switch (column.sortType) {
      case 'none':
        column.sortType = 'up';
        column.sortIcon = faSortUp;
        break;
      case 'up':
        column.sortType = 'down';
        column.sortIcon = faSortDown;
        break;
      case 'down':
        column.sortType = 'up';
        column.sortIcon = faSortUp;
        break;
    }

    this.data.changeMessage({
      message: 'sort',
      column: column
    });
  }

  resetSort(column: Column) {
    this.columns.forEach(elem => {
      if (column !== elem) {
        elem.sortIcon = faSort;
        elem.sortType = 'none';
      }
    });
  }
}
