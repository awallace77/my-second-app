import { AfterViewInit, Component, ContentChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements AfterViewInit {
  @Input('srvElement')
  element: {type: string, name: string, content: string};

  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  ngAfterViewInit(){
    console.log("This paragraph says: " + this.contentParagraph.nativeElement.textContent);
  }
}
