import { Player } from './player';
import { Board } from './board';
import { Action } from './action';
import { GameService } from '../services/game.service';

export class RequestGreeting {
  constructor() {
    this.id = GameService.id;
    this.name = GameService.playerName;
  }

  id: string;
  name: string;
}

export class ResponseGreeting {
  id: string;
  players: Map<number, Player>;
  playing: boolean;
  board: Board;
  action: Action;
}
