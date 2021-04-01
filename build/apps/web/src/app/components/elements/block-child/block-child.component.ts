import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../models/dynamic-component';
import { BlockMark } from '../../../models/types/block-mark';

@Component({
  selector: 'templates-block-child',
  templateUrl: './block-child.component.html',
  styleUrls: ['./block-child.component.scss']
})
export class BlockChildComponent implements DynamicComponent {
  @Input() data: BlockMark;


}
