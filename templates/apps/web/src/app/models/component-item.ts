import { Type } from '@angular/core';
import { DynamicComponent } from './dynamic-component';

export class ComponentItem {
  constructor(public component: Type<DynamicComponent>, public data: any) { }
}