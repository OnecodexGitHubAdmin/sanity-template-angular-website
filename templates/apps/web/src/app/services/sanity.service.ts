import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SiteConfig } from '../models/types/site-config';
import { environment } from '../../environments/environment';
import { Route } from '../models/types/route';
import { Page } from '../models/types/page';
import { CustomerFeedback } from '../models/types/customer-feedback';
import { BlogPost } from '../models/types/blog-post';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor(private transferStateService: TransferStateService) {
  }

  fetchContent(name: string): Observable<{ page: Page, blog: BlogPost }> {
    const client = this.createClient();
    name = `${name}`;

    const observable = from(client.fetch(`*[_type == "route" && slug.current == "${name}"][0] { page->, blog-> }`)).pipe(
      map((result: { page: Page, blog: BlogPost }) => {
        return result;
      })
    );

    return this.transferStateService.useScullyTransferState('data', observable);
  }

  fetchSiteConfig(): Observable<SiteConfig> {
    const client = this.createClient();
    const observable =
      // eslint-disable-next-line max-len
      from(client.fetch('*[_type == "site-config"] | order(_updatedAt desc) {_type, footerText, title, logo, url, copyrightText, copyrightDate, socialMediaLinks[]{title, href, image{asset->}}, logo{alt, asset->}, mainNavigation[]->, footerNavigation[]-> } [0]'))
        .pipe(map((config: SiteConfig) => {
          return {
            ...config,
            mainNavigation: config.mainNavigation.sort((a: Route, b: Route) => a.order - b.order),
            footerNavigation: config.footerNavigation.sort((a: Route, b: Route) => a.order - b.order)
        };
      })
    );

    return this.transferStateService.useScullyTransferState('siteConfig', observable);
  }

  fetchFeedback(refs: string[]): Observable<CustomerFeedback[]> {
    const client = this.createClient();
    const refString = JSON.stringify(refs);
    const observable = from(client.fetch(`*[_type == "feedback" && _id in ${refString}]{customer, text, _createdAt, image{alt, asset->}}`))
      .pipe(map((config: CustomerFeedback[]) => config)
    );

    return this.transferStateService.useScullyTransferState('customerFeedback', observable);
  }

  
  fetchBlogPosts(refs: string[]): Observable<BlogPost[]> {
    const client = this.createClient();
    const refString = JSON.stringify(refs);
    // eslint-disable-next-line max-len
    const observable = from(client.fetch(`*[_type == "blog" && _id in ${refString}] {_id, content, introduction, title, _updatedAt, tags, "route": *[_type == "route" && blog._ref == ^._id][0]{"current": slug.current}}`))
      .pipe(map((config: BlogPost[]) => config)
    );

    return this.transferStateService.useScullyTransferState('blogPosts', observable);
  }

  buildImageUrl(ref: string): string {
    const client = this.createClient();
    const imageUrlBuilder = require('@sanity/image-url');
    const builder = imageUrlBuilder(client);
    return builder.image(ref);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private createClient(): any {
    const sanityClient = require('@sanity/client');

    const client = sanityClient({
      projectId: environment.sanity.projectId,
      dataset: environment.sanity.dataset,
      useCdn: false
    });

    return client;
  }
}
