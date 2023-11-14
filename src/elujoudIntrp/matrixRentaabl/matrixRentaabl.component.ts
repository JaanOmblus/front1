import { Component } from '@angular/core'; 

@Component({ // Add the @Component decorator.
  selector: 'matrix-rent', 
  templateUrl: './matrixRentaabl.component.html',
  styleUrls: ['./matrixRentaabl.component.css']
})


export class RentaablComponent { 

  muutujaX = 1;
  muutujaY = 1;

  koond = '';
  sisserent = 'Ettevõtte';
  jareldusrent = ' rentaablus on turul toimetulekut võimaldav.';
  jareldusrent2 = ' rentaablus ei ole turul toimetulekut võimaldav.';
  jareldusrent3 = ' Samas võib antud rentaablusega tulla toime ja muude soodsate asjaolude juures saada ettevõtte kasvama.'
  jareldusrent4 = ' Rentaablus on sedavõrd tugev, et selle abil on võimalik lahendada ka muid probleeme, kui neid on, ehk siis rentaablus aitab kompenseerida muid puudujääke.'
  jareldusrent2a = ' Vajalikud on sisulised sammud rentaabluse parandamise suunas.'

  rentFunction(muutujaX: number){
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

