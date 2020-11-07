import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Wizard
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { EducationFormComponent } from './education/education-form/education-form.component';
import { SurveyComponent } from './survey.component';
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.dots
};


@NgModule({
  declarations: [SurveyComponent, PersonalComponent, EducationComponent, EducationFormComponent],
  imports: [
    CommonModule,
    NgWizardModule.forRoot(ngWizardConfig),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SurveyModule { }
