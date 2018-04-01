import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'trade-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  constructor() { }

  _tradeData: Trade[];

  @Input() 
  set tradeData(value: Trade[]) {
    this._tradeData = value;
    if(value) {
      this.dataSource = new MatTableDataSource(this.tradeData);
      this.displayedColumns = ['tradeDate', 'side', 'quantity', 'price'];
      this.dataSource.sort = this.sort;

    }
  } 

  get tradeData(): Trade[] {
    return this._tradeData;
  }

  ngOnInit() {
  }

  displayedColumns;
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    
  }

}

export interface Trade {
    
  side:string; 
  quantity: number; 
  price: number ;
  tradeDate: string ;
  status: string ;
  

}
