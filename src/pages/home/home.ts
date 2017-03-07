import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import * as pdfmake from 'pdfmake/build/pdfmake';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public testPdf() {
    var dd = { content: 'This is an sample PDF printed with pdfMake' };
    pdfmake.createPdf(dd).download();
  }
}
