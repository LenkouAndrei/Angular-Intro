import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonHeaderComponent } from './common/common-header/common-header.component';
import { CommonFooterComponent } from './common/common-footer/common-footer.component';

import { LoginService } from './common/login.service';

import { LoginModule } from './pages/login-page/login.module';
import { MainModule } from './pages/main-page/main.module';

@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    CommonFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainModule,
    LoginModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
