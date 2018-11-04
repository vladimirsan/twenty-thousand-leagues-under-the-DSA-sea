import MaxHeap from '../max-heap';

const numericCompareFunction = (a:number, b: number): number => a - b;

describe('#MaxHeap', () => {
    test('Heap should start empty as soon as it is created', () => {
        const heap = new MaxHeap<number>(numericCompareFunction);
        expect(heap.IsEmpty()).toEqual(true);
    });
    test('Adding elements to the heap should result in a false IsEmpty', () => {
        const heap = new MaxHeap<number>(numericCompareFunction);
        heap.Insert(10);
        expect(heap.IsEmpty()).toEqual(false);
    });

    test('In the trival case, the minimum value is the only element in the heap', () => {
        const heap = new MaxHeap<number>(numericCompareFunction);
        heap.Insert(10);
        expect(heap.ExtractMinimum()).toEqual(10);
    });

    test('Peek: In the trival case, the minimum value is the only element in the heap', () => {
        const heap = new MaxHeap<number>(numericCompareFunction);
        heap.Insert(10);
        expect(heap.Peek()).toEqual(10);
    });
    test('Testing non-trivial extractions', () => {
        const heap = new MaxHeap<number>(numericCompareFunction);
        heap.Insert(5);
        heap.Insert(100);
        heap.Insert(1);
        heap.Insert(10);
        heap.Insert(2);
        expect(heap.ExtractMinimum()).toEqual(100);
        expect(heap.ExtractMinimum()).toEqual(10);
        expect(heap.ExtractMinimum()).toEqual(5);
        expect(heap.ExtractMinimum()).toEqual(2);
        expect(heap.ExtractMinimum()).toEqual(1);
    });
    test('Peek: Testing non-trivial peeks', () => {
        const heap = new MaxHeap<number>(numericCompareFunction);
        heap.Insert(5);
        heap.Insert(100);
        heap.Insert(1);
        heap.Insert(10);
        heap.Insert(2);
        expect(heap.ExtractMinimum()).toEqual(100);
    });
});