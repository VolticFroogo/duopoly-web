export enum ResponseType {
  Error,
  Playing,
  Greeting,
  Joined,
  Left,
  Chat,
  Start,
  Roll,
  SetTurn,
  Buy,
  Auction,
  Bid,
  AuctionWon,
  Pay,
  Build,
  Demolish,
  Mortgage,
  Unmortgage,
  Bankrupt
}

export class Response {
  type: ResponseType;
  data: any;
}
