import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CourseComponent } from './course/course.component';
import { ShortPipe } from './short.pipe';
import { FormsModule } from '@angular/forms';
import { CourseDetalisComponent } from './course-detalis/course-detalis.component';
import { FormatNumberDirective } from './format-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    SidebarComponent,
    CourseComponent,
    ShortPipe,
    CourseDetalisComponent,
    FormatNumberDirective
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
