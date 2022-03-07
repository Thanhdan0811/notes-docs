class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.tail = null;
        this.head = null;
    }
    // push value
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            // Cả head và tail đều trỏ về 1 object là node.
            this.head = node;
            this.tail = this.head;
            this.length++;
            return;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }
    // pop
    pop() {
        if (!this.head) return undefined;
        let currentTail = this.head;
        let newTail = currentTail;
        while (current.next) {
            newTail = currentTail;
            currentTail = currentTail.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentTail;
    }
}

const first = new SinglyLinkedList();
first.push("hello");
first.push("hello new");
first.push("hello new new");
first.push("hello last");
first.pop();
