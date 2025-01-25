
import { ToDoItem, STATE_IN_PROGRESS, STATE_READY_FOR_REVIEW, STATE_DONE } from './ToDoItem.js';


const task1 = new ToDoItem("Implement login feature");
const task2 = new ToDoItem("Write unit tests");

task1.performAction(); 
task1.setState(STATE_READY_FOR_REVIEW);
task1.performAction(); 

task2.performAction(); 
task2.setState(STATE_DONE);
task2.performAction(); 

