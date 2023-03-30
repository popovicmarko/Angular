
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent{
  ime: any = " "
  array:string[] = [];


  enterClick(ime: HTMLInputElement){
    console.log("Pritisnuli ste enter,a uneli ste" + ime.value)
    this.array.push(ime.value)
  }
  onClick(ime: HTMLInputElement){
    console.log(ime.value)
    this.array.push(ime.value)
  }

  corurses = [{
    id: 1,
    title: "course1",
    price: 100,
    isFevorite: true
  },
  {
    id: 2,
    title: "course2",
    price: 102,
    isFevorite: true
  },
  {
    id: 3,
    title: "course3",
    price: 100,
    isFevorite: true
  }]

  
}
