import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.css']
})
export class ConseilsComponent implements OnInit {

  fruits;
  legumes;
  elementsSelectionnes;

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.elementsSelectionnes = localStorage.getItem('elemRecuperes').split('-').map(Number);
    this.fruits = this.api.fruits;
    this.legumes = this.api.legumes;
  }

  getItem(id) {
    for (let fruit of this.fruits) {
      if (fruit.id === id)
         return fruit;
    }
    for (let legume of this.legumes) {
      if (legume.id === id)
         return legume;
    }
  }

}
