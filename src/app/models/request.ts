export enum RequestType {
  Greeting,
  Chat,
  Start,
  Roll,
  EndTurn,
  Buy,
  Auction,
  Bid,
  Pay,
  Build,
  Demolish,
  Mortgage,
  Unmortgage,
  Bankrupt
}

export class Request {
  constructor(type: RequestType, data: any) {
    this.type = type;
    this.data = data;
  }

  type: RequestType;
  data: any;
}
