import { Injectable } from '@angular/core';
import { Response, ResponseType } from '../models/response';
import { GameService } from './game.service';
import { RequestGreeting } from '../models/greeting';
import { Request, RequestType } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  static url: string;
  static websocket: WebSocket;

  static connect(url: string) {
    WsService.url = url;
    WsService.websocket = new WebSocket(url);
    WsService.websocket.onopen = WsService.onOpen;
    WsService.websocket.onmessage = WsService.onMessage;
    WsService.websocket.onerror = WsService.onError;
    WsService.websocket.onclose = WsService.onClose;
  }

  private static onOpen() {
    WsService.websocket.send(
      JSON.stringify(
        new Request(
          RequestType.Greeting,
          new RequestGreeting()
        )
      )
    );
  }

  private static onMessage(event: MessageEvent) {
    const response = JSON.parse(event.data) as Response;

    console.log(response);

    if (response.type === ResponseType.Error) {
      console.log(response.data as string);
      return;
    }

    GameService.message(response);
  }

  private static onError() {
    // TODO: handle error.
  }

  private static onClose() {
    WsService.connect(WsService.url);
  }
}
