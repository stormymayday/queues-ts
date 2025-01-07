class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default class Queue<T> {
    first: Node<T> | null;
    last: Node<T> | null;
    _length: number;
    constructor(value: T) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this._length = 1;
    }

    /**
     * Adds an item to the back of the queue.
     * @param {T} item The item to be pushed onto the queue.
     * @return {number} The new length of the queue.
     */
    enqueue(item: T): Queue<T> {
        const newNode = new Node(item);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this._length++;
        return this;
    }

    /**
     * Removes an item from the front of the queue.
     * @return {Node<T> | undefined} The node at the front of the queue if it is not empty, `undefined` otherwise.
     */
    dequeue(): Node<T> | null {
        if (!this.first) {
            return null;
        }
        const temp = this.first;
        if (this._length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }
        this._length--;
        return temp;
    }

    /**
     * Determines if the queue is empty.
     * @return {boolean} `true` if the queue has no items, `false` otherwise.
     */
    isEmpty(): boolean {
        return this._length === 0;
    }

    /**
     * Returns the item at the front of the queue without removing it from the queue.
     * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
     */
    front(): T | undefined {
        if (!this.first) {
            return undefined;
        } else {
            return this.first.value;
        }
    }

    /**
     * Returns the item at the back of the queue without removing it from the queue.
     * @return {T | undefined} The item at the back of the queue if it is not empty, `undefined` otherwise.
     */
    back(): T | undefined {
        if (!this.last) {
            return undefined;
        } else {
            return this.last.value;
        }
    }
}
