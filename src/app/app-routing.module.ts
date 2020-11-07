import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/components/common/header/header.component';
import { HomeComponent } from './pages/auth/home/home.component';
import { SurveyComponent } from './pages/auth/survey/survey.component';

const routes: Routes = [
  { 
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    //component: LoginComponent
  },
  {
    path: 'auth', 
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),

    //redirectTo: 'auth/home',
    // component: AuthComponent,
    // children: [
    //   { path: 'home', component: HomeComponent},
    //   { path: 'survey', component: SurveyComponent},
    // ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
