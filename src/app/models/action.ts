export enum Actions {
  null,
  turn,
  purchaseDecision,
  auction,
  pay
}

export class Action {
  constructor(type: number, data: any) {
    this.type = type;
    this.data = data;
  }

  type: number;
  data: any;

  static null() {
    return new Action(Actions.null, null);
  }
}
