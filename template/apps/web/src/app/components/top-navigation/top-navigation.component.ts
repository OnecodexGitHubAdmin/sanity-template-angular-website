import { Component, Input } from '@angular/core';
import { Route } from '../../models/types/route';

@Component({
  selector: 'template-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  @Input() items: Route[];

  showMenu: boolean;
}
