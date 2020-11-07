import { ComponentsModule } from './../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SurveyModule } from './survey/survey.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SurveyModule,
    HomeModule,
    ComponentsModule
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
