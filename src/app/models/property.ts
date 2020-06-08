import { Tile } from './tile';

export class Property extends Tile {
  constructor(name: string, value: number, set: number, rent: number[], housePrice: number) {
    super(name);
    this.value = value;
    this.set = set;
    this.rent = rent;
    this.housePrice = housePrice;
  }

  value: number;
  set: number;
  rent: number[];
  housePrice: number;

  landed(player: number, roll: number) {

  }

  getValue(): number {
    return this.value;
  }
}
