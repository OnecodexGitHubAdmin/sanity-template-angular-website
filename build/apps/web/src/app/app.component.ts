import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SiteConfig } from './models/types/site-config';
import { SanityService } from './services/sanity.service';

@Component({
  selector: 'templates-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  canonical: HTMLLinkElement = document.querySelector('#canonical');
  $contentObservable: Observable<SiteConfig>;
  image: string;
  currentDate = new Date();

  constructor(service: SanityService, metaService: Meta, titleService: Title) {    
    this.$contentObservable = service.fetchSiteConfig().pipe(map((config: SiteConfig) => {
      metaService.addTags([{ name: 'og:site_name', content: config.title }]);   
      titleService.setTitle(config.title);
      this.canonical.href = config.url;
      return config;
    }));
  }
}
