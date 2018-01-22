import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page.component';
import { FinderComponent } from './finder/finder.component';
import { ItemlistComponent } from './item-list/item-list.component';
import { ActualCourseDirective } from '../../common/actual-course.directive';
import { DurationPipe } from '../../common/duration.pipe';
import { OrderByPipe } from '../../common/order-by.pipe';

@NgModule({
  declarations: [
    MainPageComponent,
    FinderComponent,
    ItemlistComponent,
    ActualCourseDirective,
    DurationPipe,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
    FinderComponent,
    ItemlistComponent,
    ActualCourseDirective,
    DurationPipe,
    OrderByPipe
  ]
})
export class MainModule { }
