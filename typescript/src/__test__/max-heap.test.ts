import MaxHeap from '../Max-heap';

const numericCompareFunction = (a: number, b: number): number => a - b;

describe('#MaxHeap', () => {
  test('Heap should start empty as soon as it is created', () => {
    const heap: MaxHeap<number> = new MaxHeap<number>(numericCompareFunction);
    expect(heap.isEmpty()).toEqual(true);
  });
  test('Adding elements to the heap should result in a false isEmpty', () => {
    const heap: MaxHeap<number> = new MaxHeap<number>(numericCompareFunction);
    heap.insert(10);
    expect(heap.isEmpty()).toEqual(false);
  });

  test('In the trival case, the minimum value is the only element in the heap', () => {
    const heap: MaxHeap<number> = new MaxHeap<number>(numericCompareFunction);
    heap.insert(10);
    expect(heap.extractMaximum()).toEqual(10);
  });

  test('peek: In the trival case, the minimum value is the only element in the heap', () => {
    const heap: MaxHeap<number> = new MaxHeap<number>(numericCompareFunction);
    heap.insert(10);
    expect(heap.peek()).toEqual(10);
  });
  test('Testing non-trivial extractions', () => {
    const heap: MaxHeap<number> = new MaxHeap<number>(numericCompareFunction);
    heap.insert(5);
    heap.insert(100);
    heap.insert(1);
    heap.insert(10);
    heap.insert(2);
    expect(heap.extractMaximum()).toEqual(100);
    expect(heap.extractMaximum()).toEqual(10);
    expect(heap.extractMaximum()).toEqual(5);
    expect(heap.extractMaximum()).toEqual(2);
    expect(heap.extractMaximum()).toEqual(1);
  });
  test('peek: Testing non-trivial peeks', () => {
    const heap: MaxHeap<number> = new MaxHeap<number>(numericCompareFunction);
    heap.insert(5);
    heap.insert(100);
    heap.insert(1);
    heap.insert(10);
    heap.insert(2);
    expect(heap.extractMaximum()).toEqual(100);
  });
});
