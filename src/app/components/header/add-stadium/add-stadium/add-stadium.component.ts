import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
stadiumObj:any={}
teamName:any
teamId:any
  constructor(
    private service: StadiumService,
    private teamService :TeamService,
    private stadiumService :StadiumService) { }

  ngOnInit(): void {
   this.teamService.getAllTeam().subscribe((res)=>{
    this.teamName=res.teams
    
   })
  }
  addStadium(){
    this.stadiumObj.team=this.teamId
  this.stadiumService.addStadium(this.stadiumObj).subscribe((res=>{
    alert (res.verified)
    console.log(this.stadiumObj)
  }))
  }
  selectTeam(team:any){
   
    this.teamId=team.target.value
     
     
  }

}
