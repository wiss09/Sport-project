import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
 teamForm!:FormGroup //c'est un ID form
 teamObj:any={} // object
 id:any
 binding:string='Add Team'
 addTeam(){
if (this.id) {
  this.service.editTeam(this.teamObj).subscribe((data)=>{
    alert (data.isUpdated)
  })
}
 this.service.addTeam(this.teamObj).subscribe((data)=>{
  console.log(data)
 })
  console.log("display team object", this.teamObj)
 }// methode pour l'appel en tant que (event)
  constructor( private service :TeamService , private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.activeRoute.snapshot.paramMap.get('id')
  if (this.id) {
    this.binding='Edit Team'
    this.service.getTeamById(this.id).subscribe((data)=>{
      this.teamObj=data.team
    })
  }
  }

}
