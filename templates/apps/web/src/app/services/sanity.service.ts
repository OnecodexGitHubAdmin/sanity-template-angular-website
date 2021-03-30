import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor(private transferStateService: TransferStateService) {
  }

  fetchContent(name: string): Observable<any> {
    const client = this.createClient();
    name = `${name}`;

    const observable = from(client.fetch(`*[_type == "page" && identifier == "${name}"][0]`)).pipe(
      map((a: any) => {
        console.log(a);
        return a;
      })
    );

    return this.transferStateService.useScullyTransferState('data', observable);
  }

  fetchSiteConfig(): Observable<any> {
    const client = this.createClient();
    // eslint-disable-next-line max-len
    return from(client.fetch('*[_type == "site-config"]')).pipe(
      map((a: any) => {
        console.log(a);
        return a;
      })
    );
  }

  fetchNavigation(): Promise<string[]> {
    const client = this.createClient();
    // eslint-disable-next-line max-len
    return client.fetch('*[_type == "navigationTreeItem"]').pipe(
      map((results: any[]) => results.map((r: any) => this.mapResult(r)))
    );
  }
  

  // buildImageUrl(props: any): string {
  //   const client = this.createClient();

  //   const imageUrlBuilder = require('@sanity/image-url');
  //   const builder = imageUrlBuilder(client);

  //   // eslint-disable-next-line no-underscore-dangle
  //   return builder.image(props._ref);
  // }


  private createClient(): any {
    const sanityClient = require('@sanity/client');

    const client = sanityClient({
      projectId: environment.sanity.projectId,
      dataset: environment.sanity.dataset,
      useCdn: false
    });

    return client;
  }

  private mapResult(r: any): any {
     return r;
  }
}
