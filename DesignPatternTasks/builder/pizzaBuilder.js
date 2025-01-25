import { pizza } from "./pizza.js";

export class pizzaBuilder {
  constructor() {
    this.pizza = new pizza(); 
  }

  step1() {
    this.pizza.name = 'deluxe pizza'; 
  }

  step2() {
    this.pizza.type = 'vegetarian'; 
  }

  step3() {
    return this.pizza; 
  }
}
