import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { LoginComponent } from './login/login.component';
import { PersonasComponent } from './personas/personas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../app.module';


@NgModule({
  declarations: [
    LoginComponent,
    PersonasComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppModule
  ],
  providers:[]
})
export class PersonasModule { }
