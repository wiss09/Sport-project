import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CupEventsComponent } from './components/cup-events/cup-events.component';
import { ScoreComponent } from './components/score/score.component';
import { EventsComponent } from './components/events/events.component';
import { StandigsComponent } from './components/standigs/standigs.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardComponent } from './components/events/card/card.component';
import { ArticleComponent } from './components/blog/article/article.component';
import { AddMatchComponent } from './components/header/add-match/add-match.component';
import { AddTeamComponent } from './components/header/add-team/add-team.component';
import { AddPlayerComponent } from './components/header/add-player/add-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/header/admin/admin.component';
import { TableComponent } from './components/header/admin/table/table.component';
import { TabMatchesComponent } from './components/header/admin/table/tab-matches/tab-matches.component';
import { TabTeamComponent } from './components/header/admin/table/tab-team/tab-team.component';
import { TabPlayersComponent } from './components/header/admin/table/tab-players/tab-players.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/players/player/player.component';
import { TabStadiumComponent } from './components/header/admin/table/tab-stadium/tab-stadium.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AvatarComponent } from './components/profile/avatar/avatar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix/asterix.pipe';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PlayerCardComponent } from './components/player-info/player-card/player-card.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { StadiumCardComponent } from './components/stadium-info/stadium-card/stadium-card.component';
import { PlayerEditComponent } from './components/player-edit/player-edit.component';
import { StadiumEditComponent } from './components/stadium-edit/stadium-edit.component';
import {  HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './components/search/search.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { AddStadiumComponent } from './components/header/add-stadium/add-stadium/add-stadium.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CupEventsComponent,
    ScoreComponent,
    EventsComponent,
    StandigsComponent,
    BlogComponent,
    CardComponent,
    ArticleComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    MatchesComponent,
    AdminComponent,
    TableComponent,
    TabMatchesComponent,
    TabTeamComponent,
    TabPlayersComponent,
    PlayersComponent,
    PlayerComponent,
    TabStadiumComponent,
    ProfileComponent,
    AvatarComponent,
    ReversePipe,
    AsterixPipe,
    MatchInfoComponent,
    PlayerInfoComponent,
    PlayerCardComponent,
    StadiumInfoComponent,
    StadiumCardComponent,
    PlayerEditComponent,
    StadiumEditComponent,
    SearchComponent,
    TeamInfoComponent,
    AddStadiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
