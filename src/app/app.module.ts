import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonHeaderComponent } from './common/common-header/common-header.component';
import { CommonFooterComponent } from './common/common-footer/common-footer.component';

import { MainService } from './common/main.service';
import { AuthorizationService } from './common/authorization.service';

import { LoginModule } from './pages/login-page/login.module';
import { MainModule } from './pages/main-page/main.module';
import { FilterByNamePipe } from './common/filter-by-name.pipe';
import { DurationPipe } from './common/duration.pipe';
import { EditPageModule } from './pages/edit-page/edit-page.module';


@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainModule,
    LoginModule,
    EditPageModule
  ],
  providers: [
    MainService,
    AuthorizationService,
    FilterByNamePipe,
    DurationPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
