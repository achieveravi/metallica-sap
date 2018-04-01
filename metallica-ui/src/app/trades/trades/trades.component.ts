import { Component, OnInit } from '@angular/core';
import { TradeService } from '../../core/trade.service';
import { Subject } from 'rxjs/Subject';
import { NotificationService } from '../../core/services/notification.service';
import { MatSnackBar } from '@angular/material';
import { NotifierComponent } from '../components/notifier/notifier.component';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  constructor(private tradeService:TradeService,
            private notificationServ: NotificationService,
            public snackBar:MatSnackBar) { }

  tradesData: Object[];
  

  ngOnInit() {
    this.tradeService.getAllTrades().subscribe(
      (result) => {
        this.tradesData = <Object[]>result;
        console.log(this.tradesData)
      },
      (error) => console.log(error)
    )

    this.notificationServ.notificationMsgs.subscribe(msg => {
      let constructedNotificationMsg: string = this.constructNotificationData(msg);
      if(constructedNotificationMsg && constructedNotificationMsg['tradeId']) {
        this.snackBar.openFromComponent(NotifierComponent, {
          data: constructedNotificationMsg,
          duration: 1000
        })

      }
    })

  }

  private constructNotificationData = (msg: string): any => {
    let parsedMsg: Object = JSON.parse(msg);
    let msgType = parsedMsg['type'];
    let trade = parsedMsg['trade'];
    let notificationMsg: Object = {};
    
    if(msgType) {
      if(msgType == 'insert') {
        notificationMsg['type'] = "Added";
      }
      if(msgType == 'delete') {
        notificationMsg['type'] = "Deleted";
      }
      if(msgType == 'update') {
        notificationMsg['type'] = "Updated";
      }
      
    }

    if(trade) {
      notificationMsg['tradeId'] = trade['_id'];
    }

    return notificationMsg;

  }

}
