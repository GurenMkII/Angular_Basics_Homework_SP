import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private human1: Person = new Person("Berry", "Allan");

  constructor() { }
  
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

  getPerson(): Observable<any>{
    return new Observable(subscriber => {
      this.delay(4000).then(() => {
        subscriber.next(this.human1)
      })
    })
  }


}
