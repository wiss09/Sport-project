import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { matchesTab } from 'src/app/Global Data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-tab-matches',
  templateUrl: './tab-matches.component.html',
  styleUrls: ['./tab-matches.component.css']
})
export class TabMatchesComponent implements OnInit {
  //attribute
   matchesTab:any
   
   
   //methode
  constructor(
    private router:Router ,
     private service:MatchService,
     private activeRoute : ActivatedRoute) { }
  goToDisplayInfo(id:number){
    this.router.navigate([`match-info/${id}`]) //
   }
   goToDelete(id:number){
    
    this.service.deleteMatchById(id).subscribe((data) =>{
      alert (data. isDeleted)
      if (data.isDeleted ) {
        this.service.getAllMatches().subscribe((data)=>{
          this.matchesTab=data.matches
        })
      }
    })
   }
   goToEdit(id:number){
    this.router.navigate([`match-edit/${id}`])
   }

  ngOnInit() {
     this.service.getAllMatches().subscribe((response)=>{console.log('récuperation de données en cours..' , response)
     this.matchesTab=response.matches
    })
    }
}
