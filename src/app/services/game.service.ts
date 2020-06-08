import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Action, Actions } from '../models/action';
import { Response, ResponseType } from '../models/response';
import { Board } from '../models/board';
import { ResponseGreeting } from '../models/greeting';
import { Chat, ChatResponse } from '../models/chat';
import { ActionTurn, ResponseSetTurn } from '../models/turn';
import { StartResponse } from '../models/start';
import { ActionPurchaseDecision } from '../models/purchasedecision';
import {ActionPay, ResponsePay} from '../models/pay';
import { ActionAuction, Bid } from '../models/auction';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor() {}

  static id: string;
  static playerName: string;
  static players: Map<number, Player> = new Map<number, Player>();
  static playing: boolean;
  static board: Board;
  static action: Action;
  static chat: Chat[];

  static message(response: Response) {
    // TODO: possibly refactor this to use registered handles over a switch.
    switch (response.type) {
      case ResponseType.Playing:
        GameService.handlePlaying();
        break;

      case ResponseType.Greeting:
        GameService.greeting(response.data as ResponseGreeting);
        break;

      case ResponseType.Joined:
        GameService.joined(response.data as Player);
        break;

      case ResponseType.Left:
        GameService.left(response.data as Player);
        break;

      case ResponseType.Chat:
        GameService.handleChat(response.data as ChatResponse);
        break;

      case ResponseType.Start:
        GameService.start(response.data as StartResponse);
        break;

      case ResponseType.Roll:
        GameService.roll(response.data as number[]);
        break;

      case ResponseType.SetTurn:
        GameService.setTurn(response.data as ResponseSetTurn);
        break;

      case ResponseType.Buy:
        GameService.buy();
        break;

      case ResponseType.Auction:
        GameService.auction();
        break;

      case ResponseType.Bid:
        GameService.bid(response.data as Bid);
        break;

      case ResponseType.AuctionWon:
        GameService.auctionWon(response.data as Action);
        break;

      case ResponseType.Pay:
        GameService.pay(response.data as ResponsePay);
        break;

      case ResponseType.Build:
        break;

      case ResponseType.Demolish:
        break;

      case ResponseType.Mortgage:
        break;

      case ResponseType.Unmortgage:
        break;

      case ResponseType.Bankrupt:
        break;

    }
  }

  static handlePlaying() {
    // TODO: do more than just log to console.
    console.log('Game is already in progress.');
  }

  static greeting(greeting: ResponseGreeting) {
    GameService.players = greeting.players;
    GameService.playing = greeting.playing;
    GameService.board = greeting.board;
    GameService.action = greeting.action;
  }

  static joined(player: Player) {
    GameService.players[player.id] = player;
  }

  static left(player: Player) {
    if (GameService.playing) {
      GameService.players[player.id].connected = false;
    } else {
      GameService.players.delete(player.id);
    }
  }

  static handleChat(response: ChatResponse) {
    GameService.chat.push(new Chat(
      GameService.players[response.player].name,
      response.message
    ));
  }

  static start(start: StartResponse) {
    GameService.playing = true;
    GameService.board = Board.new();
    GameService.action = new Action(
      Actions.turn,
      new ActionTurn(start.startingPlayer)
    );
  }

  static roll(dice: number[]) {
    const turn = GameService.action.data as ActionTurn;
    const roll = dice[0] + dice[1];

    GameService.players[turn.player].position += roll;

    if (GameService.players[turn.player].position >= Board.len) {
      GameService.players[turn.player].position -= Board.len;
    }

    if (dice[0] !== dice[1]) {
      GameService.action.data.hasRoll = false;
    }

    Board.tiles[GameService.players[turn.player].position].landed(turn.player, roll);
  }

  static setTurn(response: ResponseSetTurn) {
    GameService.action.type = Actions.turn;
    GameService.action.data = new ActionTurn(response.player);
  }

  static buy() {
    const purchaseDecision = GameService.action.data as ActionPurchaseDecision;
    const pos = GameService.players[purchaseDecision.player].position;

    GameService.board[pos].owner = purchaseDecision.player;
    GameService.players[purchaseDecision.player].money -= Board.tiles[pos].getValue();
  }

  static auction() {
    const purchaseDecision = GameService.action.data as ActionPurchaseDecision;

    GameService.action = new Action(
      Actions.auction,
      new ActionAuction(
        GameService.players[purchaseDecision.player].position
      )
    );
  }

  static bid(bid: Bid) {
    GameService.action.data.bid = bid;
  }

  static auctionWon(action: Action) {
    const auction = GameService.action.data as ActionAuction;

    GameService.board[auction.property].owner = auction.bid.player;
    GameService.players[auction.bid.player].money -= auction.bid.value;

    GameService.action = action;
  }

  static pay(response: ResponsePay) {
    const actionPay = GameService.action.data as ActionPay;

    GameService.players[actionPay.payer].money -= actionPay.value;

    if (actionPay.payee !== Board.nullPlayer) {
      GameService.players[actionPay.payee].money += actionPay.value;
    }
  }
}
