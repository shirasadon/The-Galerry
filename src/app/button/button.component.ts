import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  type: string = '';
  constructor() {}
  callShowConfig(type: string): any {
    this.type = type;
  }
}
