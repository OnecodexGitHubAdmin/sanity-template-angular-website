import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  selector: 'template-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  canonical: HTMLLinkElement = document.querySelector('#canonical');

  $componentsObservable: Observable<ComponentItem[]>;

  constructor(
    service: SanityService,
    componentResolver: ComponentsResolverService,
    private metaService: Meta,
    private titleService: Title) {
    
    let path = window.location.pathname;
    this.canonical.href = `${'<#< deployments.web.url >#>'}${path}`;

    path = path.length > 1 ? path.substr(1) : path;
    this.$componentsObservable = service.fetchContent(path).pipe(
      map((result: { page: Page, blog: BlogPost }) => {
        if (result?.page) {
          this.setMetaInformation(result.page);
          return result.page.content.map((item: SanityType) => componentResolver.resolveComponent(item));
        } else if (result?.blog) {
          this.setMetaInformation(result.blog);
          return [new ComponentItem(BlogComponent, result.blog)];
        } else {
          return [new ComponentItem(NotFoundComponent, null)];
        }
      })
    );
  }
  
  private setMetaInformation(page: Page): void {
    const titleBase = this.titleService.getTitle().split(' - ')[0];
    this.titleService.setTitle(`${titleBase} - ${page.title}`);
    this.metaService.updateTag({ name: 'keywords', content: page.title });
    this.metaService.updateTag({ name: 'description', content: page.description || '' });
    this.metaService.updateTag({ name: 'og:type', content: 'website' });
    this.metaService.updateTag({ name: 'og:site_name', content: page.title });
    this.metaService.updateTag({ name: 'og:description“', content: page.description || '' });
    this.metaService.updateTag({ name: 'og:title', content: page.title });
    this.metaService.updateTag({ name: 'og:image', content: page.openGraphImage?.asset?.url || '' });
  }
}
