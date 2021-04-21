import { HttpClient } from '@angular/common/http';
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
import { Product } from '../models/types/product';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  constructor(private transferStateService: TransferStateService, private http: HttpClient) {}

  fetchContent(name: string): Observable<{ page: Page; blog: BlogPost }> {
    name = `${name}`;

    // eslint-disable-next-line max-len
    const observable = this.http.get(`${this.generateSanityUrl()}*[_type == "route" && slug.current == "${name}"][0] { page->, blog->, product->, openGraphImage{asset->}}`).pipe(
      map((result: { page: Page; blog: BlogPost; product: Product }) => {
        return result;
      })
    );

    return this.transferStateService.useScullyTransferState('data', observable);
  }
  
  fetchPageBackgroundImage(name: string): Observable<string> {
    name = `${name}`;
    // eslint-disable-next-line max-len
    const observable = this.http.get(`${this.generateSanityUrl()}*[_type == "route" && slug.current == "${name}"][0] { page -> { backgroundImage {asset-> } } }`)
    .pipe(
      map((result: { page: Page }) => {
        return result?.page?.backgroundImage?.asset?.url;
      })
    );

    return this.transferStateService.useScullyTransferState('backgroundImage', observable);
  }

  fetchSiteConfig(): Observable<SiteConfig> {
    // eslint-disable-next-line max-len
    const observable = this.http.get(`${this.generateSanityUrl()}*[_type == "site-config"] | order(_updatedAt desc) {_type, footerText, title, logo, url, primaryColor, accentColor, copyrightText, copyrightDate, socialMediaLinks[]{title, href, image{asset->}}, logo{alt, asset->}, favicon{alt, asset->}, mainNavigation[]->, addShoppingCardIcon, footerNavigation[]-> } [0]`)
      .pipe(
        map((config: SiteConfig) => {
          return {
            ...config,
            mainNavigation: config.mainNavigation.sort(
              (a: Route, b: Route) => a.order - b.order
            ),
            footerNavigation: config.footerNavigation.sort(
              (a: Route, b: Route) => a.order - b.order
            ),
          };
        })
      );

    return this.transferStateService.useScullyTransferState(
      'siteConfig',
      observable
    );
  }

  fetchFeedback(refs: string[]): Observable<CustomerFeedback[]> {
    const refString = JSON.stringify(refs);
    // eslint-disable-next-line max-len
    const observable = this.http.get(`${this.generateSanityUrl()}*[_type == "feedback" && _id in ${refString}]{customer, text, _createdAt, image{alt, asset->}}`)
      .pipe(map((config: CustomerFeedback[]) => config));

    return this.transferStateService.useScullyTransferState(
      'customerFeedback',
      observable
    );
  }

  fetchBlogPosts(refs: string[]): Observable<BlogPost[]> {
    const refString = JSON.stringify(refs);
    // eslint-disable-next-line max-len
    const observable = this.http.get(`${this.generateSanityUrl()}*[_type == "blog" && _id in ${refString}] {_id, content, introduction, title, _updatedAt, tags, "route": *[_type == "route" && blog._ref == ^._id][0]{"current": slug.current}}`)
      .pipe(map((config: BlogPost[]) => config));

    return this.transferStateService.useScullyTransferState(
      'blogPosts',
      observable
    );
  }

  fetchProductsPosts(refs: string[]): Observable<Product[]> {
    const refString = JSON.stringify(refs);
    // eslint-disable-next-line max-len
    const observable = this.http.get(`${this.generateSanityUrl()}*[_type == "product" && _id in ${refString}] {_id, productDescription, title, image{asset->}, "route": *[_type == "route" && product._ref == ^._id][0]{"current": slug.current}}`)
      .pipe(
      map((config: Product[]) => {
        return config;
      })
    );

    return this.transferStateService.useScullyTransferState(
      'products',
      observable
    );
  }

  fetchRoutes(refs: string[]): Observable<Route[]> {
    const refString = JSON.stringify(refs);
    // eslint-disable-next-line max-len
    const observable = this.http.get(`${this.generateSanityUrl()}*[_type == "route" && _id in ${refString}]`)
      .pipe(map((config: Route[]) => config));

    return this.transferStateService.useScullyTransferState(
      'ctaRoutes',
      observable
    );
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
      apiVersion: environment.sanity.apiVersion,
      useCdn: false,
    });

    return client;
  }

  private generateSanityUrl(): string {
    const config = {
      projectId: environment.sanity.projectId,
      dataset: environment.sanity.dataset,
      apiVersion: environment.sanity.apiVersion
    };
    return `http://localhost:3000/api/${config.apiVersion}/data/query/${config.dataset}?query=`;
  }
}
