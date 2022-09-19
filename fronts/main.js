class SSL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new AudioScheduledSourceNode(value);
        newNode.next = this.head;
        return newNode;
    }

    removeFront() {
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head;
    }

    front() {
        if ( this.head == null) {
            return null;
        } else {
            return this.head.value;
        }
    }
}