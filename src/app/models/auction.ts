import { Board } from './board';

export class ActionAuction {
  constructor(property: number, timeout?: number) {
    this.property = property;
    this.bid = new Bid();
    this.timeout = timeout !== undefined ? timeout : Date.now() / 1000;
  }

  property: number;
  bid: Bid;
  timeout: number;
}

export class Bid {
  static readonly defaultValue = 10;

  constructor() {
    this.player = Board.nullPlayer;
    this.value = Bid.defaultValue;
  }

  player: number;
  value: number;
}
