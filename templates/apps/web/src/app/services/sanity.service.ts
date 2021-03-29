import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  fetchContent(name: string): Observable<any> {
    const client = this.createClient();

    name = `${name}`;
    return from(client.fetch(`*[_type == "page" && identifier == "${name}"][0]`));
  }

  fetchNavigation(): Observable<any[]> {
    const client = this.createClient();
    // eslint-disable-next-line max-len
    return from(client.fetch('*[_type == "navigationTreeItem"]')).pipe(
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
      useCdn: environment.sanity.useCdn
    });

    return client;
  }

  private mapResult(r: any): any {
     return r;
  }
}
