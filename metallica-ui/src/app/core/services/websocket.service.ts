import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import * as Rx from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebsocketService {

  constructor() { }

  private socket;

  connect = (): Rx.Subject<MessageEvent> => {
    this.socket = io(environment.ws_url);

    let observable = new Observable(observer => {
      this.socket.on('tradeEvt', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    })

    let observer = {
      next: (data: Object) => {
          this.socket.emit('message', JSON.stringify(data));
      },
  };

    return Rx.Subject.create(observer, observable);
  }

}
