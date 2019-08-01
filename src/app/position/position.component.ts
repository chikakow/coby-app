import { Component, OnInit } from '@angular/core';
import { Cat, Animal } from '../models/animal';
import { AnimalFactoryService } from '../services/animal-factory.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  animals: Animal[];
  
  constructor(private factory: AnimalFactoryService) { }

  ngOnInit() {
    this.animals = this.factory.getAnimalArray();
  }

  clickX() {

    this.animals.forEach(animal => {

      animal.position.x = animal.position.x + Math.random() * 10;
    })
  }
}
