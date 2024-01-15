import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  messageToChild = 'Hello from Parent!';
  messageFromChild = '';

  receiveMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
