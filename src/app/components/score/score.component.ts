import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
@Input() matchInput:any//composant Paramatrée
//a chaque appel à app-score, il faut passe une valeur dans le param matchInput
scoreColor(score1:number , score2:number){
if (score1>score2) {
  return ("green")
}else if (score1<score2) {
  return ("red")
}else{ return ("orange")}


}  
constructor() { }

  ngOnInit(): void {
  }

}
