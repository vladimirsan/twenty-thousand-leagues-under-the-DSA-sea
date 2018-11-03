namespace LinkedList
{
    public class Node<T>
    {
        private Node<T> _next;
        private T _value;
        
        public Node(T value) 
        {
            this.Next = null;
            this.Value = value;
        }
        
        public Node<T> Next 
        {
            get => _next;
            set => _next = value;
        }

        public T Value 
        {
            get => _value;
            set => _value = value;
        }
    }
    
    public class LinkedList<T>
    {
        private Node<T> _head = null;
        private Node<T> _tail = null;

        public void AddToHead(Node<T> node)
        {
            node.Next = _head;
            if (_tail == null)
            {
                _tail = _head;
            }
        }

        public Node<T> ElementAt(uint index)
        {
            if (_head == null)
            {
                return null;
            }

            Node<T> currentNode = _head;
            while (index > 0)
            {
                index--;
                currentNode = currentNode.Next;
                if (currentNode == null)
                {
                    return null;
                }
            }
            return currentNode;
        }
    }
}