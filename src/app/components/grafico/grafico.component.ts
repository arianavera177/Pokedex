import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({

  selector: 'app-grafico',
  standalone: true,
  imports: [NgIf],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  vidaPokemon:number=300;
  imagen:string="./assets/Electrico.png";
}


