import { Component, OnInit, ViewChild } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { of } from 'rxjs';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };

  config: NgWizardConfig = {
    selected: 0,
    toolbarSettings: {
      toolbarExtraButtons: [
        { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
      ],
    }
  };

  themes: THEME[] = [THEME.default, THEME.arrows, THEME.circles, THEME.dots];
  selectedTheme: THEME = THEME.default;

  @ViewChild(PersonalComponent) personal: PersonalComponent;
  @ViewChild(EducationComponent) education: EducationComponent;

  constructor(private ngWizardService: NgWizardService) {
  }
  
  ngOnInit(): void {
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }

  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidPersonalForm(){
    this.personal.isSubmitted = true;
    return this.personal.personalForm.valid;
  }

  isValidEducationForm(){
    this.education.isSubmitted = true;
    return this.education.educationList.length;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }

}
