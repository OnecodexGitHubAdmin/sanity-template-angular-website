import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentTemplateComponent } from './components/component-template/component-template.component';
import { ComponentHostDirective } from './directives/component-host.directive';
import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './components/elements/test/test.component';

@NgModule({
  declarations: [AppComponent, ComponentTemplateComponent, ComponentHostDirective, ContentComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
