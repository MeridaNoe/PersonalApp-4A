import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  countoner: number =0;

  adding (){
    this.countoner += 1;
  }
  minus(){
    this.countoner -=1;
  }

}
