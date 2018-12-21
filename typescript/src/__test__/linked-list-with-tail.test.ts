import LinkedListWithTail from '../Linked-list-with-tail';

describe('#Linked List', () => {
  describe('#Length', () => {
    test('A new linked list should have 0 for size', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      expect(list.Length).toEqual(0);
    });

    test('Appending elements to the link list should increase its size', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      expect(list.Length).toEqual(0);
      list.addToHead(1);
      expect(list.Length).toEqual(1);
      list.addToHead(1);
      expect(list.Length).toEqual(2);
      list.addToHead(1);
      expect(list.Length).toEqual(3);
    });

    test('Prepending elements to the link list should increase its size', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      expect(list.Length).toEqual(0);
      list.addToTail(1);
      expect(list.Length).toEqual(1);
      list.addToTail(1);
      expect(list.Length).toEqual(2);
      list.addToTail(1);
      expect(list.Length).toEqual(3);
    });
    test('Deleting from head should decrease the size', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToTail(1);
      list.addToTail(1);
      list.addToTail(1);

      list.deleteFromHead();
      expect(list.Length).toEqual(2);
      list.deleteFromHead();
      expect(list.Length).toEqual(1);
      list.deleteFromHead();
      expect(list.Length).toEqual(0);
    });

    test('Deleting from tail should decrease the size', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToTail(1);
      list.addToTail(1);
      list.addToTail(1);

      list.deleteFromTail();
      expect(list.Length).toEqual(2);
      list.deleteFromTail();
      expect(list.Length).toEqual(1);
      list.deleteFromTail();
      expect(list.Length).toEqual(0);
    });
  });

  describe('#addToHead', () => {
    test('Appending to an empty linked list should result in head and tail being the same', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToHead(1);
      expect(list.Head).toEqual(list.Tail);
    });

    test('Testing head/tail separation when adding two nodes', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToHead(2);
      list.addToHead(1);
      expect(list.Head.value).toEqual(1);
      expect(list.Tail.value).toEqual(2);
      expect(list.Head.next).toEqual(list.Tail);
    });

    test('Testing multiple addition', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToHead(3);
      list.addToHead(2);
      list.addToHead(1);
      expect(list.Head.value).toEqual(1);
      expect(list.Head.next.value).toEqual(2);
      expect(list.Tail.value).toEqual(3);

      expect(list.Head.next.next).toEqual(list.Tail);
    });
  });

  describe('#addToTail', () => {
    test('addToTail on an empty linked list should result in head and tail being the same', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToTail(1);
      expect(list.Head).toEqual(list.Tail);
    });

    test('Testing head/tail separation when adding two nodes', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToTail(1);
      list.addToTail(2);
      expect(list.Tail.value).toEqual(2);
      expect(list.Head.value).toEqual(1);
      expect(list.Head.next).toEqual(list.Tail);
    });

    test('Testing multiple addition', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToTail(1);
      list.addToTail(2);
      list.addToTail(3);
      expect(list.Head.value).toEqual(1);
      expect(list.Head.next.value).toEqual(2);
      expect(list.Tail.value).toEqual(3);

      expect(list.Head.next.next).toEqual(list.Tail);
    });
  });

  describe('#deleteFromHead', () => {
    test('Trying to delete from an empty linked list should throw an exception', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      expect(() => list.deleteFromHead()).toThrow();
    });
    test('The function should return the value that has been removed', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToTail(1);
      list.addToTail(2);
      list.addToTail(3);

      let deletedValue = list.deleteFromHead();
      expect(deletedValue).toEqual(1);

      deletedValue = list.deleteFromHead();
      expect(deletedValue).toEqual(2);

      deletedValue = list.deleteFromHead();
      expect(deletedValue).toEqual(3);
    });
    test('Testing Head update', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToTail(1);
      list.addToTail(2);
      list.addToTail(3);

      list.deleteFromHead();
      expect(list.Head.value).toEqual(2);

      list.deleteFromHead();
      expect(list.Head.value).toEqual(3);
    });
    test('Testing Head/Tail update while removing all the nodes', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToTail(1);
      list.addToTail(2);
      list.addToTail(3);

      list.deleteFromHead();
      list.deleteFromHead();
      expect(list.Head).toEqual(list.Tail);
      list.deleteFromHead();
      expect(list.Head).toEqual(null);
      expect(list.Tail).toEqual(null);
      expect(() => list.deleteFromHead()).toThrow();
    });
  });

  describe('#deleteFromTail', () => {
    test('Trying to delete from an empty linked list should throw an exception', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      expect(() => list.deleteFromTail()).toThrow();
    });
    test('The function should return the value that has been removed', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToHead(1);
      list.addToHead(2);
      list.addToHead(3);

      let deletedValue = list.deleteFromTail();
      expect(deletedValue).toEqual(1);

      deletedValue = list.deleteFromTail();
      expect(deletedValue).toEqual(2);

      deletedValue = list.deleteFromTail();
      expect(deletedValue).toEqual(3);
    });
    test('Testing Tail update', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToHead(1);
      list.addToHead(2);
      list.addToHead(3);

      list.deleteFromTail();
      expect(list.Tail.value).toEqual(2);

      list.deleteFromTail();
      expect(list.Tail.value).toEqual(3);
    });
    test('Testing Tail/Head update while removing all the nodes', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToHead(1);
      list.addToHead(2);
      list.addToHead(3);

      list.deleteFromTail();
      list.deleteFromTail();
      expect(list.Head).toEqual(list.Tail);
      list.deleteFromTail();
      expect(list.Head).toEqual(null);
      expect(list.Tail).toEqual(null);
      expect(() => list.deleteFromTail()).toThrow();
    });
  });
  describe('#Iterator', () => {
    test('An empty linked list should return a null iterator', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      for (const element of list) {
        // Vinicio - This line should never happen
        expect(1).toEqual(2);
      }
    });

    test('Testing basic for...of', () => {
      const list: LinkedListWithTail<number> = new LinkedListWithTail<number>();
      list.addToTail(1);
      list.addToTail(2);
      list.addToTail(3);

      let i = 1;
      for (const element of list) {
        expect(element).toEqual(i);
        i += 1;
      }
    });
  });

  // describe('', () => {
  // test('', () => {});
  // });
});
