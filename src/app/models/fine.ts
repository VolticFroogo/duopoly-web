import { Tile } from './tile';

export class Fine extends Tile {
  constructor(name: string, value: number) {
    super(name);
    this.value = value;
  }

  value: number;

  landed(player: number, roll: number) {

  }
}
