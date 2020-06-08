import { Tile } from './tile';

export class Utility extends Tile {
  static readonly value = 150;
  static readonly set = 9;
  static readonly multiplier = [4, 10];

  landed(player: number, roll: number) {

  }

  getValue(): number {
    return Utility.value;
  }
}
