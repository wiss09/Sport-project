import { Component, OnInit } from '@angular/core';
import { eventsTab } from 'src/app/Global Data/data';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 eventsTab:any=eventsTab
  constructor() { }
 
  ngOnInit(): void {
  }

}
