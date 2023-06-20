import { Component, Input } from '@angular/core';
import { paisI } from '../interface/pais';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent {
  @Input() arrayPaises!: paisI[]
  
  
}
