import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-large',
  templateUrl: './widget-large.component.html',
  styleUrls: ['./widget-large.component.css']
})
export class WidgetLargeComponent implements OnInit {
  type1: string = 'Approved'
  type2: string = 'Declined'
  type3: string = 'Pending'

  constructor() { }

  ngOnInit(): void {
  }

}
