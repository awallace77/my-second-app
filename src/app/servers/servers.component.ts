import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = "";
  serverCreated = false;
  serverList = ['Test Server', 'Live Server'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created';
    this.serverList.push(this.serverName);
  }

  onUpdateServerName(event){
    console.log(event);
    this.serverName = event.target.value;
  }

}
