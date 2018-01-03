import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(http: Http){
    http.get('http://localhost:3000/pizza').subscribe(response => {
      console.log(response);
      
    },(err) => {
      console.log(err);
      
    });
  }

}
