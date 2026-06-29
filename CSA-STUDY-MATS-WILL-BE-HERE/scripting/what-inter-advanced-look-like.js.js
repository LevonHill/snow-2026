class Player {
  constructor({ name, height, weight, age }) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.age = age;
    Object.freeze(this);
  }

  get bmi() {
    return Number((this.weight / ((this.height / 100) ** 2)).toFixed(1));
  }

  toString() {
    return `${this.name} — ${this.age} years, ${this.height}cm, ${this.weight}kg`;
  }
}

const playerData = [
  { name: 'John', height: 180, weight: 75, age: 25 },
  { name: 'Alice', height: 165, weight: 60, age: 22 },
  { name: 'Bob', height: 190, weight: 85, age: 30 },
  { name: 'Eve', height: 170, weight: 65, age: 28 },
];

const unit = playerData.map(data => new Player(data));

console.log(unit);
console.log(unit.map(player => `${player} (BMI: ${player.bmi})`).join('\n'));

unit.forEach(player => {
  console.log(`Age: ${player.age}`);
});