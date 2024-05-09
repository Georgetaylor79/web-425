import { Component, OnInit } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishListItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemHandler(item: IWishListItem) {
    this.items.push(item);
  }

}
