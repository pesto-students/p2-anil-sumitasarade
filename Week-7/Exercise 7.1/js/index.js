
var head;

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

function reverse(node) {
let prev = null;
let current = node;
let next = null;
    while (current != null) {                           //Time Complexity = O(n)
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}


function display(node) {
    while (node != null) {                              //Time Complexity = O(n)
        document.write(node.data + " ");
        node = node.next;
    }
}


    head = new Node(2);
    head.next = new Node(7);
    head.next.next = new Node(8);
    head.next.next.next = new Node(9);

    document.write("Given Linked list");
    display(head);
    head = reverse(head);
    document.write("Reversed linked list");
    display(head);



    //Time Complexity = O(n)
    //Space Complexity = O(1)