import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule]
})
export class UtilsModule {
  public generateSanityUrl(config: {projectId: string, apiVersion: string, dataset: string}): string {
    return `https://${config.projectId}.api.sanity.io/${config.apiVersion}/data/query/${config.dataset}?query=`;
  }
}
