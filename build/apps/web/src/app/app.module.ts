import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ComponentTemplateComponent } from './components/component-template/component-template.component';
import { ComponentHostDirective } from './directives/component-host.directive';
import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './components/elements/test/test.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { NotFoundComponent } from './components/elements/not-found/not-found.component';
import { BannerComponent } from './components/elements/banner/banner.component';
import { BlockComponent } from './components/elements/block/block.component';
import { FigureComponent } from './components/elements/figure/figure.component';
import { EmbedHtmlComponent } from './components/elements/embed-html/embed-html.component';
import { CustomerFeedbackComponent } from './components/elements/customer-feedback/customer-feedback.component';
import { BlogCardComponent } from './components/elements/blog-card/blog-card.component';
import { BlogCollectionComponent } from './components/elements/blog-collection/blog-collection.component';
import { BlogComponent } from './components/elements/blog/blog.component';
import { BadgeComponent } from './components/elements/badge/badge.component';
import { BlockChildComponent } from './components/elements/block-child/block-child.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ButtonComponent } from './components/elements/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentTemplateComponent,
    ComponentHostDirective,
    ContentComponent,
    TestComponent,
    TopNavigationComponent,
    NotFoundComponent,
    BannerComponent,
    BlockComponent,
    FigureComponent,
    EmbedHtmlComponent,
    CustomerFeedbackComponent,
    BlogCardComponent,
    BlogCollectionComponent,
    BlogComponent,
    BadgeComponent,
    BlockChildComponent,
    SafeHtmlPipe,
    ButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule, FlexLayoutModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
