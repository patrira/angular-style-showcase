import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCategoryComponent } from './car-category.component';

const routes: Routes = [{ path: '', component: CarCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarCategoryRoutingModule { }
