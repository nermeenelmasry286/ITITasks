class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.counter = 0; 
            Singleton.instance = this;
        }
        this.counter++;  
        return Singleton.instance;
    }

    getCounter() {
        return this.counter;  
    }
}

let s1 = new Singleton();
let s2 = new Singleton();

console.log(s1.getCounter());  
console.log(s2.getCounter()); 
console.log(s1 === s2);  