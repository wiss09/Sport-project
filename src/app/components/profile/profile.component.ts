import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 userTab:any={firstName:"Wissem", lastName:"Abidi", email:"wissem302@gmail.com"}
  constructor() { }

  ngOnInit(): void {
  }

}
