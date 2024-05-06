import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { playersTab } from 'src/app/Global Data/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  playerFormEdit!:FormGroup
  playerObj:any={}
  id:any
  playersTab:any=playersTab
  validate(){
this.service.editPlayer(this.playerObj).subscribe((response) =>console.log(response))
this.router.navigate([`admin`])
  }
  constructor(
    private activatedRoute:ActivatedRoute ,
     private router:Router,
     private service : PlayerService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get('id')
    this.service.getPlayerById(this.id).subscribe((data)=>{
      this.playerObj=data.player
    })
  }

}
