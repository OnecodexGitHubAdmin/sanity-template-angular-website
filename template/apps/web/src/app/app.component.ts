import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SiteConfig } from './models/types/site-config';
import { SanityService } from './services/sanity.service';

@Component({
  selector: 'template-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  $contentObservable: Observable<SiteConfig>;
  image: string;
  currentDate = new Date();

  constructor(service: SanityService, titleService: Title) {    
    this.$contentObservable = service.fetchSiteConfig().pipe(
      tap((config: SiteConfig) => {
        titleService.setTitle(config.title);
      })
    );
  }
}
