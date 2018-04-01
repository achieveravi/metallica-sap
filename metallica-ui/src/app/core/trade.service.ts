import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TradeService {

  constructor( private http: HttpClient) { }

  public getAllTrades = (): Observable<Object> => {
    return this.http.get('/trade/trades');
  }

}
