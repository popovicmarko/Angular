import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {
  course:string = "Add Course"
  array:string[] = [];

  onKeyup(){
    this.array.push(this.course)
   }

   onClick($event:any){
    this.array.push(this.course)
   }
  }
  


