import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

class NewLobbyRequest {
  constructor(server: string) {
    this.server = server;
  }

  server: string;
}

class NewLobbyResponse {
  id: string;
  server: string;
}

export class ErrorResponse {
  error: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly prefix = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  createLobby(server: string): Observable<HttpResponse<NewLobbyResponse>> {
    const request = new NewLobbyRequest(server);
    return this.http.post<NewLobbyResponse>(this.prefix + '/lobby', request, {observe: 'response'});
  }
}
