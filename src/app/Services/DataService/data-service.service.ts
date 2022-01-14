import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService{

  constructor() { }
  private subject = new BehaviorSubject([]);
  currentMessage = this.subject.asObservable();
  changeMessage(message: any) {
    this.subject.next(message)
  }
}
