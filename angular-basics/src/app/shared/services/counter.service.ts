import { Injectable } from '@angular/core';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;

  constructor(private logServices: LogService) { }
  increase() {
    this.counter++;
    this.logServices.log('increase counter...');
  }
  decress() {
    this.counter--;
    this.logServices.log('decrease counter...');
  }
}
