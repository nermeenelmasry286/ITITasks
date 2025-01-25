class Component {
    getPages() {
        throw new Error("This method must be overridden!");
    }

    showHierarchy(indent = 0) {
        throw new Error("This method must be overridden!");
    }
}

export default Component;
