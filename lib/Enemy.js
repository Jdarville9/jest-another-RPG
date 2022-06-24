const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character{
  constructor(name, weapon) {
    
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();
  };

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };
}



const enemy1 = new Enemy('Barbarian', 'Battle Axe')

console.log(enemy1)

module.exports = Enemy;
