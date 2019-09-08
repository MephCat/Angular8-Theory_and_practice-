import { Component, OnInit } from '@angular/core';
import {CounterService} from '../../shared/services/counter.service';
import {LocalCounterService} from '../../shared/services/local-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService]
})
export class CounterComponent implements OnInit {

  constructor(private counterServ: LocalCounterService, private appCounter: CounterService) { }

  ngOnInit() {
  }

}
