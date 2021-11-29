import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  collection: any = [];

  create(item: any) {
    this.collection.push({
      name: item,
    });
    return;
  }

  deleteItem(id: any) {
    this.collection.splice(id, 1);
  }
}
