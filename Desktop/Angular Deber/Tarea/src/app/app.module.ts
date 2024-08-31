import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalpersonasComponent } from './modal/modalpersonas/modalpersonas.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalpersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ModalpersonasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
