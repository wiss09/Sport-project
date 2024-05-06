import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchForm!:FormGroup
search:any={}
matchesTab:any
notFound:string=''
btnSearch(){
  
this.service.searchMatch(this.search).subscribe((data)=>{
  this.matchesTab=data.matches
  document.getElementById('matches')?.scrollIntoView({behavior:'smooth'})
  if (this.matchesTab.length == 0) {
    this.notFound='Not found matches with this score '
  }else{
    this.notFound=''
  }
  
})
}
  constructor(private service:MatchService) { }

  ngOnInit(): void {

  }

}
