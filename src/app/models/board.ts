import { Tile } from './tile';
import { Property } from './property';
import { Card } from './card';
import { Fine } from './fine';
import { Train } from './train';
import { Jail } from './jail';
import { Utility } from './utility';

export class Board {
  static readonly nullPlayer = -1;
  static readonly len = 40;

  static readonly sets: number[][] = [
    [1, 3],
    [6, 8, 9],
    [11, 13, 14],
    [16, 18, 19],
    [21, 23, 24],
    [26, 27, 29],
    [31, 32, 34],
    [37, 39],
    [5, 15, 25, 35],
    [12, 28],
  ];

  static readonly tiles: Tile[] = [
    new Tile(),
    new Property('OLD KENT ROAD', 60, 0, [2, 10, 30, 90, 160, 250], 50),
    new Card(1),
    new Property('WHITECHAPEL ROAD', 60, 0, [4, 20, 60, 180, 320, 450], 50),
    new Fine('INCOME TAX', 200),
    new Train('KING\'S CROSS STATION'),
    new Property('THE ANGEL, ISLINGTON', 100, 1, [6, 30, 90, 270, 400, 550], 50),
    new Card(0),
    new Property('EUSTON ROAD', 100, 1, [6, 30, 90, 270, 400, 550], 50),
    new Property('PENTONVILLE ROAD', 120, 1, [10, 50, 150, 450, 625, 750], 50),
    new Tile(),
    new Property('PALL MALL', 140, 2, [10, 50, 150, 450, 625, 750], 100),
    new Utility('ELECTRIC COMPANY'),
    new Property('WHITEHALL', 140, 2, [10, 50, 150, 450, 625, 750], 100),
    new Property('NORTHUMBERLAND AVENUE', 160, 2, [12, 60, 180, 500, 700, 900], 100),
    new Train('MARYLEBONE STATION'),
    new Property('BOW STREET', 180, 3, [14, 80, 200, 550, 750, 950], 100),
    new Card(1),
    new Property('MARLBOROUGH STREET', 180, 3, [14, 80, 200, 550, 750, 950], 100),
    new Property('VINE STREET', 200, 3, [16, 80, 220, 600, 800, 1000], 100),
    new Tile(),
    new Property('STRAND', 220, 4, [18, 90, 250, 800, 875, 1050], 150),
    new Card(0),
    new Property('FLEET STREET', 220, 4, [18, 90, 250, 800, 875, 1050], 150),
    new Property('TRAFALGAR SQUARE', 240, 4, [20, 100, 300, 750, 925, 1100], 150),
    new Train('FENCHURCH STREET STATION'),
    new Property('LEICESTER SQUARE', 260, 5, [22, 110, 330, 800, 975, 1150], 150),
    new Property('COVENTRY STREET', 260, 5, [22, 110, 330, 800, 975, 1150], 150),
    new Utility('WATER WORKS'),
    new Property('PICCADILLY', 280, 5, [24, 120, 360, 850, 1025, 1200], 150),
    new Jail(),
    new Property('REGENT STREET', 300, 6, [26, 130, 390, 900, 1100, 1275], 200),
    new Property('OXFORD STREET', 300, 6, [26, 130, 390, 900, 1100, 1275], 200),
    new Card(1),
    new Property('BOND STREET', 320, 6, [28, 150, 450, 1000, 1200, 1400], 200),
    new Train('LIVERPOOL STREET STATION'),
    new Card(0),
    new Property('PARK LANE', 350, 7, [35, 175, 500, 1100, 1300, 1500], 200),
    new Fine('SUPER TAX', 100),
    new Property('MAYFAIR', 400, 7, [50, 200, 600, 1400, 1700, 2000], 200)
  ];

  static new(): any[] {
    return [
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {
        owner: this.nullPlayer,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
      {},
      {
        owner: this.nullPlayer,
        houses: 0,
        mortgaged: false,
      },
    ];
  }
}
