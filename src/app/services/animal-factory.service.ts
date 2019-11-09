import { Injectable } from '@angular/core';
import { Animal, Cat, Whale, Megladon, Puppy, Anaconda } from '../models/animal';


@Injectable({ providedIn: 'root' })
export class AnimalFactoryService {
    // s: Subscription
    constructor() { }

    getAnimalArray(): Animal[] {
        return [new Cat(), new Megladon(), new Puppy(), new Whale(), new Anaconda()];
    }

    getAnimal(type: string): Animal {
        if (type === 'c') {
            return new Cat();
        }
        else if (type === 'w') {
            return new Whale();
        }
        else if (type === 'm') {
            return new Megladon();
        }
        else if (type === 'p') {
            return new Puppy();
        }
        else if (type === 'a') {
            return new Anaconda();
        }
    }  
}