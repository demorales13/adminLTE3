import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'; 
import { EducationFormComponent } from './education-form/education-form.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() isSubmitted : boolean = false;
  educationList: Education[] = [];

  constructor(private modalService: NgbModal) {} 

  async open() { 
    this.modalService.open(EducationFormComponent, {backdrop: true})
      .result.then((result) => {
        console.log(`Closed with: ${result}`);
        this.educationList.push(result);
      }, (reason) => {
        console.log(`Dismissed ${this.getDismissReason(reason)}`);
      });
  } 

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }
}


export interface Education {
  name: string,
  year: number
}