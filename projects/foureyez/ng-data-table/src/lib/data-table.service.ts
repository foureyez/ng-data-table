import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(event: any) {
    console.log('Pushed Event' + event);
    this.messageSource.next(event);
  }
}
