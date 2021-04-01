import { Component, Input } from '@angular/core';
import { Tag } from '../../../models/types/tag';

@Component({
  selector: 'templates-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() tag: Tag;
}
