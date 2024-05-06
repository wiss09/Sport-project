import { Component, OnInit } from '@angular/core';
import { matchesTab } from 'src/app/Global Data/data';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab:any
  constructor(private service : MatchService) { }

  ngOnInit(): void {
    this.service.getAllMatches().subscribe((response) => 
    this.matchesTab=response.matches)
  }

}
