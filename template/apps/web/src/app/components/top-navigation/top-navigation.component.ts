import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCartStore } from '../../models/store/shopping-cart-store';
import { Product } from '../../models/types/product';
import { Route } from '../../models/types/route';

@Component({
  selector: 'template-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  @Input() items: Route[];
  @Input() addShoppingCardIcon: boolean;

  showMenu: boolean;
  shoppingCartObservable$: Observable<Product[]>;

  constructor(private store: Store<ShoppingCartStore>) {
    this.shoppingCartObservable$ = this.store.select((shoppingCartStore: ShoppingCartStore) => shoppingCartStore.shoppingCart);
  }
}
