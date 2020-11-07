import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';

var components = [ HeaderComponent ]

@NgModule({
  declarations: [ ...components ],
  imports: [
    CommonModule
  ],
  exports: [ ...components ]
})
export class ComponentsModule { }
