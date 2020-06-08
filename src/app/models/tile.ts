export class Tile {
  constructor(name?: string) {
    this.name = name;
  }

  name?: string;

  landed(player: number, roll: number) {}

  getValue(): number {
    return 0;
  }
}
