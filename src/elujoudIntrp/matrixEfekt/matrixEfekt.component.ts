import { Component } from '@angular/core'; 

@Component({ // Add the @Component decorator.
  selector: 'matrix-efekt', 
  templateUrl: './matrixEfekt.component.html',
  styleUrls: ['./matrixEfekt.component.css']
})


export class EfektComponent { 

  muutujaX = 1;
  muutujaY = 1;

  koond = '';
  sisserent = 'Ettevõtte efektiivsus';
  jareldusrent = ' on seda tüüpi varade kasutamise juures adekvaatne.';
  jareldusrent2 = ' ei ole seda tüüpi varade kasutamise juures adekvaatne.';
  jareldusrent3 = ' Samas võib antud efektiivsusega jätkata, kui ei ole muid probleeme, mis täiendavalt negatiivset mõju avaldavad.'
  jareldusrent4 = ' Varade kasutamise efektiivsus on sedavõrd hea, et võib kaaluda täiendavate varade soetamist.'
  jareldusrent2a = ' Vajalikud on sammud efektiivsuse suurendamise suures, näiteks varade täiendav koormamine.'

  efektFunction(muutujaX: number){
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