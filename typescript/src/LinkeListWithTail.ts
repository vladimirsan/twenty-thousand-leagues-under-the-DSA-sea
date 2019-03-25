/**
 * Internal generic node class.
 */
class Node<T> {
  public value: T;
  public next: Node<T> | null;

  /**
   * Creates a node with its corresponding value and a null next reference
   * @constructor
   * @param {T} value - The value to be stored in the node
   * @remarks
   * O(1) time and space
   */
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

/**
 * A generic linked list that keeps track of its own tail and its own length.
 */
class LinkedList<T> implements Iterable<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;

  private length: number;
  /**
   * Creates an empty linked list. Head and tail will be set to null.
   * @remarks
   * O(1) time and space
  */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * Returns the length of the linked list.
   * @returns {number} - The length of the linked list.
   * @remarks
   * O(1) time and space
   */
  public get Length() : number {
    return this.length;
  }

  /**
   * Returns the head of the linked list.
   * @returns {Node<T> | null} - The head of the linked list.
   * @remarks
   * O(1) time and space
   */
  public get Head() : Node<T> | null {
    return this.head;
  }

  /**
   * Returns the tail of the linked list.
   * @returns {Node<T> | null} - The tail of the linked list.
   * @remarks
   * O(1) time and space
   */
  public get Tail() : Node<T> | null {
    return this.tail;
  }

  /**
   * Appends a new node to the linked list.
   * @param {T} value - The value to be added to the new node
   * @returns void
   * @remarks
   * O(1) time and space because we keep a reference to the tail.
   */
  public addToTail(value: T) : void {
    const newNode: Node<T> = new Node<T>(value);
    if (this.tail === null) {
      newNode.next = null;
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /**
   * Prepends a value to the linked list.
   * @param  {T} value - The value to be added
   * @returns void
   * @remarks
   * O(1) time and space.
   */
  public addToHead(value: T) : void {
    const newNode: Node<T> = new Node<T>(value);
    if (this.tail === null) {
      newNode.next = null;
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.Head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /**
   * @returns {T} - The removed value
   * @remarks
   * O(1) time and space.
   */
  public deleteFromHead() : T {
    if (this.Length === 0) {
      throw new Error('The list is empty');
    }
    const deletedValue: T = this.Head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length -= 1;
    return deletedValue;
  }

  /**
   * @returns {T} - The removed value
   * @remarks
   * O(n) time and O(1) space
   */
  public deleteFromTail() : T {
    if (this.Length === 0) {
      throw new Error('The list is empty');
    }
    const deletedValue: T = this.Tail.value;
    if (this.Length === 1) {
      this.tail = this.head = null;
    } else {
      let currentNode = this.Head;
      while (currentNode.next !== this.Tail) {
        currentNode = currentNode.next;
      }
      // Vinicio - Here, currentNode is the node before the tail
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length -= 1;
    return deletedValue;
  }

  /**
   * Iterator function. This gives us the ability to use the class in a for...of loop
   * @returns {Iterator<T>} - A custom iterator
   * @remarks
   * O(1) time and O(1) space (this analysis doesn't consider the usage of the iterator)
   */
  // tslint:disable-next-line
  [Symbol.iterator]() : Iterator<T> {
    // Vinicio - tslint complains about this name since it doesn't follow
    // airBnB rules, but since the name it's a symbol, there is no way around it.
    let currentNode = this.head;
    return {
      next(): IteratorResult<T> {
        if (currentNode === null) {
          return {
            done: true,
            value: null,
          };
        }
        const returnValue: T = currentNode.value;
        currentNode = currentNode.next;
        return {
          done: false,
          value: returnValue,
        };
      },
    };
  }
}

export default LinkedList;
