import { Component, OnInit } from '@angular/core';
import { paisI } from '../interface/pais';


@Component({
  selector: 'app-padre-paises',
  templateUrl: './padre-paises.component.html',
  styleUrls: ['./padre-paises.component.css']
})
export class PadrePaisesComponent implements OnInit{
  listado: paisI[] = [];

constructor(){}

  ngOnInit(): void {
    this.listado = [
      {
        name: "Argentina",
        continent: "Sur-America",
        capital: "Buenos Aires",
      },
      {
        name: "España",
        continent: "Europa",
        capital: "Madrid",
      },
      {
        name: "Italia",
        continent: "Europa",
        capital: "Roma",
      }
    ]
  }

addNewPais(nuevoPais: paisI){
  this.listado.push(nuevoPais);
}
}