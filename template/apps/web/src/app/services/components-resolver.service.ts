import { Injectable } from '@angular/core';
import { NotFoundComponent } from '../components/elements/not-found/not-found.component';
import { ComponentItem } from '../models/component-item';
import { SanityType } from '../models/types/sanity-type';
import { Banner } from '../models/types/banner';
import { BannerComponent } from '../components/elements/banner/banner.component';
import { CustomerFeedbackComponent } from '../components/elements/customer-feedback/customer-feedback.component';
import { BlogCollectionComponent } from '../components/elements/blog-collection/blog-collection.component';
import { FeedbackReference } from '../models/types/feedback-reference';
import { BlogCollection } from '../models/types/product-collection';
import { ProductCollection } from '../models/types/blog-collection';
import { ProductCollectionComponent } from '../components/elements/product-collection/product-collection.component';

@Injectable({
  providedIn: 'root',
})
export class ComponentsResolverService {
  resolveComponent(item: SanityType): ComponentItem {
    switch (item?._type) {
      case 'banner':
        return new ComponentItem(BannerComponent, item as Banner);
      case 'customerFeedback':
        return new ComponentItem(
          CustomerFeedbackComponent,
          item as FeedbackReference
        );
      case 'blogCollection':
        return new ComponentItem(
          BlogCollectionComponent,
          item as BlogCollection
        );
      case 'productCollection':
        return new ComponentItem(
          ProductCollectionComponent,
          item as ProductCollection
        );
      default:
        return new ComponentItem(NotFoundComponent, null);
    }
  }
}
