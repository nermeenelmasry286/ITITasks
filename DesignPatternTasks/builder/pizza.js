export class pizza{
    constructor(){
        this.name= 'classic pizza';
        this.type='cheese';
    }
    getDetails(){
        return `pizza name : ${this.name}, pizza type : ${this.type}`
    }
    
}