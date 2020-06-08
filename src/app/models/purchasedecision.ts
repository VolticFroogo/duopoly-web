export class ActionPurchaseDecision {
  constructor(player: number, timeout?: number) {
    this.player = player;
    this.timeout = timeout !== undefined ? timeout : Date.now() / 1000;
  }

  player: number;
  timeout: number;
}
