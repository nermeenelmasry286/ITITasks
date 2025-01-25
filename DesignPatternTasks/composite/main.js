import Book from './Book.js';
import Box from './Box.js';

const book1 = new Book("Book One", 100);
const book2 = new Book("Book Two", 150);
const book3 = new Book("Book Three", 200);

const box1 = new Box("Box One");
box1.add(book1);
box1.add(book2);

const box2 = new Box("Box Two");
box2.add(book3);
box2.add(book2);

console.log(`Total pages in ${box2.name}: ${box2.getPages()}`); 
box2.showHierarchy();
