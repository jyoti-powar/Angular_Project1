import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StartersComponent } from './menu/starters/starters.component';
import { MainCourseComponent } from './menu/main-course/main-course.component';
import { DessertComponent } from './menu/dessert/dessert.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StartersComponent,
    MainCourseComponent,
    DessertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
