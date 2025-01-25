import { studentA } from "./studentA.js";
import { studentB } from "./studentB.js";
import { Creator } from "./creator.js";

class ConcreteCreator extends Creator{
    constructor(type){
        super();
        this.type = type;
    }
    FactoryMethod(){
       if(this.type==='studentA'){
        return new studentA();
       }else  if(this.type==='studentB'){
        return new studentB();
       }
    }
}
let creatorA = new ConcreteCreator('studentA');
creatorA.AnOperation()
let creatorB = new ConcreteCreator('studentB');
creatorB.AnOperation()
