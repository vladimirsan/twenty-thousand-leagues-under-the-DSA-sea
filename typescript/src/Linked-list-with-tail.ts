class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

/**
 * A linked list that keeps track of its own tail.
 */
class LinkedList<T> implements Iterable<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;

  private length: number;
  /**
   * Creates an empty linked list.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * @remarks
   * O(1) time and space
   */
  public get Length() : number {
    return this.length;
  }

  /**
   * @remarks
   * O(1) time and space
   */
  public get Head() : Node<T> | null {
    return this.head;
  }

  /**
   * @remarks
   * O(1) time and space
   */
  public get Tail() : Node<T> | null {
    return this.tail;
  }

  /**
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
   * @returns The removed value
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
   * @returns The removed value
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
   * @returns A custom iterator
   * @remarks
   * O(n) time and O(1) space (this analysis doesn't consider the usage of the iterator)
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
