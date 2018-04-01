import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TradeService } from './trade.service';
import { WebsocketService } from './services/websocket.service';
import { NotificationService } from './services/notification.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [ TradeService, WebsocketService, NotificationService ]
})
export class CoreModule { }
