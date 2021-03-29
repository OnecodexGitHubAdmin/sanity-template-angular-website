import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { ComponentHostDirective } from '../../directives/component-host.directive';
import { DynamicComponent } from '../../models/dynamic-component';
import { ComponentItem } from '../../models/component-item';

@Component({
  selector: 'templates-component-template',
  templateUrl: './component-template.component.html',
  styleUrls: ['./component-template.component.scss']
})
export class ComponentTemplateComponent implements OnInit {

  @Input() item: ComponentItem;
  @ViewChild(ComponentHostDirective, {static: true}) componentHost: ComponentHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponents();
  }


  loadComponents(): void {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.component);

    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(componentFactory);
    componentRef.instance.data = this.item.data;
  }
}
