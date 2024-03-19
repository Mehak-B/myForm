import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'
// import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // MatLabelModule,
    FormsModule,
    // MatFormFieldModule,
    // MatSelectModule,
    ReactiveFormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
