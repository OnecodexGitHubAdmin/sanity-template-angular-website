import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../models/dynamic-component';

@Component({
  selector: 'templates-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements DynamicComponent {
  @Input() data: any;
  

}
