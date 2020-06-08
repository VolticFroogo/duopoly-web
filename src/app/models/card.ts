import { Tile } from './tile';

export class Card extends Tile {
  constructor(deck: number) {
    super();
    this.deck = deck;
  }

  deck: number;

  landed(player: number, roll: number) {}
}
