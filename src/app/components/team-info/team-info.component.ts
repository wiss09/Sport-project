import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
teamInput:any
  constructor(private service:TeamService , private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params['id']
  this.service.getTeamById(id).subscribe((res)=>{
    this.teamInput=res.team
  })
  }

}
