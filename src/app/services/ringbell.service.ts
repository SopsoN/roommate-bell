import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { WebsocketService } from './websocket.service';
import 'rxjs-compat/add/operator/map';

const CHAT_URL = 'ws://roommatebell.collegium.ml:9000';

export interface Message {
  ping: boolean;
}

@Injectable()
export class RingbellService {
  public messages: Rx.Subject<Message>;

  constructor(wsService: WebsocketService) {
    this.messages = <Rx.Subject<Message>>wsService
      .connect(CHAT_URL)
      .map(
        (response: MessageEvent): Message => {
          let data = JSON.parse(response.data);
          return {
            ping: data.ping,
          };
      });
  }
}
