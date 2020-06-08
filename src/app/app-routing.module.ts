import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './pages/root/root.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'lobby/:id', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
