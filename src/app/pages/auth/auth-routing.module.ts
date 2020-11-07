import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveyModule } from './survey/survey.module';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { 
    path:'',
    redirectTo: 'home',
    pathMatch:'prefix'
  },
  { 
    path: 'home', 
    component: HomeComponent
    //loadChildren:()=> import('./home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'survey', 
    component: SurveyComponent
    //loadChildren:()=> import('./survey/survey.module').then(m => m.SurveyModule) 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
