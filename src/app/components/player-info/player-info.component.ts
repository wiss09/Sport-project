import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
player:any
  constructor(private activeRoute:ActivatedRoute , private service : PlayerService) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params['id']
    
    this.service.getPlayerById(id).subscribe((response) => 
    this.player= response.player)
      
  }

}
