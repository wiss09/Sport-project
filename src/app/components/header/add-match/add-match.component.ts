import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { matchesTab } from 'src/app/Global Data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  title: string = "Add Match"
  match: any = {}
  matchForm!: FormGroup;
  id!: number;
  matchesTab:any=matchesTab
  constructor(
    private activatedRoute: ActivatedRoute ,
     private service:MatchService,
     private router :Router) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params["id"];
    if (this.id) {
      this.service.getMatchById(this.id).subscribe((data)=>{
        this.match=data.objt
        this.title = "Edit Match"
      })
    }
      
      
       
  }
  validate() {
    if (this.id) {
      this.service.editMatch(this.match).subscribe((data)=>{
        console.log(data)
        this.router.navigate([`admin`])
      })
    } else { 
      this.service.addMatch(this.match).subscribe((response) =>{
      console.log('here data' , response)
     this.match=" "
      
    });
   }
  }
}
