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
  server = [];

  randomString(): string{
    return "Hellow World";
  }

  onAddServer(){
    this.server.push('Another Server');
  }

  onRemoveServer(id: number){
    this.server.splice(id, 1)
  }
}
