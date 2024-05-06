import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:any)  {
    var voyelle=["a","e","i","o","u","y"]
    var result="";
    var x=""
   for (let i = 0; i < ch.length; i++) { // i=0 (ch[i]=a) admin
    x=ch[i] // variable intermediare
    for (let j = 0; j < voyelle.length; j++) { //j=0 (voyelle[j]=a)[a,e,i,o,u,y]
     if (x==voyelle[j]) {
      x="*"
      break;
     }
     
    }
    result=result+x
    
   }
   return result
  }

}
