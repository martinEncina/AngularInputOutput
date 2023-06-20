import { Component, Output, EventEmitter } from '@angular/core';
import { paisI } from '../interface/pais';

@Component({
  selector: 'app-hijo-new-pais',
  templateUrl: './hijo-new-pais.component.html',
  styleUrls: ['./hijo-new-pais.component.css']
})
export class HijoNewPaisComponent {
  @Output() nuevoPais = new EventEmitter();

  sendPaises(newPais: paisI){
    this.nuevoPais.emit(newPais);
  }
}
