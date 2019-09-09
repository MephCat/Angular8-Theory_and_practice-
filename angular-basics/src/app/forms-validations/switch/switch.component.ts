import {Component, forwardRef, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements OnInit, ControlValueAccessor {

  atate = 'off';

  private onChange = (value: any) => {

  };
  constructor() { }

  ngOnInit() {
  }
  setState( state:string ) {
    this.atate = state;

    this.onChange(this.atate);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState(isDisabled: boolean): void {
  }
  writeValue(atate: any): void {
    this.atate = atate;
  }
}
