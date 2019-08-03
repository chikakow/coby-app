import { Component, OnInit } from '@angular/core';
import { Cat, Animal, Habitat } from '../models/animal';
import { AnimalFactoryService } from '../services/animal-factory.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  animals: Animal[];
  interval = null;

  constructor(private factory: AnimalFactoryService) { }

  ngOnInit() {
    this.animals = this.factory.getAnimalArray();
  }

  clickStart() {

    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    else {
      this.interval = setInterval(() => {

        this.animals.forEach(animal => {

          animal.position.x = animal.position.x + Math.random() * 10;
        })

      }, 200);
    }


  }

  get habitat() {
    return Habitat;
  }
}
