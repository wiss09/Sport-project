import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadium-card',
  templateUrl: './stadium-card.component.html',
  styleUrls: ['./stadium-card.component.css']
})
export class StadiumCardComponent implements OnInit {
@Input() stadiumInput:any

  constructor() { }

  ngOnInit(): void {
  }

}
