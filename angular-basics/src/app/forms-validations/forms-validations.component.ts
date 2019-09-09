import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from '../shared/my.validators';

@Component({
  selector: 'app-forms-validations',
  templateUrl: './forms-validations.component.html',
  styleUrls: ['./forms-validations.component.scss']
})
export class FormsValidationsComponent implements OnInit {
  sppState = 'on';
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',
        [ Validators.email,
                        Validators.required,
                        MyValidators.restrictedEmails
        ], MyValidators.uniqEmail),
      password: new FormControl('',
        [ Validators.required,
                        Validators.minLength(6)
        ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }
  submitForm(){
    if (this.form.invalid) {
      console.log('Form submited', this.form);
      const formData = {...this.form.value};
      console.log('Form data', formData);

      this.form.reset();
    }
  }
  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.form.patchValue({address: {city}});
  }
  addSkill(){
    const control = new FormControl('', Validators.required);
    // (<FormArray> this.form.get('skills'))
    (this.form.get('skills') as FormArray).push(control);
  }
  handelChange() {
    console.log(this.sppState);
  }
}
