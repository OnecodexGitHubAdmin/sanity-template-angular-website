import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComponentItem } from '../../models/component-item';
import { BlogPost } from '../../models/types/blog-post';
import { Page } from '../../models/types/page';
import { SanityType } from '../../models/types/sanity-type';
import { ComponentsResolverService } from '../../services/components-resolver.service';
import { SanityService } from '../../services/sanity.service';
import { BlogComponent } from '../elements/blog/blog.component';
import { NotFoundComponent } from '../elements/not-found/not-found.component';

@Component({
  selector: 'templates-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  $componentsObservable: Observable<ComponentItem[]>;

  constructor(service: SanityService, componentResolver: ComponentsResolverService) {
    let path = window.location.pathname;
    path = path.length > 1 ? path.substr(1) : path;
    this.$componentsObservable = service.fetchContent(path).pipe(
      map((result: { page: Page, blog: BlogPost }) => {
        if (result?.page) {
          return result.page.content.map((item: SanityType) => componentResolver.resolveComponent(item));
        } else if (result?.blog) {
          return [new ComponentItem(BlogComponent, result.blog)];
        } else {
          return [new ComponentItem(NotFoundComponent, null)];
        }
      })
    );
  }
}
