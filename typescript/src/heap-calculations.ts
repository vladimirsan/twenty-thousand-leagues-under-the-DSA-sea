class HeapCalculations {
    static GetParentIndex(index:number) : number {
        if(index ===  0 ) {
            return -1;
        }

        return Math.floor((index - 1) / 2);
    }

    static GetLeftIndex(index:number) : number {
        return (2 * index) + 1;
    }

    static GetRightIndex(index:number) : number {
        return (2 * index) + 2;
    }
}

export default HeapCalculations;
