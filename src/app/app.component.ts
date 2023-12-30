import { Component, OnInit } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: "server", name: "Test Sever", content: "This is just a test!"}];

  onServerAdded(newItem: {type: string, name: string, content: string}) {
   this.serverElements.push(newItem);
  }

  onBlueprintAdded(newItem: {type: string, name: string, content: string}) {
   this.serverElements.push(newItem);
  }

}
