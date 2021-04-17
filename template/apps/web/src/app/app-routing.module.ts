import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    data: {},
    runGuardsAndResolvers: 'always',
  },
  {
    path: ':fragment',
    component: ContentComponent,
    data: {},
    runGuardsAndResolvers: 'always',
  },
  {
    path: ':fragment1/:fragment2',
    component: ContentComponent,
    data: {},
    runGuardsAndResolvers: 'always',
  },
  {
    path: ':fragment1/:fragment2/**',
    component: ContentComponent,
    data: {},
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
