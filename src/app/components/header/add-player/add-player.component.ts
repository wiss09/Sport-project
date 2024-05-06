import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
playerForm!:FormGroup
playerObj:any={}
teams:any
teamId:any

  constructor(
    private service: PlayerService ,
     private teamService :TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeam().subscribe((res)=>{
  this.teams=res.teams
    })
  }
  addPlayer(){
    this.playerObj.teamId=this.teamId
    this.service.addPlayer(this.playerObj).subscribe((response)=>
    {console.log(this.playerObj , response.verification)})
  }
  selectTeam(event:any){
    console.log('this is Id', event.target.value)
    this.teamId=event.target.value
    
  }
}
