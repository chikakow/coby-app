import { Component } from '@angular/core';
import { Animal, Cat, Whale } from './models/animal';
import { AnimalFactoryService } from './services/animal-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // trick = '';
  // inputText = 'c';
  // animal = new Animal();
  // cat = new Cat();
  // whale = new Whale();
  // typeAnimal = '';

  // constructor(private animalFactory: AnimalFactoryService) {};

  // btnClick() {
  //   this.animal = this.animalFactory.getAnimal(this.inputText);
  //   this.typeAnimal = this.animal.name;
  //   this.trick = this.animal.doTrick();
  // }
}
