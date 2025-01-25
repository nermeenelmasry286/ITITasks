import Component from './Component.js';

class Book extends Component {
    constructor(title, pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    getPages() {
        return this.pages;
    }

    showHierarchy(indent = 0) {
        console.log(`${' '.repeat(indent)}Book: ${this.title}, Pages: ${this.pages}`);
    }
}

export default Book;
