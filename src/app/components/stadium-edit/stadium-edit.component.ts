import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stadiumTab } from 'src/app/Global Data/data';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-edit',
  templateUrl: './stadium-edit.component.html',
  styleUrls: ['./stadium-edit.component.css']
})
export class StadiumEditComponent implements OnInit {
stadiumObj:any={}
stadiumTab:any=stadiumTab
id:any

  constructor(private router:Router , private activatedRoute:ActivatedRoute , private service : StadiumService) { }

  ngOnInit(): void {
 this.id= this.activatedRoute.snapshot.params['id'];
  this.service.getStadiumById(this.id).subscribe((res)=>{
    this.stadiumObj=res.stadium
  })
  }

  validate(){
  
  
    this.service.editStadium(this.stadiumObj).subscribe((response)=>{
       
      
    })
    this.router.navigate(['admin'])
  }
     
     
   
  
  
  
}
