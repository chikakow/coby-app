export enum Habitat {
    Land,
    Sky,
    Ocean
}


export class Animal {
    iconSize = "40";
    icon = '';
    habitat: Habitat = Habitat.Land;
    color =  'green';
    name = 'Animal';
    position = {
        x: 0,
        y: 0
    }

    eat() {
        return 'food';
    }
    doTrick() {
        return 'smile';
    }
}

export class Cat extends Animal {
    icon = '🐈';
    position = {
        x: 0,
        y: 100
    };
    color = 'orange';
    name = 'Cat';
    doTrick() {
        return 'meow';
    }
}

export class OceanAnimal extends Animal {
    habitat = Habitat.Ocean;
    name = 'Ocean Animal';
    doTrick() {
        return 'swim';
    }
}

export class Whale extends OceanAnimal {
    iconSize = "45";
    color = 'navy';
    icon='🐋';

    name = 'Whale';
}
export class Puppy extends Animal {
    iconSize = "25";
    icon='🐶';
    position = {
        x: 0,
        y: 150
    };
    color = 'red';
    name = 'Bloom'; 
    doTrick() { 
        return 'run fast';
    }
}


export class Megladon extends OceanAnimal {
    iconSize = "45";
    icon='🦈';
    position = {
        x: 0,
        y: 50
    }
    color = 'gray';
    name = 'Meg';
    doTrick() {
         return 'eat big fish';
     }
}