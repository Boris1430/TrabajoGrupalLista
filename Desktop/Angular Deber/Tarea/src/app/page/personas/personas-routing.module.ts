import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"personas", component:PersonasComponent},
  {path:"**", redirectTo:"login"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
