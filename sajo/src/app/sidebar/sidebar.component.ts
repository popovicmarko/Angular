import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  imageUrl: string = "https://www.w3schools.com/howto/img_avatar.png";
  ime: any = " ";
  images: any = " ";

  onSave(slika: HTMLInputElement) {
    console.log(slika.value)
    this.imageUrl = slika.value;
  }
}
