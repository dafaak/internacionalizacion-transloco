import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-transloco',
  templateUrl: './transloco.component.html',
  styleUrls: ['./transloco.component.css']
})
export class TranslocoComponent implements OnInit {

  constructor(private readonly _translocoService: TranslocoService) {
  }

  ngOnInit() {
  }

  cambiarIdioma() {
    const idiomas = this._translocoService.getAvailableLangs();
    const idiomaActual = this._translocoService.getActiveLang();
    let cambiarA: string;
    idiomas.forEach(idioma => {
      if (idioma != idiomaActual) {
        cambiarA = idioma;
      }
    })
    this._translocoService.setActiveLang(`${cambiarA}`)
  }

}
