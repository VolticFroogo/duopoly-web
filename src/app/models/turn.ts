export class ActionTurn {
  constructor(player: number, timeout?: number) {
    this.player = player;
    this.hasRoll = false;
    this.timeout = timeout !== undefined ? timeout : Date.now() / 1000;
  }

  player: number;
  hasRoll: boolean;
  timeout: number;
}

export class ResponseSetTurn {
  player: number;
  forced: boolean;
}
