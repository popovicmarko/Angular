import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {
  imageUrl: string = "https://yt3.googleusercontent.com/ytc/AL5GRJU5JlNZ690ohZU_qQutzYObA7z6ofCkK2xQ7DWw=s900-c-k-c0x00ffffff-no-rj"
  isActive: boolean = true;
  ime: any = ""
  prosek = 9.1221;

  onSave($event: any) {
    console.log('Kliknuli ste na dugne')
    console.log($event)
  }
  onDivClick() {
    console.log('Stisnuli ste div')
  }

  onKeyup() {
    // if (event.keyCode == 13) {
    //   console.log('Enterr')
    // }
    console.log('Enterr,a  uneli ste ime ' + this.ime.value)

  }

}
