import { Component, OnInit, Input } from '@angular/core';
import { Row } from '../../model/row';
import { Column } from '../../model/column';

@Component({
  selector: '[table-body]',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  @Input() rows : Row[];
  @Input() columns : Column[];

  constructor() { }

  ngOnInit() {
  }

}
