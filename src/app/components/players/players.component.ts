import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { playersTab } from 'src/app/Global Data/data';
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
playersTab:any
  constructor(private service : PlayerService) { }

  ngOnInit(): void {
  this.service.getAllPlayer().subscribe((response) =>{
    this.playersTab=response.players
  })
  }

}
