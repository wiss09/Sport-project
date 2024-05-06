import { ArrayType } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(chaine:string) {
    var chaine2=""
    
    for (let i = 0; i < chaine.length; i++) {
      chaine2=chaine[i]+chaine2
    }
    return chaine2
  }
  
      

  

      

}


