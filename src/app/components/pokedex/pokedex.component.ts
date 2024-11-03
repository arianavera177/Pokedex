import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})

export class PokedexComponent {
@Input ({required:true})imagenUrl="";
@Output() clickPokemon = new EventEmitter<number>();

pokemonId:number=0;
  imagenPokemon:string =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;

  adelante(): void {
    this.clickPokemon.emit(1);
  }

   // Método para retroceder
regresar(): void {
  this.clickPokemon.emit(-1);
}


}





