import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page.component';
import { FinderComponent } from './finder/finder.component';
import { ItemlistComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    MainPageComponent,
    FinderComponent,
    ItemlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
    FinderComponent,
    ItemlistComponent
  ]
})
export class MainModule { }
