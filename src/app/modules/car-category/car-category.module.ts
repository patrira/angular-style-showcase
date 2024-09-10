import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarCategoryRoutingModule } from './car-category-routing.module';
import { CarCategoryComponent } from './car-category.component';


@NgModule({
  declarations: [
    CarCategoryComponent
  ],
  imports: [
    CommonModule,
    CarCategoryRoutingModule
  ]
})
export class CarCategoryModule { }
