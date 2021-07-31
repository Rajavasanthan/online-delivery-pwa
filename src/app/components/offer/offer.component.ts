import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  // maybe a model for offers should be created?
  offers = [{
    description: 'Buy 2 Tomato & get 1 free',
    notes: 'ஆடி பெருக்கு சலுகை !'
  },
  {
    description: 'Buy 2 Tomato & get 1 free',
    notes: 'ஆடி பெருக்கு சலுகை !'
  },
  {
    description: 'Buy 2 Tomato & get 1 free',
    notes: 'ஆடி பெருக்கு சலுகை !'
  }];

  constructor() { }

  ngOnInit() {
  }

}
