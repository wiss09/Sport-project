import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-tab-team',
  templateUrl: './tab-team.component.html',
  styleUrls: ['./tab-team.component.css']
})
export class TabTeamComponent implements OnInit {
  teamTab:any
  player:any
  playerName:any={};
  constructor(private service:TeamService, private router:Router) { }
updateTeam(id:any){
this.router.navigate([`team-edit/${id}`])
}
deleteTeam(id:any){
  this.service.deleteTeam(id).subscribe((data)=>{
    alert (data.isDeleted)
  })
  this.service.getAllTeam().subscribe((data)=>{
    this.teamTab=data.teams
  })
}
displatTeam(id:any){
  this.router.navigate([`team-info/${id}`])
}

  ngOnInit(): void {
this.service.getAllTeam().subscribe((data)=>{
  this.teamTab=data.teams
 
 
  console.log(this.playerName)
})
  }

}
