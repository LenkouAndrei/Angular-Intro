import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EditPageFormComponent } from './edit-page.component';
import { MinutesInputComponent } from './minutes-input/minutes-input.component';

@NgModule({
  declarations: [
    EditPageFormComponent,
    MinutesInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditPageFormComponent,
  ]
})
export class EditPageModule { }
