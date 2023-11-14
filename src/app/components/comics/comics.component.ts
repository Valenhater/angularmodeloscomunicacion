import { Component } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { ComicComponent } from '../comic/comic.component';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent {
  public comics: Array<Comic>;
  public favorito!: Comic;
  public nuevoComic: Comic = new Comic('', '', '');

  seleccionarComicFavorito(comic: Comic): void {
    console.log(comic);
    this.favorito = comic;
  }
  eliminarComic(comic: Comic): void {
    var index = this.comics.indexOf(comic);
    if (index !== -1) {
      this.comics.splice(index, 1);
    }
  }
  modificarComic(comic: Comic): void {
    console.log('Modificar cómic:', comic);
  }
  agregarComic(): void {
    this.nuevoComic.nombre &&
    this.nuevoComic.imagen &&
    this.nuevoComic.personaje;
    this.comics.push(this.nuevoComic);
  }

  constructor() {
    this.comics = [
      new Comic(
        'Spiderman',
        'https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg',
        'Hombre araña'
      ),
      new Comic(
        'Wolverine',
        'https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg',
        'Lobezno'
      ),
      new Comic(
        'Guardianes de la Galaxia',
        'https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg',
        'Yo soy Groot'
      ),
      new Comic(
        'Avengers',
        'https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg',
        'Los Vengadores'
      ),
      new Comic(
        'Spawn',
        'https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png',
        'Todd MacFarlane'
      ),
    ];
  }
}
