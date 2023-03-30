import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ShortPipe } from './short.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavigatorComponent,
    SlidebarComponent,
    ShortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
