import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My App';
  hello = 'hello';
  name = 'Andrew';
  showDetails: boolean = false;
  buttonClicks = [];

  randomString(): string{
    return "Hellow World";
  }

  onShowDetails(){
    this.showDetails = !this.showDetails;
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }

  getBackgroundColor(){
    if(this.buttonClicks.length >= 5){
      return 'blue';
    }
  }
}
