import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { NavigationComponent } from './common/navigation/navigation.component';

var components = [ HeaderComponent, NavigationComponent ]

@NgModule({
  declarations: [ ...components ],
  imports: [
    CommonModule
  ],
  exports: [ ...components ]
})
export class ComponentsModule { }
