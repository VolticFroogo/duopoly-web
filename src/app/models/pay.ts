export class ActionPay {
  payer: number;
  payee: number;
  value: number;
  timeout: number;
}

export class ResponsePay {
  forced: boolean;
}
