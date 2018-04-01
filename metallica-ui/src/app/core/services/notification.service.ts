import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {

  constructor( private wsService:WebsocketService) {
    this.notificationMsgs = <Subject<any>>wsService
      .connect()
      .map((response:any) => {
        return response;
      })

   }

  notificationMsgs: Subject<any>;


}
