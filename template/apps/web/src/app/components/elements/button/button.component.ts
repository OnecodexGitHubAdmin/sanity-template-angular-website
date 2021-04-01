import { Component, Input } from '@angular/core';

@Component({
  selector: 'templates-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() route: string;
  @Input() title: string;
}