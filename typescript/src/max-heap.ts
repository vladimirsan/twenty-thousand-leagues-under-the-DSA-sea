import HeapCalculations from './heap-calculations'

class MaxHeap<T> {
    private  readonly _compare : (A:T, B:T) => number;
    private _storage : Array<T>;

    constructor( compare : (A:T, B:T) => number) {
        this._compare = compare;
        this._storage = [];
    }

    public Insert(value:T) : void{
        this._storage.push(value);
        this._bubbleUp(this._storage.length - 1);
    }

    public ExtractMinimum() : T {
        if (this.IsEmpty()) {
            throw new Error('Heap is empty');
        }

        if(this._storage.length === 1) {
            // @ts-ignore
            return this._storage.pop();
        }

        const minimum:T = this._storage[0];
        // @ts-ignore
        const lastValueInHeap:T = this._storage.pop();
        this._storage[0] = lastValueInHeap;
        this._bubbleDown(0);
        return minimum;
    }

    public IsEmpty() : boolean {
        return this._storage.length === 0;
    }

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

        if (this._compare(this._storage[parentIndex], this._storage[index]) < 0) {
            this._swapValues(parentIndex,index);
            this._bubbleUp(parentIndex);
        }
    }

    private _swapValues(indexA:number, indexB:number) {
        const helper = this._storage[indexA];

        this._storage[indexA] = this._storage[indexB];
        this._storage[indexB] = helper;
    }

    private _bubbleDown(index:number) : void {
        let maxIndex = index;
        const leftIndex = HeapCalculations.GetLeftIndex(index);
        const rightIndex = HeapCalculations.GetLeftIndex(index);

        // ----------------------------------------------------------
        const maxValue = this._storage[maxIndex];
        const leftValue = this._storage[leftIndex];
        const rightValue = this._storage[rightIndex];

        if (leftIndex <= this._storage.length - 1) {
            maxIndex = this._compare(maxValue, leftValue) < 0 ? leftIndex : maxIndex;
        }
        if (rightIndex <= this._storage.length - 1) {
            maxIndex = this._compare(maxValue, rightValue) < 0 ? rightIndex : maxIndex;
        }
        // ----------------------------------------------------------
        if (maxIndex !== index) {
            this._swapValues(index, maxIndex);
            this._bubbleDown(maxIndex);
        }
    }
}

export default MaxHeap;
