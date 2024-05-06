import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { response } from 'express';
import { playersTab } from 'src/app/Global Data/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-tab-players',
  templateUrl: './tab-players.component.html',
  styleUrls: ['./tab-players.component.css']
})
export class TabPlayersComponent implements OnInit {
  playerTab:any
  
  constructor(
    private route:Router , 
    private activatedRoute:ActivatedRoute,
    private service : PlayerService) { }

  ngOnInit(): void {
  this.service.getAllPlayer().subscribe((data)=>{
    this.playerTab=data.players
  })
  }
  goToDisplay(id:Number){
      this.route.navigate([`player-info/${id}`])
  }
  goToEdit(id:Number){
    this.route.navigate([`player-edit/${id}`])
}
goToDelete(id:any){
  
  this.service.deletePlayer(id).subscribe((response) => {
     alert(response.isDeleted)}
     )
     this.service.getAllPlayer().subscribe((data)=>{
      this.playerTab=data.players  })

  
 
  

}

}
