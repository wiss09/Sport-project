import { Component, OnInit } from '@angular/core';
import { eventsTab } from 'src/app/Global Data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
obj:any={id:1,scoreOne:4,scoreTwo:0,teamOne:'Esperance',teamTwo:'Club-africain'}
  constructor() { }

  ngOnInit(): void {
  }

}
