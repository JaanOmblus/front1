import { Component } from '@angular/core'; 

@Component({ // Add the @Component decorator.
  selector: 'matrix-mksvm', 
  templateUrl: './matrixMaksevoim.component.html',
  styleUrls: ['./matrixMaksevoim.component.css']
})


export class MaksevoimComponent { 

  muutujaX = 1;
  muutujaY = 1;

  koond = '';
  sissemksv = 'Ettevõttel';
  jareldusmksv = ' maksevõimet on.';
  jareldusmksv2 = ' maksevõimet pole.';
  jareldusmksv3 = ' Samas on lootust, et maksevõime taastub. Sõltub madala maksevõime põhjustest.'
  jareldusmksv4 = ' Maksevõime on väga tugev.'

  mksvFunction(muutujaX: number){
    this.koond = this.sissemksv+this.jareldusmksv;
    muutujaX;
    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sissemksv+this.jareldusmksv2;
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sissemksv+this.jareldusmksv2+this.jareldusmksv3;
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sissemksv+this.jareldusmksv+this.jareldusmksv4;
    }

    return this.koond;
  }


}

