import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
match:any

  constructor( private activeRoute:ActivatedRoute , private service:MatchService) { } //c'est une instance d'attribut (effectué le type predifine a l'attribut )

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params['id'] //Trouve l'id a partir le pointeuse du methode predefinie qui nommée paramMap.get()
     this.service.getMatchById(id).subscribe((response) => 
     this.match=response.objt ) 
  }

}
