import { Tile } from './tile';

export class Train extends Tile {
  static readonly value = 200;
  static readonly set = 8;
  static readonly rent = [25, 50, 100, 200];

  landed(player: number, roll: number) {

  }

  getValue(): number {
    return Train.value;
  }
}
