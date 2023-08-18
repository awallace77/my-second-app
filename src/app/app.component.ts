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
  buttonClick = 0;

  randomString(): string{
    return "Hellow World";
  }

  onShowDetails(){
    this.showDetails = true;
    this.buttonClick++;
    this.buttonClicks.push(this.buttonClick);
  }
}
