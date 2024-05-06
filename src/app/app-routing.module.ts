import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddMatchComponent } from './components/header/add-match/add-match.component';
import { AddPlayerComponent } from './components/header/add-player/add-player.component';
import { AddTeamComponent } from './components/header/add-team/add-team.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/header/admin/admin.component';
import { PlayersComponent } from './components/players/players.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { PlayerEditComponent } from './components/player-edit/player-edit.component';
import { StadiumEditComponent } from './components/stadium-edit/stadium-edit.component';
import { SearchComponent } from './components/search/search.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { AddStadiumComponent } from './components/header/add-stadium/add-stadium/add-stadium.component';

const routes: Routes = [
  //importation des  composents
  //http://localhost:4200=> Display home component
  {path:"", component:HomeComponent},
  {path:"subscription", component:SignupComponent},
  {path:"subscription-admin", component:SignupComponent},
  {path:"signin" , component:LoginComponent},
  {path:"add-match",component:AddMatchComponent},
  {path:"add-player",component:AddPlayerComponent},
  {path:"add-team",component:AddTeamComponent},
  {path:"add-stadium" , component:AddStadiumComponent},
  {path:"matches", component:MatchesComponent},
  {path:"admin", component:AdminComponent},
  {path:"players", component:PlayersComponent},
  {path:"profile", component:ProfileComponent},
  {path:"match-info/:id", component:MatchInfoComponent},// (/id: c'ets une valeur dynamique (parametré)
  {path:"player-info/:id", component:PlayerInfoComponent},
  {path:'stadium-info/:id',component:StadiumInfoComponent},
  {path:'team-info/:id',component:TeamInfoComponent},
  {path:'match-edit/:id', component:AddMatchComponent},
  {path:'player-edit/:id', component:PlayerEditComponent},
  {path:'stadium-edit/:id',component:StadiumEditComponent},
  {path:'team-edit/:id',component:AddTeamComponent},
  
  {path:'search' ,component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
