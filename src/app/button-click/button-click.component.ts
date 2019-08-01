import { Component, OnInit, HostListener } from '@angular/core';
import { Animal, Cat, Whale } from '../models/animal';
import { AnimalFactoryService } from '../services/animal-factory.service';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.scss']
})
export class ButtonClickComponent {

  trick = '';
  inputText = 'w';
  animal = new Animal();
  cat = new Cat();
  whale = new Whale();
  typeAnimal = '';

  constructor(private animalFactory: AnimalFactoryService) {};

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if(event.key === 'Enter') {
      this.btnClick();
    }
    
  }



  btnClick() {
    this.animal = this.animalFactory.getAnimal(this.inputText);
    this.typeAnimal = this.animal.name;
    this.trick = this.animal.doTrick();
  }
}
