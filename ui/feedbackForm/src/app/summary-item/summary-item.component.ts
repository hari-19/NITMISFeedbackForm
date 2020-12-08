import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.sass']
})
export class SummaryItemComponent implements OnInit {

  @Input() question: string = '';
  @Input() points: number = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

}
