import { Component, OnInit } from '@angular/core';
import { WsService } from '../../services/ws.service';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../models/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    GameService.id = this.route.snapshot.paramMap.get('id');
    GameService.playerName = history.state.name;
    WsService.connect('ws://localhost:8080/ws');
  }

  players(): Player[] {
    if (GameService.players === undefined) {
      return null;
    }

    const players = Array<Player>();

    for (const key in GameService.players) {
      players.push(GameService.players[key]);
    }

    return players;
  }
}
