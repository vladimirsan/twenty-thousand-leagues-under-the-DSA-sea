import HeapCalculations from './Heap-calculations';

class MaxHeap<T> {
  private readonly compare : (A: T, B: T) => number;
  private readonly storage : T[];

  constructor(compare: (A: T, B: T) => number) {
    this.compare = compare;
    this.storage = [];
  }

  public insert(value: T): void {
    this.storage.push(value);
    this.bubbleUp(this.storage.length - 1);
  }

  public extractMaximum(): T {
    if (this.isEmpty()) {
      throw new Error('Heap is empty');
    }

    if (this.storage.length === 1) {
      // @ts-ignore
      return this.storage.pop();
    }

    const max: T = this.storage[0];
    // @ts-ignore
    const lastValueInHeap: T = this.storage.pop();
    this.storage[0] = lastValueInHeap;
    this.bubbleDown(0);
    return max;
  }

  /**
   * O(1) time and space
   */
  public isEmpty(): boolean {
    return this.storage.length === 0;
  }

  /**
   * O(1) time and space
   */
  public peek(): T {
    if (this.isEmpty()) {
      throw new Error('Heap is empty');
    }
    return this.storage[0];
  }

  private bubbleUp(index: number): void {
    const parentIndex: number = HeapCalculations.GetParentIndex(index);

    if (parentIndex < 0) {
      return;
    }

    // Vinicio - [parentIndex] < storage[index]
    if (this.compare(this.storage[parentIndex], this.storage[index]) < 0) {
      this.swapValues(parentIndex, index);
      this.bubbleUp(parentIndex);
    }
  }

  private bubbleDown(index: number): void {
    let maxIndex = index;
    const leftIndex = HeapCalculations.GetLeftIndex(index);
    const rightIndex = HeapCalculations.GetRightIndex(index);

    // ----------------------------------------------------------
    const maxValue = this.storage[maxIndex];
    const leftValue = this.storage[leftIndex];
    const rightValue = this.storage[rightIndex];

    if (leftIndex <= this.storage.length - 1) {
      // Vinicio - maxvalue <  leftValue
      maxIndex = this.compare(maxValue, leftValue) < 0 ? leftIndex : maxIndex;
    }
    if (rightIndex <= this.storage.length - 1) {
      // Vinicio - maxvalue <  rightValue
      maxIndex = this.compare(maxValue, rightValue) < 0 ? rightIndex : maxIndex;
    }
    // ----------------------------------------------------------
    if (maxIndex !== index) {
      this.swapValues(index, maxIndex);
      this.bubbleDown(maxIndex);
    }
  }

  /**
   * O(1) time and space
   */
  private swapValues(indexA: number, indexB: number) {
    const helper = this.storage[indexA];

    this.storage[indexA] = this.storage[indexB];
    this.storage[indexB] = helper;
  }
}

export default MaxHeap;
