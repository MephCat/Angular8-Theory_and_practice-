import { Component, OnInit } from '@angular/core';
import {CounterService} from '../shared/services/counter.service';
import {LocalCounterService} from '../shared/services/local-counter.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [LocalCounterService]
})
export class ServicesComponent implements OnInit {
  constructor(
    private counterService: CounterService,
    private localCounter: LocalCounterService) { }

  ngOnInit() {
  }



}
