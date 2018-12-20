import LinkedList from '../linked-list-with-tail';


describe('#Linked List', () => {
    //TODO : Test how the deletion methods change the size
    describe('#Length', () => {
        test('A new linked list should have 0 for size', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            expect(list.Length).toEqual(0);
        });

        test('Appending elements to the link list should increase its size', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            expect(list.Length).toEqual(0);
            list.AddToHead(1);
            expect(list.Length).toEqual(1);
            list.AddToHead(1);
            expect(list.Length).toEqual(2);
            list.AddToHead(1);
            expect(list.Length).toEqual(3);
        });

        test('Prepending elements to the link list should increase its size', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            expect(list.Length).toEqual(0);
            list.AddToTail(1);
            expect(list.Length).toEqual(1);
            list.AddToTail(1);
            expect(list.Length).toEqual(2);
            list.AddToTail(1);
            expect(list.Length).toEqual(3);
        });
        test('Deleting from head should decrease the size', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToTail(1);
            list.AddToTail(1);
            list.AddToTail(1);

            list.DeleteFromHead();
            expect(list.Length).toEqual(2);
            list.DeleteFromHead();
            expect(list.Length).toEqual(1);
            list.DeleteFromHead();
            expect(list.Length).toEqual(0);
        });

        test('Deleting from tail should decrease the size', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToTail(1);
            list.AddToTail(1);
            list.AddToTail(1);

            list.DeleteFromTail();
            expect(list.Length).toEqual(2);
            list.DeleteFromTail();
            expect(list.Length).toEqual(1);
            list.DeleteFromTail();
            expect(list.Length).toEqual(0);
        });
    });

    describe('#AddToHead', () => {
        test('Appending to an empty linked list should result in head and tail being the same', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToHead(1);
            expect(list.Head).toEqual(list.Tail);
        });

        test('Testing head/tail separation when adding two nodes', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToHead(2);
            list.AddToHead(1);
            expect(list.Head.Value).toEqual(1);
            expect(list.Tail.Value).toEqual(2);
            expect(list.Head.Next).toEqual(list.Tail);
        });

        test('Testing multiple addition', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToHead(3);
            list.AddToHead(2);
            list.AddToHead(1);
            expect(list.Head.Value).toEqual(1);
            expect(list.Head.Next.Value).toEqual(2);
            expect(list.Tail.Value).toEqual(3);

            expect(list.Head.Next.Next).toEqual(list.Tail);
        });
    });

    describe('#AddToTail', () => {
        test('AddToTail on an empty linked list should result in head and tail being the same', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToTail(1);
            expect(list.Head).toEqual(list.Tail);
        });

        test('Testing head/tail separation when adding two nodes', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToTail(1);
            list.AddToTail(2);
            expect(list.Tail.Value).toEqual(2);
            expect(list.Head.Value).toEqual(1);
            expect(list.Head.Next).toEqual(list.Tail);
        });

        test('Testing multiple addition', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToTail(1);
            list.AddToTail(2);
            list.AddToTail(3);
            expect(list.Head.Value).toEqual(1);
            expect(list.Head.Next.Value).toEqual(2);
            expect(list.Tail.Value).toEqual(3);

            expect(list.Head.Next.Next).toEqual(list.Tail);
        });
    });

    describe('#DeleteFromHead', () => {
        test('Trying to delete from an empty linked list should throw an exception', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            expect(() => list.DeleteFromHead()).toThrow();
        });
        test('The function should return the value that has been removed', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToTail(1);
            list.AddToTail(2);
            list.AddToTail(3);

            let deletedValue = list.DeleteFromHead();
            expect(deletedValue).toEqual(1);

            deletedValue = list.DeleteFromHead();
            expect(deletedValue).toEqual(2);

            deletedValue = list.DeleteFromHead();
            expect(deletedValue).toEqual(3);
        });
        test('Testing Head update', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToTail(1);
            list.AddToTail(2);
            list.AddToTail(3);

            list.DeleteFromHead();
            expect(list.Head.Value).toEqual(2);

            list.DeleteFromHead();
            expect(list.Head.Value).toEqual(3);
        });
        test('Testing Head/Tail update while removing all the nodes', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToTail(1);
            list.AddToTail(2);
            list.AddToTail(3);

            list.DeleteFromHead();
            list.DeleteFromHead();
            expect(list.Head).toEqual(list.Tail);
            list.DeleteFromHead();
            expect(list.Head).toEqual(null);
            expect(list.Tail).toEqual(null);
            expect(() => list.DeleteFromHead()).toThrow();
        });
    });

    describe('#DeleteFromTail', () => {
        test('Trying to delete from an empty linked list should throw an exception', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            expect(() => list.DeleteFromTail()).toThrow();
        });
        test('The function should return the value that has been removed', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToHead(1);
            list.AddToHead(2);
            list.AddToHead(3);

            let deletedValue = list.DeleteFromTail();
            expect(deletedValue).toEqual(1);

            deletedValue = list.DeleteFromTail();
            expect(deletedValue).toEqual(2);

            deletedValue = list.DeleteFromTail();
            expect(deletedValue).toEqual(3);
        });
        test('Testing Tail update', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToHead(1);
            list.AddToHead(2);
            list.AddToHead(3);

            list.DeleteFromTail();
            expect(list.Tail.Value).toEqual(2);

            list.DeleteFromTail();
            expect(list.Tail.Value).toEqual(3);
        });
        test('Testing Tail/Head update while removing all the nodes', () => {
            const list:LinkedList<number> = new LinkedList<number>();
            list.AddToHead(1);
            list.AddToHead(2);
            list.AddToHead(3);

            list.DeleteFromTail();
            list.DeleteFromTail();
            expect(list.Head).toEqual(list.Tail);
            list.DeleteFromTail();
            expect(list.Head).toEqual(null);
            expect(list.Tail).toEqual(null);
            expect(() => list.DeleteFromTail()).toThrow();
        });
    });
    // describe('', () => {
        // test('', () => {});
    // });
});