const STATE_IN_PROGRESS = "IN_PROGRESS";
const STATE_READY_FOR_REVIEW = "READY_FOR_REVIEW";
const STATE_DONE = "DONE";

class ToDoItem {
    constructor(description) {
        this.description = description;
        this.state = STATE_IN_PROGRESS;
    }

    setState(state) {
        this.state = state;
    }

    performAction() {
        switch (this.state) {
            case STATE_IN_PROGRESS:
                console.log(`Task "${this.description}" is in progress.`);
                break;
            case STATE_READY_FOR_REVIEW:
                console.log(`Task "${this.description}" is ready for review.`);
                break;
            case STATE_DONE:
                console.log(`Task "${this.description}" is done.`);
                break;
            default:
                console.log(`Unknown state for task "${this.description}".`);
        }
    }
}


export { ToDoItem, STATE_IN_PROGRESS, STATE_READY_FOR_REVIEW, STATE_DONE };
