import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { LogerComponent } from './loger/loger.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LogerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginPageComponent,
    LogerComponent
  ]
})
export class LoginModule { }
