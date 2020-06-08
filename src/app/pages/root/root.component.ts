import { Component, OnInit } from '@angular/core';
import { ErrorResponse, HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  // TODO: add server selection.
  readonly server = 'localhost:8080';

  name: string;

  constructor(private http: HttpService, private router: Router) {}

  ngOnInit(): void {}

  play() {
    this.http.createLobby(this.server).subscribe(response => {
      if (response.status !== 200) {
        // Yeah, I think this is terrible code; I'm unfamiliar with type assertion in TS though.
        const error = (response.body as unknown as ErrorResponse).error;
        console.log(error);
      }

      this.router.navigateByUrl(`/lobby/${ response.body.id }`, {state: {name: this.name}});
    });
  }
}
