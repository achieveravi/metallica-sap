import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './components/query/query.component';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { TradeDetailsComponent } from './components/trade-details/trade-details.component';
import { TradesComponent } from './trades/trades.component';


import { SharedModule } from '../shared/shared.module';
import { MatTableModule, MatSortModule } from '@angular/material';
import { NotifierComponent } from './components/notifier/notifier.component';
// import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatSortModule

  ],
  declarations: [QueryComponent, ResultsTableComponent, TradeDetailsComponent, TradesComponent, NotifierComponent],
  exports: [
    TradesComponent,
    NotifierComponent
  ],
  entryComponents: [
    NotifierComponent
  ]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class TradesModule { }
