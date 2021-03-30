import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComponentItem } from '../../models/component-item';
import { SanityService } from '../../services/sanity.service';
import { TestComponent } from '../elements/test/test.component';

@Component({
  selector: 'templates-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  content: ComponentItem;
  $contentObservable: Observable<ComponentItem>;

  constructor(service: SanityService) {
    this.$contentObservable = service.fetchContent(window.location.pathname).pipe(
      map((a: any) => {
        return new ComponentItem(TestComponent, a);
      })
    );
  }
}
