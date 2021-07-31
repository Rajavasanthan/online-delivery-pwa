import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  title = 'EoTo GROCERY 🍅';
  description = 'அன்றாட வாழ்க்கைக்கு தேவையான காய் கறி, பழங்களை வாங்கி மகிழவும்!'

  constructor() { }

  ngOnInit() {
  }

}
