import { Component } from '@angular/core';
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
  title = 'angular-client';
  $contentObservable: Observable<SiteConfig>;
  image: string;
  currentDate = new Date();

  constructor(service: SanityService) {    
    this.$contentObservable = service.fetchSiteConfig().pipe(map((config: SiteConfig) => {
      return config;
    }));
  }
}
