class Node <T>{
    public Value : T;
    public Next : Node<T> | null;

    constructor(value: T) {
        this.Value = value;
        this.Next = null;
    }
}

//TODO: Add TSDoc
//TODO: Add TSlint with AirBnB rules
class LinkedList<T> {
    private _head : Node<T> | null;
    private _tail : Node<T> | null;

    private _length : number;

    constructor(){
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    // O(1) time and space
    public get Length() {
        return this._length;
    }

    // O(1) time and space
    public get Head() {
        return this._head;
    }

    // O(1) time and space
    public get Tail() {
        return this._tail;
    }

    // O(1) time and space
    public AddToTail(value : T) : void {
        const newNode : Node<T> = new Node<T>(value);
        if (this._tail === null) {
            newNode.Next = null;
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.Next = newNode;
            this._tail = newNode;
        }
        this._length++;
    }

    // O(1) time and space
    public AddToHead(value : T) : void {
        const newNode : Node<T> = new Node<T>(value);
        if (this._tail === null) {
            newNode.Next = null;
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode.Next = this.Head;
            this._head = newNode;
        }
        this._length++;
    }

    // O(1) time and space
    public DeleteFromHead() : T {
        if (this.Length === 0) {
            throw new Error('The list is empty');
        }
        const deletedValue : T = this.Head.Value;
        this._head = this._head.Next;
        if(this._head === null) {
            this._tail = null;
        }
        this._length--;
        return deletedValue;
    }

    //TODO: Iterator method
}

export default LinkedList;