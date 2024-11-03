import { IPokemon } from './IPokemon';

export class Pokemon implements IPokemon {
  constructor(
    public id: number,
    public nombre: string,
    public peso: number,
    public altura: number,
    public vida: number,
    public tipo: string[],
    public ataque: number,
    public defensa: number
  ) {
    this.image = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${this.id.toString().padStart(3, '0')}.png`;
  }

  public image: string;
}