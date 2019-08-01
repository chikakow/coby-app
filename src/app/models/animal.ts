export class Animal {
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
    position = {
        x: 0,
        y: 100
    };
    color = 'orange';
    name = 'Cat 🐈';
    doTrick() {
        return 'meow';
    }
}

export class OceanAnimal extends Animal {
    name = 'Ocean Animal';
    doTrick() {
        return 'swim';
    }
}

export class Whale extends OceanAnimal {
    color = 'navy';

    name = 'Whale 🐋';
}
export class Puppy extends Animal {
    position = {
        x: 0,
        y: 150
    };
    color = 'red';
    name = 'Bloom 🐶'; 
    doTrick() { 
        return 'run fast';
    }
}


export class Megladon extends OceanAnimal {
    position = {
        x: 0,
        y: 50
    }
    color = 'gray';
    name = 'Meg 🦈';
    doTrick() {
         return 'eat big fish';
     }
}