import { pizzaBuilder } from "./pizzaBuilder.js";

class BuilderObj {
  constructor(builder) {
    builder.step1();
    builder.step2();
    this.pizza = builder.step3(); 
  }

  getPizza() {
    return this.pizza; 
  }
}

let pizzza = new pizzaBuilder(); 
let obj = new BuilderObj(pizzza); 
let op = obj.getPizza(); 
console.log(op.getDetails()); 
