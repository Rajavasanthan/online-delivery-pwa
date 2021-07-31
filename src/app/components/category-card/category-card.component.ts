import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  categories = ['vegetables', 'fruits', 'spices', 'dried fruits']

  constructor() { }

  ngOnInit() {
  }

}
