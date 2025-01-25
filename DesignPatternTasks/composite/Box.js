import Component from './Component.js';

class Box extends Component {
    constructor(name) {
        super();
        this.name = name;
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    getPages() {
        return this.items.reduce((total, item) => total + item.getPages(), 0);
    }

    showHierarchy(indent = 0) {
        console.log(`${' '.repeat(indent)}Box: ${this.name}`);
        this.items.forEach(item => item.showHierarchy(indent + 2));
    }
}

export default Box;
