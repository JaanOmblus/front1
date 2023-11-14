import { Component } from '@angular/core'; 

@Component({ // Add the @Component decorator.
  selector: 'matrix-laen', 
  templateUrl: './matrixLaen.component.html',
  styleUrls: ['./matrixLaen.component.css']
})


export class LaenComponent { 

  muutujaX = 1;
  muutujaY = 1;

  koond = '';
  sisserent = 'Ettevõtte laenukoormus';
  jareldusrent = ' on selline, mille tõttu ettevõttel probleeme ei teki.';
  jareldusrent2 = ' pisut liiga suur.';
  jareldusrent3 = ' Samas, kui inflatsioon jätkub ja ettevõte suudab turuosa suurendada, siis võib sellise laenukoormusega ka jätkata.'
  jareldusrent4 = ' Pigem, kui suudab tootvalt paigutada, võib laenu isegi juurde võtta.'
  jareldusrent2a = ' Vajalikud on sammud laenukoormuse vähendamise suunas.'

  laenFunction(muutujaX: number){
    this.koond = this.sisserent+this.jareldusrent;
    muutujaX;
    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent2a;
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent3;
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sisserent+this.jareldusrent+this.jareldusrent4;
    }

    return this.koond;
  }


}