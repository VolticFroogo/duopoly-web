export class Chat {
  constructor(player: string, message: string) {
    this.player = player;
    this.message = message;
    this.timestamp = Date.now() / 1000;
  }

  player: string;
  message: string;
  timestamp: number;
}

export class ChatResponse {
  player: number;
  message: string;
}
