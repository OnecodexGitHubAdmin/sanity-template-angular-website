import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[templatesComponentHost]'
})
export class ComponentHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}