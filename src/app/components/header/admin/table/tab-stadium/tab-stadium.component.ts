import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { stadiumTab } from 'src/app/Global Data/data';
import { StadiumService } from 'src/app/services/stadium.service';
@Component({
  selector: 'app-tab-stadium',
  templateUrl: './tab-stadium.component.html',
  styleUrls: ['./tab-stadium.component.css']
})
export class TabStadiumComponent implements OnInit {
stadiumTab:any
goToDisplay(id:number){
this.router.navigate([`stadium-info/${id}`])
}
goToEdit(id:number){
  this.router.navigate([`stadium-edit/${id}`])
  alert (id)
}
goToDelete(id:number){
this.service.deleteStadium(id).subscribe((response)=>{
  console.log(response)
})
}
  constructor(private router:Router , private service:StadiumService) { }

  ngOnInit(): void {
    this.service.getAllStadium().subscribe((response) =>{
      this.stadiumTab=response.stadiums
    })
  }

}
