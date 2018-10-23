import { Component, OnInit, Input } from '@angular/core';
import { Column } from '../../model/column';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[table-head]',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.css']
})
export class TableHeadComponent implements OnInit {

  sortIcon = faSort;
  
  @Input() columns : Column[];
  
  constructor() {
  }

  ngOnInit() {
  }

}
