import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login',
    loadChildren:()=> import("./page/personas/personas.module").then(m=>m.PersonasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
