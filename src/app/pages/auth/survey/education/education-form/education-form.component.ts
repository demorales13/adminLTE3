import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from '../education.component';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {

  isSubmitted : boolean = false;

  public formGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    year: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)])
  }); 

  constructor(public modal: NgbActiveModal) {} 

  ngOnInit(): void {
  }

  onSubmit():void {

    this.isSubmitted = true;

    if(!this.formGroup.valid){
      return;
    }

    let response: Education = {
      name : this.formGroup.controls["name"].value,
      year : this.formGroup.controls["year"].value
    }

    this.modal.close(response);
  }

}
