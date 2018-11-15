class Node <T>{
    public Value : T;
    public Next : Node<T> | null;

    constructor(value: T) {
        this.Value = value;
        this.Next = null;
    }
}

class LinkedList<T> {
    private _head : Node<T> | null;
    private _tail : Node<T> | null;

    private _length : number;

    constructor(){
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    public get Length() {
        return this._length;
    }

    public append(value : T) : void {
        if (this._head === null) {
            const newNode : Node<T> = new Node<T>(value);
            newNode.Next = null;
            this._head = newNode;
            this._tail = newNode;
            this._length++;
        }
    }

}

export default LinkedList;