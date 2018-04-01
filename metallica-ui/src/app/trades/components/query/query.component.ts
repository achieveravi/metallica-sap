import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trade-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor() { }

  commodities = [
    {value: 'cu', viewValue: 'Copper'},
    {value: 'au', viewValue: 'Gold'},
    {value: 'ag', viewValue: 'Silver'}
  ];

  ngOnInit() {
  }

}
