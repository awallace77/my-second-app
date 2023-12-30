import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {

  @Output() serverElements = new EventEmitter<{}>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(name: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverElements.emit({
      type: 'server',
      name: name.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.serverElements.emit({
      type: 'blueprint',
      name: name.value,
      content: this.serverContentInput.nativeElement.value
    });
  }
}
