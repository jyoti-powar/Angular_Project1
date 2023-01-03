import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertComponent } from './menu/dessert/dessert.component';
import { MainCourseComponent } from './menu/main-course/main-course.component';
import { MenuComponent } from './menu/menu.component';
import { StartersComponent } from './menu/starters/starters.component';

const routes: Routes = [
  {path:'menu',component:MenuComponent},
  {path:'starters',component:StartersComponent},
  {path:'main',component:MainCourseComponent},
  {path:'dessert',component:DessertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
