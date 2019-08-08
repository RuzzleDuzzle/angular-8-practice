import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  // First way to  create reactive from -> FormControl
  name = new FormControl('Nancy');

  // profileForm = new FormGroup({
  //   firstName: new FormControl('Nancy'),
  //   lastName: new FormControl('Drew'),
  // });

  profileForm = this.formBuilder.group({
    firstName: ['Nancy', Validators.required],
    lastName: ['Drew'],
    aliases: this.formBuilder.array([
      this.formBuilder.control(''),
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

  }


  updateName() {
    this.name.setValue('Drew');
  }

  updateProfile() {
    this.profileForm.controls.firstName.setValue('Agatha');
    this.profileForm.controls.lastName.setValue('Christie');

    // this.profileForm.setValue({
    //   firstName: 'Agatha',
    //   lastName: 'Christie'
    // });
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
}
