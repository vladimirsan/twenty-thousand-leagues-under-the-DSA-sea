import LinkedList from '../linked-list-with-tail';


describe('#Linked List', () => {
    test('#Size - A new linked list should have 0 for size', () => {
        const list:LinkedList<number> = new LinkedList<number>();
        expect(list.Length).toEqual(0);
    });
});