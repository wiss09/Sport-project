import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { stadiumTab } from 'src/app/Global Data/data';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-info',
  templateUrl: './stadium-info.component.html',
  styleUrls: ['./stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {
  stadiumsTab:any=stadiumTab
stadium:any
 
  constructor(private activatedRoute:ActivatedRoute , private service : StadiumService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
   this.service.getStadiumById(id).subscribe((response) => {
    this.stadium=response.stadium
   })
  }

}
