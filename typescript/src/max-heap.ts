import HeapCalculations from './heap-calculations'

class MaxHeap<T> {
    private  readonly _compare : (A:T, B:T) => number;
    private readonly _storage : Array<T>;

    constructor( compare : (A:T, B:T) => number) {
        this._compare = compare;
        this._storage = [];
    }

    public Insert(value:T) : void {
        this._storage.push(value);
        this._bubbleUp(this._storage.length - 1);
    }

    public ExtractMaximum() : T {
        if (this.IsEmpty()) {
            throw new Error('Heap is empty');
        }

        if(this._storage.length === 1) {
            // @ts-ignore
            return this._storage.pop();
        }

        const max:T = this._storage[0];
        // @ts-ignore
        const lastValueInHeap:T = this._storage.pop();
        this._storage[0] = lastValueInHeap;
        this._bubbleDown(0);
        return max;
    }

    /**
     * O(1) time and space
     */
    public IsEmpty() : boolean {
        return this._storage.length === 0;
    }

    /**
     * O(1) time and space
     */
    public Peek() : T {
        if (this.IsEmpty()) {
            throw new Error('Heap is empty');
        }
        return this._storage[0];
    }

    private _bubbleUp(index:number) : void {
        const parentIndex:number = HeapCalculations.GetParentIndex(index);

        if (parentIndex < 0) {
            return;
        }

        // Vinicio - [parentIndex] < storage[index]
        if (this._compare(this._storage[parentIndex], this._storage[index]) < 0) {
            this._swapValues(parentIndex,index);
            this._bubbleUp(parentIndex);
        }
    }

    private _bubbleDown(index:number) : void {
        let maxIndex = index;
        const leftIndex = HeapCalculations.GetLeftIndex(index);
        const rightIndex = HeapCalculations.GetRightIndex(index);

        // ----------------------------------------------------------
        const maxValue = this._storage[maxIndex];
        const leftValue = this._storage[leftIndex];
        const rightValue = this._storage[rightIndex];

        if (leftIndex <= this._storage.length - 1) {
            // Vinicio - maxvalue <  leftValue
            maxIndex = this._compare(maxValue, leftValue) < 0 ? leftIndex : maxIndex;
        }
        if (rightIndex <= this._storage.length - 1) {
            // Vinicio - maxvalue <  rightValue
            maxIndex = this._compare(maxValue, rightValue) < 0 ? rightIndex : maxIndex;
        }
        // ----------------------------------------------------------
        if (maxIndex !== index) {
            this._swapValues(index, maxIndex);
            this._bubbleDown(maxIndex);
        }
    }

    /**
     * O(1) time and space
     */
    private _swapValues(indexA:number, indexB:number) {
        const helper = this._storage[indexA];

        this._storage[indexA] = this._storage[indexB];
        this._storage[indexB] = helper;
    }
}

export default MaxHeap;
