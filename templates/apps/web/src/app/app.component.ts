import { Component } from '@angular/core';
import { ScullyRoute, ScullyRoutesService, TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestComponent } from './components/elements/test/test.component';
import { ComponentItem } from './models/component-item';
import { SanityService } from './services/sanity.service';

@Component({
  selector: 'templates-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-client';
  //routeList: ScullyRoute[];
  $contentObservable: Observable<any>;

  constructor(private srs: ScullyRoutesService, private service: SanityService) {
    // this.srs.available$.pipe(
    //   map((routeList: ScullyRoute[]) => {
    //     this.routeList = routeList;
    //   })
    // ).subscribe();


    

    //this.$contentObservable = this.transferStateService.getState<ComponentItem>('data')
    
    this.$contentObservable = service.fetchSiteConfig().pipe(
      map((a: any) => {
        console.log('config', a);
      })
    );
  }
}
